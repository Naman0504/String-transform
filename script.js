const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submitBtn");
const Upper_Case = document.querySelector(".upper-case");
const Lower_Case = document.querySelector(".lower-case");
const Kebab_Case = document.querySelector(".kebab-case");
const Pascal_Case = document.querySelector(".pascal-case");
const Camel_Case = document.querySelector(".camel-case");

submitBtn.addEventListener("click", (e) => {
  console.log(input.value);
  const value = input.value;
  upperCase(value);
  lowerCase(value);
  kebabCase(value);
  pascalCase(value);
  camelCase(value);
  input.value = "";
});

function upperCase(str) {
  const upperCase = str.toUpperCase();
  Upper_Case.innerText = upperCase;
}

function lowerCase(str) {
  const lowerCase = str.toLowerCase();
  Lower_Case.innerText = lowerCase;
}
function kebabCase(str) {
  const kebabCase = str.toLowerCase().split(" ").join("-");
  Kebab_Case.innerText = kebabCase;
}
function pascalCase(str) {
  let pascalCase = str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  Pascal_Case.innerText = pascalCase;
}
function camelCase(str) {
  let camelCase = str
    .toLowerCase()
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
    Camel_Case.innerText = camelCase;
}
