
export class Pedido {
    constructor(notaFiscal, id, endereco, valorTotal, quantidadeTotal, data, cliente) {
        this._notaFiscal = notaFiscal;
        this._id = id;
        this._endereco = endereco;
        this._valorTotal = valorTotal;
        this._quantidadeTotal = quantidadeTotal;
        this._data = data;
        this._cliente = cliente;
    }

    get notaFiscal() {  return this._notaFiscal }

    set notaFiscal(value) { this._notaFiscal = value }

    get id() { return this._id }

    set id(value) { this._id = value }

    get endereco() { return this._endereco }

    set endereco(value) { this._endereco = value }

    get valorTotal() { return this._valorTotal }

    set valorTotal(value) { this._valorTotal = value }

    get quantidadeTotal() { return this._quantidadeTotal }

    set quantidadeTotal(value) { this._quantidadeTotal = value }

    get data() { return this._data }

    set data(value) { this._data = value }

    get cliente() { return this._cliente }

    set cliente(value) { this._cliente = value }
}