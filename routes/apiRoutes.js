const db = require("../db/db.json")
const fs = require('fs')
const uuid = require('uuid')

module.exports = function (app) {

    // app.get
    app.get('/api/notes', (req, res) => {
        res.send(db)
    })

    // app.post
    app.post('/api/notes', (req, res) => {
        const addNote = req.body
        addNote.id = uuid.v4()

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) throw err

            // concat addNote onto newNotes
            const newNotes = JSON.parse(data).concat(addNote)
            fs.writeFile('./db/db.json', JSON.stringify(newNotes), (err, data) => {
                if (err) throw err
                res.json(newNotes)
            })
        })
    })

    // app.delete
    app.delete('/api/notes/:id', (req, res) => {
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) throw err

            const notes = JSON.parse(data)
            let results = notes.filter(obj => {
                return obj.id !== req.params.id
            })

            fs.writeFile('./db/db.json', JSON.stringify(results), (err, data) => {
                if (err) throw err
                res.json(results)
            })
        })
    })
}