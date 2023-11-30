// document.getElementById('circulo') //pegou o elemento com o id 'circulo'

//ou

// circulo.classList.add('red') //circulo recebeu uma nova classe 

//gardar numa constante 

//_____________________Manipular DOM ____________________

const circulo = document.querySelector('#circulo') //pegou o id circulo, pois sinalizou com o # = id

function pintarDeVermelho(){ //função adicionada no onclic Botao
    circulo.classList.remove('violet')
    circulo.classList.add('red')
}

function pintarDeVioleta(){
    circulo.classList.remove('red')
    circulo.classList.add('violet')
}






