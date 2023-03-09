class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let res = await fetch(url);

    if(res.status === 200) {
        return res.json();
    }else {
        throw new HttpError(res);
    }
}

async function demoGithubUser() {

    let user;
    while(true) {
        let name = "iliakan";

        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch(err) {
            if (err instanceof HttpError && err.response.status === 404) {
                console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }


    console.log(`Полное имя: ${user.name}.`);
    return user;
}

demoGithubUser();