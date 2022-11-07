export class Produto {

    constructor(descricao, avaliacao, id, valor, quantidade) {
        this._descricao = descricao
        this._avaliacao = avaliacao
        this._id = id
        this._valor = valor
        this._quantidade = quantidade
    }

    get descricao() { return this._descricao }

    set descricao(value) { this._descricao = value }

    get avaliacao() { return this._avaliacao }

    set avaliacao(value) { this._avaliacao = value }

    get id() { return this._id }

    set id(value) { this._id = value }

    get valor() { return this._valor }

    set valor(value) { this._valor = value }

    get quantidade() { return this._quantidade }

    set quantidade(value) { this._quantidade = value }
}