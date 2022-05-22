import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateId } from 'uuid';
import { Turma } from "../../classes/Turma";
import connection from "../../data/connection";

const app = express();
app.use(express.json());
app.use(cors());


  export default async function criarTurma (req: Request, res: Response): Promise<void> {
    try {
      const id = generateId();
      const nome = req.body.nome;
      const modulo = req.body.modulo;

      await connection("labenu_system_turma").insert ({
          id,
          nome,
          modulo
      });

      res.status(200).send({ message: "Turma criada" });


} catch (error:any) {
  console.log(error)
  res.send(error.message || error.sqlMessage)
    }
};