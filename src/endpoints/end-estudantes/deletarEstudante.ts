import { Request,Response } from "express";
import connection from "../../data/connection";

export async function deletarEstudante(req:Request, res:Response):Promise<void>{
    const {id} = req.params
    try {
        if(id){
            await connection("labenu_system_estudantes").delete().where({id})
        }
        res.status(201).send("Estudante deletado!")
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}