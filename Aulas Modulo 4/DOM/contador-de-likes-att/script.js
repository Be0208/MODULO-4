let h1 = document.createElement('h1') //criei um elemento h1 no html
h1.textContent = 'contador de likes'
document.body.appendChild(h1) //ele foi criado dentro do body

let likesContainer = document.createElement('div') //div criada

likesContainer.setAttribute('id','likes-container') //criou o atributo id e nomeou
document.body.appendChild(likesContainer)

let h2 = document.createElement('h2') //criei um h2
h2.textContent = 'Postagem' 
likesContainer.appendChild(h2) //coloquei o h2 dentro do container de likes

let contador = document.createElement('p') // elemento p criado
contador.id = 'contador' //criei id no 'P' 
contador.textContent = '0' 
likesContainer.appendChild(contador) //adicionei o contador dentro da div

let status = document.createElement('p')
status.id = 'status' 
status.classList.add('aguardando') //adicionei uma classe no status
status.textContent = 'Seja o primeiro a curtir'
likesContainer.appendChild(status) //status dentro do container





let button = document.createElement('button')
button.type = 'button'
button.textContent ='curtir' //nome do botao

// button.onclick = incrementarLikes //add o onbutton no botao para chamar a função incrementar likes

likesContainer.appendChild(button) //adicionei o button na div countainer




let counter = 0

let element = document.getElementById('counterr') 
let button = document.getElementById('btn-increment-counter')

function incrementCounter(){
    counter++
    element.textContent = counter
}

button.addEventListener('click', 'incrementCounter') //dispara uma função apos clicar





//variavel com numeros de likes:
let likes = 0
const numeroMinimo = 10 

function incrementarLikes(){ //add + 1 like no contador
    likes ++
    contador.textContent = likes //pega o numero inrementado e joga para o contador na tela

    if (likes >= numeroMinimo){
        status.textContent = 'Postagem popular' //altera a mensagem da div
        status.classList.add('postagem-popular') //trocou a classe do elemento atatus
    } else {
        status.textContent = 'Seja o primeiro a curtir'
        status.classList.add('aguardando')
    }
}

incrementarLikes() // chamou a função 

//
