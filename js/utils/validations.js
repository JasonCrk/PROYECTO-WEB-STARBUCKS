const setError = input => input.setAttribute('style', 'border-color: red;')

export const validateFirstName = (firstName) => {
  let errorFirstName = document.getElementById('error-firstname')
  let inputFirstName = document.querySelector('[name=firstName]')

  inputFirstName.removeAttribute('style')
  errorFirstName.innerText = ''

  if (!firstName) {
    errorFirstName.innerText = 'El nombre(s) es requerido'
    setError(inputFirstName)
    return false
  } else if (firstName.length <= 3) {
    errorFirstName.innerText = 'El nombre debe de tener mínimo 3 caracteres'
    setError(inputFirstName)
    return false
  }

  return true
}

export const validateLastName = (lastName) => {
  let errorLastName = document.getElementById('error-lastname')
  let inputLastName = document.querySelector('[name=lastName]')

  inputLastName.removeAttribute('style')
  errorLastName.innerText = ''

  if (!lastName) {
    errorLastName.innerText = 'El apellido es requerido'
    setError(inputLastName)
    return false
  }

  return true
}

export const validateUsername = (username) => {
  let errorUsername = document.getElementById('error-username')
  let inputUsername = document.querySelector('[name=username]')

  inputUsername.removeAttribute('style')
  errorUsername.innerText = ''

  if (!username) {
    errorUsername.innerText = 'El nombre de usuario es requerido'
    setError(inputUsername)
    return false
  } else if (username.length <= 3) {
    errorUsername.innerText = 'El nombre de usuario debe de tener mínimo 3 caracteres'
    setError(inputUsername)
    return false
  }

  return true
}

export const validateEmail = (email) => {
  let errorEmail = document.getElementById('error-email')
  let inputEmail = document.querySelector('[name=email]')

  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  inputEmail.removeAttribute('style')
  errorEmail.innerText = ''

  if (!email) {
    errorEmail.innerText = 'El correó electrónico es requerido'
    setError(inputEmail)
    return false
  } else if (!regEmail.test(email)) {
    errorEmail.innerText = 'El correó electrónico es invalido, vuelva a intentarlo'
    setError(inputEmail)
    return false
  }

  return true
}

export const validatePassword = (password) => {
  let errorPassword = document.getElementById('error-password')
  let inputPassword = document.querySelector('[name=password]')

  inputPassword.removeAttribute('style')
  errorPassword.innerText = ''

  if (!password) {
    errorPassword.innerText = 'La contraseña es requerida'
    setError(inputPassword)
    return false
  } else if (password.length <= 4) {
    errorPassword.innerText = 'La contraseña debe de tener como mínimo como 4 caracteres'
    setError(inputPassword)
    return false
  }

  return true
}

export const validateConfirmPassword = (confirmPassword, password) => {
  let errorConfirmPassword = document.getElementById('error-confirmPassword')
  let inputConfirmPassword = document.querySelector('[name=confirmPassword]')

  inputConfirmPassword.removeAttribute('style')
  errorConfirmPassword.innerText = ''

  if (!confirmPassword) {
    errorConfirmPassword.innerText = 'La contraseña es requerida'
    setError(inputConfirmPassword)
    return false
  } else if (confirmPassword !== password) {
    errorConfirmPassword.innerText = 'Las contraseñas deben de ser iguales'
    setError(inputConfirmPassword)
    return false
  }

  return true
}
