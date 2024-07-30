let btnUno = document.querySelector('#btn-1');
let btnDos = document.querySelector('#btn-2');
let btnTres = document.querySelector('#btn-3');
let btnCuatro = document.querySelector('#btn-4');
let btnCinco = document.querySelector('#btn-5');
let btnSeis = document.querySelector('#btn-6');

function cambiarColor(botonColor){
    document.querySelector('#caja').style.backgroundColor = botonColor.style.backgroundColor;
}

btnUno.addEventListener('click', function(){
    cambiarColor(btnUno);
});

btnDos.addEventListener('click', function(){
    cambiarColor(btnDos);
});

btnTres.addEventListener('click', function(){
    cambiarColor(btnTres);
});

btnCuatro.addEventListener('click', function(){
    cambiarColor(btnCuatro);
});

btnCinco.addEventListener('click', function(){
    cambiarColor(btnCinco);
});

btnSeis.addEventListener('click', function(){
    cambiarColor(btnSeis);
});