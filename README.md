# Pizza Parlor

A JS Web Application by Henry Oberholtzer

## Description

This application allows a user to select a pizza size, sauce, cheese and toppings, and have a pizza ticket with price returned.

### Technologies Used
* JavaScript
* HTML
* CSS
* Bootstrap

## Installation and use:
* Available on GH Pages!
* Clone this zip to your computer. Keep all files in their directory, and either run a VS code live server, or open index.html in a web browser.

### Known Bugs:
* No limit to Pizzas one can order
* Not tested for mobile compatibility
* _Please reach you if you spot any others!_

### User Stories:

* User can pick size for pizza
* User can pick toppings for pizza
* User gets a pizza with standard cheese toppings from the start
* User recieves a cost based on toppings chosen on a checkbox list
* Pizza is created in a JS object
* A prototype method is used to generate the cost of the pizza

## Test Driven Development Psuedocode

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

#### Describe: Pizza.prototype.printTicket()

Test: It should accept a pizza object and return an HTML element with the pizza size in a p tag.
Code: newPizza.printTicket()
Result: <p>Size: Large</p>

Test: It should accept a pizza object and return HTML elements with the other radio bubble selections in P tags.
Code: newPizza.printTicket()
Result: 
<p>Size: Large</p>
<p>Cheese: Mozzarella</p>
<p>Sauce: Marinara</p>

It should accept a pizza object and return an HTML ul element containing li elements of each topping.
Code: newPizza.printTicket()
Result:
<p>Size: Large</p>
<p>Cheese: Mozzarella</p>
<p>Sauce: Marinara</p>
<ul>
    <li>Black Olives</li>
    <li>Artichoke Hearts</li>
</ul>

It should accept a pizza object and return the previous HTML elements in one div.
Code: newPizza.printTicket()
Result:
<div>
    <p>Size: Large</p>
    <p>Cheese: Mozzarella</p>
    <p>Sauce: Marinara</p>
    <ul>
        <li>Black Olives</li>
        <li>Artichoke Hearts</li>
    </ul>
</div>

## Licenses

Copyright 2023 (c) Henry Oberholtzer

Code licensed under a GNU GPLv3 license

Bootstrap licensed under MIT