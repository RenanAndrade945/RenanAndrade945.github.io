//importações
import { SNAKE_SPEED, atualizar as atualizarSanke, desenhar as desenharSnake, getSnake, interseptionSnake } from './snake.js'
import { atualizar as atualizarComida, desenhar as desenharComida } from './food.js'
import { saiudaMesa } from './mesa.js';

//Variáveis
let ultimoFrame = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');


function main(){
    document.getElementById ('btn-jogar').addEventListener("click", jogo, false);
}

function jogo(currentTime){
    
    if (gameOver){
        alert('Voce falhou');
        return;
    }
    
    window.requestAnimationFrame(jogo);
    const tempoDesdeUltimoFrame = (currentTime - ultimoFrame) / 1000;
    
    if (tempoDesdeUltimoFrame < 1 / SNAKE_SPEED) return;

    ultimoFrame = currentTime;

    atualizar();
    desenhar();
}

window.requestAnimationFrame(main);

function atualizar(){
    gameOver = checaPerdeu();
    atualizarComida();
    atualizarSanke();
}

function desenhar(){
    gameBoard.innerHTML = '';
    desenharComida(gameBoard);
    desenharSnake(gameBoard);
}

function checaPerdeu(){
     if (saiudaMesa(getSnake()) || interseptionSnake()){
         return true;
     }
}