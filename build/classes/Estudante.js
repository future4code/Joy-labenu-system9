"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = void 0;
class Estudante {
    constructor(id, nome, email, data_nasc, turma_id, hobbies) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.data_nasc = data_nasc;
        this.turma_id = turma_id;
        this.hobbies = hobbies;
    }
    getID() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getDataNasc() {
        return this.data_nasc;
    }
    getTurmaID() {
        return this.turma_id;
    }
    setTurmaID(turma_ID) {
        this.turma_id = turma_ID;
    }
    getHobbies() {
        return this.hobbies;
    }
    setHobbies(hobbie) {
        this.hobbies.push(hobbie);
    }
}
exports.Estudante = Estudante;
//# sourceMappingURL=Estudante.js.map