import { check } from 'express-validator'
import bcrypt from 'bcrypt'
import Users from '../models/Users.model'

export const createUser = async (req, res, next) => {
    await check('email').notEmpty().withMessage('El email esta vacio').run(req)
    await check('usuario').notEmpty().withMessage('El usuario esta vacio').run(req)
    await check('password').notEmpty().withMessage('El password esta vacio').run(req)
    await check('role').notEmpty().withMessage('El role esta vacio').run(req)
    await check('plan').notEmpty().withMessage('El plan esta vacio').run(req)

    const { email, usuario, password, role, plan } = req.body;

    const encriptar = await bcrypt.hash(password, 12)


    const obj = { email, usuario, password: encriptar, role, plan }

    const Guardar = await Users.create(obj)

    try {
        await Guardar.save()
        res.status(200).json({ mensaje: 'Usuario Creado', Guardar })
        next()

    } catch (error) {
        res.status(401).json({ mensaje: error })

    }

}


export const getUsers = async (req, res) => {

    try {

        const usuarios = await Users.findAll()

        res.status(201).json(usuarios)

    } catch (error) {
        res.status(401).json({ mensaje: error })

    }
}

export const updateUser = async (req, res, next) => {

    const { id, email, usuario, role, plan } = req.body;

    try {
        const editar = await Users.findOne({ where: { id } })



        await editar.update(req.body)
        res.status(201).json({ mensaje: 'Actualizado' })


    } catch (error) {
        res.status(401).json({ mensaje: error })
    }


}
