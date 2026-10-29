import { UserController } from "../classes/UserController.js";
import { FormToggle } from "../classes/FormToggle.js";

const users = new UserController();

document.addEventListener('DOMContentLoaded', () => {
    const btnEntrar = document.getElementById('login');
    const btnCriar = document.getElementById('create-account');
    const formEntrar = document.getElementById('form-login');
    const formCriar = document.getElementById('form-create');
    const formContainer = document.getElementById('forms');

    const toggle = new FormToggle(btnEntrar, btnCriar, formEntrar, formCriar, formContainer);

    btnEntrar.addEventListener('click', event => {
        event.preventDefault();
        toggle.showLogin();
    });

    btnCriar.addEventListener('click', event => {
        event.preventDefault();
        toggle.showSignUp();
    });

    // Criar conta
    formCriar.addEventListener('submit', event => {
        event.preventDefault();

        const bssName = document.getElementById('bss-name').value.trim();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        const result = users.createUser(bssName, name, email, password);

        if (result.ok) {
            formCriar.reset();
        } else {
            alert(result.message);
        }
    });

    // Entrar
    formEntrar.addEventListener('submit', event => {
        event.preventDefault();

        const email = document.getElementById('email-login').value.trim();
        const password = document.getElementById('password-login').value;

        const authenticatedUser = users.authenticateUser(email, password);

        if (authenticatedUser) {
            localStorage.setItem('currentUser', JSON.stringify({
                bssName: authenticatedUser.bssName,
                name: authenticatedUser.name,
                email: authenticatedUser.email
            }));
            window.location.href = 'home.html';
        } else {
            alert('Usuário inválido! Verifique as informações de login e tente novamente.');
        }
    });
});
