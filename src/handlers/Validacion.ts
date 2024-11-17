import Paquetes from "../models/Paquetes.model"

export const Validacion = async (req, res, next) => {
    const { id } = req.body
    try {
        const response = await Paquetes.findByPk(id)

        if (response) {
            res.json(response)
        } else {
            res.json({ mensaje: 'Este No existe' })
        }

    } catch (error) {

        res.json({ mensaje: error })

    }
}