// Seleciona o formulário e o elemento <pre> para exibir a saída
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

// Array para armazenar as crianças
const criancas = []

// Adiciona um evento de "submit" ao formulário
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value 
    const idade = Number(frm.inIdade.value) 

    criancas.push({nome, idade}) // Adiciona um objeto com nome e idade ao array de crianças

    frm.reset() // Reseta o formulário
    frm.inNome.focus() // Define o foco no campo de nome

    // Dispara o evento de "click" do botão de listar para atualizar a lista automaticamente
    frm.btListar.dispatchEvent(new Event("click"))
})

// Adiciona um evento de "click" ao botão de listar
frm.btListar.addEventListener("click", () => {
    if (criancas.length == 0) { 
        alert("Não há crianças na lista.")
        return
    }

    let lista = ""
    for (const crianca of criancas) { 
        const {nome, idade} = crianca // Desestrutura o objeto para obter nome e idade
        lista += nome + " " + idade + " anos\n" 
    }

    resp.innerText = lista 
})

frm.btResumir.addEventListener("click", () => {
    if (criancas.length == 0) { 
        alert("Não há crianças na lista")
        return
    }

    const copia = [...criancas] 
    copia.sort((a, b) => a.idade - b.idade) // Ordena a cópia pela idade em ordem crescente

    let resumo = ""
    let aux = copia[0].idade // Inicializa a variável auxiliar com a idade da primeira criança na lista ordenada
    let nomes = []

    for (const crianca of copia) { 
        const {nome, idade} = crianca 
        if (idade == aux) { // Se a idade for igual à idade auxiliar, adiciona o nome ao array de nomes
            nomes.push(nome)
        } else { // Se a idade for diferente, cria o resumo para a idade anterior
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
            resumo += "(" + nomes.join(", ") + ")\n\n"
            aux = idade // Atualiza a idade auxiliar para a nova idade
            nomes = [nome] // Reinicia o array de nomes com o nome da nova idade
        }
    }

    // Adiciona o resumo para a última idade processada
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - "
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n"
    resumo += "(" + nomes.join(", ") + ")\n\n"

    resp.innerText = resumo // Atualiza o conteúdo do elemento <pre> com o resumo
})
