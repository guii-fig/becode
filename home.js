const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const infoMenu = document.getElementById('bss-info');
const btnClose = document.getElementById('btn-close');


btnMenu.addEventListener('click', e => {

    menu.classList.add('ativo');
    infoMenu.classList.add('ativo');
    btnClose.classList.add('ativo');
    btnMenu.classList.remove('ativo');
})

btnClose.addEventListener('click', e => {
    
    menu.classList.remove('ativo');
    infoMenu.classList.remove('ativo');
    btnClose.classList.remove('ativo');
    btnMenu.classList.add('ativo');
})
