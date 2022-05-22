import{Request, Response} from "express"
import {v4 as generator} from "uuid"
import { Docente } from "../../classes/Docentes"
import connection from "../../data/connection";

export async function criarDocente(req:Request,
    res:Response):Promise<void>{
        try {
            const {nome, email,data_nasc,turma_id,especialidades} = req.body
            if(!nome){
                throw new Error("Informe um nome.");
                
            }
            if(!email){
                throw new Error("Informe um email.");
            }
            if(!email.includes("@")){
                res.statusCode = 401
                throw new Error("Seu email deve ter um '@'");
                
            }
            if(!data_nasc.includes("/")){
                throw new Error("a data de nascimento dever passado DD/MM/AA.");
                
            }
            if(!turma_id){
                throw new Error("Informe uma id de turma.");
                
            }
            if(!especialidades){
                throw new Error("Informe as especialdidades")
            }

            const turma = await connection("labenu_system_docente").select("nome").where({"nome": nome})
            
            if(!turma){
                throw new Error("informe uma turma");
                
            }

            const novoDocente = new Docente(
                generator(),
                nome,
                email,
                data_nasc,
                turma_id,
                especialidades
            )

            await connection("labenu_system_docente").insert(novoDocente)

            res.status(201).send("Docente adicionado!")

        } catch (error:any) {
        
            res.status(500).send(error.message)
        }
    }