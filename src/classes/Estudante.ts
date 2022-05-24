//import { Hobbys } from "./Hobbys"

export class Estudante {
  protected id: string
  protected nome: string
  protected email: string
  protected data_nasc: string
  protected turma_id: string
  protected hobbies: string[]

    constructor(
      id: string,
      nome: string,
      email: string,
      data_nasc: string,
      turma_id: string,
      hobbies: string[]
      
    ) {
      this.id = id
      this.nome = nome
      this.email = email
      this.data_nasc = data_nasc
      this.turma_id = turma_id
      this.hobbies = hobbies
    }

  public getID():string {
    return this.id;
  }

  public getNome():string {
    return this.nome;
  }

  public getEmail():string {
    return this.email;
  }

  public getDataNasc():string {
    return this.data_nasc;
  }

  public getTurmaID():string {
    return this.turma_id;
  }

  public getHobbies():string[]{
    return this.hobbies
  }

}
