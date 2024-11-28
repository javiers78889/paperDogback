import Users from "../models/Users.model"

export const VerifyExiste = async (req, res, next) => {

    const { email} = req.body
    if (!email ) {
        res.json({ mensaje: 'Faltan datos' })

    }
    else {

        const exist = await Users.findOne({ where: { email} })


        if (exist) {
            res.json({ mensaje: 'Este Usuario ya existe', exist })


        }
        else {
            next()
        }

    }

}
export const VerifyExi = async (req, res, next) => {

    const { email} = req.body
    if (!email ) {
        res.json({ mensaje: 'Faltan datos' })

    }
    else {

        const exist = await Users.findOne({ where: { email} })


        if (exist) {
            next()


        }
        else {
            res.json({ mensaje: 'Este Usuario No existe', exist })
        }

    }

}
export const VerifyExist = async (req, res, next) => {

    const { email, usuario } = req.body
    if (!email || !usuario) {
        res.json({ mensaje: 'Faltan datos' })

    }
    else {

        const exist = await Users.findOne({ where: { email, usuario } })


        if (exist) {
            res.json({ mensaje: 'Este Usuario ya existe', exist })


        }
        else {
            next()
        }

    }

}

export const VerifyExists = async (req, res, next) => {

    const { id } = req.body

    const exist = await Users.findByPk(id)


    if (exist) {
        res.status(200).json({ mensaje: 'Encontrado', exist })


    }
    else {
        next()
    }



}