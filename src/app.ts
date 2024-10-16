import express from 'express'
import cors from 'cors'
import { userRouter } from './app/modules/user/user.routes';


export const app = express();



app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user', userRouter)


