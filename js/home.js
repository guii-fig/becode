import { escapeHtml } from "./utils/escapeHtml.js";

// Protege a página: o login salva currentUser; sem esse dado, retorna à tela de acesso.
const savedUser = localStorage.getItem('currentUser');

if (!savedUser) {
    window.location.href = 'login.html';
} else {
    // Converte o texto JSON salvo pelo login em um objeto para inicializar a página.
    init(JSON.parse(savedUser));
}

// Prepara a interface da página com os dados da conta que entrou no sistema.
function init(user) {
    // Insere o nome do negócio e da pessoa no menu, escapando texto antes de usar HTML.
    const bloco = document.getElementById('span-name');
    bloco.innerHTML = `
        <h4>${escapeHtml(user.bssName ?? '')}</h4>
        <p>Seja bem-vindo(a), ${escapeHtml(user.name ?? '')}!</p>
    `;

    // Abrir e fechar o menu
    // Busca os elementos uma vez e reutiliza as referências nos eventos de clique.
    const btnMenu = document.getElementById('btn-menu');
    const btnClose = document.getElementById('btn-close');
    const menu = document.getElementById('menu');
    const infoMenu = document.getElementById('bss-info');
    const page = document.getElementById('main-page');

    // Ao abrir o menu, troca classes para exibir opções e deslocar a área principal.
    btnMenu.addEventListener('click', () => {
        menu.classList.add('ativo');
        infoMenu.classList.add('ativo');
        btnClose.classList.add('ativo');
        btnMenu.classList.remove('ativo');
        page.classList.remove('open');
        page.classList.add('closed');
    });

    // Ao fechar o menu, restaura a largura e o botão do estado recolhido.
    btnClose.addEventListener('click', () => {
        menu.classList.remove('ativo');
        infoMenu.classList.remove('ativo');
        btnClose.classList.remove('ativo');
        btnMenu.classList.add('ativo');
        page.classList.add('open');
        page.classList.remove('closed');
    });

    // Troca de páginas: basta adicionar um item aqui quando criar uma nova seção
    // Cada par associa um botão de navegação à seção correspondente.
    const pages = [
        { button: document.getElementById('orders'), section: document.getElementById('orders-page') },
        { button: document.getElementById('catalog'), section: document.getElementById('catalog-page') }
    ];

    // Registra o mesmo comportamento para cada item: exibe sua seção e oculta as demais.
    pages.forEach(({ button, section }) => {
        button.addEventListener('click', event => {
            event.preventDefault();

            pages.forEach(item => {
                // A seção clicada recebe show; as outras recebem show-off.
                const isCurrent = item.section === section;
                item.section.classList.toggle('show', isCurrent);
                item.section.classList.toggle('show-off', !isCurrent);
            });
        });
    });
}
