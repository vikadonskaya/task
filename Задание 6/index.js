//1
function getName1(name) {
    return `Имя равно ${name}`;
  }
const getName2 = function (name) {
return `Имя равно ${name}`;
};
const getName3 = (name) => `Имя равно ${name}`;
console.log(getName1('Викуля'));
console.log(getName2('Викуля'));
console.log(getName3('Викуля'));

//3
function getDivCount(num = 1) {
  result = 0;
  if (num < 0 || !Number.isInteger(num)) {
    console.log("number должно быть целым числом и больше нуля!");
  } else {
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        result++;
      }
    }
  }
  return result;
}
console.log(getDivCount(80));

//4
function checkQuestionAnswer(question, correctAnswer){
  let queAns = prompt(question).trim().toUpperCase();
  correctAnswer === queAns 
    ?alert('Ответ верный') :alert('Ответ неверный')
}
checkQuestionAnswer('Как зовут Капитана Воробья?','ДЖЕК')

