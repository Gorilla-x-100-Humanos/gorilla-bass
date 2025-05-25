const winner_container=document.getElementsByClassName("winner_container")[0]
const atacar_btn =document.getElementsByClassName("atacar")[0]
const defender_btn =document.getElementsByClassName("defender")[0]
const refresh =document.getElementsByClassName("refresh")[0]
const forca_gorilas =document.getElementsByClassName("forca_gorilas")[0]
const forca_homens =document.getElementsByClassName("forca_homens")[0]
const gorilla_pontos =document.getElementsByClassName("valor_gorila")[0]
const homens_pontos =document.getElementsByClassName("valor_homen")[0]
const gorila =document.getElementById("gorila")
const homens =document.getElementById("homens")
const numero_guess =document.getElementById("numero_guess")
const gorila_audio = document.getElementById('gorila_audio');
const homen_audio = document.getElementById('homen_audio');
const contagem_geuerreiros = document.getElementById("contagem_geuerreiros");


//Aqui é para escolher de forma ramdomica a forca de cada jogador
let gorila_random=0
let homen_random=0

//Aqui é quantos pontos cada jogador começa o jogo
let gorila_point=20
let homen_point=20

//Aqui o jogo escolhe ramdomicamente um numero e o gorila tem que acerta esse numero para ganhar vida
let guess_denfender_random = 0

//Aqui é para mostrar no DOM a pontuação
gorilla_pontos.innerHTML = gorila_point
homens_pontos.innerHTML = homen_point

//BTN escondidos
defender_btn.style.display='none';
numero_guess.style.display='none';

let guerreiros_vivos = 20
//Função para colocar os guerriros dentro
function funcao_fuerreiros_vivos() {
    contagem_geuerreiros.innerHTML = '';
    for (let i = 0; i < guerreiros_vivos; i++) {
      const icon = document.createElement('i');
      icon.className = 'fa-solid fa-person';
      contagem_geuerreiros.appendChild(icon);
    }
  }

  funcao_fuerreiros_vivos()

// Identificar tamanho da tela para fazer a animação de acordo
  let tamanhoTela = window.innerWidth;

  window.addEventListener('resize', () => {
    tamanhoTela= window.innerWidth;
    console.log(tamanhoTela);
  });
  

atacar_btn.addEventListener("click",()=>{
    gorila_random=Math.floor(Math.random() * 41);
    homen_random=Math.floor(Math.random() * 41);

    forca_homens.innerHTML = homen_random
    forca_gorilas.innerHTML = gorila_random

   
    //Essa parte é para ativar a defesa do gorila
    if (gorila_point <= 10){
        if(tamanhoTela<=600){
            homens.style.transform = "translateX(-50px)";
        }else if(tamanhoTela<=761){
            homens.style.transform = "translateX(-200px)";
        }else{
            homens.style.transform = "translateX(-400px)";
        }
    
        setTimeout(()=>{
            homens.style.transform = "translateX(0px)";
        },600)

        gorila_point-=5;
        gorilla_pontos.innerHTML = gorila_point

        //Mostrar os botões e a caixa de input
        defender_btn.style.display='block';
        numero_guess.style.display='block';
        atacar_btn.style.display="none"

        //O número que vai ser escolhiodo randomicamnete
        guess_denfender_random=Math.floor(Math.random() * 4);
        
        //Pista para saber qual numero tem que adivinhar
        console.log(guess_denfender_random);

    }else if (gorila_random > homen_random){

        gorila_audio.play()
       
        if(tamanhoTela<=600){
            gorila.style.transform = "translateX(50px)";
            homen_point-=5;
            homens_pontos.innerHTML = homen_point
        }else if(tamanhoTela<=761){
            gorila.style.transform = "translateX(200px)";
            homen_point-=5;
            homens_pontos.innerHTML = homen_point
        }else{
            gorila.style.transform = "translateX(400px)";
            homen_point-=5;
            homens_pontos.innerHTML = homen_point
        }
     
        //Aqui para diminui os guerreiros da contagem
        guerreiros_vivos -= 5;
        funcao_fuerreiros_vivos();

        setTimeout(()=>{
            gorila.style.transform = "translateX(0px)";
        },600)

       if (homen_point < 5 ) {
            winner_container.style.display = "flex";
            if (homen_point < 5) {
                gorila.style.transform = "scale(1.3) translateX(80px)";
            } else {
                homens.style.transform = "scale(1.3) translateX(-80px)";
            }
              refresh.style.display = "block";
              defender_btn.style.display = "none";
              atacar_btn.style.display = "none"; 
        }

    }else{
        homen_audio.play()
          if(tamanhoTela<=600){
            homens.style.transform = "translateX(-50px)";
          }else if(tamanhoTela<=761){
            homens.style.transform = "translateX(-200px)";
          }else{
            homens.style.transform = "translateX(-400px)";
          }
       
        gorila_point-=5;
        gorilla_pontos.innerHTML = gorila_point
        

    setTimeout(()=>{
        homens.style.transform = "translateX(0px)";
    },600)
    }
})

//Apertar o btn de defender com input e fazer as comparações
defender_btn.addEventListener("click",()=>{

    //Pegar o valor do input e compara com o guess_denfender_random
    const numero_guess_value = Number(numero_guess.value);
    console.log(numero_guess_value);
    
   if(numero_guess_value == guess_denfender_random){
    numero_guess.value = ""
    gorila_point=15
    gorilla_pontos.innerHTML = gorila_point
    numero_guess.style.display="none";
    defender_btn.style.display='none';
    numero_guess.style.display='none';
    atacar_btn.style.display="block"

   }else{
    //Se adivinhar errado homens ganham
     winner_container.style.display ="flex"
     homens.style.transform=" scale(1.2) translateX(-80px)"
     refresh.style.display = "block"
     defender_btn.style.display = "none"
   }
})

//Para recomeçar o jogo
refresh.addEventListener("click", ()=> {
    location.reload();
});git 