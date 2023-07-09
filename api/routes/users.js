import express from "express"
import {getUsers} from '../controllers/user.js'
import { inserirUsuario } from "../controllers/user.js"
const router = express.Router()

//router.get("/", getUsers)
router.get("/", inserirUsuario );
export default router;