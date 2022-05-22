import {Request, Response} from "express";
import connection from "../../data/connection";

export async function pegarDocentes(req:Request, res:Response):Promise<void>{
    try {
        const listaDocente = await connection("labenu_system_docente").select()
        res.send(listaDocente)
    } catch (error) {
        res.status(500).send("error!")
    }
}