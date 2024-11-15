import Paquetes from "../models/Paquetes.model";

export const Usuarios = async (req, res, next) => {
    const { email } = req.body;
    try {

        const filtro = await Paquetes.findAll({ where: { email } })

        if (filtro) {
            res.json(filtro)
        }
        else {
            res.json({ mensaje: 'No se encontraron paquetes' })
        }

    } catch (error) {
        res.status(401).json({ mensaje: error })

    }
}