¿Cuáles son los principales objetivos de estos ejercicios?
⦁ Entender cómo funciona la asincronía.
⦁ Aprender cómo llamar a una API
⦁ Aprender lo básico sobre cómo utilizar Axios.

1.Pintar usuarios
En este ejercicio utilizaremos la API de https://jsonplaceholder.typicode.com/users. Leyendo su documentación, deberás hacer lo siguiente:
Imprimir por consola la lista de usuarios.
Imprimir por consola solo el nombre de los usuarios.
Crea una variable global users y cuando hagas la petición axios rellénala con la respuesta de la api (todo esto fuera de una función)
Crea una función que muestre por consola la variable global que habías creado
Crea un botón que cuando lo cliques ejecute la función que habías creado
Ahora en vez de mostrar los usuarios por consola muestra el nombre de cada uno en el DOM ( en el HTML)
Recuerda que para estos ejercicios deberás utilizar Axios. 
Extras

1. Quiero un perrito, pero no se que raza escoger, ¿me ayudas?
En este ejercicio utilizaremos la API de https://dog.ceo/dog-api/. Leyendo su documentación, deberás hacer lo siguiente:
Imprimir por consola la lista de razas de todos los perros.
Imprimir por consola una imagen random de una raza.
Imprimir por consola todas las imágenes de una raza concreta.
Recuerda que para estos ejercicios deberás utilizar Axios. Al haber conseguido que se imprima por consola, el siguiente paso será que se muestren en pantalla con las herramientas que nos ofrece el árbol DOM.
*Extra ¿Y si ahora te pidiéramos que podamos poner otra raza en la url para que nos busque otras imágenes? Adapta las urls que ya tenías para que puedas pasarle argumentos.


2. ¿Quieres saber mi información? Aquí la tienes.
Para este ejercicio vamos a utilizar la API de usuarios de GitHub, la cual tiene esta URL: https://api.github.com/users/{username}. {username} es el nombre del usuario en GitHub, por lo que si quieres buscar a cualquier usuario, solo tienes que ponerlo en la url. Por ejemplo,https://api.github.com/users/aranBeitia, o esta https://api.github.com/users/GeerDev. Si ponéis esta URL en una nueva pestaña del navegador podréis observar qué datos nos devuelve el API.
Lo primero que haremos será crear un input de tipo texto y un botón para buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después crearemos una función que se ejecute cuando se pulse el botón buscar y que contenga una petición a la API para obtener información de ese usuario y así mostrarla en nuestra página:






Lo que queremos que se imprima por consola será:
Nombre
Número de repositorios
Avatar (imagen)
Recuerda que para estos ejercicios deberás utilizar Axios.Si ya has obtenido toda la información, utiliza las herramientas del árbol DOM para que esta información aparezca en la pantalla.

Entregables

Subir el ejercicio a un repositorio en github
Dejar el enlace del repositorio adjuntado en Classroom