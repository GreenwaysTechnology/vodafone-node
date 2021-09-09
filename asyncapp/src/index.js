
let getUser = () => {
    console.log('user is called');
    return new Promise((resolve, reject) => {
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
    })
};

let login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        //check  valid user
        if (user.name === 'admin' && user.password === 'admin') {
            //async code
            setTimeout(resolve, 1000, 'login success');
        } else {
            setTimeout(reject, 1000, 'login failed');
        }
    })


};
let showDashboard = status => {
    console.log('showdashboard is called')
    return new Promise((resolve, reject) => {
        //check  valid user
        if (status === 'login success') {
            //async code
            setTimeout(resolve, 1000, 'You are admin');
        } else {
            setTimeout(reject, 1000, 'You are guest');
        }
    });

};


// getUser()
//     .then(user => login(user))
//     .then(status => showDashboard(status))
//     .catch(error => console.log(error));

// async function main(){

// }
// main();
let main = async () => {
    try {
        let user = await getUser()
        let status = await login(user);
        let page = await showDashboard(status);
        console.log(user, status, page);
    }
    catch (err) {
        console.log(err);
    }
};
main()
