import { Server } from "http"
import { app } from "./app"
require('dotenv').config()

const port = process.env.PORT

async function main() {
    const serverMain: Server = app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)
    })
}


main().catch(err => {
    console.error(err)
    process.exit(1)
})
