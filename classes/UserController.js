import { User } from "./User.js";
import { UserRepository } from "./UserRepository.js";

// Padroniza o e-mail para que espaços e diferenças entre maiúsculas e minúsculas
// não façam o mesmo endereço ser tratado como contas diferentes.
const normalizeEmail = email => String(email).trim().toLowerCase();

// Reúne as regras de cadastro e autenticação, separando-as da interface da página.
export class UserController {
    // Permite receber outro repositório, por exemplo em testes; sem argumento,
    // usa o repositório padrão que salva os dados no navegador.
    constructor(repository = new UserRepository()) {
        this.repository = repository;
    }

    // Valida e normaliza os dados antes de criar a conta.
    // O resultado informa se deu certo e, em caso de erro, traz uma mensagem.
    createUser(bssName, name, email, password) {
        const cleanBssName = String(bssName).trim();
        const cleanName = String(name).trim();
        const cleanEmail = normalizeEmail(email);

        // Impede cadastrar uma conta se algum campo obrigatório estiver vazio.
        if (!cleanBssName || !cleanName || !cleanEmail || !password) {
            return { ok: false, message: 'Preencha todos os dados para criar uma conta.' };
        }

        // Procura uma conta existente com o mesmo e-mail, comparando versões normalizadas.
        const emailExists = this.repository
            .getAll()
            .some(user => normalizeEmail(user.email) === cleanEmail);

        if (emailExists) {
            return { ok: false, message: 'Email já cadastrado.' };
        }

        // Cria o objeto de usuário e pede ao repositório para persistir a nova conta.
        this.repository.add(new User(cleanBssName, cleanName, cleanEmail, password));
        return { ok: true };
    }

    // Procura uma conta cujas credenciais correspondam; null indica falha na autenticação.
    authenticateUser(email, password) {
        const normalizedEmail = normalizeEmail(email);

        return this.repository.getAll().find(user =>
            normalizeEmail(user.email) === normalizedEmail && user.password === password
        ) ?? null;
    }

    // Delega a leitura da lista ao repositório, sem expor como ela é armazenada.
    getUsers() {
        return this.repository.getAll();
    }
}
