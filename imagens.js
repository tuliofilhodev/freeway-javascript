function preload() {
  
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png")
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarro4 = loadImage("imagens/carro-4.png");
  imagemCarro5 = loadImage("imagens/carro-5.png");
  imagemCarro6 = loadImage("imagens/carro-6.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6]
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}

var imagemEstrada;
var imagemAtor;
var imagemCarro1;
var imagemCarro2;
var imagemCarro3;
var imagemCarro4;
var imagemCarro5;
var imagemCarro6;
var somdaTrilha;
var somColisao;
var somPonto;