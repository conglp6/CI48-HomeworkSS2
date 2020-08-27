class Meal {
    name;
    foods;
    dateModified;

    constructor(name) {
        this.name = name;
        this.foods = [];
        this.dateModified = new Date().toISOString();
    }
    addFood(food) {
        this.foods.push(food)
    }

    calculatePrice() {
        let hoaDon = 0;
        for (let i = 0; i < this.foods.length; i++) {
            hoaDon += this.foods[i].price;
        }
        return hoaDon;
    }

    show() {
        console.log(`Bữa ăn: ${this.name}`);
        for (let i = 0; i < this.foods.length; i++) {
            console.log(this.foods[i].name);
        }
        console.log(`Ngày nhậu: ${this.dateModified}`);
    };
}

class VegetableMeal extends Meal {
    constructor(name) {
        super(name)
    }
    addFood(vetgetableFood) {
        this.foods.push(vetgetableFood);
    }

    calculatePrice() {
        let hoaDon = 0;
        for (let i = 0; i < this.foods.length; i++) {
            hoaDon += this.foods[i].price;
        }
        return hoaDon * 0.85;
    }

}

class NonVegetableMeal extends Meal {
    constructor(name) {
        super(name);
    }

    add(nonVegetableFood) {
        this.foods.push(nonVegetableFood);
    }

    calculatePrice() {
        let hoaDon = 0;
        for (let i = 0; i < this.foods.length; i++) {
            hoaDon += this.foods[i].price;
        }
        return hoaDon * 0.95;
    }
}