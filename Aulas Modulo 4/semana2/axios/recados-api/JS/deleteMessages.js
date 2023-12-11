async function deletMessages(messageId){ 

    try {
        const response = await api.delete(`/notes/${messageId}`)
        

        if (response.status === 200) {
            alert('recado excluido com sucesso')
        }

        location.reload()
    } catch (err){
        console.log('erro' + err);
    }
    fetchMensages(messageId)
}