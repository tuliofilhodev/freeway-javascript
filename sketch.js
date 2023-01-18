function setup() {
  
  createCanvas(500, 400);
  somTrilha.loop(0,1,0.2);
}

function draw() {
  
  background(imagemEstrada);
  mostraAtor();
  mostraCarros();
  movimentaCarros();
  movimentaAtor();
  loopPosicao();
  verificaColisao();
  mostrarPontos();
  addPontos();
  countdown();
}