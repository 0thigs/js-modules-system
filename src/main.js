import { Empresa } from './models/Empresa.js'
import { Cliente } from './models/Cliente.js'
import { Telefone } from './models/Telefone.js'
import { Endereco } from './models/Endereco.js'

console.log("=== INICIANDO TESTES DO MÓDULO ===\n")

console.log("1. Criando empresa com endereço e telefones...")
const enderecoEmpresa = new Endereco("Av. Central", 100, "São Paulo", "SP")

const telefoneEmp1 = new Telefone("11", "98765-4321")
const telefoneEmp2 = new Telefone("11", "91234-5678")

const empresa = new Empresa("Tech Solutions", "12.345.678/0001-99", enderecoEmpresa)
empresa.adicionarTelefone(telefoneEmp1)
empresa.adicionarTelefone(telefoneEmp2)

console.log("✓ Empresa criada com sucesso!")
console.log(`   Nome: ${empresa.getNome()}`)
console.log(`   CNPJ: ${empresa.getCnpj()}`)
console.log(`   Telefones: ${empresa.getTelefones().length}`)

console.log("\n2. Criando 5 clientes, cada um com endereço e 2 telefones...")
for (let i = 1; i <= 5; i++) {
  const endereco = new Endereco(`Rua Cliente ${i}`, i * 10, "São Paulo", "SP")
  const tel1 = new Telefone("11", `90000-000${i}`)
  const tel2 = new Telefone("11", `91111-111${i}`)

  const cliente = new Cliente(`Cliente ${i}`, `000.000.000-0${i}`, endereco)
  cliente.adicionarTelefone(tel1)
  cliente.adicionarTelefone(tel2)

  empresa.adicionarCliente(cliente)
  console.log(`✓ ${cliente.getNome()} criado e adicionado à empresa`)
}

console.log("\n3. Testando métodos get e caixa alta/baixa...")
const primeiroCliente = empresa.getClientes()[0]

console.log("--- Testando métodos do Cliente ---")
console.log(`Nome: ${primeiroCliente.getNome()}`)
console.log(`Nome maiúsculo: ${primeiroCliente.getNomeMaiusculo()}`)
console.log(`Nome minúsculo: ${primeiroCliente.getNomeMinusculo()}`)
console.log(`CPF: ${primeiroCliente.getCpf()}`)
console.log(`CPF maiúsculo: ${primeiroCliente.getCpfMaiusculo()}`)

console.log("\n--- Testando métodos da Empresa ---")
console.log(`Nome: ${empresa.getNome()}`)
console.log(`Nome maiúsculo: ${empresa.getNomeMaiusculo()}`)
console.log(`Nome minúsculo: ${empresa.getNomeMinusculo()}`)
console.log(`CNPJ: ${empresa.getCnpj()}`)
console.log(`CNPJ maiúsculo: ${empresa.getCnpjMaiusculo()}`)

console.log("\n--- Testando métodos do Endereço ---")
const endereco = primeiroCliente.getEndereco()
console.log(`Rua: ${endereco.getRua()}`)
console.log(`Rua maiúscula: ${endereco.getRuaMaiuscula()}`)
console.log(`Cidade: ${endereco.getCidade()}`)
console.log(`Cidade maiúscula: ${endereco.getCidadeMaiuscula()}`)
console.log(`Endereço completo: ${endereco.getEnderecoCompleto()}`)

console.log("\n--- Testando métodos do Telefone ---")
const telefone = primeiroCliente.getTelefones()[0]
console.log(`DDD: ${telefone.getDdd()}`)
console.log(`Número: ${telefone.getNumero()}`)
console.log(`Telefone completo: ${telefone.getTelefoneCompleto()}`)
console.log(`Telefone maiúsculo: ${telefone.getTelefoneCompletoMaiusculo()}`)

console.log("\n" + "=".repeat(60))
console.log("RELATÓRIO COMPLETO DA EMPRESA E CLIENTES")
console.log("=".repeat(60))
console.log(empresa.getDescricao())

console.log("=== TESTES CONCLUÍDOS COM SUCESSO ===")