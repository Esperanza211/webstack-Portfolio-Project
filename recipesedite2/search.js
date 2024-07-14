document.addEventListener('DOMContentLoaded', () => {
    const recipes = [
        {
            category: 'salads',
            title: 'Moroccan Tomato Salad',
            description: 'A refreshing tomato salad with a hint of cumin.',
            image: 'img/chlada.jpg',
            link: 'moroccan-tomato-salad.html'
        },
        {
            category: 'appetizers',
            title: 'Chicken Pastilla',
            description: 'A delicious Moroccan pie filled with chicken and almonds.',
            image: 'img/bestilt djaj.jpg',
            link: 'bastila.html'
        },
        {
            category: 'tagines',
            title: 'Lamb Tagine',
            description: 'A classic Moroccan lamb tagine with prunes and almonds.',
            image: 'img/lhambelbarkouk.jpg',
            link: 'lhambil9ou9.html'
        },
        {
            category: 'breads',
            title: 'Moroccan Msamen',
            description: 'Traditional Moroccan bread perfect for any meal.',
            image: 'img/msamen.jpg',
            link: 'msamn.html'
        },
        {
            category: 'sweets',
            title: 'mhencha',
            description: 'Sweet and flaky mhencha with honey and nuts.',
            image: 'img/mhencha.jpg',
            link: 'mhencha.html'
        },
        {
            category: 'breads',
            title: 'Harira Soup',
            description: 'A hearty and comforting Moroccan soup.',
            image: 'img/harira.jpg',
            link: 'harira.html'
        }
    ];

    const recipeList = document.getElementById('recipes-list');
    const searchBar = document.getElementById('recipes');
    const searchBtn = document.getElementById('search-btn');

    function displayRecipes(recipesToDisplay) {
        recipeList.innerHTML = '';
        recipesToDisplay.forEach(recipe => {
            const recipeElement = document.createElement('div');
            recipeElement.classList.add('recipe');
            recipeElement.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
            `;
            recipeElement.addEventListener('click', () => {
                window.location.href = recipe.link;
            });
            recipeList.appendChild(recipeElement);
        });
    }

    searchBtn.addEventListener('click', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(searchTerm) || 
            recipe.description.toLowerCase().includes(searchTerm)
        );
        displayRecipes(filteredRecipes);
    });

    displayRecipes(recipes); // Display all recipes initially
});
