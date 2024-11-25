import e from "express";
import Paquetes from "../models/Paquetes.model"
import Users from "../models/Users.model";

export const createPaquetes = async (req, res,next) => {

    const { tracking, email, plan, peso, estado, total } = req.body

    const obj = {
        tracking: tracking.trim(),
        email: email.trim(),
        plan: plan.trim(),
        peso: peso,
        total: total,
        estado: estado.trim()
    }

    const crear = await Paquetes.create(obj);


    try {
        await crear.save()
        res.status(201).json({ mensaje: 'Registrado' })
        next()

    } catch (error) {

        res.status(401).json({ mensaje: error })

    }

}

export const getPaquetes = async (req, res) => {
    try {
        const paquetes = await Paquetes.findAll()
        const usuarios = await Users.findAll()

        const obj = { paquetes, usuarios }

        res.status(201).json(obj)

    } catch (error) {
        res.status(401).json({ mensaje: error })
    }
}

export const updatePaquetes = async (req, res, next) => {
    const { id } = req.body;

    try {
        const editar = await Paquetes.findByPk(id)

        if (editar) {
            editar.update(req.body)
            res.json({ mensaje: 'Paquete Entregado' })
        }
        else {
            res.status(501).json({ mensaje: 'Este Articulo no existe' })
        }

    } catch (error) {
        res.status(501).json({ mensaje: error })
    }

}


export const deletePaquetes = async (req, res, next) => {

    const { id } = req.body
    try {

        const eliminar = await Paquetes.findByPk(id)

        if (eliminar) {
            eliminar.destroy()
            res.status(201).json({ mensaje: 'Eliminado' })
        }

    } catch (error) {
        res.status(501).json({ mensaje: error })
    }
}
