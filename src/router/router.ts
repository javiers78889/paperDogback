import { Router } from "express";
import { trackeo } from "../handlers/handlerTracking";
import { VerifyTracking } from "../middleware/VerifyTracking";
import { Login } from "../handlers/Login";
import { VerifyExist, VerifyExists } from "../middleware/VerifyExist";
import { createUser, getUsers, updateUser } from "../handlers/handlerUser";
import { Authorization } from "../middleware/Authorization";
import { VerifyPaquetes } from "../middleware/VerifyPaquetes";
import { createPaquetes, deletePaquetes, getPaquetes, updatePaquetes } from "../handlers/handlerPaquetes";
import { Recovery } from "../handlers/Recovery";
import { Usuarios } from "../handlers/Usuarios";
import { Validacion } from "../handlers/Validacion";
import { Saludo, SendMessage } from "../middleware/Nodemailer";


export const router = Router()

//Api 17track
router.post('/tracking', VerifyTracking, trackeo)
//logueo
router.post('/login', Login)
//recovery password
router.post('/recovery', Recovery)

//paquetes exclusivos
router.post('/userpaquetes', Authorization, Usuarios)

//Usuarios
router.get('/users', Authorization, getUsers)// admin
router.post('/users', VerifyExist, createUser, Saludo)
router.put('/users', updateUser)

//paquetes
router.get('/paquetes', Authorization, getPaquetes)
router.post('/paquetes', Authorization, VerifyPaquetes, createPaquetes, SendMessage)
router.put('/paquetes', Authorization, updatePaquetes)
router.delete('/paquetes', Authorization, deletePaquetes)


//Consultar paquete o Usuario si existe

router.post('/paquetesexist', Authorization, Validacion)
router.post('/usuarioexist', VerifyExists)
router.post('/usuarioexistemail', VerifyExist)
