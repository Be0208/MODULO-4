const mensagensCountainer = document.querySelector('.messages-list')

//_____________________________________   *percorre* a api e cria um modelo html a cada elemento do array
async function fetchMenssages() { console.log('____Novo______');
    try{
        const response = await api.get('/notes')
        const mensages = response.data

        console.log(mensages);

        mensagensCountainer.innerHTML = '' //tudo que estiver dentro ele vai transformar numa string vazia

        mensages.forEach(mensage => {
            const mensageCard = document.createElement('div')
            mensageCard.classList.add('card')

            mensageCard.innerHTML = `
            <h2 class="card-title">${mensage.title}</h2>
            <P class="card-description">${mensage.description}</P>
            <div class="card-icons">
            <i class="fas fa-solid fa-trash" data-id=${mensage.id}></i>
            <i class="fas fa-regular fa-edit" data-id=${mensage.id}></i>
            </div>
            `
 
            mensagensCountainer.appendChild(mensageCard)

            const deletIcon = mensageCard.querySelector('.fa-trash')
            deletIcon.addEventListener('click', () =>{
                const messageId = deletIcon.getAttribute('data-id')

                deletMessages(messageId)
            })

            const editIcon = mensageCard.querySelector('.fa-edit')
      editIcon.addEventListener('click', () => {
        const messageId = editIcon.getAttribute('data-id')

        navigateToEditPage(messageId)
      })
    });

    if (mensages.length === 0) {
      const h3 = document.createElement('h3')
      h3.textContent = 'Nenhum recado cadastrado.'
      mensagensCountainer.appendChild(h3)
    }
  } catch (error) {
    console.log('Erro ao buscar mensagens', error)
  }
}    
fetchMenssages()
//__________________________________________________________________________________________
function navigateToEditPage(messageId) {
    location.href = `editar-menssages.html?id=${messageId}`

}

// funçao geral
