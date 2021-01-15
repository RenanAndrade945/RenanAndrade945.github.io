//variaveis
let direcao = { x : -1, y : 0};
let ultimaDirecao = { x : 0, y: 0 }

//event listener


export function getDirecaoTeclado(){
    window.addEventListener('keydown', e => {
        switch(e.key){
            case 'ArrowUp':
                if (ultimaDirecao.x != 0) break;
                direcao = {x : -1, y : 0, z : 90};
                break;
            case 'ArrowDown':
                if (ultimaDirecao.x != 0) break;
                direcao = {x : 1, y : 0, z : 90};
                break;
            case 'ArrowLeft':
                if (ultimaDirecao.y != 0) break;
                direcao = {x : 0, y : -1, z: 90};
                break;
            case 'ArrowRight':
                if (ultimaDirecao.y != 0) break;
                direcao = {x : 0, y : 1, z : 90};
                break;
            case 's':
                stop();
        }
    });

    ultimaDirecao = direcao;

    return direcao;
}