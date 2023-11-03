# Pizza Parlor App

A JS Web Application by Henry Oberholtzer

## Technologies Used
* JavaScript
* HTML
* CSS

### User Stories:

* User can pick size for pizza
* User can pick toppings for pizza
* User gets a pizza with standard cheese toppings from the start
* User recieves a cost based on toppings chosen on a checkbox list
* Pizza is created in a JS object
* A prototype method is used to generate the cost of the pizza

### Test Driven Development Psuedocode

#### Describe: Pizza()
Test: It should return an object of a new pizza, with properties for toppings, base, and size.
Code: const newPizza = new Pizza(["artichoke","green bell peppers", "mushrooms"], "marinara", "mozzarella", "large");
Expected Output:

newPizza: {
    toppings: ["artichoke","green bell peppers", "mushrooms"],
    baseSauce: "marinara",
    baseCheese: "mozzarella",
    size: "large",
}

#### Describe: Pizza.prototype.cost()

Test: It should accept a pizza object and return the base cost based on the size.
Code: const cost = newPizza.cost();
Result: 12

Test: It should accept a pizza object and add additional cost based on the base ingredients chosen.
Code: const cost = newPizza.cost();
Result: 18

Test: It should accept a pizza object and add add additional cost based on the number of toppings chosen.
Code: const cost = newPizza.cost();
Result: 24

