import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateId } from 'uuid';
import { Turma } from "../classes/Turma";
import connection from "../data/connection";

const app = express();
app.use(express.json());
app.use(cors());


  export default async function mudarModuloDaTurma (req: Request, res: Response): Promise<void> {
    try {
      const novoModulo = req.body.modulo;

      await connection("turma").update({
        modulo: novoModulo
      })
      .where({ nome: req.params.nome });

      res.status(200).send({ message: "Módulo atualizado!" });


} catch (error:any) {
  console.log(error)
  res.send(error.message || error.sqlMessage)
    }
};