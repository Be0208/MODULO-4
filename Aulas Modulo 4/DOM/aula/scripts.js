// document.getElementById('circulo') //pegou o elemento com o id 'circulo'

//ou

// circulo.classList.add('red') //circulo recebeu uma nova classe 

//gardar numa constante 

//_____________________Manipular DOM ____________________

const circulo = document.querySelector('#circulo') //pegou o id circulo, pois sinalizou com o # = id

function pintarDeVermelho(){ //função adicionada no onclic Botao
    const circulo = document.querySelector('#circulo')
    circulo.style.backgroundColor = 'red'
}

function pintarDeVioleta(){
    const circulo = document.querySelector('#circulo')
    circulo.style.backgroundColor = 'violet'
}

// _______________INNER HTML ________________


function aparecerCirculo(){ //add elemento no html
    document.body.innerHTML += `
    <div id="circulo"></div>`  

    const circulo = document.querySelector('#circulo')
    circulo.setAttribute('class', 'circulo')
    circulo.setAttribute('onclick', 'pintarViolet()')
}


let clique = 0


function addClique(){

    clique += 1
    
    document.querySelector('#contador').innerHTML = clique

}