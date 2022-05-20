"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const criarTurma_1 = __importDefault(require("./endpoints/criarTurma"));
const mudarModuloTurma_1 = __importDefault(require("./endpoints/mudarModuloTurma"));
const pegarTurmas_1 = __importDefault(require("./endpoints/pegarTurmas"));
app_1.app.post("/turma", criarTurma_1.default);
app_1.app.get("/turma", pegarTurmas_1.default);
app_1.app.put("/edit/:nome", mudarModuloTurma_1.default);
//# sourceMappingURL=index.js.map