const formNewUsuario = document.getElementById('form-new-message')

const usuarioInput = document.getElementById('name')
const loginInput = document.getElementById('login')
const senhaInput = document.getElementById('password')
 
formNewUsuario.addEventListener('submit', (event) => {
  event.preventDefault()


  const newUsuario = {
    name: usuarioInput.value,
    password: senhaInput.value,
    login: loginInput.value,
  }

  if (!newUsuario) {
    senhaInput.classList.add('.form-control.error')
    return null
  }

  createNewUsuario(newUsuario)
})


async function createNewUsuario(usuario) {
    try {
      const response = await api2.post('/users', usuario)
      console.log(response.data);

  
      if (response.status === 201) {
        alert('Recado cadastrado com sucesso!')

        usuarioInput.value = ""
        senhaInput.value = ""
        loginInput.value = ""

      }
    } catch (error) {
      console.log('Erro ao cadastrar recado', error)
    }
  }

