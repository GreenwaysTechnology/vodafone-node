//arrow functions are simple way of writing anonmous functions

//es 5 style
let hello = function () {
    console.log('hello');
};
hello();
//es 6 style - arrow
hello = () => {
    console.log('hello');
};
hello()
//if there is single line of body , you can remove {}
hello = () => console.log('hello');
hello();
//args and parameters
let add = function (a, b) {
    return a + b;
};
console.log(add(10, 10));

add = (a, b) => {
    return a + b;
};
console.log(add(10, 10));
//function returns only,remove {} and return statement 
add = (a, b) => a + b;
console.log(add(10, 10));

add = (a = 1, b = 1) => a + b;
console.log(add());
console.log(add(10, 10));

//single param,no default , return the same
let message = name => name;
console.log(message('subramanian'))
//higher order function and arrow: function as parameter

let login = function (username, password, success, failure) {
    if (username === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }
}
login('admin', 'admin', function (status) {
    console.log(status)
}, function (err) {
    console.log(err);
})
login = (username, password, success, failure) => {
    if (username === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }
}
login('admin', 'admin', status => console.log(status), err => console.log(err));
login('ff', 'xxx', status => console.log(status), err => console.log(err));

