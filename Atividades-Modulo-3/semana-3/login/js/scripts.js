const mensagensCountainer = document.querySelector('.messages-list')

// *percorre* a api e cria um modelo html a cada elemento do array
async function fetchMenssages() { console.log('____Novo______');
    try{
        const response = await api.get('/users')
        const mensages = response.data

        console.log(mensages);

  } catch (error) {
    console.log('Erro ao buscar mensagens', error)
  }
}    
fetchMenssages()
//__________________________________________________________________________________________
function navigateToEditPage(messageId) {
    location.href = `editar-menssages.html?id=${messageId}`

}