const Duodesayunos = ['../images/DESAYUNO_PARA_DOS_V4.png', '../images/desayuno1.png', '../images/desayuno2.png', '../images/desayuno3.png', '../images/desayuno4.png', '../images/desayuno5.png', '../images/desayuno6.png']
const DesayunosXdos = ['../images/PACK_ANTOJOS_V2.png', '../images/antojo1.png', '../images/antojo2.png', '../images/antojo3.png', '../images/antojo4.png', '../images/antojo5.png', '../images/antojo6.png']
const PacksAntojos = ['../images/SWEET_BOX_V3.png', '../images/box1.png', '../images/box2.png', '../images/box3.png', '../images/box4.png', '../images/box5.png', '../images/box6.png']

let DuodesIndice = 0
let DesXdosIndice = 0
let PackAntIndice = 0

function carruselDuoDesayuno() {
    document.getElementsByClassName('pack__contenedor-desayuno-imagen')[3].setAttribute('src', Duodesayunos[DuodesIndice])
    DuodesIndice++
    if (DuodesIndice >= Duodesayunos.length) DuodesIndice = 0
    ciclo = setTimeout(carruselDuoDesayuno, 1000)
}

function carruselDesayunoXdos() {
    document.getElementsByClassName('pack__contenedor-desayuno-imagen')[4].setAttribute('src', DesayunosXdos[DesXdosIndice])
    DesXdosIndice++
    if (DesXdosIndice >= DesayunosXdos.length) DesXdosIndice = 0
    ciclo = setTimeout(carruselDesayunoXdos, 1000)
}

function carruselPackAntojo() {
    document.getElementsByClassName('pack__contenedor-desayuno-imagen')[5].setAttribute('src', PacksAntojos[PackAntIndice])
    PackAntIndice++
    if (PackAntIndice >= PacksAntojos.length) PackAntIndice = 0
    ciclo = setTimeout(carruselPackAntojo, 1000)
}



document.getElementsByClassName('pack__contenedor-desayuno-imagen')[3].setAttribute('onmouseover', 'carruselDuoDesayuno()')
document.getElementsByClassName('pack__contenedor-desayuno-imagen')[4].setAttribute('onmouseover', 'carruselDesayunoXdos()')
document.getElementsByClassName('pack__contenedor-desayuno-imagen')[5].setAttribute('onmouseover', 'carruselPackAntojo()')

