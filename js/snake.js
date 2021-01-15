import { getDirecaoTeclado } from './input.js';

//variáveis
export const SNAKE_SPEED = 15;
const snake = [ {x: 16, y: 16},
                {x: 17, y: 16}];
let novoSegmento = 0;
let direcao;

export function atualizar (){
    
    direcao = getDirecaoTeclado();
    for (let i = snake.length - 2; i >= 0; i--){
        snake[i + 1] = { ...snake[i] };
    };
    snake[0].x += direcao.x;
    snake[0].y += direcao.y;

    addSegmento();
}

export function desenhar(gameBoard){
    for (let i = 0; i < snake.length; i++){
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = snake[i].x;
        snakeElement.style.gridColumnStart = snake[i].y;
        if(i==0){
            snakeElement.classList.add('snakeHead');
        } else {
        snakeElement.classList.add('snake');
        }
        gameBoard.appendChild(snakeElement);
    }
}

export function expandirSnake(qtd){
    novoSegmento += qtd;
    addSegmento();
    novoSegmento = 0;
}

export function onSnake(posicao, {ignoreHead = false } = {}){
        if (ignoreHead){
           for(let i = 1 ; i<snake.length; i++){
               if (checaPosicao(snake[i], posicao)){
                   return true;
               }
           }
        } else {
            return checaPosicao(snake[0],posicao);
        }
    }

function checaPosicao(pos1, pos2){
    return (pos1.x === pos2.x && pos1.y === pos2.y);
}

function addSegmento(){
    for (let i = 0; i < novoSegmento; i++){
        snake.push( {...snake[ snake.length - 1 ]});
    }
}

export function getSnake(){
    return snake[0];
}

export function interseptionSnake(){
   return onSnake(snake[0], {ignoreHead : true});
}