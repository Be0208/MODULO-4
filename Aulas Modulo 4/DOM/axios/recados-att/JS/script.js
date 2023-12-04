const mensagensCountainer = document.querySelector('.messages-list')

//___________________________________________________________________________________________ *percorre* a api e cria um modelo html a cada elemento do array
async function fetchMensages() {
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
            `

            mensagensCountainer.appendChild(mensageCard)
        })

    } catch (e){
        console.log(e, "erro");
    }
//__________________________________________________________________________________________
}

fetchMensages()
