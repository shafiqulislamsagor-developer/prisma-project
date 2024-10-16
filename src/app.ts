import express from 'express'
import cors from 'cors'
import { userRouter } from './app/modules/user/user.routes';


export const app = express();



app.use(cors());

app.use('/api/v1/user', userRouter)


