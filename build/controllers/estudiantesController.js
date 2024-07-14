"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EstudiantesController {
    constructor() { }
    consultar(req, res) {
        try {
            res.status(200).send("Consultar estudiantes");
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    ingresar(req, res) {
        try {
            res.status(200).send("ingresar");
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    actualizar(req, res) {
        try {
            res.status(200).send("actualizar");
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    borrar(req, res) {
        try {
            res.status(200).send("borrar");
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    consultarDetalle(req, res) {
        try {
            res.status(200).send("consulta detalle");
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
    asociar_estudiante(req, res) {
        try {
            res.status(200).send("asocia estudiante");
        }
        catch (err) {
            if (err instanceof Error) {
                res.status(500).send(err.message);
            }
        }
    }
}
exports.default = new EstudiantesController();
