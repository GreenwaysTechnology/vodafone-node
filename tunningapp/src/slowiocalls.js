const express = require('express');
const async = require('async');

const app = express();

function slowdown(callback) {
    //parrel processing
    async.series([
        (done1) => setTimeout(done1, 1),
        (done1) => async.parallel([
            (done2) => setTimeout(done2, 1),
            (done2) => setTimeout(done2, 1),
            (done2) => setTimeout(done2, 1),
            (done2) => setTimeout(done2, 1),
            (done2) => setTimeout(done2, 1)
        ], done1)
    ], callback)
}


//slow down network io calls
app.get("/", (req, res, next) => {
    //slow down simulation
    slowdown(function () {
        res.send({})
        next();
    })
})


app.listen(3000);