import { pool } from '../db.js';

export const getPeliculaById = async (req, res) => {
  const peliculaId = parseInt(req.params.id);
  if (isNaN(peliculaId)) return res.status(400).send('ID inválido');

  try {
    const [rows] = await pool.query('CALL sp_getPelicula(?)', [peliculaId]);
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};
