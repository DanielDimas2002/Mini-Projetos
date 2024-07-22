const frm = document.querySelector("form") // Seleciona o formulário
const resp = document.querySelector("pre") // Seleciona o elemento <pre> para exibir respostas
const carro = [] // Array para armazenar os carros

frm.addEventListener("submit", (e) => {
    e.preventDefault() // Evita o envio padrão do formulário
    const modelo = frm.inModelo.value 
    const preco = Number(frm.inPreco.value) 
    carro.push({ modelo, preco }) // Adiciona o carro ao array
    frm.inModelo.value = "" 
    frm.inPreco.value = ""
    frm.inModelo.focus() 
    frm.btListar.dispatchEvent(new Event("click")) // Dispara o evento de clique do botão Listar
})

frm.btListar.addEventListener("click", () => {
    if (carro.length === 0) { // Verifica se não há carros na lista
        alert("Não há carros na lista")
        return
    }
    // Cria a lista de carros formatada
    const lista = carro.reduce((acumulador, carro) => acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = `Lista dos carros cadastrados\n${"-".repeat(40)}\n${lista}`
})

frm.btFiltrar.addEventListener("click", () => {
    const maximo = Number(prompt("Qual o valor máximo que o cliente deseja pagar?"))
    if (maximo === 0 || isNaN(maximo)) { // Verifica se o valor é inválido
        return
    }
    const carrosFilter = carro.filter(carro => carro.preco <= maximo) // Filtra os carros pelo preço
    if (carrosFilter.length === 0) { // Verifica se há carros dentro do limite
        alert("Não há carros com o preço inferior ou igual ao solicitado.")
        return
    }
    // Cria a lista de carros filtrados formatada
    let lista = ''
    for (const carro of carrosFilter) {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`
    }
    resp.innerText = `Carros até R$ ${maximo.toFixed(2)}\n${"-".repeat(40)}\n${lista}`
})

frm.btSimular.addEventListener("click", () => {
    const desconto = Number(prompt("Qual o percentual de desconto: ")) 
    if (desconto === 0 || isNaN(desconto)) { 
        return
    }
    // Aplica o desconto aos preços dos carros
    const carrosDesc = carro.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }))
    let lista = ''
    for (const carro of carrosDesc) {
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)} (${desconto}% de desconto)\n`
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n${"-".repeat(40)}\n${lista}`
})
