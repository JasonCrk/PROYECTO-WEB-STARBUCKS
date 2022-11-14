const desayuno = ['../images/DESAYUNO_PARA_DOS_V4.png', '../images/desayuno1.png', '../images/desayuno2.png', '../images/desayuno3.png', '../images/desayuno4.png', '../images/desayuno5.png', '../images/desayuno6.png']
const antojo = ['../images/PACK_ANTOJOS_V2.png', '../images/antojo1.png', '../images/antojo2.png', '../images/antojo3.png', '../images/antojo4.png', '../images/antojo5.png', '../images/antojo6.png']
const box = ['../images/SWEET_BOX_V3.png', '../images/box1.png', '../images/box2.png', '../images/box3.png', '../images/box4.png', '../images/box5.png', '../images/box6.png']

var i = 0
var g = 0
var f = 0
var ciclo

function carruselDesayuno() {
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[0].setAttribute('src', desayuno[i])
  i++
  if (i >= desayuno.length) i = 0
  ciclo = setTimeout(carruselDesayuno, 1000)
}

function carruselAntojo() {
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[1].setAttribute('src', antojo[g])
  g++
  if (g >= antojo.length) g = 0
  ciclo = setTimeout(carruselAntojo, 1000)
}

function carruselBox() {
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[2].setAttribute('src', box[f])
  f++
  if (f >= box.length) f = 0
  ciclo = setTimeout(carruselBox, 1000)
}

function original() {
  clearTimeout(ciclo)
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[0].setAttribute('src', '../images/DESAYUNO_PARA_DOS_V4.png')
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[1].setAttribute('src', '../images/PACK_ANTOJOS_V2.png')
  document.getElementsByClassName('pack__contenedor-desayuno-imagen')[2].setAttribute('src', '../images/SWEET_BOX_V3.png')
}

document.getElementsByClassName('pack__contenedor-desayuno-imagen')[0].setAttribute('onmouseover', 'carruselDesayuno()')
document.getElementsByClassName('pack__contenedor-desayuno-imagen')[1].setAttribute('onmouseover', 'carruselAntojo()')
document.getElementsByClassName('pack__contenedor-desayuno-imagen')[2].setAttribute('onmouseover', 'carruselBox()')

document.querySelectorAll('.pack__contenedor-desayuno-imagen').forEach(x => {
  x.setAttribute('onmouseout', 'original()')
})