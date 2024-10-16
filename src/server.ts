import express from 'express'
import cors from 'cors'
import { app } from './app';
import { Server } from 'http';


const server = express();

server.use(cors());
server.use(app)



const port = 3000;

async function main() {
    const serverMain: Server = server.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`)
    })
}


main()
