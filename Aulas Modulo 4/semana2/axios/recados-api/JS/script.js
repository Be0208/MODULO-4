const mensagensCountainer = document.querySelector('.messages-list')

//_____________________________________   *percorre* a api e cria um modelo html a cada elemento do array
async function fetchMensages() { console.log('____Novo______');
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
        })

    } catch (e){
        console.log(e, "erro");
    }
}    
fetchMensages()
//__________________________________________________________________________________________




// __________________________________________criar

async function createNewMessage(mensage) {
    const newMessage = {
      title: 'opala',
      description: ' 6 caneco, ta fumando, batendo valvula, diferencial trazeiro ta trincado. R$10000 no Pixxx',
      user_id: 420
    }
  
    try {
      const response = await api.post('/notes', newMessage)
  
      if (response.status === 201) {
        alert('Recado cadastrado com sucesso!')
      }
    } catch (error) {
      console.log('Erro ao cadastrar recado', error)
    }

    fetchMensages()
  }

//   createNewMessage()



// ____________________________________editar

async function updateMessages(){
    const editMenssages = {
        title: 'mas bahh',
        description: 'todo santo dia',
    }
    try {
        const idMessage = 194
        const response = await api.put(`/notes/${ idMessage }`, editMenssages);

        if (response.status === 200) {
            alert('recado atualizado com sucesso')
        }
    } catch (err){
        console.log();
    }

    fetchMensages()
}

// updateMessages()


//______________________________deletar 


// deletMessages()



// funçao geral
