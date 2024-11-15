import e from "express";
import Paquetes from "../models/Paquetes.model"

export const createPaquetes = async (req, res) => {

    const { tracking, email, plan, peso, estado, total } = req.body

    const obj = {
        tracking: tracking.trim(),
        email: email.trim(),
        plan: plan.trim(),
        peso: peso.trim(),
        total: total.trim(),
        estado: estado.trim()
    }

    const crear = await Paquetes.create(obj);


    try {
        await crear.save()
        res.status(201).json({ mensaje: 'Registrado' })

    } catch (error) {

        res.status(401).json({ mensaje: error })

    }

}

export const getPaquetes = async (req, res) => {
    try {
        const paquetes = await Paquetes.findAll()

        res.status(201).json(paquetes)

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