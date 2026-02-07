const display = document.getElementById("display")
const buttons = document.querySelectorAll(".Value")

buttons.forEach(button => {
  button.addEventListener('click', function() {
    if(button.innerText === "="){
        calcular();
    }else{
display.value += button.innerText
    }
  });
});

function calcular() {
  try {
    let expressao = display.value
      .split("x").join("*")
      .split("%").join("/100*");  

    display.value = eval(expressao);
  } catch {
    display.value = "Erro";
  }
}
function limpar(){
  display.value = ""
}
