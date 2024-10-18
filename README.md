# Ejercicio Cypherser

## Objetivo.

Desarrollar una aplicación que implemente una llamada a un API.

## Características de la implementación. 

- Pantalla de Login con opción de correo o autenticación de terceros. 
- Pantalla de Home en la que se consume un API, creada con Python, en la que se muestra 
un listado de usuarios. 
- Pantalla de Contacto en la que se puede ver el perfil del desarrollador. 
- En la página de contacto, se puede ver el CV del candidato así como de opciones 
añadidas como perfil de LinkedIn, enviar un email o llamar por teléfono. 
- Pantalla de escaneo en la que se puede solicitar un análisis o escaneo de una URL válida. 
- Al momento de pulsar el botón de “escaneo” o “análisis” se valida por expresión regular si 
la URL es válida o no. 
- Se añadió un método para transformar una URL en formato base64 y removiendo el 
carácter = para que una URL sea válida para los endpoints de Virus Total. 
- Si la URL es válida, se muestra la respuesta a la petición de escaneo o análisis. 
- Si la URL no es válida, se le informa al usuario.

## Requerimientos.

- NodeJS.
- IDE de su preferencia (se sugiere VSC). 
- Emulador de iOS o Android / Dispositivo físico. 

## Ejecutar aplicación.

Si se clona la app. 

- Clonar repositorio de GitHub. 
- Abrir una terminal en la raíz del proyecto. 
- Ejecutar el comando npm install. 
- Ejecutar comando npm start. 
- Teclear a para Android / i para iOS. 

En Android se genera el apk, se instala en el dispositivo cuidando tener el permiso de instalar por 
fuentes externas; en iOS se puede instalar por medio de XCode. En ambos casos se pueden crear 
versiones de prueba en las respectivas tiendas en caso de ser necesario.