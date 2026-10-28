import { User } from "./User.js";

const USERS_STORAGE_KEY = 'users';

export class UserController {
    constructor() {
        const savedUsers = localStorage.getItem(USERS_STORAGE_KEY);
        this.userInfo = savedUsers === null ? [] : JSON.parse(savedUsers);

        if (!Array.isArray(this.userInfo)) {
            throw new TypeError('Os dados salvos de usuários precisam estar em uma lista.');
        }
    }

    #save() {
        localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(this.userInfo));
    }

    createUser(bssName, name, email, password) {
        const cleanBssName = String(bssName).trim();
        const cleanName = String(name).trim();
        const cleanEmail = String(email).trim().toLocaleLowerCase();

        if (!cleanBssName || !cleanName || !cleanEmail || !password) {
            alert('Preencha todos os dados para criar uma conta.');
            return false;
        }

        const emailExists = this.userInfo.some(user => {
            return String(user.email).trim().toLocaleLowerCase() === cleanEmail;
        });

        if (emailExists) {
            alert('Email já cadastrado.');
            return false;
        }

        const newUser = new User(cleanBssName, cleanName, cleanEmail, password);
        this.userInfo.push(newUser);
        this.#save();
        return true;
    }

    //método de validação do usuário
    authenticateUser(email, password) {
        const normalizedEmail = String(email).trim().toLocaleLowerCase(); //normaliza o email para letras minúsculas

        return this.userInfo.find(user => {
            return String(user.email).trim().toLocaleLowerCase() === normalizedEmail
                && user.password === password;
        }) ?? null;
    }

    getUser() {
        return this.userInfo;
    }
}
