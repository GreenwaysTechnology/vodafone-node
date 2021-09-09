
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

// getUser(user => {
//     console.log(user)
//     login(user, status => {
//         console.log(status)
//         showDashboard(status, apage => { 
//             console.log(apage)
//         }, gpage => { 
//             console.log(gpage)
//         });
//     }, error => {
//         console.log(error);
//     });
// }, error => {
//     console.log(error);
// });

//promise chaining
// getUser().then(user => {
//     console.log('user is called');
//     login(user).then(status => {
//         console.log('login is called')
//         showDashboard(status)
//             .then(page => console.log('showdashboard is called'))
//             .catch(error => console.log(errror));
//     }).catch(err => {
//         console.log(err);
//     })
// }).catch(err => {
//     console.log(err);
// })
//v2
// getUser()
//     .then(user => {
//         return login(user)
//     })
//     .then(status => {
//         return showDashboard(status)
//     })
//     .catch(error => console.log(error));

getUser()
    .then(user => login(user))
    .then(status => showDashboard(status))
    .catch(error => console.log(error));