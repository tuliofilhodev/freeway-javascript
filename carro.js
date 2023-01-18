function mostraCarros() {
  
  for (let m = 0; m < imagemCarros.length; m++) {
    image(imagemCarros[m], xCarros[m], yCarros[m], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarros() {
  
  for (let i = 0; i < 3; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
  for (let v = 3; v < 6; v++) {
    xCarros[v] += velocidadeCarros[v];
  }
}

function loopPosicao() {
  
  for (let i = 0; i < 3; i++) {
    if (xCarros[i] < -55) {
      xCarros[i] = 500;
    }
  }
  for (let v = 3; v < 6; v++) {
    if (xCarros[v] > 505) {
      xCarros[v] = -50;
    }
  }
}

var yCarros = [40, 97, 150, 210, 263, 318];
var xCarros = [500, 500, 500, -50, -50, -50];
var velocidadeCarros = [2.5, 4, 3.2, 3.2, 4, 2.5];
var comprimentoCarro = 50;
var alturaCarro = 40;