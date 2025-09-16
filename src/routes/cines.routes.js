import express from 'express';
import { getAllCines } from '../controllers/cinesController.js';

const router = express.Router();


router.get('/', getAllCines);

export default router;
