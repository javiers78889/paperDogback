import Users from "../models/Users.model"
import bcrypt from 'bcrypt'
import { check } from "express-validator"
import jwt from 'jsonwebtoken'

export const Login = async (req, res, next) => {
    await check('email').notEmpty().withMessage('Email Null').run(req)
    await check('password').notEmpty().withMessage('Password Null').run(req)
    const { email, password } = req.body

    const usuario = await Users.findOne({ where: { email } })

    if (!usuario) {
        res.status(401).json({ mensaje: 'Este Usuario no existe' })
    }
    else {
        const verify = await bcrypt.compare(password.trim(), usuario.dataValues.password)

        if (!verify) {
            res.status(401).json({ mensaje: 'Password incorrecto' })
        }
        else {
            const token = jwt.sign({
                email: usuario.dataValues.email,
                role: usuario.dataValues.role,
                plan: usuario.dataValues.plan
            }, 'SECRETO')
            res.json({ token })
        }


    }






}