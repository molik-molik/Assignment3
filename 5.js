///////TASK 5  10 points    .js file

console.log("BMI Calculator");

window.onload = () => {
  let button = document.querySelector("#btn");
  button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  let height = parseInt(document
    .querySelector("#height").value);
  let weight = parseInt(document
    .querySelector("#weight").value);
  let result = document.querySelector("#result");
  if (height === "" || isNaN(height))
    result.innerHTML = "Input your real Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Input your real Weight!";
  else {
    let bmi = (weight / ((height * height) /
      10000)).toFixed(2);
    if (bmi < 18.5) result.innerHTML =
      `Your BMI is : <span>${bmi}</span>, so you are underweight!`;
    else if (bmi >= 18.5 && bmi < 24.9)
      result.innerHTML =
      `Your BMI is : <span>${bmi}</span>, so you have a normal weight!`;
    else result.innerHTML =
      `Your BMI is : <span>${bmi}</span>, so you are overweight!`;
  }
}
