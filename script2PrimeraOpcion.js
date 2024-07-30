let btnUno = document.querySelector('#btn-1');
let btnDos = document.querySelector('#btn-2');
let btnTres = document.querySelector('#btn-3');
let btnCuatro = document.querySelector('#btn-4');
let btnCinco = document.querySelector('#btn-5');
let btnSeis = document.querySelector('#btn-6');

btnUno.addEventListener('click', function(){
    document.querySelector('#caja').style.backgroundColor = btnUno.style.backgroundColor;
});

btnDos.addEventListener('click', function(){
    document.querySelector('#caja').style.backgroundColor = btnDos.style.backgroundColor;
});

btnTres.addEventListener('click', function(){
    document.querySelector('#caja').style.backgroundColor = btnTres.style.backgroundColor;
});

btnCuatro.addEventListener('click', function(){
    document.querySelector('#caja').style.backgroundColor = btnCuatro.style.backgroundColor;
});

btnCinco.addEventListener('click', function(){
    document.querySelector('#caja').style.backgroundColor = btnCinco.style.backgroundColor;
});

btnSeis.addEventListener('click', function(){
    document.querySelector('#caja').style.backgroundColor = btnSeis.style.backgroundColor;
});