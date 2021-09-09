//Promise constructor ; when you are converting an existing callback apis into promise style.

// function delay(callback) {
//     setTimeout(callback, 5000, "hello")
// }
// delay((message) => console.log(message))


function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 5000, "hello")
    })

}
delay().then(res=>console.log(res))

