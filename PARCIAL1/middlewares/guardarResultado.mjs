import { guardarResultado } from '../modules/archivos.mjs'

export async function guardarResultadoMiddleware(req, res, next) {
    try {
        await guardarResultado(req.resultadoProceso)
        next()
    } catch (error) {
        console.error(error.message)
        res.status(500).json({
            mensaje: 'Error al guardar el resultado'
        })
    }
}