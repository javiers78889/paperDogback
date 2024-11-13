import express from 'express'
import cors from 'cors'
import { router } from './router/router';
import db from './db/db';

export const app = express()


const connectDB = async () => {
    try {
        await db.authenticate()
        db.sync()
        console.log('Conexion Exitosa')

    } catch (error) {
        console.error(error)

    }
}
connectDB()
app.use(cors({
    origin: '*',
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/', router)

