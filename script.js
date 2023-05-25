let string = "";
const resultInput = document.querySelector("input");
let allButtons = document.querySelectorAll(".btn");
Array.from(allButtons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
      } catch (e) {
        resultInput.value = "Invalid Input";
        string = "";
        throw new Error("Please ensure input");
      }
      resultInput.value = string;
      string = "";
    } else if (e.target.innerHTML == "C") {
      string = "";
      resultInput.value = string;
    } else {
      string = string + e.target.innerHTML;
      resultInput.value = string;
    }
    button.style.transform = "scale(0.9)";
    setTimeout(() => {
      button.style = "none";
    }, 100);
  });
});
