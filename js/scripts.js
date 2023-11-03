// Business Logic

//// Pizza Price Logic

function Pizza(toppings, baseSauce, baseCheese, size) {
    this.toppings = toppings;
    this.baseSauce = baseSauce;
    this.baseCheese = baseCheese;
    this.size = size;
}

Pizza.prototype.cost = function () {
    const size = {
        small: 8,
        medium: 10,
        large: 12,
        xlarge: 14,
    };
    const baseSauce = {
        none: 1,
        marinara: 3,
        whitesauce: 3,
        pesto: 4,
    };
    const baseCheese = {
        none: 1,
        mozzarella: 3,
        fourcheese: 4,
        vegan: 4,
    };
    const orderedSize = this.size;
    const orderedSauce = this.baseSauce;
    const orderedCheese = this.baseCheese;
    const toppingCost = this.toppings.length * 2;
    const sizeCost = size[orderedSize];
    const sauceCost = baseSauce[orderedSauce];
    const cheeseCost = baseCheese[orderedCheese];
    return sizeCost + sauceCost + cheeseCost + toppingCost;
};

Pizza.prototype.printTicket = function () {
    const toppingPrintable = {
        none: "None",
        marinara: "Marinara",
        pesto: "Pesto",
        whitesauce: "White Sauce",
        mozzarella: "Mozzarella",
        fourcheese: "Four Cheese",
        vegan: "Vegan & Non-Dairy",
        small: "Small",
        large: "Large",
        xlarge: "X-Large",
        greenbellpeppers: "Green Bell Peppers",
        redbellpeppers: "Red Bell Peppers",
        blackolives: "Black Olives",
        redonion: "Red Onion",
        mushrooms: "Mushrooms",
        artichoke: "Artichoke Hearts",
        jalapeno: "Jalapenos",
        peperonicini: "Peperonicini",
    };
    const mainDiv = document.createElement("div");
    const sizeP = document.createElement("p");
    const cheeseP = document.createElement("p");
    const sauceP = document.createElement("p");
    const toppingP = document.createElement("P");
    const toppingUl = document.createElement("ul");
    mainDiv.setAttribute("class", "order-ticket");
    sizeP.append("Size: " + toppingPrintable[this.size]);
    cheeseP.append("Cheese: " + toppingPrintable[this.baseCheese]);
    sauceP.append("Sauce: " + toppingPrintable[this.baseSauce]);
    toppingP.append("Selected Toppings:");
    const toppings = this.toppings;
    toppings.forEach((topping) => {
        const li = document.createElement("li");
        li.append(toppingPrintable[topping]);
        toppingUl.append(li);
    });
    mainDiv.append(sizeP);
    mainDiv.append(cheeseP);
    mainDiv.append(sauceP);
    mainDiv.append(toppingP);
    mainDiv.append(toppingUl);
    return mainDiv;
};

// UI Logic
function getToppings(nodeList) {
    let resultArray = [];
    nodeList.forEach((element) => {
        resultArray.push(element.value);
    });
    return resultArray;
}

function pizzaBuilder() {
    const getSize = document.querySelector('input[name="size"]:checked').value;
    const getBaseSauce = document.querySelector(
        'input[name="sauce"]:checked'
    ).value;
    const getBaseCheese = document.querySelector(
        'input[name="cheese"]:checked'
    ).value;
    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    const getToppingList = getToppings(toppings);
    const newPizza = new Pizza(
        getToppingList,
        getBaseSauce,
        getBaseCheese,
        getSize
    );
    return newPizza;
}

function orderPrinter(e) {
    e.preventDefault();
    const pizza = pizzaBuilder();
    const price = pizza.cost();
    const ticket = pizza.printTicket();
    const pizzaNum = document.querySelector(".orders").childElementCount + 1;
    const ticketDiv = document.createElement("div");
    const pizzaH3 = document.createElement("h3");
    pizzaH3.append("#" + pizzaNum + ": €" + price);
    ticketDiv.append(pizzaH3);
    ticketDiv.append(ticket);
    if (pizzaNum === 1) {
        const totalcost = price;
        document.getElementById("totalcost").innerText = totalcost;
    } else {
        const totalcost =
            parseInt(document.getElementById("totalcost").innerText) + price;
        document.getElementById("totalcost").innerText = totalcost;
    }
    document.querySelector(".orders").append(ticketDiv);
    document.getElementById("order-form").reset();
}

window.addEventListener("load", () => {
    document.querySelector(".orders").innerHTML = "";
    document
        .getElementById("order-form")
        .addEventListener("submit", orderPrinter);
});
