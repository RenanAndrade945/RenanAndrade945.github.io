import { onSnake, expandirSnake } from "./snake.js";
import { novaPosicao } from "./mesa.js";

//variaveix
const EXPANSAO_SNAKE = 10;
let comida = {x: 0, y: 0};
novaPosicao(comida);


export function atualizar (){
    if (onSnake(comida)){
        expandirSnake(EXPANSAO_SNAKE);
        novaPosicao(comida);
    }
    
}

export function desenhar(gameBoard){
   
    const comidaElement = document.createElement('div');
    comidaElement.style.gridRowStart = comida.x;
    comidaElement.style.gridColumnStart = comida.y;
    comidaElement.classList.add('food');
    gameBoard.appendChild(comidaElement);

}