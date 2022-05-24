import { app } from "./app";
import criarTurma from "./endpoints/end-Turma/criarTurma";
import { atuatizarTurma } from "./endpoints/end-Docentes/atualizarDocente";
import { criarDocente } from "./endpoints/end-Docentes/criarDocente";
import { pegarDocentes } from "./endpoints/end-Docentes/pegarDocentes";
import mudarModuloDaTurma from "./endpoints/end-Turma/mudarModuloTurma";
import {pegarTurmas,getDocentesByClass, getEstudantesByClass} from "./endpoints/end-Turma/pegarTurmas";
import { deletar } from "./endpoints/end-Docentes/deletar";
import { pegarEstudantes } from "./endpoints/end-estudantes/pegarEstudantes";
import { atualizarTurmaEstudante } from "./endpoints/end-estudantes/atualizarEstudantes";
import { deletarEstudante } from "./endpoints/end-estudantes/deletarEstudante";
import { criarEstudantes } from "./endpoints/end-estudantes/criarEstudantes";


app.post("/turma", criarTurma)
app.get("/turma", pegarTurmas)
app.put("/edit/:nome", mudarModuloDaTurma)

app.get("/docentes", pegarDocentes)
app.get("/docentes/:idTurma",getDocentesByClass)
app.post("/docente",criarDocente)
app.put("/docente/:id",atuatizarTurma)
app.delete("/docente/:id",deletar)

app.get("/estudante",pegarEstudantes)
app.get("/estudantes/:idTurma",getEstudantesByClass)
app.post("/estudante",criarEstudantes)
app.put("/estudante/:id", atualizarTurmaEstudante)
app.delete("/estudante/:id",deletarEstudante)


