//String Literals

// + 
// ` `

const food =['Maggie','Idli'];

//food.forEach();
//food.forEach(functio);

// Annonymus function doesnt have name

// food.forEach(function(paramas)){ }

let result = '';
food.forEach(function(item){
    
    console.log(item); // lists items in console

    result += `<li>${item}</li>`
});

document.getElementById('food_items').innerHTML=result;
document.getElementById('head1').innerHTML=' Well! '

console.log(document.getElementById('head1'));