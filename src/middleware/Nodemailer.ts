import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()
const PASSWORD = process.env.PASSWORD

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: "paperdogshopping@gmail.com",
        pass: `${PASSWORD}`,
    },
})


export const SendMessage = async (req, res) => {
    const { email, tracking } = req.body
    const info = await transporter.sendMail({
        from: '"PAPERDOG SHOPPING🐶 " <paperdogsopping@gmail.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Haz recibido Un Nuevo Paquete 📦", // Subject line
        text: "Hola!", // plain text body
        html: `<b>Haz Recibido un nuevo paquete<br><br>Numero de tracking: ${tracking}.<br><br> puedes revisar tus facturas en nuestro sitio web : <br><a href="www.paperdogshopping.shop">www.paperdogshopping.shop</a></b>`, // html body
    });
}
export const Saludo = async (req, res) => {
    const { email, password } = req.body
    const info = await transporter.sendMail({
        from: '"PAPERDOG SHOPPING🐶 " <paperdogsopping@gmail.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Gracias por Registrarte Con Nosotros📦", // Subject line
        text: "Hola!", // plain text body
        html: `<b>Tus credenciales para loguearte en nuestra pagina son: <br>email: ${email} password:${password} <br> puedes revisar tus facturas en nuestro sitio web : <br><a href="www.paperdogshopping.shop">www.paperdogshopping.shop</a></b>`, // html body
    });

}