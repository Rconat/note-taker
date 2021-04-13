const path = require("path")
const express = require("express")
const fs = require("fs")

const app = express()
var PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Note Taker App")
})

app.listen(PORT, () => {
    console.log(`Server is listening on: http://localhost:${PORT}`)
})