export class Turma {
    private id: string;
    private nome: string;
    private docentes: string[];
    private estudantes: string[];
    private modulo: number = 0;
  
    constructor(
        id: string,
        nome: string,
        docentes: string[],
        estudantes: string[],
        modulo: number = 0
    ) {
       this.id = id;
       this.nome = nome;
       this.docentes = docentes;
       this.estudantes = estudantes;
       this.modulo = modulo
    }

    public getID(): string {
        return this.id;
    };

    public getNome(): string {
        return this.nome;
    }

    public getDocentes(): string[] {
        return this.docentes;
    };

    public getEstudantes(): string[] {
        return this.estudantes;
    };

    public getModulo(): number {
        return this.modulo;
    };
}


