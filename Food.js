class Food {
    name;
    luxuriousName;
    price;
    constructor(name, luxuriousName, price) {
        this.name = name;
        this.luxuriousName = luxuriousName;
        this.price = price;
    }
}

class VegetableFood extends Food {
    constructor(name, luxuriousName, price) {
        super(name, luxuriousName, price);
    }
}

class NonVegetableFood extends Food {
    constructor(name, luxuriousName, price) {
        super(name, luxuriousName, price);
    }
}