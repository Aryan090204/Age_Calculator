const btnEvent = document.getElementById("btn");
const birthdayEvent = document.getElementById("bday");
const resultEvent = document.getElementById("res");

function calculateAge() {
  const birthdayValue = birthdayEvent.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEvent.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}

btnEvent.addEventListener("click", calculateAge);