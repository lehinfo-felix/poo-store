export class Fabricante {

    constructor(endereco, id, nome, cnpj) {

        this._endereco = endereco;
        this._id = id;
        this._nome = nome;
        this._cnpj = cnpj;
    }

    get endereco() { return this._endereco }

    set endereco(value) { this._endereco = value }

    get id() { return this._id }

    set id(value) { this._id = value }

    get nome() { return this._nome }

    set nome(value) { this._nome = value }

    get cnpj() { return this._cnpj }

    set cnpj(value) { this._cnpj = value }
}