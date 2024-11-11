import dotenv from 'dotenv'
dotenv.config();

const token = process.env.TOKEN;
const headers: {
    'Content-Type': string;
    '17token': string;
    Accept: string;
} = {
    'Content-Type': 'application/json',
    '17token': token,
    'Accept': 'application/json',
};

export const cabecera = ()=>{
    return headers
}