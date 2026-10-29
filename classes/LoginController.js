// Controla quais botões e formulários de autenticação aparecem na página.
export class LoginController {
    // Guarda referências aos elementos HTML para que os métodos possam alterá-los.
    constructor(btnEntrar, btnCriar, formEntrar, formCriar, formContainer) {
        this.btnEntrar = btnEntrar;
        this.btnCriar = btnCriar;
        this.formEntrar = formEntrar;
        this.formCriar = formCriar;
        this.formContainer = formContainer;
    }

    // Mostra o formulário de entrada e marca seu botão como selecionado.
    displayEntrar() {
        this.btnEntrar.classList.add('ativo');
        this.btnCriar.classList.remove('ativo');
        this.formEntrar.classList.add('ativo');
        this.formCriar.classList.remove('ativo');
        this.formContainer.classList.remove('ativo');
    }

    // Mostra o formulário de criação de conta e marca seu botão como selecionado.
    displayCriar() {
        this.btnCriar.classList.add('ativo');
        this.btnEntrar.classList.remove('ativo');
        this.formCriar.classList.add('ativo');
        this.formEntrar.classList.remove('ativo');
        this.formContainer.classList.add('ativo');
    }
}