import { Telefone } from './Telefone.js'
import { Endereco } from './Endereco.js'

export class Cliente {
  #cpf

  constructor(nome, cpf, endereco) {
    this.nome = nome
    this.#cpf = cpf
    this.endereco = endereco
    this.telefones = []
  }

  getCpf() {
    return this.#cpf
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

  getNomeMaiusculo() {
    return this.nome.toUpperCase()
  }

  getNomeMinusculo() {
    return this.nome.toLowerCase()
  }

  getCpfMaiusculo() {
    return this.#cpf.toUpperCase()
  }

  getCpfMinusculo() {
    return this.#cpf.toLowerCase()
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

  getDescricao() {
    let descricao = `CLIENTE: ${this.getNomeMaiusculo()}\n`
    descricao += `CPF: ${this.getCpf()}\n`
    descricao += `ENDEREÇO: ${this.endereco.getEnderecoMaiusculo()}\n`
    descricao += `TELEFONES:\n`

    this.telefones.forEach((telefone, index) => {
      descricao += `  ${index + 1}. ${telefone.getTelefoneCompleto()}\n`
    })

    return descricao + '\n'
  }
}