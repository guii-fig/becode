//classe que controla a exibição dos formulários de login
export class LoginController {
    constructor(btnEntrar, btnCriar, formEntrar, formCriar, formContainer) {
        this.btnEntrar = btnEntrar;
        this.btnCriar = btnCriar;
        this.formEntrar = formEntrar;
        this.formCriar = formCriar;
        this.formContainer = formContainer;
    }

    //método que mostra o formulário de Login
    displayEntrar() {
        this.btnEntrar.classList.add('ativo');
        this.btnCriar.classList.remove('ativo');
        this.formEntrar.classList.add('ativo');
        this.formCriar.classList.remove('ativo');
        this.formContainer.classList.remove('ativo');
    }

    //método que mostra o formulário SignIn
    displayCriar() {
        this.btnCriar.classList.add('ativo');
        this.btnEntrar.classList.remove('ativo');
        this.formCriar.classList.add('ativo');
        this.formEntrar.classList.remove('ativo');
        this.formContainer.classList.add('ativo');
    }
}