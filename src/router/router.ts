import { Router } from "express";
import { trackeo } from "../handlers/handlerTracking";
import { VerifyTracking } from "../middleware/VerifyTracking";


export const router = Router()


router.post('/tracking', VerifyTracking, trackeo)