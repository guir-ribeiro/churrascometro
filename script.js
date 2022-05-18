// carne - 400g por pessoa + de 6 horas - 650
// cerveja - 1200ml p/pessoa + 6 horas - 2l
// refrigerante/água - 1l p/pessoa + 6h 1,5l

// criança valem por 0,5

let inputadultos = document.getElementById("adultos");
let inputcriancas = document.getElementById("criancas");
let inputduracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");

function foguinho(){

    let foguinho = document.getElementById("foguinho");

    foguinho.innerHTML = `<img src="https://www.imagensanimadas.com/data/media/90/fogo-imagem-animada-0419.gif" border="0" alt="fogo-imagem-animada-0419" id="imgfoguinho" />`

}


function calcular(){

    let adultos = inputadultos.value;
    let criancas = inputcriancas.value;
    let duracao = inputduracao.value;
   
    let qtcarne = (adultos * carnepp(duracao))  + ((carnepp(duracao))/2 * criancas)
    let qtcereja = (adultos * cervejapp(duracao))
    let qtbebidas = (adultos * bebidaspp(duracao))  + ((bebidaspp(duracao))/2 * criancas)

    foguinho()

    resultado.innerHTML = `<p> ${qtcarne/1000} Kg de carne </p>`;
    resultado.innerHTML += `<p> ${Math.ceil(qtcereja/355)} latas de cerveja </p>`;
    resultado.innerHTML += `<p> ${Math.ceil(qtbebidas/2000)} garrafas de bebidas </p>`;

}

function carnepp(duracao){
    if(duracao >= 6){
        return 650;
    }

    else{
        return 400;
    }
}

function cervejapp(duracao){
    if(duracao >= 6){
        return 2000;
    }

    else{
        return 1200;
    }
}

function bebidaspp(duracao){
    if(duracao >= 6){
        return 1500;
    }

    else{
        return 1000;
    }
}