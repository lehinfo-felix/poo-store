
import { Categoria } from "./entities/Categoria.js"
import { Cliente } from "./entities/Cliente.js"
import { Fabricante } from "./entities/Fabricante.js"
import { Pedido } from "./entities/Pedido.js"
import { Produto } from "./entities/Produto.js"

const novaCategoria = new Categoria("teclados", 1)
const novoFabricante = new Fabricante("Rua dos bobos, 0", 1, "Redragon", "000.000.000/0000-00")
const novoProduto = new Produto("Teclado gamer RGB", 3, 1, 200.50, 1)
const novoCliente = new Cliente(novoProduto, "João", "Rua dos bobos, 0", 1, "00000-0000", "000.000.000-00")
//const novoPedido = new Pedido()

console.log(novaCategoria)
console.log(novoFabricante)
console.log(novoProduto)
console.log(novoCliente)
console.log(novoPedido)