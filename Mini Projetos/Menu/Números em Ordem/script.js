const formu = document.querySelector("form") 
const nums = document.querySelector("pre") 
const ordem = document.querySelector("span") 
const btnOrdem = document.getElementById("btnOrdem") 

let ListaNum = [] 

formu.addEventListener("submit", (e) => {
    e.preventDefault() 
    const numero = Number(formu.Entrada.value) 
    noRepeat(numero) 
    nums.innerText = "Números:" + ListaNum.join(", ") 
})

// Função para adicionar um número se ele não estiver repetido
function noRepeat(numero) {
    if (ListaNum.includes(numero)) { // Verifica se o número já está na lista
        alert("Atenção! Número já adicionado!") // Exibe alerta se o número já foi adicionado
    } else {
        ListaNum.push(numero) // Adiciona o número à lista
    }
}

// Evento para verificar a ordem dos números ao clicar no botão
btnOrdem.addEventListener("click", () => {
    Verifica(ListaNum) // Chama a função para verificar a ordem dos números
})

// Função para verificar se os números estão em ordem crescente
function Verifica(ListaNum) {
    const crescente = [...ListaNum].sort((a, b) => a - b) // Cria uma cópia ordenada da lista
    const isCrescente = crescente.every((num, index) => num === ListaNum[index]) // Compara a lista ordenada com a original

    if (isCrescente) { // Se as listas são iguais, os números estão em ordem crescente
        ordem.innerText = "Os números estão em ordem crescente!"
    } else { // Caso contrário, não estão em ordem crescente
        ordem.innerText = "Os números não estão em ordem crescente!"
    }
}
