let palavras = ['BRASIL', 'FORCA', 'HTML', 'ORACLE', 'JAVASCRIPT', 'LOGICA', 'PROGRAMA', 'DESAFIO', 'AMERICA', 'GATO', 'PEIXE'];
let tela = document.getElementById('forca').getContext('2d');
let palavraSecreta = "";

let letras = []
let erros = 8

function escolherPalavraSecreta() {
    let palavra = palavras[Math.floor(Math.random() * palavras.length)]
    palavraSecreta = palavra
    console.log(palavra)
    return palavra
  }

  function verificarLetra(key){
    let estado = false
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key) ){
       letras.push(key)
       console.log(key)
       console.log(letras)
       return estado
    }
    else{
      estado = true
      letras.push(key)
      console.log(key)
      console.log(letras, "if true")
      return estado
    }
  }

  function adicionarLetraIncorreta(){
    erros -= 1
  }


  //captar a tecla digitada
  //verificar se é uma letra
  // saber se a palavra secreta inclui a letra digitada
  // escrever letra correta
  // escrever letra incorreta 
  // contar os erros


  
function iniciaJogo(){
   
    document.getElementById("div-desaparece").style.display = 'none';
    escolherPalavraSecreta()
    

    desenharCanvas()
    desenharLinhas()

    document.onkeydown = (e) => {

        let letra = e.key.toUpperCase()

      
        if(verificarLetra(letra) && palavraSecreta.includes(letra)){
    
          for(let i = 0; i < palavraSecreta.length; i++){
            if(palavraSecreta[i] === letra){
  
              escreverLetraCorreta(i);
    
            }
          }
        }
        else{
          adicionarLetraIncorreta(letra)
          escreverLetraIncorreta(letra, erros)
          if (erros==7){
            desenharCorpoBoneco();
          }if (erros==6){
            desenharPernaDireita();
          }if (erros==5){
            desenharPernaEsquerda();
          }
          if (erros==4){
            desenharBracoEsquerdo();
          }
          if (erros==3){
            desenharBracoDireito();
          }
          if (erros==2){
            desenharCabeca();
          }
          if(erros==1){
            mensagemPerdeu()
          }
        }
      }

    }
  