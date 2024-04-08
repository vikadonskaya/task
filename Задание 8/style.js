//1
const users = [
  { username: "David", status: "online", lastActivity: 10 },
  { username: "Lucy", status: "offline", lastActivity: 22 },
  { username: "Bob", status: "online", lastActivity: 104 },
];

const onlineUsers = users.filter((user) => user.status === "online");
const usersOnlineNames = onlineUsers.map((user) => user.username).join(", ");

alert(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);
//2
function giveTalonsInOrder(patients, orders) {
  let result = [];
  orders.forEach((order) => {
    let patient = patients.find((patient) => patient.id === order);
    result.push(patient);
  });
  return result;
}

const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];
const result = giveTalonsInOrder(people, ordersArr);
console.log("result", result);
//3
function handleObject(obj, key, action) {
  if (action === "get") {
    return obj[key];
  } else if (action === "add") {
    obj[key] = "";
    return obj;
  } else if (action === "delete") {
    delete obj[key];
    return obj;
  } else {
    return obj;
  }
}

const student = { name: "Maxim", programmingLanguage: "JavaScript" };
const result = handleObject(student, "programmingLanguage", "delete");
console.log("result", result);
//4
function giveJobToStudent(student, jobName) {
  student.job = jobName;
  const fullName = student.fullName;
  const message = `Поздравляем! У студента ${fullName} появилась новая работа! Теперь он ${jobName}`;
  alert(message);
  return student;
}

const student = {
  fullName: "Максим",
  experienceInMonths: 12,
  stack: ["HTML", "CSS", "JavaScript", "React"],
};

const updatedStudent = giveJobToStudent(student, "веб-разработчик");
console.log(updatedStudent);
