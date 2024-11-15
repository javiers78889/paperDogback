import { Router } from "express";
import { trackeo } from "../handlers/handlerTracking";
import { VerifyTracking } from "../middleware/VerifyTracking";
import { Login } from "../handlers/Login";
import { VerifyExist } from "../middleware/VerifyExist";
import { createUser, getUsers, updateUser } from "../handlers/handlerUser";
import { Authorization } from "../middleware/Authorization";
import { VerifyPaquetes } from "../middleware/VerifyPaquetes";
import { createPaquetes, deletePaquetes, getPaquetes, updatePaquetes } from "../handlers/handlerPaquetes";
import { Recovery } from "../handlers/Recovery";
import { Usuarios } from "../handlers/Usuarios";


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
router.post('/users', VerifyExist, createUser)
router.put('/users', VerifyExist, Authorization, updateUser)

//paquetes
router.get('/paquetes', Authorization, getPaquetes)
router.post('/paquetes', Authorization, VerifyPaquetes, createPaquetes)
router.put('/paquetes', Authorization, updatePaquetes)
router.delete('/paquetes', Authorization, deletePaquetes)