
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const infoMenu = document.getElementById('bss-info');
const btnClose = document.getElementById('btn-close');
const page = document.getElementById('main-page')

btnMenu.addEventListener('click', e => {
    menu.classList.add('ativo');
    infoMenu.classList.add('ativo');
    btnClose.classList.add('ativo');
    btnMenu.classList.remove('ativo');
    page.classList.remove('open');
    page.classList.add('closed');
});

btnClose.addEventListener('click', e => {
    menu.classList.remove('ativo');
    infoMenu.classList.remove('ativo');
    btnClose.classList.remove('ativo');
    btnMenu.classList.add('ativo');
    page.classList.add('open');
    page.classList.remove('closed');

});

document.addEventListener('DOMContentLoaded', () => {
    const savedUser = localStorage.getItem('currentUser');
    const bloco = document.getElementById('span-name');

    if (!savedUser) {
        window.location.href = 'login.html';
        return;
    }

    const user = JSON.parse(savedUser);
    const bssName = String(user.bssName ?? '');
    const name = String(user.name ?? '');
    const escapeHtml = value => value.replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);

    bloco.innerHTML = `
        <h4>${escapeHtml(bssName)}</h4>
        <p>Seja bem-vindo(a), ${escapeHtml(name)}!</p>
    `;
});


//options page

const pedidos = document.getElementById('orders');
const pedidosPage = document.getElementById('orders-page');

const catalogo = document.getElementById('catalog');
const catalogoPage = document.getElementById('catalog-page');

pedidos.addEventListener('click', e => {
    e.preventDefault();

    pedidosPage.classList.add('show');
    pedidosPage.classList.remove("show-off");
    catalogoPage.classList.add('show-off');
    catalogoPage.classList.remove('show');

});

catalogo.addEventListener('click', e => {
    e.preventDefault();

    pedidosPage.classList.add('show-off');
    pedidosPage.classList.remove("show");
    catalogoPage.classList.add('show');
    catalogoPage.classList.remove('show-off');
})