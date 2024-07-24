const formu = document.querySelector("form")
const saida = document.querySelector("pre")

const Times = []

function Nomes(nome){
    if(Times.includes(nome)){
        alert("Time já cadastrado!")
        return true
    }
    return false
}

formu.addEventListener("submit", (e) => {
    e.preventDefault() 
    const nome = formu.Time.value
    if(Nomes(nome)) return 
    Times.push(nome) 
    formu.reset()  // Reseta o formulário
    formu.Lista.dispatchEvent(new Event("click"))  // Dispara o evento de clique no botão de listar
})

// Função para listar os nomes dos times
function Listar(Times){
    let lista = ""
    for(let i = 0; i < Times.length; i++){  
        lista += (i + 1) + ' ' + Times[i] + "\n"  // Adiciona o número do time e o nome à lista com quebra de linha
    }
    return lista
}

// Adiciona um evento de 'click' ao botão de listar
formu.Lista.addEventListener("click", () => {
    saida.innerText = Listar(Times)  // Atualiza o conteúdo do elemento <pre> com a lista de times
})


function Tabela(Times){
    if(Times.length % 2 != 0 ){  
        alert("Não há confronto para todos! Certifique-se de que o número de times é par.")
        return Listar(Times)
    }

    let confrontos = ""
    let timesCopy = [...Times]  

    while(timesCopy.length > 0){
        let time1 = timesCopy.shift()  
        let time2 = timesCopy.pop()  
        confrontos += `${time1} x ${time2}\n` 
    }
    return confrontos
}


formu.Tabela.addEventListener("click", () => {
    saida.innerText = Tabela(Times)  // Atualiza o conteúdo do elemento <pre> com a tabela de confrontos
})
