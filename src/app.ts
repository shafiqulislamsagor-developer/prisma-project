import { Router } from "express"

export const app = Router()



app.get('/', (req, res) => {
    res.send({
        message: 'Hello, World!'
    })
})

