export class Estudante {
  constructor(
    private id: string,
    private nome: string,
    private email: string,
    private data_nasc: string,
    private turma_id: string,
  ) {
    this.id = id
    this.nome = nome
    this.email = email
    this.data_nasc = data_nasc
    this.turma_id = turma_id
  }

  public getID() {
    return this.id;
  }

  public getNome() {
    return this.nome;
  }

  public getEmail() {
    return this.email;
  }

  public getDataNasc() {
    return this.data_nasc;
  }

  public getTurmaID() {
    return this.turma_id;
  }

}
