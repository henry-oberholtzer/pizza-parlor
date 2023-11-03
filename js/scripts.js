function Pizza(toppings, baseSauce, baseCheese, size) {
    this.toppings = toppings;
    this.baseSauce = baseSauce;
    this.baseCheese = baseCheese;
    this.size = size;
}

Pizza.prototype.cost = function() {
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
    }
    const orderedSize = this.size;
    const orderedSauce = this.baseSauce;
    const orderedCheese = this.baseCheese;
    const toppingCost = this.toppings.length * 2;
    const sizeCost = size[orderedSize];
    const sauceCost = baseSauce[orderedSauce];
    const cheeseCost = baseCheese[orderedCheese];
    return sizeCost + sauceCost + cheeseCost + toppingCost;
}