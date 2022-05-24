import {Request,Response} from "express"
import {v4 as generator} from "uuid"
import { Estudante } from "../../classes/Estudante"
import connection from "../../data/connection"

export async function criarEstudantes(req:Request, res:Response):Promise<void>{
    try {
        const {nome, email, data_nasc, turma_id, hobbies} = req.body

        const novoEstudante = new Estudante(
            generator(),
            nome,
            email,
            data_nasc,
            turma_id,
            hobbies
        )
        await connection("labenu_system_estudantes").insert(novoEstudante)

        res.status(201).send("Estudante Adicionado!")

    } catch (error:any) {
        
        res.status(500).send(error.message)
    }
}