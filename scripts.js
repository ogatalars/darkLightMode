// console.log("teste");
// const h1 = document.getElementById("page-title");
// const button = document.getElementById("mode-selector");
// const footer = document.getElementsByTagName("footer")[0];
// const body = document.getElementsByTagName("body")[0];
// const darkModeClass = "dark-mode";

// function darkMode() {
//   h1.classList.toggle(darkModeClass);
//   footer.classList.toggle(darkModeClass);
//   body.classList.toggle(darkModeClass);
//   button.classList.toggle(darkModeClass);
//   console.log("cliquei");
// }

// button.addEventListener("click", darkMode);

const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-title");
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];

function changeMode() {
  changeClasses();
  changeText();
}

function changeText() {
  if (body.classList.contains("dark-mode")) {
    button.innerHTML = "Light Mode";
    h1.innerHTML = "Dark-mode" + " ON";
    return;
  }
  (button.innerHTML = "Dark Mode"), (h1.innerHTML = "Light-mode" + " OFF");
}
function changeClasses() {
  h1.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
  button.classList.toggle("dark-mode");
}

button.addEventListener("click", changeMode);
