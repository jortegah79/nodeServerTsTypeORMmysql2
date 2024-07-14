import { Request, Response } from "express";
import { Estudiante } from "../models/estudianteModel";

class EstudiantesController {
  constructor() {}

  consultar(req: Request, res: Response) {
    try {
                  
      res.status(200).send("Consultar estudiantes");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
  ingresar(req: Request, res: Response) {
    try {
      res.status(200).send("ingresar");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
  actualizar(req: Request, res: Response) {
    try {
      res.status(200).send("actualizar");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
  borrar(req: Request, res: Response) {
    try {
      res.status(200).send("borrar");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
  consultarDetalle(req: Request, res: Response) {
    try {
      res.status(200).send("consulta detalle");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
  asociar_estudiante(req: Request, res: Response) {
    try {
      res.status(200).send("asocia estudiante");
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send(err.message);
      }
    }
  }
}

export default new EstudiantesController();
