const texto = "Desenvolvedor Front-End";
const typingElement = document.querySelector(".typing");

let i = 0;
let apagando = false;

function digitar() {
  if (!apagando && i <= texto.length) {
    typingElement.textContent = texto.substring(0, i);
    i++;
    setTimeout(digitar, 150); // velocidade da digitação
  } else if (apagando && i >= 0) {
    typingElement.textContent = texto.substring(0, i);
    i--;
    setTimeout(digitar, 100); // velocidade da exclusão
  } else {
    apagando = !apagando;
    setTimeout(digitar, 1000); // pausa entre escrever e apagar
  }
}

digitar();