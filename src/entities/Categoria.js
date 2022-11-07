export class Categoria {
    constructor(nome, id) {
        this._nome = nome;
        this._id = id;
    }

    get nome() {
        return this._nome;
    }

    set nome(value) {
        this._nome = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

}