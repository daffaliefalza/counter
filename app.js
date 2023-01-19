// set initial count
let counter = 0;
const span = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("decrease")) {
      counter--;
    } else if (btn.classList.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > 0) {
      span.style.color = "green";
    } else if (counter < 0) {
      span.style.color = "red";
    } else {
      span.style.color = "black";
    }

    span.textContent = counter;
  });
});
