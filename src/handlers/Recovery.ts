import Users from "../models/Users.model"

export const Recovery = async (req, res, bext) => {
    const { email, usuario, password } = req.body;

    try {
        const verify = await Users.findOne({ where: { usuario: usuario, email: email } })
        if (verify) {
            verify.update(password)
            res.json({mensaje:'Datos Actualizados'})
        }
        else {
            res.json({ mensaje: 'Datos Erroneos' })
        }

    } catch (error) {
        res.status(401).json({ mensaje: error })

    }


}