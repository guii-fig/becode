// Chave usada pelo navegador para localizar a lista de usuários no localStorage.
const USERS_STORAGE_KEY = 'users';

// Cuida somente da persistência dos usuários, deixando as regras de negócio
// para o controlador.
export class UserRepository {
    // Lê os dados salvos e devolve uma lista vazia quando ainda não há cadastros.
    getAll() {
        const saved = localStorage.getItem(USERS_STORAGE_KEY);
        // JSON.parse transforma o texto armazenado em JavaScript novamente.
        const users = saved === null ? [] : JSON.parse(saved);

        // Verifica o formato para evitar que outras estruturas sejam usadas como lista.
        if (!Array.isArray(users)) {
            throw new TypeError('Os dados salvos de usuários precisam estar em uma lista.');
        }

        return users;
    }

    // Adiciona o usuário à lista atual e grava a lista completa como texto JSON.
    add(user) {
        const users = this.getAll();
        users.push(user);
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    }
}
