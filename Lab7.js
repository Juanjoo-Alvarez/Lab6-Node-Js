const express = require('express');
const path = require('path');
const fs = require('fs/promises');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Servidor activo');
});

app.get('/info', (req, res) => {
  res.json({
    Mensaje: "Esta es la ruta de info",
    Curso: "Sistemas y tecnologias web",
    Tecnologia: "Node JS"
  });
});

app.get('/api/student', async (req, res) => {
  try {
    const filePath = path.join(process.cwd(), "datos.json");
    const texto = await fs.readFile(filePath, "utf-8");
    res.json(JSON.parse(texto));
  } catch (error) {
    res.status(500).json({ error: 'Error al leer el archivo' });
  }
});

app.get('/api/status', (req, res) => {
  res.json({
    Ok: true,
    Status: "200",
    puerto: port
  });
});

app.get('/saludo', (req, res) => {
  res.send('Hola amigo uwu');
});

app.use((req, res) => {
  res.status(404).send(`Ruta no encontrada: ${req.url}`);
});


app.listen(port, () => {
  console.log(`Aplicacion escuchando en puerto ${port}`);
});
