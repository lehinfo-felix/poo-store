
export class Cliente {
    constructor(produto, nome, endereco, id, telefone, cpf) {
        this._produto = produto
        this._nome =  nome
        this._endereco = endereco
        this._id = id
        this._telefone = telefone
        this._telefone = telefone;
        this._cpf = cpf;
    }

    get produto() { return this._produto }

    set produto(value) { this._produto = value  }

    get nome() { return this._nome }

    set nome(value) { this._nome = value }

    get endereco() { return this._endereco }

    set endereco(value) { this._endereco = value }

    get id() { return this._id }

    set id(value) { this._id = value }

    get telefone() { return this._telefone }

    set telefone(value) { this._telefone = value }

    get cpf() { return this._cpf }

    set cpf(value) { this._cpf = value }
}