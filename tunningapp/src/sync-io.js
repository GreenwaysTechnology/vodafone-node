const express = require('express');
const fs = require('fs')
const path = require('path')
const tmp = path.join(__dirname, 'tmp')

const app = express();

app.get('/', function (req, res, next) {
    sleep(10) // mimic sync I/O by sleeping 10ms sync
    res.send({})
    next()
})
app.listen(3000)

process.on('SIGINT', function () {
    console.error('Caught SIGINT, shutting down.')
    try { fs.unlinkSync(tmp) } catch (e) { }
})

function sleep(ms) {
    var now = Date.now()
    while (Date.now() < now + ms) {
        fs.closeSync(fs.openSync(tmp, 'a'))
    }
}