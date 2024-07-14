import express from 'express';
const router=express.Router();
import estudiantesControllers from '../controllers/estudiantesController';

//router para estudiantes
router.get('/',estudiantesControllers.consultar);
router.post('/',estudiantesControllers.ingresar);

//esto es para evitar la repeticion del id
router.route('/:id')
.get(estudiantesControllers.consultarDetalle)
.put(estudiantesControllers.actualizar)
.delete(estudiantesControllers.borrar)

export default router;