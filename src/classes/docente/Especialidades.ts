export class Especialidades {
    protected id: string
    protected nome:string

    constructor(
        id: string,
        nome: string
    )
    {
        this.id = id;
        this.nome = nome;
    }

    public getID():string{
        return this.id
    }

    public getEspecialidade():string{
        return this.nome
    }
}
