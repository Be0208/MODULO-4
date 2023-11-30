// script.js
const cards = document.querySelectorAll('.card')
const titulosCards = document.querySelectorAll('.titulo-card')
const descricaoCards = document.querySelectorAll('.descricao-card')
const botaoEditar = document.querySelectorAll('.botao-editar')
const botaoApagar = document.querySelectorAll('.botao-apagar')




cards.forEach(card => {
  card.setAttribute('id', 'estilo-customizado')
})

titulosCards.forEach(card => {
  card.setAttribute('id', 'titulo-card')
})

descricaoCards.forEach(card => {
  card.setAttribute('id', 'descricao-card')
})

botaoEditar.forEach(card => {
  card.setAttribute('id', 'botao-editar')
})

botaoApagar.forEach(card => {
  card.setAttribute('id', 'botao-apagar')
})

