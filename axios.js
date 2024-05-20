/*
1.Pintar usuarios
En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. Leyendo su documentación, deberás hacer lo siguiente:
*/

// 01 - Imprimir por consola la lista de usuarios.
axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

// 02 - Imprimir por consola solo el nombre de los usuarios.
axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        // handle success
        console.log(response.data.name);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

// 03 -Crea una variable global users y cuando hagas la petición axios rellénala con la respuesta de la api (todo esto fuera de una función)
let globalUsers = [];

// 04 Crea una función que muestre por consola la variable global que habías creado


// 05 Crea un botón que cuando lo cliques ejecute la función que habías creado


// 06 Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML)


