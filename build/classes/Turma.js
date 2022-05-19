"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turma = void 0;
class Turma {
    constructor(id, nome, docentes, estudantes, modulo = 0) {
        this.modulo = 0;
        this.id = id;
        this.nome = nome;
        this.docentes = docentes;
        this.estudantes = estudantes;
        this.modulo = modulo;
    }
    getID() {
        return this.id;
    }
    ;
    getNome() {
        return this.nome;
    }
    getDocentes() {
        return this.docentes;
    }
    ;
    getEstudantes() {
        return this.estudantes;
    }
    ;
    getModulo() {
        return this.modulo;
    }
    ;
}
exports.Turma = Turma;
//# sourceMappingURL=Turma.js.map