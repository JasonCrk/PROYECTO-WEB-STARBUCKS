const desayunos = ['../images/desayuno1.png', '../images/desayuno2.png', '../images/desayuno3.png', '../images/desayuno4.png', '../images/desayuno5.png', '../images/desayuno6.png']
const antojos = ['../images/PACK_ANTOJOS_V2.png', '../images/antojo1.png', '../images/antojo2.png', '../images/antojo3.png', '../images/antojo4.png', '../images/antojo5.png', '../images/antojo6.png']
const boxes = ['../images/SWEET_BOX_V3.png','../images/box2.png', '../images/box3.png', '../images/box4.png', '../images/box5.png', '../images/box6.png']

let desayunoIndice = 0
let antojoIndice = 0
let boxIndice = 0
let ciclo

function carruselDesayuno() {
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[0].setAttribute('src', desayunos[desayunoIndice])
  desayunoIndice++
  if (desayunoIndice >= desayunos.length) desayunoIndice = 0
  ciclo = setTimeout(carruselDesayuno, 1000)
}

function carruselAntojo() {
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[1].setAttribute('src', antojos[antojoIndice])
  antojoIndice++
  if (antojoIndice >= antojos.length) antojoIndice = 0
  ciclo = setTimeout(carruselAntojo, 1000)
}

function carruselBox() {
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[2].setAttribute('src', boxes[boxIndice])
  boxIndice++
  if (boxIndice >= boxes.length) boxIndice = 0
  ciclo = setTimeout(carruselBox, 1000)
}

function original() {
  clearTimeout(ciclo)
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[0].setAttribute('src',  '../images/DUO_DESAYUNO_V4.png')
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[1].setAttribute('src', '../images/antojoDuo1.png')
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[2].setAttribute('src', '../images/SWEET_BOX_V3.png')
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[3].setAttribute('src', '../images/desayunoDuo4.png')
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[4].setAttribute('src', '../images/DESAYUNO_PARA_DOS_V4.png')
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[5].setAttribute('src', '../images/PACK_ANTOJOS_V3.png ')
}

document.getElementsByClassName('pack__contenedor-desayuno-imagen')[0].setAttribute('onmouseover', 'carruselDesayuno()')
document.getElementsByClassName('pack__contenedor-desayuno-imagen')[1].setAttribute('onmouseover', 'carruselAntojo()')
document.getElementsByClassName('pack__contenedor-desayuno-imagen')[2].setAttribute('onmouseover', 'carruselBox()')

document.querySelectorAll('.pack__contenedor-desayuno-imagen').forEach(x => {
  x.setAttribute('onmouseout', 'original()')
})
