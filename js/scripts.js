function Pizza(toppings, base, size) {
    this.toppings = toppings;
    this.base = base;
    this.size = size;
}

Pizza.prototype.cost = function() {
    const size = {
        small: 8,
        medium: 10,
        large: 12,
        xlarge: 14,
    };
    const orderedSize = this.size;
    const sizeCost = size[orderedSize];
    const numToppings = this.toppings.length;
    return sizeCost + (numToppings * 2);
}