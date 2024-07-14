document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            category: 'salads',
            title: 'Moroccan Tomato Salad',
            description: 'A refreshing tomato salad with a hint of cumin.',
            image: 'img/chlada.jpg',
            link: 'moroccan-tomato-salad.html' // Add link for the recipe
        },
        {
            category: 'appetizers',
            title: 'Chicken Pastilla',
            description: 'A delicious Moroccan pie filled with chicken and almonds.',
            image: 'img/bestilt djaj.jpg',
            link: 'bastila.html' // Add link for the recipe
        },
        {
            category: 'tagines',
            title: 'Lamb Tagine',
            description: 'A classic Moroccan lamb tagine with prunes and almonds.',
            image: 'img/lhambelbarkouk.jpg',
            link: 'lhambil9ou9.html' // Add link for the recipe
        },
        {
            category: 'breads',
            title: 'Moroccan Msamen',
            description: 'Traditional Moroccan bread perfect for any meal.',
            image: 'img/msamen.jpg',
            link: 'msamn.html' // Add link for the recipe
        },
        {
            category: 'sweets',
            title: 'mhencha',
            description: 'Sweet and flaky mhencha with honey and nuts.',
            image: 'img/mhencha.jpg',
            link: 'mhencha.html' // Add link for the recipe
        },
        {
            category: ['breads', 'latest'],
            title: 'Harira Soup',
            description: 'A hearty and comforting Moroccan soup.',
            image: 'img/harira.jpg',
            link: 'harira.html' // Add link for the recipe
        },
        
    ];

    const recipeList = document.getElementById('recipes-list');

    function displayRecipes(category) {
        recipeList.innerHTML = '';
        const filteredRecipes = category === 'all' ? recipes : recipes.filter(recipe => recipe.category.includes(category));

        filteredRecipes.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');
            recipeElement.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
            `;
            recipeElement.addEventListener('click', () => {
                window.location.href = recipe.link; // Navigate to the recipe page on click
            });
            recipeList.appendChild(recipeElement);
        });
    }

    document.querySelectorAll('.category-links a, .dropdown a').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const category = event.target.getAttribute('data-category');
            displayRecipes(category);
        });
    });

    displayRecipes('all');
});
