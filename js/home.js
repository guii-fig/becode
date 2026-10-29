import { escapeHtml } from "./utils/escapeHtml.js";

// Proteção da página: sem usuário logado, volta para o login
const savedUser = localStorage.getItem('currentUser');

if (!savedUser) {
    window.location.href = 'login.html';
} else {
    init(JSON.parse(savedUser));
}

function init(user) {
    // Dados do usuário no menu
    const bloco = document.getElementById('span-name');
    bloco.innerHTML = `
        <h4>${escapeHtml(user.bssName ?? '')}</h4>
        <p>Seja bem-vindo(a), ${escapeHtml(user.name ?? '')}!</p>
    `;

    // Abrir e fechar o menu
    const btnMenu = document.getElementById('btn-menu');
    const btnClose = document.getElementById('btn-close');
    const menu = document.getElementById('menu');
    const infoMenu = document.getElementById('bss-info');
    const page = document.getElementById('main-page');

    btnMenu.addEventListener('click', () => {
        menu.classList.add('ativo');
        infoMenu.classList.add('ativo');
        btnClose.classList.add('ativo');
        btnMenu.classList.remove('ativo');
        page.classList.remove('open');
        page.classList.add('closed');
    });

    btnClose.addEventListener('click', () => {
        menu.classList.remove('ativo');
        infoMenu.classList.remove('ativo');
        btnClose.classList.remove('ativo');
        btnMenu.classList.add('ativo');
        page.classList.add('open');
        page.classList.remove('closed');
    });

    // Troca de páginas: basta adicionar um item aqui quando criar uma nova seção
    const pages = [
        { button: document.getElementById('orders'), section: document.getElementById('orders-page') },
        { button: document.getElementById('catalog'), section: document.getElementById('catalog-page') }
    ];

    pages.forEach(({ button, section }) => {
        button.addEventListener('click', event => {
            event.preventDefault();

            pages.forEach(item => {
                const isCurrent = item.section === section;
                item.section.classList.toggle('show', isCurrent);
                item.section.classList.toggle('show-off', !isCurrent);
            });
        });
    });
}
