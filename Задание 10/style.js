//1
const student = {
  stack: ["HTML"],
  level: 1,
  improveLevel: function () {
    this.level++;
    if (this.level === 2) {
      this.stack.push("CSS");
    } else if (this.level === 3) {
      this.stack.push("JavaScript");
    } else if (this.level === 4) {
      this.stack.push("React");
    } else if (this.level === 5) {
      this.stack.push("NodeJS");
    }
    if (this.level > 5) {
      alert("Студент выучил все технологии!");
    }
    return this;
  },
};

student
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel()
  .improveLevel();

console.log(student.stack);
//3
const footballer = {
  fullName: "Cristiano Ronaldo",
  attack: function () {
    console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
  },
  scoreGoal: function (sound) {
    console.log(`${this.fullName} ${sound}! Вот это да!`);
  },
  celebrate: function (sound) {
    console.log(sound);
  },
  goToSubstitution: function (newPlayer) {
    console.log(
      `${this.fullName} уходит на замену. На поле выходит ${newPlayer}`
    );
  },
};

const attack = footballer.attack.bind(footballer);
const score = footballer.scoreGoal;
const substitute = footballer.goToSubstitution;

attack();
score.call(footballer, "Сиииии");
substitute.apply(footballer, ["Paulo Dibala"]);
