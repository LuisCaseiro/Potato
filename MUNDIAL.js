const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll(".abas-conteudo")
const principal = document.querySelectorAll(".botoesp")
const btn = document.querySelectorAll(".botoes")

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempObjt1 = new Date("2024-12-08 00:00");
const tempObjt2 = new Date("2025-01-01 00:00");
const tempObjt3 = new Date("2024-11-23 20:00");
const tempObjt4 = new Date("2024-11-10 00:00");

const tempos = [tempObjt1,tempObjt2,tempObjt3,tempObjt4];


function calculaTempo(tempObjt){
    let tempAtual = new Date();
    let TempFim = tempObjt - tempAtual;
    let segundos = Math.floor(TempFim/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24)
    
    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (TempFim > 0){
        return [dias,horas,minutos,segundos];

    }else{
        return [0,0,0,0];
    }
    
}

function AtualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("segundos"+i).textContent = calculaTempo(tempos [i])[3];
        document.getElementById("dias"+i).textContent = calculaTempo(tempos [i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos [i])[1];
        document.getElementById("minutos"+i).textContent = calculaTempo(tempos [i])[2];

}
}
function ComecaCronometro(){
AtualizaCronometro();
setInterval(AtualizaCronometro,1000);
}

ComecaCronometro();