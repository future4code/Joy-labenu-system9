import { app } from "./app";
import criarTurma from "./endpoints/end-Turma/criarTurma";
import { atuatizarTurma } from "./endpoints/end-Docentes/atualizarDocente";
import { criarDocente } from "./endpoints/end-Docentes/criarDocente";
import { pegarDocentes } from "./endpoints/end-Docentes/pegarDocentes";
import mudarModuloDaTurma from "./endpoints/end-Turma/mudarModuloTurma";
import pegarTurmas from "./endpoints/end-Turma/pegarTurmas";
import { deletar } from "./endpoints/end-Docentes/deletar";


app.post("/turma", criarTurma)
app.get("/turma", pegarTurmas)
app.put("/edit/:nome", mudarModuloDaTurma)

app.get("/docente", pegarDocentes)
app.post("/docente",criarDocente)
app.put("/docente/:id",atuatizarTurma)
app.delete("/docente/:id",deletar)