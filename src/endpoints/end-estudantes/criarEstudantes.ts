import {Request,Response} from "express"
import {v4 as generator} from "uuid"
import { Estudante } from "../../classes/estudantes/Estudante"
import connection from "../../data/connection"
import {Hobbys} from "../../classes/estudantes/hobbys"
import { EstudanteHobbies } from "../../classes/estudantes/EstudantesHobbies"

export async function criarEstudantes(req:Request, res:Response):Promise<void>{
    try {
        const {nome, email, data_nasc, turma_id, hobbies} = req.body

        const novoEstudante = new Estudante(
            generator(),
            nome,
            email,
            data_nasc,
            turma_id
        )
        const listaHobbis = await connection("labenu_system_hobbys").select()

        let Hobby = listaHobbis.filter(hobbie => {
            hobbie.nome === hobbies
        })[0]

        if(!Hobby){
            Hobby = new Hobbys(
                generator(),
                hobbies
            )
            await connection("labenu_system_hobbys").insert(Hobby)
        }
        const estudanteHobbies = new EstudanteHobbies(
            generator(),
            novoEstudante.getID(),
            Hobby.id
        )

        await connection("labenu_system_estudantes").insert(novoEstudante)
        await connection("labenu_system_estudante_hobby").insert(estudanteHobbies)

        res.status(201).send("Estudante Adicionado!")

    } catch (error:any) {
        
        res.status(500).send(error.message)
    }
}