import axios from "axios";
import { cabecera } from "../Headers/Headers";



const ApiIngfo = 'https://api.17track.net/track/v2.2/gettrackinfo'



export const trackeo = async (req, res) => {
    const { number } = req.body;

    const headers = cabecera()
    const body = {
        number: number,
    };

    try {
        const registro = await axios.post(ApiIngfo, [body], { headers });
        res.json(registro.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error en la solicitud a la API de 17track');
    }
};
