async function loadJson(url) {
    let res = await fetch(url)

    if(res.status === 200) {
        let retJson = await res.json();
        return retJson;
    }else {
        throw new Error(res.status);
    }
}

loadJson('no-such-user.json')
    .catch(console.log);