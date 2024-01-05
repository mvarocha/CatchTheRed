// let larguraDaTela = window.innerWidth;
let larguraDaTela = 800;
// let alturaDaTela = window.innerHeight;
let alturaDaTela = 800;
let point = document.getElementById("point");
document.addEventListener("keydown", function (event) {
  let square = document.getElementById("square");
  let squareTop = parseInt(
    window.getComputedStyle(square).getPropertyValue("top").slice(0, -2)
  );
  let squareLeft = parseInt(
    window.getComputedStyle(square).getPropertyValue("left").slice(0, -2)
  );
  let pointTop = parseInt(
    window.getComputedStyle(point).getPropertyValue("top").slice(0, -2)
  );
  let pointLeft = parseInt(
    window.getComputedStyle(point).getPropertyValue("left").slice(0, -2)
  );
  if (event.key === "ArrowUp") {
    let newValue = squareTop - 10;
    if (squareTop != 0) {
      square.style.top = `${newValue}px`;
    }
    if (pointTop == squareTop - 10 && pointLeft == squareLeft) {
      let altura = sortear(alturaDaTela - 10);
      let largura = sortear(larguraDaTela - 10);
      point.style.top = `${altura}px`;
      point.style.left = `${largura}px`;
      let score = parseInt(document.getElementById('score').innerHTML)
      document.getElementById('score').innerHTML = score+1
    }
  } else if (event.key === "ArrowDown") {
    if (squareTop < alturaDaTela - 10) {
      square.style.top = `${squareTop + 10}px`;
    }
    if (pointTop == squareTop + 10 && pointLeft == squareLeft) {
      let altura = sortear(alturaDaTela - 10);
      let largura = sortear(larguraDaTela - 10);
      point.style.top = `${altura}px`;
      point.style.left = `${largura}px`;
      let score = parseInt(document.getElementById('score').innerHTML)
      document.getElementById('score').innerHTML = score+1
    }
  } else if (event.key === "ArrowLeft") {
    if (squareLeft != 0) {
      square.style.left = `${squareLeft - 10}px`;
    }
    if (pointTop == squareTop && pointLeft == squareLeft - 10) {
      let altura = sortear(alturaDaTela - 10);
      let largura = sortear(larguraDaTela - 10);
      point.style.top = `${altura}px`;
      point.style.left = `${largura}px`;
      let score = parseInt(document.getElementById('score').innerHTML)
      document.getElementById('score').innerHTML = score+1
    }
  } else if (event.key === "ArrowRight") {
    if (squareLeft < larguraDaTela - 10) {
      square.style.left = `${squareLeft + 10}px`;
    }
    if (pointTop == squareTop && pointLeft == squareLeft + 10) {
      let altura = sortear(alturaDaTela - 10);
      let largura = sortear(larguraDaTela - 10);
      point.style.top = `${altura}px`;
      point.style.left = `${largura}px`;
      let score = parseInt(document.getElementById('score').innerHTML)
      document.getElementById('score').innerHTML = score+1
    }
  }
});

function sortear(maximo) {
  // Gerar um número aleatório dentro do intervalo máximo
  let numeroAleatorio = Math.floor(Math.random() * (maximo + 1));

  // Arredondar para o múltiplo de 10 mais próximo
  let multiploDe10 = Math.round(numeroAleatorio / 10) * 10;

  return multiploDe10 <= maximo ? multiploDe10 : multiploDe10 - 10;
}

let altura = sortear(alturaDaTela - 10);
let largura = sortear(larguraDaTela - 10);
point.style.top = `${altura}px`;
point.style.left = `${largura}px`;
