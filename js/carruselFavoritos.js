const Duodesayunos = ['../images/DESAYUNO_PARA_DOS_V4.png','../images/desayunoDuo1.png', '../images/desayunoDuo2.png']
const DesayunosXdos = ['../images/desayunoDuo3.png','../images/desayunoDuo4.png','../images/PACK_ANTOJOS_V2.png']
const PacksAntojos = ['../images/SWEET_BOX_V3.png', '../images/antojoDuo1.png','../images/antojoDuo2.png','../images/antojoDuo3.png']

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

