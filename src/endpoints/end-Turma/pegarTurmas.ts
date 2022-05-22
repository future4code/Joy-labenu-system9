import express, { Request, Response } from "express";
import cors from "cors";
import connection from "../../data/connection";
import { Turma } from "../../classes/Turma";

const app = express();
app.use(express.json());
app.use(cors());


  export async function pegarTurmas(req: Request,res: Response): Promise<void> {
    try {

       const turmas = await connection("labenu_system_turma").select()
 
       const listaTurmas = turmas.map(turma => {
          return new Turma(
             turma.id,
             turma.nome,
             turma.docentes,
             turma.estudantes,
             turma.modulo
          )
       })
       res.send(listaTurmas)
    } catch (error) {
       res.status(500).send("Unexpected server error")
    }
 }

 export const getDocentesByClass = async (req: Request,res: Response):Promise<void> =>{
   const idTurma = req.params.idTurma

   try {
      const docente = await connection("labenu_system_docentes").select()
      const listaDocentes = docente.filter(currentDocente => {
         return currentDocente.turma_id === idTurma
      })
      res.send(listaDocentes)
   } catch (error) {
      res.status(500).send("error")
   }
 }

 export const getEstudantesByClass = async (req: Request,res: Response):Promise<void> =>{
   const idTurma = req.params.idTurma

   try {
      const estudante = await connection("labenu_system_estudantes").select()
      const listaEstudantes = estudante.filter(currentEstudante => {
         return currentEstudante.turma_id === idTurma
      })
      res.send(listaEstudantes)
   } catch (error) {
      res.status(500).send("error")
   }
 }
 