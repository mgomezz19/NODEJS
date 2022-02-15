function mostrarusuarios(params) {
    document.getElementById('contenedor').textContent = ''
    fetch('http://localhost:3000/lista_usuarios', {
        method: 'GET',
        mode: 'cors',
        headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         }
     })
     .then(result => result.json())
     .then(data => {
         for (const clave of data) {
             var div = document.createElement('div');
             for (const claveInterna in clave) {
                 var parrafo = document.createElement('p')
                 var nodoTexto = document.createTextNode(claveInterna+" : " + clave[claveInterna]);
                 parrafo.appendChild(nodoTexto);
                 div.appendChild(parrafo);
             }
             document.querySelector('#contenedor').appendChild(div);
         }
     }) 
}

function mostrarvehiculos(params) {
    document.getElementById('contenedor').textContent = ''
    fetch('http://localhost:3000/lista_vehiculos', {
        method: 'GET',
        mode: 'cors',
        headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         }
     })
     .then(result => result.json())
     .then(data => {
         for (const clave of data) {
             var div = document.createElement('div');
             for (const claveInterna in clave) {
                 var parrafo = document.createElement('p')
                 var nodoTexto = document.createTextNode(claveInterna+" : " + clave[claveInterna]);
                 parrafo.appendChild(nodoTexto);
                 div.appendChild(parrafo);
             }
             document.querySelector('#contenedor').appendChild(div);
         }
     }) 
}

function mostrarservicios(params) {
    document.getElementById('contenedor').textContent = ''
    fetch('http://localhost:3000/lista_servicios', {
        method: 'GET',
        mode: 'cors',
        headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         }
     })
     .then(result => result.json())
     .then(data => {
         for (const clave of data) {
             var div = document.createElement('div');
             for (const claveInterna in clave) {
                 var parrafo = document.createElement('p')
                 var nodoTexto = document.createTextNode(claveInterna+" : " + clave[claveInterna]);
                 parrafo.appendChild(nodoTexto);
                 div.appendChild(parrafo);
             }
             document.querySelector('#contenedor').appendChild(div);
         }
     }) 
}
function mostrarporid(params) {
    var input = document.querySelector(".id_input");
    document.getElementById('contenedor').textContent = '';
    fetch('http://localhost:3000/usuario_por_id_usuario/?id_usuario='+input.value, {
        method: 'GET',
        mode: 'cors',
        headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         }
     })
     .then(result => result.json())
     .then(data => {
         for (const clave of data) {
             var div = document.createElement('div');
             for (const claveInterna in clave) {
                 var parrafo = document.createElement('p')
                 var nodoTexto = document.createTextNode(claveInterna+" : " + clave[claveInterna]);
                 parrafo.appendChild(nodoTexto);
                 div.appendChild(parrafo);
             }
             document.querySelector('#contenedor').appendChild(div);
         }
     }) 
     fetch('http://localhost:3000/lista_vehiculos_por_id_usuario/?id_usuario='+input.value, {
        method: 'GET',
        mode: 'cors',
        headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         }
     })
     .then(result => result.json())
     .then(data => {
         for (const clave of data) {
             var div = document.createElement('div');
             for (const claveInterna in clave) {
                 var parrafo = document.createElement('p')
                 var nodoTexto = document.createTextNode(claveInterna+" : " + clave[claveInterna]);
                 parrafo.appendChild(nodoTexto);
                 div.appendChild(parrafo);
             }
             document.querySelector('#contenedor').appendChild(div);
         }
     }) 
}