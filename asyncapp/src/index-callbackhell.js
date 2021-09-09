//callback ; the out put of one callback will be input to another one.

//resolve => success
//reject => failure

let getUser = (resolve, reject) => {
    let user = {
        name: 'admin',
        password: 'admin'
    }
    //check user present
    if (user) {
        //async code
        setTimeout(resolve, 1000, user);
    } else {
        setTimeout(reject, 1000, { message: 'User not found not' });
    }

};

let login = (user, resolve, reject) => {
    //check  valid user
    if (user.name === 'admin' && user.password === 'admin') {
        //async code
        setTimeout(resolve, 1000, 'login success');
    } else {
        setTimeout(reject, 1000, 'login failed');
    }

};
let showDashboard = (status, resolve, reject) => {
    //check  valid user
    if (status === 'login success') {
        //async code
        setTimeout(resolve, 1000, 'You are admin');
    } else {
        setTimeout(reject, 1000, 'You are guest');
    }

};

getUser(user => {
    console.log(user)
    login(user, status => {
        console.log(status)
        showDashboard(status, apage => { 
            console.log(apage)
        }, gpage => { 
            console.log(gpage)
        });
    }, error => {
        console.log(error);
    });
}, error => {
    console.log(error);
});