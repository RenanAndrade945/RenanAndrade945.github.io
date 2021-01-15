import { onSnake } from './snake.js'

const TAMANHO_MESA = 31;

export function novaPosicao(comida){
    do {
        comida.x = Math.floor(Math.random() * TAMANHO_MESA);
        comida.y = Math.floor(Math.random() * TAMANHO_MESA);
    }while ((onSnake(comida)) && (comida.x < 1) && (comida.x >= TAMANHO_MESA) && (comida.y < 1) && (comida.y >= TAMANHO_MESA));
    return ;
}

export function saiudaMesa(pos){
    return (
             pos.x < 1 || pos.x > TAMANHO_MESA ||
             pos.y < 1 || pos.y > TAMANHO_MESA);
}