import {Request, Response} from "express"
import { Docente } from "../../classes/Docentes"
import connection from "../../data/connection"

export async function deletar(req:Request, res:Response):Promise<void>{
    const {id} = req.params
    try {
       if(id){
        await connection("labenu_system_docentes").delete().where({id})
       }
        res.status(201).send("Docente deletado!")
    } catch (error:any) {
        res.status(500).send(error.message)
    }   
}