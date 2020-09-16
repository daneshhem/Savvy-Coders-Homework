let pizzaToppings = ['Bacon', 'Pineapple', 'Chicken',];
let size = ['kids', 'medium', 'large', 'super shack'];

let crust = ['reg', 'thin', 'deep dish'];

let greeting = "Welcome to Pizza Shack";

function greetCustomer() {
    return (greeting + "our toppings are " + pizzaToppings)
};
console.log(greetCustomer());

function getPizzaOrder() {
  return `One ${myPizza.size[1]} ${myPizza.crust[0]} crust pizza with ${myPizza.toppings[1]}, ${myPizza.toppings[2]}, and ${myPizza.toppings[3]} coming up!`
};

function getPizzaOrder() {
    return ("One " + size[3] + crust[2] + " pizza with " + pizzaToppings + " coming up!")
};
console.log(getPizzaOrder())

function preparePizza() {
    return (" Cooking pizza" + size[3] + crust[2] + pizzaToppings)
};
console.log(preparePizza())

function servePizza() {
    return ("Order up! Here's your " + size[3] + crust[2] + pizzaToppings + " Let's eat!")
};
console.log(servePizza())
