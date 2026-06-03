const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.static('dist'))
app.use(express.json())

morgan.token('json', (req) => {
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :json'))

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

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: 'your request is missing a name Mister..'
        })
    }
    if (!body.number) {
        return response.status(400).json({
            error: 'your request is missing a number Mister..'
        })
    }
    if (ppl.find(p => p.name === body.name)) {
        return response.status(400).json({
            error: 'that name is already occupied Sir...'
        })
    }

    const newPerson = {
        id: String(Math.floor(Math.random() * (2**31))),
        name: body.name,
        number: body.number,
    }

    ppl = ppl.concat(newPerson)

    response.json(newPerson)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})