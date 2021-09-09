
function blockMe(message) {
    console.log(message)
}
let getSuccessPromise = () => {
    return Promise.resolve('success'); //retuns promise object
};

let getFailurePromise = () => {
    return Promise.reject('error'); //retuns promise object
};
blockMe('start')
getSuccessPromise()
    .then(res => console.log(res));

getFailurePromise()
    .catch(res => console.log(res));

//error and failure
let login = (username = 'admin', password = 'admin') => {
    if (username === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }
};
login()
    .then(res => console.log(res))
    .catch(res => console.log(res));
blockMe('end')
