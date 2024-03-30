import "./style.css";

const submit = document.getElementById("btn");
const answerElement = document.getElementsByClassName("checked");
let score = 0;

submit.addEventListener("click", checkedAns);

function checkedAns() {
  const checked = document.querySelector('input[type="radio"]:checked');
  const anss = checked.nextElementSibling.textContent;
  console.log(anss);

  if (anss === "iPhone 15") {
    score++;
  } else {
    document.getElementById("finalScore").innerHTML = score;
  }
}
