const info = require('./mylibe')
const { name } = require('./mylibe')
const TodoService = require('./todo.service')
console.log(info, name);

let service = new TodoService();
// console.log(service.findAll());
// service.findAll(todos=>console.log(todos))
const main = async () => {
    try {
        const todos = await service.findAll();
        console.log(todos);
    }
    catch (err) {

    }

}
main();