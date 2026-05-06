Nivel de dificultad
http:
Todo se hace manualmente.
Hay que escribir más código incluso para cosas simples.

Express:
Ya trae muchas cosas listas.
Hace que el código sea más corto y fácil de entender.


Manejo de rutas
http:
Usas varios if para revisar cada ruta (req.url).
Si hay muchas rutas, el código se vuelve desordenado.

Express:

app.get('/ruta', ...)


Respuestas al cliente
http:

Hay que definir headers a mano:

res.writeHead(...)
res.end(...)
Express:

Solo usas:

res.send()
res.json()


Manejo de datos y errores
http:
Todo se controla manualmente.
Si algo falla, tú tienes que manejar el error.

Express:
Es más fácil usar async/await.
Permite manejar errores de forma más ordenada.


Middleware
http:
No tiene middleware como tal.
Si quieres agregar algo extra, toca hacerlo desde cero.

Express:

Tiene middleware, por ejemplo:

app.use(express.json())
Sirve para agregar funcionalidades fácilmente.


Manejo de rutas inexistentes
http:
Se hace manual al final con otro if.

Express:

app.use((req, res) => {
  res.status(404).send("Ruta no encontrada")
})
