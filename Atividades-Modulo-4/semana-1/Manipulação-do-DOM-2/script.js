const cards = document.querySelectorAll('.card')
cards.forEach( element => {
element.style.backgroundColor = '#E16E0E'
}) 


const tituloCard = document.querySelectorAll('.titulo-card')
tituloCard.forEach( element => {
element.style.paddingTop = '16px'
element.style.paddingBottom = '34px'
element.innerText = 'Meu Card'
element.style.color = '#2b385b'
element.style.fontSize = '25px'
}) 

const descricaoCard = document.querySelectorAll('.descricao-card')
descricaoCard.forEach( element => {
element.style.color = 'white'
element.innerText = 'Descrição modificada pelo JavaScript.'
element.style.fontSize = '15px'
element.style.paddingBottom = '32px'
}) 


const btnEditar = document.querySelectorAll('.botao-editar')
btnEditar.forEach( element => {
element.style.backgroundColor = 'green'
element.style.color = 'white'
element.style.padding = '9px'
element.style.borderRadius = '5px'
element.style.border = '1px solid transparent'
element.style.cursor = 'pointer'
}) 

const btnDeletar = document.querySelectorAll('.botao-apagar')
btnDeletar.forEach( element => {
element.style.backgroundColor = 'red'
element.style.color = 'white'
element.style.padding = '9px'
element.style.borderRadius = '5px'
element.style.border = '1px solid transparent'
element.style.cursor = 'pointer'
})