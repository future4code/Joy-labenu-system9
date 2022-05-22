export class DocenteEspecialidade{
    protected id: string
    protected docente_id: string
    protected especialidade_id: string

    constructor(
        id: string,
        docente_id: string,
        especialidade_id: string
    ){
        this.id = id;
        this.docente_id = docente_id;
        this.especialidade_id = especialidade_id
    }

    public getID():string{
        return this.id
    }

    public getDocenteID():string{
        return this.docente_id
    }

    public getEspecialidadesID(): string{
        return this.especialidade_id
    }
}