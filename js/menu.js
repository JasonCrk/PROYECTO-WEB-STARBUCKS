const menu = document.getElementById("menu");

const toggleMenu = () => {
  const navbar = document.querySelector(".navbar__links")
  if (navbar.style.display === "flex") {
    navbar.style.display = "none"
  } else {
    navbar.style.display = "flex"
  }
}

menu.addEventListener("click", toggleMenu)

const handleLogout = () => {
  window.localStorage.removeItem('isAuth')
  window.location.href = 'index.html'
}

const createOptionsNotAuth = container => {
  let linkLogin = document.createElement('a')
  linkLogin.innerText = 'Iniciar sesión'
  linkLogin.setAttribute('href', 'authLogin.html')
  linkLogin.classList.add('navbar__auth--link')
  linkLogin.classList.add('navbar__auth--login')
  container.appendChild(linkLogin)

  let linkRegister = document.createElement('a')
  linkRegister.innerText = 'Registrarse'
  linkRegister.setAttribute('href', 'authRegister.html')
  linkRegister.classList.add('navbar__auth--link')
  linkRegister.classList.add('navbar__auth--register')
  container.appendChild(linkRegister)
}

const createOptionsIsAuth = container => {
  let btnLogout = document.createElement('button')
  btnLogout.innerText = 'Cerrar sesión'
  btnLogout.classList.add('navbar__auth--link')
  btnLogout.classList.add('navbar__auth--logout')
  btnLogout.addEventListener('click', handleLogout)
  container.appendChild(btnLogout)
}

const setOptionsAuth = () => {
  let container = document.querySelector('.navbar__auth')
  const isAuth = window.localStorage.getItem('isAuth')

  if (!isAuth) {
    createOptionsNotAuth(container)
    return
  }

  createOptionsIsAuth(container)
}

setOptionsAuth()
