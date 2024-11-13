import Users from "../models/Users.model"

export const VerifyExist = async (req, res, next) => {

    const { email } = req.body

    const exist = await Users.findOne({ where: { email } })


    if (exist) {
        res.status(401).json({ mensaje: 'Este Usuario ya existe' , exist })
        
        
    }
    else {
        next()
    }



}