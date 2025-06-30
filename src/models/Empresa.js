import { Telefone } from './Telefone.js'
import { Endereco } from './Endereco.js'
import { Cliente } from './Cliente.js'

export class Empresa {
  #cnpj

  constructor(nome, cnpj, endereco) {
    this.nome = nome
    this.#cnpj = cnpj
    this.endereco = endereco
    this.telefones = []
    this.clientes = []
  }

  getCnpj() {
    return this.#cnpj
  }

  getNome() {
    return this.nome
  }

  getEndereco() {
    return this.endereco
  }

  getTelefones() {
    return this.telefones
  }

  getClientes() {
    return this.clientes
  }

  getNomeMaiusculo() {
    return this.nome.toUpperCase()
  }

  getNomeMinusculo() {
    return this.nome.toLowerCase()
  }

  getCnpjMaiusculo() {
    return this.#cnpj.toUpperCase()
  }

  getCnpjMinusculo() {
    return this.#cnpj.toLowerCase()
  }

  adicionarTelefone(telefone) {
    if (telefone instanceof Telefone) {
      this.telefones.push(telefone)
    } else {
      throw new Error('Telefone deve ser uma instância da classe Telefone')
    }
  }

  removerTelefone(index) {
    if (index >= 0 && index < this.telefones.length) {
      this.telefones.splice(index, 1)
    }
  }

  adicionarCliente(cliente) {
    if (cliente instanceof Cliente) {
      this.clientes.push(cliente)
    } else {
      throw new Error('Cliente deve ser uma instância da classe Cliente')
    }
  }

  removerCliente(index) {
    if (index >= 0 && index < this.clientes.length) {
      this.clientes.splice(index, 1)
    }
  }

  getDescricao() {
    let descricao = `${'='.repeat(50)}\n`
    descricao += `EMPRESA: ${this.getNomeMaiusculo()}\n`
    descricao += `CNPJ: ${this.getCnpj()}\n`
    descricao += `ENDEREÇO: ${this.endereco.getEnderecoMaiusculo()}\n`
    descricao += `TELEFONES:\n`

    this.telefones.forEach((telefone, index) => {
      descricao += `  ${index + 1}. ${telefone.getTelefoneCompleto()}\n`
    })

    descricao += `\n${'='.repeat(50)}\n`
    descricao += `CLIENTES CADASTRADOS (${this.clientes.length} cliente(s)):\n`
    descricao += `${'='.repeat(50)}\n\n`

    this.clientes.forEach((cliente, index) => {
      descricao += `${index + 1}. ${cliente.getDescricao()}`
    })

    return descricao
  }
}