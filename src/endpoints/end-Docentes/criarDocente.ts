import{Request, Response} from "express"
import {v4 as generator} from "uuid"
import { Docente } from "../../classes/docente/Docentes"
import { DocenteEspecialidade } from "../../classes/docente/DocentesEspecialidades";
import { Especialidades } from "../../classes/docente/Especialidades";
import connection from "../../data/connection";

export async function criarDocente(req:Request,
    res:Response):Promise<void>{
        try {
            const {nome, email,data_nasc,turma_id,especialidade} = req.body
           
            const novoDocente = new Docente(
                generator(),
                nome,
                email,
                data_nasc,
                turma_id
            )
            const listaEspecialidades = await connection("labenu_system_especialidades").select();

            let Especialidade = listaEspecialidades.filter(espec => {
                return espec.nome === especialidade
            })[0]

            if(!Especialidade){
                Especialidade = new Especialidades(
                    generator(),
                    especialidade
                )
                await connection("labenu_system_especialidades").insert(Especialidade)

            }
            

            const docenteEspecialidade = new DocenteEspecialidade(
                generator(),
                novoDocente.getId(),
                Especialidade.id
            )

            await connection("labenu_system_docentes").insert(novoDocente)

            await connection("labenu_system_docente_especialidades").insert(docenteEspecialidade)

            res.status(201).send("Docente adicionado!")

        } catch (error:any) {
        
            res.status(500).send(error.message)
        }
    }