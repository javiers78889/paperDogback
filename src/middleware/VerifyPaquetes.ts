import Paquetes from "../models/Paquetes.model"

export const VerifyPaquetes = async (req, res, next) => {

    const { tracking } = req.body


    const verificar = await Paquetes.findOne({ where: { tracking } })

    if (verificar) {
        res.status(401).json({ mensaje: 'Este paquete ya existe' })
    }
    else {
        next()
    }


}