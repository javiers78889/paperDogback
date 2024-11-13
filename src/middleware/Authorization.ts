import jwt from 'jsonwebtoken'

export const Authorization = (req, res, next) => {
    const header = req.get('Authorization')

    if (!header) {
        res.status(401).json({ mensaje: 'ups ,parece que no estas autorizado' })
    }

    const token = header.split(' ')[1];


    try {
        let decodedtoken;
        decodedtoken = jwt.verify(token, 'SECRETO')
        next();
    } catch (error) {
        res.status(401).json({ mensaje: 'Error con el Token', error })
    }




}