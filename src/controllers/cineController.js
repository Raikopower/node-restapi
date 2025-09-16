import { pool } from '../db.js';

export const getCineById = async (req, res) => {
  const cineId = parseInt(req.params.id);
  if (isNaN(cineId)) return res.status(400).send('ID inválido');

  try {
    const [rows] = await pool.query('CALL sp_getCine(?)', [cineId]);
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};
