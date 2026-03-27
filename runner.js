const age = 50;
let myAge = 99;
//age = 101; próba nadania nowej wartości zmiennej age zadeklarowanej za pomocą const.
const myName = "Kamil";

const human = {
    age: 23,
    name: "Kamil",
};

const human2 = {
    age: 20,
    name: "Antoni",
};

const human3 = human2;
console.log(human);
console.log(human2)

console.log("human2 ==== human3", human2 === human3);
console.log("human ==== human2", human === human2);

console.log(myAge);
console.log(age);
console.log("Moje imie to", myName);









