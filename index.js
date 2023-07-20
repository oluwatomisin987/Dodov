// const setTheme = theme => document.documentElement.className = theme;

//     document.getElementById('theme-select').addEventListener('change', function() {
//     setTheme(this.value);
//     });

const num = document.querySelector(".sss");
const line = document.querySelector(".ful-p");

num.addEventListener("click", function () {
  // line.textContent = "New Me ksdk";
  // console.log(line.textContent);
  line.style.backgroundColor = "red";
});

