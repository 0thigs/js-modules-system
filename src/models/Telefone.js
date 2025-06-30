export class Telefone {
  constructor(ddd, numero) {
    this.ddd = ddd
    this.numero = numero
  }

  getDdd() {
    return this.ddd
  }

  getNumero() {
    return this.numero
  }

  getDddMaiusculo() {
    return this.ddd.toString().toUpperCase()
  }

  getDddMinusculo() {
    return this.ddd.toString().toLowerCase()
  }

  getNumeroMaiusculo() {
    return this.numero.toString().toUpperCase()
  }

  getNumeroMinusculo() {
    return this.numero.toString().toLowerCase()
  }

  getTelefoneCompleto() {
    return `(${this.ddd}) ${this.numero}`
  }

  getTelefoneCompletoMaiusculo() {
    return this.getTelefoneCompleto().toUpperCase()
  }

  getTelefoneCompletoMinusculo() {
    return this.getTelefoneCompleto().toLowerCase()
  }
}