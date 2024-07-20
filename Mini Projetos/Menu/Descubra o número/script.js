// Seleciona o formulário e os elementos de saída de mensagens
const frm = document.querySelector("form")
const respErros = document.querySelector("#outErros")
const respChances = document.querySelector("#outChances")
const respDica = document.querySelector("#outDica")

// Inicializa as variáveis
const erros = []
const sorteado = Math.floor(Math.random() * 100) + 1 // Número aleatório entre 1 e 100
const Chances = 10 // Número de chances

// Adiciona um evento de "submit" ao formulário
frm.addEventListener("submit", (e) => {
    e.preventDefault() // Previne o envio padrão do formulário

    const numero = Number(frm.inNumero.value) // Obtém o valor do campo de entrada e o converte para número

    // Verifica se o número é o sorteado
    if (numero === sorteado) {
        respDica.innerText = `Parabéns! O número sorteado foi: ${sorteado}`
        frm.btnSubmit.disabled = true // Desabilita o botão de envio
        frm.btNovo.className = "exibe" // Exibe o botão de novo jogo
    } else {
        // Verifica se o número já foi apostado
        if (erros.includes(numero)) {
            alert("Você já apostou este número! Tente outro...")
        } else {
            erros.push(numero) // Adiciona o número ao array de erros

            const numErros = erros.length // Número de erros
            const numChances = Chances - numErros // Número de chances restantes

            respErros.innerText = `${numErros} (${erros.join(", ")})` // Exibe o número de erros e os números apostados
            respChances.innerText = numChances // Corrige a atualização do elemento de chances

            // Verifica se as chances acabaram
            if (numChances === 0) {
                alert("Suas chances acabaram...")
                frm.btnSubmit.disabled = true // Desabilita o botão de envio
                frm.btNovo.className = "exibe" // Exibe o botão de novo jogo
                respDica.innerText = `Game Over! Número Sorteado: ${sorteado}`
            } else {
                // Fornece uma dica ao usuário
                const dica = numero < sorteado ? "maior" : "menor"
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }

    frm.inNumero.value = "" // Limpa o campo de entrada
    frm.inNumero.focus() // Define o foco no campo de entrada
})
