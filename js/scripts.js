function Pizza(toppings, base, size) {
    this.toppings = toppings;
    this.base = base;
    this.size = size;
}

Pizza.prototype.cost = function() {
    const sizeCost = {
        small: 8,
        medium: 10,
        large: 12,
        xlarge: 14,
    };
    const orderedSize = this.size;
    return sizeCost[orderedSize];
}