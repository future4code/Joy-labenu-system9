import express, { Request, Response } from "express";
import cors from "cors";
import connection from "../data/connection";
import { Turma } from "../classes/Turma";

const app = express();
app.use(express.json());
app.use(cors());


  export default async function pegarTurmas(req: Request,res: Response): Promise<void> {
    try {

       const turmas = await connection("turma").select()
 
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
 