import { UserController } from "../classes/UserController.js";
import { FormToggle } from "../classes/FormToggle.js";

// O controlador aplica as regras de cadastro e login usando o repositório padrão.
const users = new UserController();

// Espera o HTML estar carregado antes de procurar seus campos e botões.
document.addEventListener('DOMContentLoaded', () => {
    const btnEntrar = document.getElementById('login');
    const btnCriar = document.getElementById('create-account');
    const formEntrar = document.getElementById('form-login');
    const formCriar = document.getElementById('form-create');
    const formContainer = document.getElementById('forms');

    // Centraliza a troca de aparência entre as duas opções da tela.
    const toggle = new FormToggle(btnEntrar, btnCriar, formEntrar, formCriar, formContainer);

    // Os botões apenas alternam o formulário visível; não enviam dados.
    btnEntrar.addEventListener('click', event => {
        event.preventDefault();
        toggle.showLogin();
    });

    btnCriar.addEventListener('click', event => {
        event.preventDefault();
        toggle.showSignUp();
    });

    // Trata o envio do cadastro sem recarregar a página.
    formCriar.addEventListener('submit', event => {
        event.preventDefault();

        // Lê os campos; trim remove espaços extras no início e no fim dos textos.
        const bssName = document.getElementById('bss-name').value.trim();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        // Delega validações e gravação ao controlador, mantendo esta tela simples.
        const result = users.createUser(bssName, name, email, password);

        if (result.ok) {
            // Limpa os campos quando a conta foi cadastrada com sucesso.
            formCriar.reset();
        } else {
            alert(result.message);
        }
    });

    // Trata a tentativa de login e impede o envio tradicional do formulário.
    formEntrar.addEventListener('submit', event => {
        event.preventDefault();

        const email = document.getElementById('email-login').value.trim();
        const password = document.getElementById('password-login').value;

        // O controlador compara as credenciais com as contas já cadastradas.
        const authenticatedUser = users.authenticateUser(email, password);

        if (authenticatedUser) {
            // Guarda somente os dados necessários à tela inicial, sem incluir a senha.
            localStorage.setItem('currentUser', JSON.stringify({
                bssName: authenticatedUser.bssName,
                name: authenticatedUser.name,
                email: authenticatedUser.email
            }));
            // Entra na página inicial após autenticar a conta.
            window.location.href = 'home.html';
        } else {
            alert('Usuário inválido! Verifique as informações de login e tente novamente.');
        }
    });
});
