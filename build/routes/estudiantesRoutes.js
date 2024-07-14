"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const estudiantesController_1 = __importDefault(require("../controllers/estudiantesController"));
//router para estudiantes
router.get('/', estudiantesController_1.default.consultar);
router.post('/', estudiantesController_1.default.ingresar);
//esto es para evitar la repeticion del id
router.route('/:id')
    .get(estudiantesController_1.default.consultarDetalle)
    .put(estudiantesController_1.default.actualizar)
    .delete(estudiantesController_1.default.borrar);
exports.default = router;
