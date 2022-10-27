import {
  validateConfirmPassword,
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
  validateUsername
} from './utils/validations.js'

let formRegister = document.querySelector('form')

const onSubmitRegister = (e) => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target))

  const isValidFirstName = validateFirstName(data.firstName)
  const isValidLastName = validateLastName(data.lastName)
  const isValidUsername = validateUsername(data.username)
  const isValidEmail = validateEmail(data.email)
  const isValidPassword = validatePassword(data.password)
  const isValidConfirmPassword = validateConfirmPassword(data.confirmPassword, data.password)

  const isValidData = isValidFirstName && isValidLastName && isValidUsername && isValidEmail && isValidPassword && isValidConfirmPassword

  if (isValidData) {
    window.localStorage.setItem('isAuth', true)
    window.location.href = 'index.html'
  }
}

formRegister.addEventListener('submit', onSubmitRegister)