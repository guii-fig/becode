import { UserController } from "../classes/UserController.js";

const users = new UserController();

document.addEventListener('DOMContentLoaded', () => {
    const btnEntrar = document.getElementById('login');
    const btnCriar = document.getElementById('create-account');
    const formEntrar = document.getElementById('form-login');
    const formCriar = document.getElementById('form-create');
    const formContainer = document.getElementById('forms');

    btnEntrar.addEventListener('click', () => {
        btnEntrar.classList.add('ativo');
        btnCriar.classList.remove('ativo');
        formEntrar.classList.add('ativo');
        formCriar.classList.remove('ativo');
        formContainer.classList.remove('ativo');
    });

    btnCriar.addEventListener('click', () => {
        btnCriar.classList.add('ativo');
        btnEntrar.classList.remove('ativo');
        formCriar.classList.add('ativo');
        formEntrar.classList.remove('ativo');
        formContainer.classList.add('ativo');
    });

    formCriar.addEventListener('submit', event => {
        event.preventDefault();

        const bssName = document.getElementById('bss-name').value.trim();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (users.createUser(bssName, name, email, password)) {
            formCriar.reset();
        }
    });

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
