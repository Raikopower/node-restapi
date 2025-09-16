import express from 'express';
import { getCineById } from '../controllers/cineController.js';

const router = express.Router();

router.get('/:id', getCineById);

export default router;
