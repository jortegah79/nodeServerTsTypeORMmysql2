import express from 'express';
import profesoresControllers from '../controllers/profesoresController';
const router = express.Router();

//router para estudiantes
router.get("/", profesoresControllers.consultar);
router.post("/", profesoresControllers.ingresar);

//esto es para evitar la repeticion del id
router
  .route("/:id")
  .get(profesoresControllers.consultarDetalle)
  .put(profesoresControllers.actualizar)
  .delete(profesoresControllers.borrar);

export default router;
