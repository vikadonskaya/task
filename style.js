//1
/*
const peopleWaiting = ["Кристина", "Олег", "Кирилл", "Мария", "Светлана", "Артем","Глеб"];
function giveParcel(peoples) {
const per = peoples.shift();
alert(
    `${per} получил(а) посылку. В очереди осталось ${peoples.length} человек`
);
}
function leaveQueueWithoutParcel(people) {
const per = people.pop();
alert(`${per} не получил(а) посылку и ушел(а) из очереди`);
}

for (let index = 0; index < 3; index++) {
giveParcel(peopleWaiting);
}
alert("Обеденный перерыв");
for (let index = 0; index < peopleWaiting.length; index) {
leaveQueueWithoutParcel(peopleWaiting);
}
*/
//2
/*
function getSumOfSequence(num) {
    const array = [];
    for (let i = 1; i <= num; i++) {
      array.push(i);
    }
    return 1 + num;
  }
  console.log(getSumOfSequence(5));
*/
//3
/*const coffees = ["Latte", "Cappuccino", "Americano"];
const coffeeName = prompt("Поиск кофе по названию").toLowerCase().trim();
const indexOfCoffee = coffees
  .map((coffee) => coffee.toLowerCase())
  .findIndex((coffee) => coffee === coffeeName);

if (indexOfCoffee !== -1) {
  alert(
    `Держите ваш любимый кофе ${coffees[indexOfCoffee]}, он ${indexOfCoffee + 1}-й по популярности в нашей кофейне`
  );
} else {
  alert("К сожалению, такого вида кофе нет в наличии");
}*/
//6
/*
const numbers = [10, 4, 100, -5, 54, 2];
let res = 0;
for (let i = 0; i < numbers.length; i++) {
  res += numbers[i] ** 3;
}
let res1 = 0;
for (const num of numbers) {
  res1 += num ** 3;
}
let res2 = 0;
numbers.forEach((num) => (res2 += num ** 3));
const res3 = numbers.reduce((sum, num) => sum + num ** 3, 0);
console.log(res);
console.log(res1);
console.log(res2);
console.log(res3);
*/
//9
/*
const mat = [];
for (let i = 0; i < 3; i++) {
  const array = [];
  for (let i = 1; i <= 5; i++) {
    array.push(i);
  }
  mat.push(array);
}
console.log(mat);
*/