const form = document.getElementById('interessesForm')
    const span = document.querySelector('span')

    form.addEventListener('submit', (event) => {
      const checkboxes = document.querySelectorAll('input[name="interesses"]:checked')
      console.log(checkboxes)

      if (checkboxes.length === 0) {
        event.preventDefault()

        span.classList.add('error')
      }
    })