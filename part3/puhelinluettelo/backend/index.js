require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const Person = require('./models/person')

const app = express()
app.use(express.static('dist'))
app.use(express.json())

morgan.token('json', (req) => {
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :json'))

app.get('/info', (request, response) => {
    Person.countDocuments().then(count => {
        response.send(`<p>The phonebook has, like, uh, ${count} ppl in it?</p><p>${Date().toString()}</p>`)
    })
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    })
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndDelete(request.params.id)
        .then(res => {
            response.status(204).end()
        })
        .catch(err => next(err))
})

app.post('/api/persons', (request, response, next) => {
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
    Person.find({name: body.name}).then(res => {
        if (res.length > 0) {
            return response.status(400).json({
                error: 'that name is already occupied Sir...'
            })
        }
    })

    const newPerson = new Person ({
        id: String(Math.floor(Math.random() * (2**31))),
        name: body.name,
        number: body.number,
    })

    newPerson.save()
        .then(savedPerson => {
            response.json(savedPerson)
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
    const { name, number } = request.body

    Person.findById(request.params.id)
        .then(person => {
            if (!person) {
                return response.status(404).end()
            }

            person.name = name
            person.number = number

            return person.save().then((updatedPerson) => {
                response.json(updatedPerson)
            })
        })
        .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({error: 'malformatted id'})
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({error: error.message})
    }
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`)
})