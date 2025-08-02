const input = document.querySelector(".input");
const submitBtn = document.querySelector(".submitBtn");
const transformedText = document.querySelector(".transformed-text");


submitBtn.addEventListener("click",(e)=>{

  console.log(input.value)
  const value = input.value;
  transformedText.innerText = value.toLowerCase();

  input.value =""

})