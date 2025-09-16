import express from 'express';
import cineRoutes from './routes/cine.routes.js';
import cinesRoutes from './routes/cines.routes.js';
import peliculaRoutes from './routes/pelicula.routes.js';

const app = express();


app.use('/cine', cineRoutes);
app.use('/cines', cinesRoutes);
app.use('/pelicula', peliculaRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
