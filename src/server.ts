import express from 'express'
import cors from 'cors'
import { router } from './router/router';

export const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/', router)

