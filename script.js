let diasText = document.querySelector(".dias");
let horasText = document.querySelector(".horas");
let minutosText = document.querySelector(".minutos");
let segundosText = document.querySelector(".segundos");

const dataDoEvento = new Date('August 27 2022 19:00:00');

const atualizarContagem = () => {
    const horarioAtual = new Date();
    const diferencaDasDatasEmMilissegundos = dataDoEvento - horarioAtual;

    let dias = Math.floor(diferencaDasDatasEmMilissegundos / 1000 / 60 / 60 / 24);
    let horas = Math.floor(diferencaDasDatasEmMilissegundos / 1000 / 60 / 60) % 24;
    let minutos = Math.floor(diferencaDasDatasEmMilissegundos / 1000 / 60) % 60;
    let segundos = Math.floor(diferencaDasDatasEmMilissegundos / 1000) % 60;

    diasText.textContent = dias;
    horasText.textContent = horas;
    minutosText.textContent = minutos;
    segundosText.textContent = segundos;
};

setInterval(atualizarContagem, 1000);
