import { Request, Response } from "express";
import { Docente } from "../../classes/docente/Docentes";
import connection from "../../data/connection";

export async function pegarDocentes(
  req: Request,
  res: Response
): Promise<void> {
  try {
      const listaDocente = await connection("labenu_system_docentes").select();
    const mapDocente = listaDocente.map((docente) => {
      return new Docente(
        docente.id,
        docente.nome,
        docente.email,
        docente.data_nasc,
        docente.turma_id
      );
    });
    res.send(mapDocente);
  } catch (error) {
    res.status(500).send("Docente não encontrado!");
  }
}
