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