import { app } from "./app";
import criarTurma from "./endpoints/criarTurma";
import mudarModuloDaTurma from "./endpoints/mudarModuloTurma";
import pegarTurmas from "./endpoints/pegarTurmas";


app.post("/turma", criarTurma)
app.get("/turma", pegarTurmas)
app.put("/edit/:nome", mudarModuloDaTurma)
