

function digaOla(){
    const fraseLocal = document.querySelector('h1')

    const nomeUser = prompt("Digite o seu nome")
    const frase = `E aí ${nomeUser}; Você está deixando o seu sitedinâmico.`

    fraseLocal.innerText = frase

}


let contarAtual = 0

    const divContador = document.getElementById("contadorAtivo")
    const paragrafo = document.createElement('p')
    paragrafo.innerText = `o contador esta em ${contarAtual} cliques` 
    divContador.appendChild(paragrafo)


function incrementar(){
    contarAtual++
    paragrafo.innerText = `o contador esta em ${contarAtual} cliques` 
    
}

function zerar(){
    contarAtual = 0
    paragrafo.innerText = ``
}

    
    