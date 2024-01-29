var express = require('express')
var app = express()
var path = require('path')

app.use(express.static('dist'))

app.get('*', (_req, res) => {
	res.sendFile(path.join(__dirname + '/dist/index.html'));
})

app.listen(3000)

console.log("Server started on localhost:3000")
