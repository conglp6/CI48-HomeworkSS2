let food1 = new NonVegetableFood('thịt gà', 'kê kê nấu', 60000);
let food2 = new NonVegetableFood('cá xào tỏi', 'cá chép hoá rồng', 50000);
let food3 = new NonVegetableFood('thịt chó', 'cẩu mỹ vị', 85000);
let food4 = new VegetableFood('rau cải xào', 'cải xanh thiên vị', 30000);
let food5 = new VegetableFood('rau bí luộc', 'bí vị giai nhân', 10000);
let food6 = new VegetableFood('rau muống xào tỏi', 'muống vị tiên gia', 20000);


let menu = [food1, food2, food3, food4, food5, food6];

console.log(menu);

let nonVegetableMeal = new NonVegetableMeal('Menu thịt toàn phần');

nonVegetableMeal.addFood(food1);
nonVegetableMeal.addFood(food2);
nonVegetableMeal.addFood(food3);

console.log(nonVegetableMeal)
nonVegetableMeal.show()
console.log(nonVegetableMeal.calculatePrice());