let mijnButton = document.getElementById('button');
let uur = document.getElementById('uur');
let minuten = document.getElementById('minuten');
let seconden = document.getElementById('seconden');
let datum = new Date();

function buttonClick(){
    mijnButton.style.backgroundColor = "red";
    mijnButton.innerHTML = "STOP";
    uur.innerHTML = datum.getHours();
    minuten.innerHTML = datum.getMinutes();
    seconden.innerHTML = datum.getSeconds();
    mijnButton.setAttribute('onclick', 'countEinde()');
}

function countEinde(){
    mijnButton.style.backgroundColor = "green";
    mijnButton.innerHTML = "START";
    uur.innerHTML = datum.getHours();
    minuten.innerHTML = datum.getMinutes();
    seconden.innerHTML = datum.getSeconds();
    mijnButton.setAttribute('onclick', 'buttonClick()');
}