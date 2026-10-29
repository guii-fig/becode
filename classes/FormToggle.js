// Controla a alternância visual entre o formulário de login e o de criar conta
export class FormToggle {
    constructor(btnEntrar, btnCriar, formEntrar, formCriar, formContainer) {
        this.btnEntrar = btnEntrar;
        this.btnCriar = btnCriar;
        this.formEntrar = formEntrar;
        this.formCriar = formCriar;
        this.formContainer = formContainer;
    }

    showLogin() {
        this.btnEntrar.classList.add('ativo');
        this.btnCriar.classList.remove('ativo');
        this.formEntrar.classList.add('ativo');
        this.formCriar.classList.remove('ativo');
        this.formContainer.classList.remove('ativo');
    }

    showSignUp() {
        this.btnCriar.classList.add('ativo');
        this.btnEntrar.classList.remove('ativo');
        this.formCriar.classList.add('ativo');
        this.formEntrar.classList.remove('ativo');
        this.formContainer.classList.add('ativo');
    }
}
