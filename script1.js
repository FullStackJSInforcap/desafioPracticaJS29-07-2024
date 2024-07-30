let btnEnviar = document.querySelector('#botton');
btnEnviar.addEventListener('click', function(){
    document.querySelector('.resultado').innerHTML = '';
    document.querySelector('.errorNombre').innerHTML = '';
    document.querySelector('.errorAsunto').innerHTML = '';
    document.querySelector('.errorMensaje').innerHTML = '';
    let txtNombre = document.querySelector('#nombre');
    let txtAsunto = document.querySelector('#asunto');
    let txtMensaje = document.querySelector('#mensaje');
    let reValidarLetras = new RegExp("^[a-zA-Z ]+$");
    if(reValidarLetras.test(txtNombre.value) && reValidarLetras.test(txtAsunto.value) && reValidarLetras.test(txtMensaje.value)){
        /* let resultado = document.querySelector('.resultado');
        resultado.innerHTML = 'Mensaje enviado con éxito!!!'; */
        document.querySelector('.resultado').innerHTML = 'Mensaje enviado con éxito!!!';
    }else{
        if(!reValidarLetras.test(txtNombre.value)){
            document.querySelector('.errorNombre').innerHTML = 'El nombre es requerido';
        }
        if(!reValidarLetras.test(txtAsunto.value)){
            document.querySelector('.errorAsunto').innerHTML = 'El asunto es requerido';
        }
        if(!reValidarLetras.test(txtMensaje.value)){
            document.querySelector('.errorMensaje').innerHTML = 'El mensaje es requerido';
        }
    }
});
