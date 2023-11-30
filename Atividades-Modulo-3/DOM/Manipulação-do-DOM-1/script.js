const fraseLocal = document.querySelector('h1')

function digaOla(){

    const nomeUser = prompt("Digite o seu nome")
    const frase = `E aí ${nomeUser}; Você está deixando o seu sitedinâmico.`
    fraseLocal.innerText = frase
}