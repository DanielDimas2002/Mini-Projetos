// Seleciona o formulário, o elemento <span> para mostrar o nome do paciente atendido e o elemento <pre> para a lista de pacientes
const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

// Array para armazenar os nomes dos pacientes
const pacientes = []

// Adiciona um evento de "submit" ao formulário
frm.addEventListener("submit", (e) => {
    e.preventDefault()  // Previne o envio padrão do formulário
    const nome = frm.inPaciente.value  // Obtém o nome do paciente do campo de entrada
    pacientes.push(nome)  // Adiciona o nome do paciente ao array
    let lista = ""
    for(let i =  0; i < pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]}\n`  // Cria a lista de pacientes numerada
    }
    respLista.innerHTML = lista  // Atualiza o elemento <pre> com a lista de pacientes
    frm.inPaciente.value = ""  // Limpa o campo de entrada
    frm.inPaciente.focus()  // Define o foco no campo de entrada
})

// Adiciona um evento de "click" ao botão de urgência
frm.btUrgencia.addEventListener("click", () => {
    if(!frm.checkValidity()){  // Verifica se o formulário é válido
        alert("Informe o nome do paciente que deve ser atendido em caráter de urgência.")
        frm.inPaciente.focus()
        return
    }

    const nome = frm.inPaciente.value  // Obtém o nome do paciente do campo de entrada
    pacientes.unshift(nome)  // Adiciona o paciente no início do array
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))  // Cria a lista de pacientes numerada
    respLista.innerHTML = lista  // Atualiza o elemento <pre> com a lista de pacientes
    frm.inPaciente.value = ""  // Limpa o campo de entrada
    frm.inPaciente.focus()  // Define o foco no campo de entrada
})

// Adiciona um evento de "click" ao botão de atendimento
frm.btAtender.addEventListener("click", () => {
    if(pacientes.length == 0) {  // Verifica se há pacientes na lista
        alert("Não há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }
    const atender = pacientes.shift()  // Remove o primeiro paciente da lista
    respNome.innerHTML = atender  // Mostra o nome do paciente atendido no elemento <span>
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))  // Cria a lista de pacientes numerada
    respLista.innerText = lista  // Atualiza o elemento <pre> com a lista de pacientes
})
