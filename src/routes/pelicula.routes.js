import express from 'express';
import { getPeliculaById } from '../controllers/peliculaController.js';

const router = express.Router();

router.get('/:id', getPeliculaById);

export default router;
