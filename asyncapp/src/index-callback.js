//non blocking implementation : timers 

// timers,network io code

function delay(action){
   //non blocking high level api
   setTimeout(action,5000);
}
function blockMe(message){
    console.log(message)
}
function tick(callback){
    setInterval(callback,1000)
}
function justRunAsync(){
    setImmediate(function(){
        console.log('runs in the check phase')
    })
}
blockMe('start')
justRunAsync();
delay(function(){
    console.log('got it')
});
tick(function(){
    console.log('ping')
})
blockMe('end')