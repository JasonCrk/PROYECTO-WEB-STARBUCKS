const menu = document.getElementById("menu");

const toggleMenu = () => {
  const navbar = document.querySelector(".navbar__links")
  navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex'
}

const handleLogout = () => {
  window.localStorage.removeItem('isAuth')
  window.location.replace('index.html')
}

const createOptionsNotAuth = container => {
  let navbarLinks = document.querySelector('.navbar__links')

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

  let linkLoginResponsive = document.createElement('a')
  linkLoginResponsive.innerText = 'Iniciar sesión'
  linkLoginResponsive.setAttribute('href', 'authLogin.html')
  linkLoginResponsive.classList.add('navbar__link')

  let listItemLogin = document.createElement('li')
  listItemLogin.classList.add('auth-activate')
  listItemLogin.appendChild(linkLoginResponsive)

  let linkRegisterResponsive = document.createElement('a')
  linkRegisterResponsive.innerText = 'Registrarse'
  linkRegisterResponsive.setAttribute('href', 'authRegister.html')
  linkRegisterResponsive.classList.add('navbar__link')

  let listItemRegister = document.createElement('li')
  listItemRegister.classList.add('auth-activate')
  listItemRegister.appendChild(linkRegisterResponsive)

  navbarLinks.appendChild(listItemLogin)
  navbarLinks.appendChild(listItemRegister)
}

const createOptionsIsAuth = container => {
  let navbarLinks = document.querySelector('.navbar__links')

  let btnLogout = document.createElement('button')
  btnLogout.innerText = 'Cerrar sesión'
  btnLogout.classList.add('navbar__auth--link')
  btnLogout.classList.add('navbar__auth--logout')
  btnLogout.addEventListener('click', handleLogout)
  container.appendChild(btnLogout)

  let linkLogoutResponsive = document.createElement('a')
  linkLogoutResponsive.innerText = 'Cerrar sesión'
  linkLogoutResponsive.classList.add('navbar__link')
  linkLogoutResponsive.classList.add('navbar__link-logout')
  linkLogoutResponsive.addEventListener('click', handleLogout)

  let listItemLogout = document.createElement('li')
  listItemLogout.classList.add('logout-activate')
  listItemLogout.appendChild(linkLogoutResponsive)

  navbarLinks.appendChild(listItemLogout)
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

menu.addEventListener("click", toggleMenu)
setOptionsAuth()