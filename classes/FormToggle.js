// Esta classe concentra as mudanças visuais entre entrar na conta e criar uma conta.
export class FormToggle {
    // O construtor recebe os elementos da página que serão atualizados pelos métodos.
    constructor(btnEntrar, btnCriar, formEntrar, formCriar, formContainer) {
        this.btnEntrar = btnEntrar;
        this.btnCriar = btnCriar;
        this.formEntrar = formEntrar;
        this.formCriar = formCriar;
        this.formContainer = formContainer;
    }

    // Ativa o botão e o formulário de login e esconde o formulário de cadastro.
    showLogin() {
        this.btnEntrar.classList.add('ativo');
        this.btnCriar.classList.remove('ativo');
        this.formEntrar.classList.add('ativo');
        this.formCriar.classList.remove('ativo');
        this.formContainer.classList.remove('ativo');
    }

    // Faz o inverso de showLogin: exibe o cadastro e ajusta o tamanho do contêiner.
    showSignUp() {
        this.btnCriar.classList.add('ativo');
        this.btnEntrar.classList.remove('ativo');
        this.formCriar.classList.add('ativo');
        this.formEntrar.classList.remove('ativo');
        this.formContainer.classList.add('ativo');
    }
}
