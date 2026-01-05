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

// Starting code (don't modify this):
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

