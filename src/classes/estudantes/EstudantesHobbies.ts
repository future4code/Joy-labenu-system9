export class EstudanteHobbies{
    protected id: string
    protected estudante_id: string
    protected hobby_id: string[]

    constructor(
        id: string,
        estudante_id: string,
        hobby_id: string[]
    ){
        this.id = id;
        this.estudante_id = estudante_id;
        this.hobby_id = hobby_id;
    }

    public getID(): string{
        return this.id
    }

    public getEstudanteID():string{
        return this.estudante_id
    }

    public getHobbyID():string[]{
        return this.hobby_id
    }
}