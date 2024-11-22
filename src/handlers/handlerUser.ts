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

    const { id, email, usuario, password, role, plan } = req.body;

    try {
        const editar = await Users.findOne({ where: { id } })

        const verify = await bcrypt.compare(password.trim(), editar.dataValues.password)
        console.log(editar.dataValues.password)
        console.log(req.body)

        if (verify) {

            res.json({mensaje:'Contasena igual'})

        }
        else {
            console.log('no era igual')
            const obj = { email, usuario, role, plan }
            await editar.update(obj)
            res.status(201).json({ mensaje: 'Actualizado' })

        }



    } catch (error) {
        res.status(401).json({ mensaje: error })
    }


}
