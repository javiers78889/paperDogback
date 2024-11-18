import Users from "../models/Users.model"
import bcrypt from 'bcrypt'
import { check } from "express-validator"
import jwt from 'jsonwebtoken'
import Paquetes from "../models/Paquetes.model"

export const Login = async (req, res, next) => {
    await check('email').notEmpty().withMessage('Email Null').run(req)
    await check('password').notEmpty().withMessage('Password Null').run(req)
    const { email, password } = req.body

    const usuario = await Users.findOne({ where: { email } })

    if (!usuario) {
        res.json({ mensaje: 'Datos Incorrectos' })
    }
    else {
        const verify = await bcrypt.compare(password.trim(), usuario.dataValues.password)

        if (!verify) {
            res.json({ mensaje: 'Datos incorrectos' })
        }
        else {
            const token = jwt.sign({
                email: usuario.dataValues.email,
                usuario:usuario.dataValues.usuario,
                role: usuario.dataValues.role,
                plan: usuario.dataValues.plan
            }, 'SECRETO')
            const paquetes = await Paquetes.findAll()
            const usuarios = await Users.findAll()
    
            const obj = { token,paquetes, usuarios }
            res.json({ obj })
        }


    }






}
