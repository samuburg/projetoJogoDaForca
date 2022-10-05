function desenharCanvas() {
  tela.lineWidth=8
  tela.lineCap="round"
  tela.lineJoin="round"
  tela.fillStyle= "#F3F5FC"
  tela.strokeStyle = "#0A3871"
  tela.fillRect(0,0,1200,800)
  tela.beginPath();
  tela.moveTo(650,500)
  tela.lineTo(900,500)
  tela.stroke()
  tela.closePath()
}

function desenharLinhas() {
  tela.lineWidth=6
  tela.lineCap="round"
  tela.lineJoin="round"
  tela.strokeStyle = "#0A3871"
  tela.beginPath()
  let largura=600/palavraSecreta.length
  for (let i=0;i<palavraSecreta.length;i++){
    tela.moveTo(500+(largura*i),640)
    tela.lineTo(550+(largura*i),640)
  }
  tela.stroke()
  tela.closePath()
}


function escreverLetraCorreta(index){
    tela.font = "bold 52px Inter"
    tela.lineCap = "round"
    tela.fillStyle = "#0A3871"
    tela.lineWidth = 6
    let largura= 600/palavraSecreta.length
    tela.fillText(palavraSecreta[index],505 + (largura * index),620 )
    
}

function escreverLetraIncorreta(letra, erros){
  tela.font = "bold 40px Inter"
  tela.lineCap = "round"
  tela.fillStyle = "#0A3871"
  tela.lineWidth = 6
  tela.fillText(letra,520 + (40 *(10 - erros)),720,40 )
}

function desenharCorpoBoneco(){
  tela.beginPath();
  tela.moveTo(775,300)
  tela.lineTo(775,430)
  tela.stroke();
  tela.closePath();
}

function desenharCabeca() {
  tela.beginPath()
  tela.arc(775,250,50,0,Math.PI*2, true); // desenha circulo da cabeça
  tela.stroke();

  tela.moveTo(760,270) // desenha boca
  tela.lineTo(790,270)

  tela.moveTo(754,240)
  tela.lineTo(755,240) // desenha olho esquerdo

  tela.moveTo(794,240)
  tela.lineTo(795,240) // desenha olho direito

  tela.stroke();
  tela.closePath()

}

function desenharBracoDireito(){
  tela.beginPath();

  tela.moveTo(775,330) // desenha braço direito
  tela.lineTo(850,360)

  tela.stroke();
  tela.closePath();

}

function desenharBracoEsquerdo(){
  tela.beginPath();
  tela.moveTo(775,330) // desenha braço esquerdo
  tela.lineTo(700,360)
  tela.stroke();
  tela.closePath();
}


function desenharPernaDireita(){
  tela.beginPath();

  tela.moveTo(775,430) // desenha perna direita
  tela.lineTo(850,495)

  tela.stroke();
  tela.closePath();

}

function desenharPernaEsquerda(){
  tela.beginPath();

  tela.moveTo(775,430) // desenha perna esquerda
  tela.lineTo(700,495)

  tela.stroke();
  tela.closePath();

}

function mensagemPerdeu(){
  tela.font = "bold 52px Inter"
  tela.lineCap = "round"
  tela.fillStyle = "#0A3871"
  tela.lineWidth = 6
  let largura= 600
  tela.fillText('VOCÊ PERDEU :´(',250,400 )
}

