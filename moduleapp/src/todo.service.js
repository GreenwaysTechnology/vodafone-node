
class TodoService {
    findAll() {
        return 'Todoservice';
    }
    //callback api
    // findAll(callback) {
    //     setTimeout(callback,1000,'todos')
    // }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, 'todos')
        })
    }
}
module.exports = TodoService