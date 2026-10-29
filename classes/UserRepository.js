const USERS_STORAGE_KEY = 'users';

// Responsável apenas por ler e gravar usuários no localStorage
export class UserRepository {
    getAll() {
        const saved = localStorage.getItem(USERS_STORAGE_KEY);
        const users = saved === null ? [] : JSON.parse(saved);

        if (!Array.isArray(users)) {
            throw new TypeError('Os dados salvos de usuários precisam estar em uma lista.');
        }

        return users;
    }

    add(user) {
        const users = this.getAll();
        users.push(user);
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    }
}
