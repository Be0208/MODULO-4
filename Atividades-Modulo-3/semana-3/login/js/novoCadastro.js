const formNewUsuario = document.getElementById('form-new-message')

const emailInput = document.getElementById('#email')
const senhaInput = document.getElementById('#senha')

 formNewUsuario.addEventListener('submit', (event) => {
  event.preventDefault() // impede comportamento padrão submit

  const newUsuario = {
    email: emailInput.value,
    senha: senhaInput.value,
  }

  createNewUsuario(newUsuario)
})

async function createNewUsuario(usuario) {
    try {
      const response = await api.post('/users', usuario)
  
      if (response.status === 201) {
        alert('Recado cadastrado com sucesso!')

        emailInput.value = ""
        senhaInput.value = ""

      }
    } catch (error) {
      console.log('Erro ao cadastrar recado', error)
    }
  }
