import axios from "axios";
import dotenv from 'dotenv'
import { cabecera } from "../Headers/Headers";
const Api = 'https://api.17track.net/track/v2.2/register'

export const VerifyTracking = async (req, res, next) => {
    const { number } = req.body;
    
    const headers = cabecera()
    const body = {
        number: number,
    };

    try {
        const registro = await axios.post(Api, [body], { headers });
        next()
    } catch (error) {
        console.error(error)

    }



}