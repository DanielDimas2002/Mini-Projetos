const formu = document.querySelector("form")
const nums = document.querySelector("pre")
const ordem = document.querySelector("span")

let ListaNum = ""

formu.addEventListener("submit", (e) =>{
    e.preventDefault()
    const numero = Number(formu.Entrada.value)
    ListaNum.push(numero)
})

function Verifica(){
    
}

