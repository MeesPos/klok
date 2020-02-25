let mijnButton = document.getElementById('button');
let uur = document.getElementById('uur');
let minuten = document.getElementById('minuten');
let seconden = document.getElementById('seconden');
let datum = new Date();

mijnButton.addEventListener('click', () => {
    mijnButton.style.backgroundColor = "red";
    mijnButton.innerHTML = "STOP";
    uur.innerHTML = datum.getHours();
    minuten.innerHTML = datum.getMinutes();
    seconden.innerHTML = datum.getSeconds();
})