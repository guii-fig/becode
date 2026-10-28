import { UserController } from "../classes/UserController.js"; //importa User Controller
import { LoginController } from "../classes/LoginController.js"; //importa LoginController

const users = new UserController(); //instância UserController

document.addEventListener('DOMContentLoaded', () => { //aguarda a página carregar para iniciar o comportamento via JS

    const btnEntrar = document.getElementById('login');
    const btnCriar = document.getElementById('create-account');
    const formEntrar = document.getElementById('form-login');
    const formCriar = document.getElementById('form-create');
    const formContainer = document.getElementById('forms');
    //itens acima, declaram os elementos HTML como constantes JS


    const login = new LoginController( //instância LoginController e declara os parâmetros
        btnEntrar,
        btnCriar,
        formEntrar,
        formCriar,
        formContainer
    );

    btnEntrar.addEventListener('click', event => { //interrompe o comportamento padrão do botão submit
        event.preventDefault();
        login.displayEntrar(); //chama login e o método display do formulário de login que está na classe
    });

    btnCriar.addEventListener('click', event => { //interrompe o comportamento padrão do botão submit
        event.preventDefault();
        login.displayCriar(); //chama login e o método display do formulário de signIn que está na classe
    });


    //abaixo, comportamento dos formulários

    formCriar.addEventListener('submit', event => { //interrompe o comportamento padrão do botão submit
        event.preventDefault();

        const bssName = document.getElementById('bss-name').value.trim();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        //itens acima, declaram os elementos HTML como constantes JS

        if (users.createUser(bssName, name, email, password)) { //se o método createUser for true, limpa o formulário
            formCriar.reset();
        }
    });

    formEntrar.addEventListener('submit', event => { //interrompe o comportamento padrão do botão submit
        event.preventDefault();

        const email = document.getElementById('email-login').value.trim();
        const password = document.getElementById('password-login').value;
        //itens acima, declaram os elementos HTML como constantes JS

        const authenticatedUser = users.authenticateUser(email, password); //declara uma variável para o método da classe users

        if (authenticatedUser) { //se o método retornar true
            localStorage.setItem('currentUser', JSON.stringify({ //verifica se há um usuário salvo com email e senha informados
                bssName: authenticatedUser.bssName,
                name: authenticatedUser.name,
                email: authenticatedUser.email
            }));
            window.location.href = 'home.html'; //dps de 
        } else {
            alert('Usuário inválido! Verifique as informações de login e tente novamente.');
        }
    });
});
