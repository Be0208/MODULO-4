const userCountainer = document.querySelector('.user-list') //guardando o elemento numa variavel

async function fetchUsers(){
    try {
        const response = await api.get('/users')
        const users = response.data.data

        console.log(users);

        users.forEach(user => {
            const userCard = document.createElement('div')
            userCard.classList.add('user-card')

            userCard.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name}" />
            <h2>${user.first_name} ${user.last_name}</h2>
            <p>${user.email}</p>
            ` 

            userCountainer.appendChild(userCard)
        })
    } catch (err) {
        console.log('Erro ao buscar usuarios', err);
    }
}
fetchUsers()