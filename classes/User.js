export class User {
    constructor(bssName, name, email, password) {
        this.bssName = bssName;
        this.name = name;
        this.email = email;
        this.password = password; // TODO: nunca guardar senha em texto puro em produção (usar hash no back-end)
    }
}
