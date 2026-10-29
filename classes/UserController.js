import { User } from "./User.js";
import { UserRepository } from "./UserRepository.js";

const normalizeEmail = email => String(email).trim().toLowerCase();

// Regras de negócio dos usuários. Não mostra alertas: devolve o resultado para quem chamou.
export class UserController {
    constructor(repository = new UserRepository()) {
        this.repository = repository;
    }

    // Retorna { ok: boolean, message?: string }
    createUser(bssName, name, email, password) {
        const cleanBssName = String(bssName).trim();
        const cleanName = String(name).trim();
        const cleanEmail = normalizeEmail(email);

        if (!cleanBssName || !cleanName || !cleanEmail || !password) {
            return { ok: false, message: 'Preencha todos os dados para criar uma conta.' };
        }

        const emailExists = this.repository
            .getAll()
            .some(user => normalizeEmail(user.email) === cleanEmail);

        if (emailExists) {
            return { ok: false, message: 'Email já cadastrado.' };
        }

        this.repository.add(new User(cleanBssName, cleanName, cleanEmail, password));
        return { ok: true };
    }

    // Retorna o usuário autenticado ou null
    authenticateUser(email, password) {
        const normalizedEmail = normalizeEmail(email);

        return this.repository.getAll().find(user =>
            normalizeEmail(user.email) === normalizedEmail && user.password === password
        ) ?? null;
    }

    getUsers() {
        return this.repository.getAll();
    }
}
