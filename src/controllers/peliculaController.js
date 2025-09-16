import { pool } from '../db.js';

export const getPeliculaById = async (req, res) => {
  const peliculaId = parseInt(req.params.id);
  if (isNaN(peliculaId)) return res.status(400).send('ID inválido');

  try {
    const [rows] = await pool.query('CALL sp_getPelicula(?)', [peliculaId]);
    res.status(200).json({
        succes:true,
        code:200,
        data:rows[0],
        message:'Exito'
    });
  } catch (error) {
  console.error(error); 
  res.status(500).json({
    success: false,
    code: 500,
    message: 'Error en el servidor',
    error: error.message 
  });
  }
};
