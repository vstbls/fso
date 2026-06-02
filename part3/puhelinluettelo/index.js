const express = require('express')
const app = express()

app.use(express.json())

let ppl = [
    {
        id: '1',
        name: 'Arto Hellas',
        number: '040-123456'
    },
    {
        id: '2',
        name: 'Ada Lovelace',
        number: '39-44-5323523'
    },
    {
        id: '3',
        name: "Dan Abramov",
        number: '12-43-234345'
    },
    {
        id: '4',
        name: "Mary Poppendieck",
        number: "39-23-6423122"
    }
]

app.get('/info', (request, response) => {
    response.send(`<p>The phonebook has, like, uh, ${ppl.length} ppl in it?</p><p>${Date().toString()}</p>`)
})

app.get('/api/persons', (request, response) => {
    response.json(ppl)
})

app.get('/api/persons/:id', (request, response) => {
    const id = request.params.id
    const person = ppl.find(p => p.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    ppl = ppl.filter(p => p.id !== id)

    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})