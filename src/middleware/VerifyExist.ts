import Users from "../models/Users.model"

export const VerifyExist = async (req, res, next) => {

    const { email,id } = req.body

    const exist = await Users.findOne({ where: { email   } })


    if (exist) {
        res.json({ mensaje: 'Este Usuario ya existe' , exist })
        
        
    }
    else {
        next()
    }



}

export const VerifyExists = async (req, res, next) => {

    const { id } = req.body

    const exist = await Users.findByPk(id)


    if (exist) {
        res.status(200).json({ mensaje: 'Encontrado' , exist })
        
        
    }
    else {
        next()
    }



}