const recipesList:HTMLDivElement = document.createElement('div');

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(json => {
        const {recipes} = json;
        console.log(recipes);

        for (const recipe of recipes) {
            const divRecipesList:HTMLDivElement = document.createElement('div');
            divRecipesList.classList.add('recipes-list');
            const divWithInfo:HTMLDivElement = document.createElement('div');
            divWithInfo.innerText = `
        "id": ${ recipe.id },
        "name": ${ recipe.name },
        "prepTimeMinutes": ${recipe.prepTimeMinutes},
        "cookTimeMinutes": ${recipe.cookTimeMinutes},
        "servings": ${recipe.servings},
        "difficulty": ${recipe.difficulty},
        "cuisine": ${recipe.cuisine},
        "caloriesPerServing": ${recipe.caloriesPerServing},
        "tags": ${recipe.tags},
        "userId": ${recipe.userId},
        "rating": ${recipe.rating},
        "reviewCount": ${recipe.reviewCount},
        "mealType":${recipe.mealType}
        `
            const img:HTMLImageElement = document.createElement('img');
            img.classList.add('recipe-img');
            img.src = recipe.image;

            // Instructions
            const h3Instructions:HTMLHeadingElement = document.createElement('h3');
            h3Instructions.innerText = 'Instructions';
            const olInstr:HTMLOListElement = document.createElement('ol');
            for (const olInstrElement of recipe.instructions) {
                const liInstr:HTMLLIElement = document.createElement('li');
                liInstr.innerText = olInstrElement;
                olInstr.appendChild(liInstr);
            }
            //Ingredients
            const h3Ingredients:HTMLHeadingElement = document.createElement('h3');
            h3Ingredients.innerText = 'Ingredients';
            const ol:HTMLOListElement = document.createElement('ol');
            for (const ingred of recipe.ingredients) {
                const li:HTMLLIElement = document.createElement('li');
                li.innerText = ingred;
                ol.appendChild(li);

                divRecipesList.append(divWithInfo, h3Ingredients, ol,h3Instructions, olInstr, img);
            }

            recipesList.appendChild(divRecipesList)
        }
    })

document.body.appendChild(recipesList);