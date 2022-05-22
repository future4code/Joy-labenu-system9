import { Request, Response } from "express";
import connection from "../../data/connection";

export async function atualizarTurmaEstudante(req:Request, res:Response):Promise<void>{
    const {id} = req.params
    const{turma_id} = req.body

    try {
        if(turma_id){
            await connection("labenu_system_estudantes").update({turma_id}).where({id})
        }
        res.status(201).send("Turma do estudante atualizada!")
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}