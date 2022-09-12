function filterCategory(filterSelection, filterBy){
    let recipeCards = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    //console.log(recipeCards);
    for(let listItem of recipeCards){
       //console.log(listItem.dataset.author)
       if (listItem.dataset[filterBy] === filterSelection){
            listItem.style.display = "flex";
       } else {
            listItem.style.display = "none"; 
       }
    }
}

function allCategories (){
    let recipeCards = Array.from(document.getElementsByClassName("RecipeCardWrapper"));
    for(let listItem of recipeCards){
        listItem.style.display="flex";
    }
}