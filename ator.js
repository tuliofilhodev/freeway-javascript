function movimentaAtor() {
  
    if ( ficarParado ) return;
    if (keyIsDown(UP_ARROW)) yAtor -= 3;    
    if (keyIsDown(DOWN_ARROW))  yAtor += 3;    
     if (keyIsDown(LEFT_ARROW)) xAtor -= 3;  
     if (keyIsDown(RIGHT_ARROW)) xAtor += 3;
}

function mostraAtor() {
  
  image(imagemAtor, xAtor, yAtor, 23, 23);
}

function verificaColisao() {

  for (let i = 0; i < 3; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 11)
    if (colisao){
      reiniciar();
      somColisao.play();
      if (pontosPositivos()){
       pontos -= 1;
      }
    }
  }
  for (let v = 3; v < 6; v++){
    colisao = collideRectCircle(xCarros[v], yCarros[v], comprimentoCarro, alturaCarro, xAtor, yAtor, 11)
    if (colisao){
      reiniciar();
      somColisao.play();
      if (pontosPositivos()){
       pontos -= 1;
      }
    }
  }
}

function reiniciar() {
  
  yAtor = 370;
  xAtor = 250;
  // opcional colocar o tempo aqui
  ficarParado = true 
  tempoJogo = 5    
}

function mostrarPontos() {
  
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 0, 255));
  text(pontos, width / 5, 27);
  textSize(85);
  fill(color(255,255,255));
  text( textoInicio, width/4 * 2, height/4 * 2 + 25); 
}

function pontosPositivos() {
  
  return pontos > 0
}

function addPontos() {
  
  if (yAtor < 15){
    pontos += 1;
    somPonto.play();
    reiniciar();
  }
}

function restringirMoviment() {
  
  return yAtor < 370;
}

function pontosPositivos() {
  
  return pontos > 0
}

function countdown() {
  
  tempoJogo -= 1/60;
  if ( tempoJogo > 0 ) 
    textoInicio = parseInt(tempoJogo)
  else {
    ficarParado = false;
    textoInicio = ''
  }
}

var xAtor = 250;
var yAtor = 370;
var colisao = false;
var pontos = 0;
var tempoJogo = 5; // tempo em segundos
var textoInicio;
var ficarParado = true