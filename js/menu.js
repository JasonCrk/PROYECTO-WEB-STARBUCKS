const menu = document.getElementById("menu");
const desayuno = ['../images/DESAYUNO_PARA_DOS_V4.png','../images/desayuno1.png','../images/desayuno2.png','../images/desayuno3.png','../images/desayuno4.png','../images/desayuno5.png','../images/desayuno6.png']
const antojo = ['../images/PACK_ANTOJOS_V2.png','../images/antojo1.png','../images/antojo2.png','../images/antojo3.png','../images/antojo4.png','../images/antojo5.png','../images/antojo6.png']
const box = ['../images/SWEET_BOX_V3.png','../images/box1.png','../images/box2.png','../images/box3.png','../images/box4.png','../images/box5.png','../images/box6.png']

const toggleMenu = () => {
  const navbar = document.querySelector(".navbar__links")
  if (navbar.style.display === "flex") {
    navbar.style.display = "none"
  } else {
    navbar.style.display = "flex"
  }
}
var i=0
var g=0
var f=0
function carruselDesayuno(e){
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[0].setAttribute('src',desayuno[i])
  i++
  if(i>=desayuno.length)i=0
  ciclo= setTimeout(carruselDesayuno,1000)
}
function carruselAntojo(e){
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[1].setAttribute('src',antojo[g])
  g++
  if(g>=desayuno.length)g=0
  ciclo= setTimeout(carruselAntojo,1000)
}
function carruselBox(e){
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[2].setAttribute('src',box[f])
  f++
  if(i>=desayuno.length)f=0
  ciclo= setTimeout(carruselBox,1000)
}

function original(e){
  clearTimeout(ciclo)
document.getElementsByClassName('pack__contenedor-desayuno-imagen')[0].setAttribute('src','../images/DESAYUNO_PARA_DOS_V4.png')
document.getElementsByClassName('pack__contenedor-desayuno-imagen')[1].setAttribute('src','../images/PACK_ANTOJOS_V2.png')
document.getElementsByClassName('pack__contenedor-desayuno-imagen')[2].setAttribute('src','../images/SWEET_BOX_V3.png')
}
document.getElementsByClassName('pack__contenedor-desayuno-imagen')[0].setAttribute('onmouseover','carruselDesayuno(this)')
document.getElementsByClassName('pack__contenedor-desayuno-imagen')[1].setAttribute('onmouseover','carruselAntojo(this)')
document.getElementsByClassName('pack__contenedor-desayuno-imagen')[2].setAttribute('onmouseover','carruselBox(this)')
document.querySelectorAll('.pack__contenedor-desayuno-imagen').forEach(x =>{
  x.setAttribute('onmouseout','original(this)')
})


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
