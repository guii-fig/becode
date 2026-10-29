// Representa uma conta de usuário com os dados informados no cadastro.
export class User {
    // Recebe os valores e os associa à nova instância da classe.
    constructor(bssName, name, email, password) {
        this.bssName = bssName;
        this.name = name;
        this.email = email;
        // Em uma aplicação real, senhas nunca devem ser armazenadas sem proteção no navegador.
        this.password = password; // TODO: nunca guardar senha em texto puro em produção (usar hash no back-end)
    }
}
