## Rutas disponibles

- `GET /`  
  Responde: `Servidor activo`

- `GET /info`  
  Responde JSON:
  ```json
  {
    "Mensaje": "Esta es la ruta de info",
    "Curso": "Sistemas y tecnologias web",
    "Tecnologia": "Node JS"
  }
  ```

- `GET /api/student`  
  Lee `datos.json` y devuelve su contenido en formato JSON.

- `GET /api/status`  
  Responde JSON de estado:
  ```json
  {
    "Ok": true,
    "Status": "200",
    "puerto": 3000
  }
  ```

- `GET /saludo`  
  Responde: `Hola amigo uwu`

- Cualquier otra ruta  
  Responde `404` con mensaje:
  `Ruta no encontrada: <ruta>`

## Cambios realizados (vs. versión original)

1. **`/info` mejorado**
   - Antes: `Content-Type` incorrecto (`application-json`) y texto plano.
   - Ahora: `Content-Type: application/json` y respuesta JSON estructurada.

2. **`/api/student` corregido**
   - Antes: faltaba `await` en `fs.readFile(...)` y se hacía `JSON.stringify(texto)`.
   - Ahora: lectura asíncrona correcta con `await` y envío directo del contenido JSON.

3. **Nuevas rutas**
   - Se agregó `GET /api/status`.
   - Se agregó `GET /saludo`.
