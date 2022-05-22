export class Hobbys {
    protected id: string
    protected nome: string

    constructor(
        id:string,
        nome: string
    )
    {
        this.id = id;
        this.nome = nome
    }

    public getID(): string{
        return this.id
    }

    public getHobby():string{
        return this.nome
    }
}