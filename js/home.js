
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const infoMenu = document.getElementById('bss-info');
const btnClose = document.getElementById('btn-close');

btnMenu.addEventListener('click', e => {
    menu.classList.add('ativo');
    infoMenu.classList.add('ativo');
    btnClose.classList.add('ativo');
    btnMenu.classList.remove('ativo');
});

btnClose.addEventListener('click', e => {
    menu.classList.remove('ativo');
    infoMenu.classList.remove('ativo');
    btnClose.classList.remove('ativo');
    btnMenu.classList.add('ativo');
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