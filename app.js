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

//Exercise 3:
// a. Use object destructuring to extract the make and model properties
//    from the car object into variables named make and model
// b. Console log the make and model variables

// Starting code:
const car = {
  make: 'Audi',
  model: 'Q5',
};

// Use object destructuring to assign properties to variables
const { make, model } = car;

// Log the car make to the console
console.log(make);

// Log the car model to the console
console.log(model);

//Exercise 4:
// a. Duplicate the morePizzaToppings array using the spread operator
//    and assign it to a variable named uncontroversialPizzaToppings
// b. Console log the uncontroversialPizzaToppings array

// Starting code:
const morePizzaToppings = ['Cheese', 'Sauce'];

// Use the spread operator to create a copy of the array
const uncontroversialPizzaToppings = [...morePizzaToppings];

// Log the new array to the console
console.log(uncontroversialPizzaToppings);

//Exercise 5:
// a. Duplicate the anotherCar object and spread its values into a new
//    variable named myCar
// b. Change the make and model properties of the myCar object
// c. Console log both objects to observe the results

// Starting code:
const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

// Use the spread operator to create a copy of the object
const myCar = { ...anotherCar };

// Update properties on the copied object
myCar.make = 'Honda';
myCar.model = 'Civic';

// Log the original object to show it is unchanged
console.log(anotherCar);

// Log the new object to show it has been modified independently
console.log(myCar);

//Exercise 6:
// a. Define a variable named propertyName and assign a string to it
// b. Create an object named userProfile
// c. Use propertyName as a dynamic key in userProfile and assign it a value
// d. Console log the userProfile object

// Define a variable to be used as a dynamic key
const propertyName = 'username';

// Create an object using a dynamic key
const userProfile = {
  [propertyName]: 'mvwebb88',
};

// Log the userProfile object to the console
console.log(userProfile);

//Exercise 8:
// a. Create a function with two parameters, noun and adjective
// b. Give noun a default value of "cat" and adjective a default value of "orange"
// c. Log a sentence using the provided or default values

// Define a function with default parameters
function describeAnimal(noun = 'cat', adjective = 'orange') {
  console.log(`The ${noun} is ${adjective}.`);
}

// Call the function with no arguments (uses defaults)
describeAnimal();

// Call the function with custom arguments
describeAnimal('dog', 'brown');

//Exercise 9:
// a. Convert the provided if...else statement into a ternary operator

// Starting code:
const pizza = 'tasty';

// Use a ternary operator to log the correct message
pizza === 'tasty' ? console.log('yum') : console.log('yuck');

//Exercise 10:
// ! 10.1: Set language
// a. Assign a default value using the logical OR operator
// b. Create a variable called lang
// c. Set lang to localLangConfig or 'en' if localLangConfig is falsy
// d. Log the value of lang

// Simulated language configuration
const localLangConfig = null; // Change to 'es', 'fr', etc., or leave it null

// Use logical OR to provide a default language
const lang = localLangConfig || 'en';

// Log the selected language
console.log(lang);

//10.2: Set website theme
// a. Create a variable called theme
// b. Set theme to savedUserTheme or 'light' if savedUserTheme is falsy
// c. Log the value of theme

// Simulated user theme preference (change this variable to test)
const savedUserTheme = null; // Change to 'dark', etc., or leave it null

// Use logical OR to provide a default theme
const theme = savedUserTheme || 'light';

// Log the selected theme
console.log(theme);

//Exercise 11:
// a. Use optional chaining so accessing adventurer.cat.age
//    returns undefined instead of throwing an error

// Starting code:
const adventurer = {
  name: 'Alice',
};

// Use optional chaining to safely access nested properties
console.log(adventurer.cat?.age);
