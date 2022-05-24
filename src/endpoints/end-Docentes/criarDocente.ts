import{Request, Response} from "express"
import {v4 as generator} from "uuid"
import { Docente } from "../../classes/Docentes"
import connection from "../../data/connection";

export async function criarDocente(req:Request,res:Response):Promise<void>{
        try {
            const {nome, email,data_nasc,turma_id,especialidades} = req.body
           
            const novoDocente = new Docente(
                generator(),
                nome,
                email, 
                data_nasc,
                turma_id,
                especialidades
            )
            await connection("labenu_system_docentes").insert(novoDocente)


            res.status(201).send("Docente adicionado!")

        } catch (error:any) {
        
            res.status(500).send(error.message)
        }
    }