import dotenv from 'dotenv'
import { Sequelize } from 'sequelize-typescript'
import Users from '../models/Users.model'
import Paquetes from '../models/Paquetes.model'


dotenv.config()


const database_url = process.env.DATABASE_URL


const db = new Sequelize(database_url, {
    dialect: 'postgres',
    models: [Users, Paquetes]
})


export default db;