import express from 'express'
import { configurarRutas } from './modules/rutas.mjs'

const PUERTO = 3000
const app = express()

configurarRutas(app)

app.listen(PUERTO, () => {
    console.log(`Servidor corriendo en http://localhost:${PUERTO}`)
})