import {Request, Response} from "express"
import { Docente } from "../../classes/docente/Docentes"
import connection from "../../data/connection"

export async function atuatizarTurma(req:Request, res:Response):Promise<void>{
    const {id} = req.params
    const {turma_id} = req.body
    try {
       if(turma_id){
        await connection("labenu_system_docentes").update({turma_id}).where({id})
       }
        res.status(201).send("Turma do docente Atualizada!")
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}