function User(name) {
    this.name = name;
}

let user = new User("Kostya");
let user2 = new user.constructor("Misha");

console.log(user2.name);