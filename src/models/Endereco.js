export class Endereco {
  constructor(rua, numero, cidade, estado) {
    this.rua = rua
    this.numero = numero
    this.cidade = cidade
    this.estado = estado
  }

  getRua() {
    return this.rua
  }

  getNumero() {
    return this.numero
  }

  getCidade() {
    return this.cidade
  }

  getEstado() {
    return this.estado
  }

  getRuaMaiuscula() {
    return this.rua.toUpperCase()
  }

  getRuaMinuscula() {
    return this.rua.toLowerCase()
  }

  getNumeroMaiusculo() {
    return this.numero.toString().toUpperCase()
  }

  getNumeroMinusculo() {
    return this.numero.toString().toLowerCase()
  }

  getCidadeMaiuscula() {
    return this.cidade.toUpperCase()
  }

  getCidadeMinuscula() {
    return this.cidade.toLowerCase()
  }

  getEstadoMaiusculo() {
    return this.estado.toUpperCase()
  }

  getEstadoMinusculo() {
    return this.estado.toLowerCase()
  }

  getEnderecoCompleto() {
    return `${this.rua}, ${this.numero}, ${this.cidade} - ${this.estado}`
  }

  getEnderecoMaiusculo() {
    return this.getEnderecoCompleto().toUpperCase()
  }

  getEnderecoMinusculo() {
    return this.getEnderecoCompleto().toLowerCase()
  }
}