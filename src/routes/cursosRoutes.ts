import express from 'express';
import cursosController from '../controllers/cursosController';
const router = express.Router();

//router para estudiantes
router.get("/", cursosController.consultar);
router.post("/", cursosController.ingresar);
router.post("/registroEstudiante", cursosController.asociar_estudiante);

//esto es para evitar la repeticion del id
router
  .route("/:id")
  .get(cursosController.consultarDetalle)
  .put(cursosController.actualizar)
  .delete(cursosController.borrar);

export default router;
