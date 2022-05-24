import {Request, Response} from "express"
import { Estudante } from "../../classes/Estudante"
import connection from "../../data/connection"

export async function pegarEstudantes(req: Request, res: Response):Promise<void>{
    try {
        const listaEstudante = await connection("labenu_system_estudantes").select()
        const mapEstudante = listaEstudante.map((estudante)=>{
            return new Estudante(
                estudante.id,
                estudante.nome,
                estudante.email,
                estudante.data_nasc,
                estudante.turma_id,
                estudante.hobbies
            )
        })
        res.send(mapEstudante)
    } catch (error) {
        res.status(500).send("Estudante não encontrado!")
    }
}