import { pool } from '../db.js';

export const getAllCines = async (req, res) => {
  try {
    const [rows] = await pool.query('CALL sp_getCines()');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};
