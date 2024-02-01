//1
const myName = 'Вика';
const progrLang = 'JavaScript';
const courseCreatorName = 'Никита Михайлович';
const reasonText = 'хочу получать большую зарплату)';
const numbOfMonth = '5';
let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${progrLang} на курсе по ${progrLang} y ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${progrLang} ${numbOfMonth} месяцев. Я уверен(а), что пройду данный курс до
конца!`;
console.log(myInfoText);

//2
myInfoText = myInfoText.replaceAll(progrLang, progrLang.toUpperCase());
console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);

//3-4
const userName = prompt("Как Вас зовут?").toLowerCase().trim();
const userAge = +prompt("Сколько Вам лет").trim();
alert(`Вас зовут ${userName} и Вам ${userAge} лет`);

//5
let userStr = prompt("Введите текст для обрезки").trim();
const startSliceIndex = +prompt("С какого индекса обрезать?").trim();
const endSliceIndex = +prompt("До какого индекса обрезать?").trim();
userStr = userString.slice(startSliceIndex, endSliceIndex);
alert(`Результат: ${userString}`);

//6
let userText = prompt('Введите текст').trim();
const wordFromText = prompt('Введите слово из текста').trim();
const indexOfWord = userText.indexOf(wordFromText);
userText = userText.slice(0, indexOfWord);
alert(`Результат: ${userText}`);
