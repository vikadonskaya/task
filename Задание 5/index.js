//1
/*const userLogin = prompt('Введите логин').trim();
const userPassword = prompt('Введите пароль').trim();
const existedUserLogin = 'the_best_user';
const existedUserPassword = '12345678';

existedUserLogin === userLogin && existedUserPassword === userPassword
  ? alert(`Добро пожаловать, ${userLogin}`)
  : alert('Неверный логин и (или) пароль!');

//2
let correctAnswers = 0;
let incorrectAnswers = 0;
const answer1 = 4;
const answer2 = 1;
const answer3 = 12;
const answer4 = 6;
const question1 = +prompt('Сколько будет 2+2?').trim();
if(question1 === answer1){
  alert('Верно!');
  correctAnswers++
}
else{
  alert('Неверно');
  incorrectAnswers++
}
const question2 = +prompt('Сколько будет 2x2?').trim();
if(question2 === answer1){
  alert('Верно!');
  correctAnswers++
}
else{
  alert('Неверно');
  incorrectAnswers++
}
const question3 = +prompt('У Пети было 5 яблок, 3 он съел, 1 отдал другу. Сколько яблок осталось у Пети?').trim();
if(question3 === answer2){
  alert('Верно!');
  correctAnswers++
}
else{
  alert('Неверно');
  incorrectAnswers++
}
const question4 = +prompt('У Маши было 10 конфет, 2 она съела, 1 отдала другу. После мама дала ей ещё 5 конфет. Сколько конфет в итоге осталось?').trim();
if(question4 === answer3){
  alert('Верно!');
  correctAnswers++
}
else{
  alert('Неверно');
  incorrectAnswers++
}
const question5 = +prompt('Сколько будет 2+2x2?').trim();
if(question5 === answer4){
  alert('Верно!');
  correctAnswers++
}
else{
  alert('Неверно');
  incorrectAnswers++
}
alert("Конец теста! Правильные ответы: " + correctAnswers + ". Неправильные ответы:" + incorrectAnswers );*/

//3
/*let question1 = confirm('JavaScript появился в 1995 году?');
question1 === true
    ?alert('Верно')
    :alert('Неверно! Год создания JavaScript 1996')
let question2 = confirm('Спецификация JavaScript называется ECMAScript?');
question2 === true
    ?alert('Верно')
    :alert('Неверно! Спецификация JavaScript называется ECMAScript')
let question3 = confirm('JavaScript был создан за 1 месяц?');
question3 === true
    ?alert('Верно')
    :alert('Неверно! JavaScript был создан за 1 месяц');*/

//4
/*for (let i = 0; i < 3; i += 1) {
  let newStudent = prompt("Введите имя нового студента!");
  newStudent = newStudent.trim();
  if (newStudent) {
    alert(`Добро пожаловать, ${newStudent}`);
  }
}
*/
/*let i = 0;
while (i < 3) {
  let newStudent = prompt("Введите имя нового студента!");
  newStudent = newStudent.trim();
  if (newStudent) {
  }
  alert(`Добро пожаловать, ${newStudent}!`);
  i+=1
}*/
/*let i = 0;
do {
  let newStudent = prompt("Введите имя нового студента!");
  newStudent = newStudent.trim();
  if (newStudent) {
  }
  alert(`Добро пожаловать, ${newStudent}!`);
  i+=1
}
while(i < 3)

//5
const num = 100;
let sum = 0;
for (let i = 0; i <= num; i++) {
  sum += i;
}
console.log(sum);