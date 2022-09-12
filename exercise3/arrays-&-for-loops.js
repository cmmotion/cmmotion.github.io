var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";

var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];

fruitArray[1] = "tomato";

var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

//console.log(fruitArray);

for(var fruit of fruitArray){
    if(fruit === "tomato"){
        console.log("what's a tomato doing here?")
    } else {
        console.log(fruit)
    }
}

// for **declaring the loop** brackets = conditional (x of y) 

var food1 = "breakfast";
var food2 = "dinner";
var food3 = "dessert";

var foodArray = ["breakfast", "dinner", "dessert"];

for(var food of foodArray){
    if(food === "breakfast"){
        console.log("this is a breakfast food")
    } else {
        console.log(food)
    } 
}

for(var food of foodArray){
    if(food === "dinner"){
        console.log("this is a dinner recipe")
    } else {
        console.log(food)
    }
}

for(var food of foodArray){
    if(food == "dessert"){
        console.log("this is for dessert")
    } else {
        console.log(food)
    }
}


// After doing private research into Loops & Arrays, I'm still unclear on exactly their purpose and their goal in this particular websheet. However, 
// I have created a theortetical version relevant to the recipes in this webpage (foodArray)