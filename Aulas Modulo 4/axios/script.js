const userCountainer = document.querySelector('.user-list') //guardando o elemento numa variavel

async function fetchUsers(){
    try {
        const response = await api.get('/users')
        const users = response.data

        console.log(users);
    } catch (err) {
        console.log('Erro ao buscar usuarios', err);
    }
}