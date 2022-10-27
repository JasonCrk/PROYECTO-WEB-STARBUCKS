import { validateEmail, validatePassword } from './utils/validations.js'

let formLogin = document.querySelector('form')

const onSubmitLogin = (e) => {
  e.preventDefault()

  const data = Object.fromEntries(new FormData(e.target))
  const isValidEmail = validateEmail(data.email)
  const isValidPassword = validatePassword(data.password)

  if (isValidEmail && isValidPassword) {
    window.localStorage.setItem('isAuth', true)
    window.location.href = 'index.html'
  }
}

formLogin.addEventListener('submit', onSubmitLogin)
