//Exercise 1
// Starting code:
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// My code here:
const numsTimesTwo = nums.map((num) => {
  return num * 2;
});

console.log(numsTimesTwo);

//Exercise 2:
// a. Use array destructuring to extract the first and second values
//    from the pizzaToppings array into variables
// b. Name the variables firstIngredient and secondIngredient
// c. Console log both variables

// Starting code:
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Use array destructuring to assign the first two elements to variables
const [firstIngredient, secondIngredient] = pizzaToppings;

// Log the first ingredient to the console
console.log(firstIngredient);

// Log the second ingredient to the console
console.log(secondIngredient);
