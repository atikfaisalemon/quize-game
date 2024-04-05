import "./style.css";

// const submit = document.getElementById("btn");
// const answerElement = document.getElementsByClassName("checked");

const questionNo1 = "dhaka";
const questionNo2 = "bill";
const questionNo3 = "california";
const questionNo4 = "iPhone15";

const question_form = document.getElementById("question_form");

question_form.addEventListener("submit", (event) => {
  event.preventDefault();
  let score = 0;
  const formData = new FormData(question_form);

  const capital_ans = formData.get("capital");
  const founder_ans = formData.get("founder");
  const location_ans = formData.get("location");
  const phone_ans = formData.get("phone");

  if (capital_ans === questionNo1) score++;
  if (founder_ans === questionNo2) score++;
  if (location_ans === questionNo3) score++;
  if (phone_ans === questionNo4) score++;

  console.log("score", score);
  document.getElementById("finalScore").textContent = score;
});

// submit.addEventListener("click", checkedAns);

// function checkedAns() {
//   const checked = document.querySelectorAll('input[type="radio"]:checked');
//   console.log(checked.values);
// }
