let btnEmail = document.querySelector('.footer__email-btn')

const errorMessage = value => {
  let emailContent = document.querySelector('.footer__email-message')
  emailContent.innerText = value
  setTimeout(() => emailContent.innerText = '', 2000)
}

const sendEmail = () => {
  let txtEmail = document.getElementById('email')

  const email = txtEmail.value
  if (!email) {
    errorMessage("El correo es requerido")
    return
  }

  const emailRegEx = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
  if (!emailRegEx.test(email)) {
    errorMessage('El correo es invalido')
    return
  }

  alert('Suscripción exitosa')
}

btnEmail.addEventListener('click', sendEmail)
