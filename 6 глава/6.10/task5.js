function askPassword(ok, fail) {
    let password = "rocksta";
    if (password === "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    login(result) {
        console.log( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?