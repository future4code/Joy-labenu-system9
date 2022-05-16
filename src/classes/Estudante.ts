export class Estudante {
  constructor(
    private id: string,
    private nome: string,
    private email: string,
    private data_nasc: string,
    private turma_id: string,
    private hobbies: string[]
  ) {}

  public getID() {
    return this.id;
  }

  public getNome() {
    return this.nome;
  }

  public getEmail() {
    return this.email;
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getDataNasc() {
    return this.data_nasc;
  }

  public getTurmaID() {
    return this.turma_id;
  }

  public setTurmaID(turma_ID: string) {
    this.turma_id = turma_ID;
  }

  public getHobbies() {
    return this.hobbies;
  }

  public setHobbies(hobbie: string) {
    this.hobbies.push(hobbie);
  }
}
