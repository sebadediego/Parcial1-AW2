import { leerTurnos } from './archivos.mjs'
import { contarTurnosPorProfesional } from './procesos.mjs'
import { guardarResultadoMiddleware } from '../middlewares/guardarResultado.mjs'

export function configurarRutas(app) {
    // Consulta de todos los turnos.
    app.get('/api/turnos', async (req, res) => {
        try {
            const turnos = await leerTurnos()
            res.json(turnos)
        } catch (error) {
            console.error(error.message)
            res.status(500).json({
                mensaje: 'Error al consultar los turnos'
            })
        }
    })

    // Consulta de un turno por su ID.
    app.get('/api/turnos/:id', async (req, res) => {
        try {
            const id = Number(req.params.id)
            const turnos = await leerTurnos()

            const turnosFiltrados = turnos.filter((turno) => {
                return turno.id === id
            })

            if (turnosFiltrados.length > 0) {
                res.json(turnosFiltrados[0])
            } else {
                res.status(404).json({
                    mensaje: 'Turno no encontrado'
                })
            }
        } catch (error) {
            console.error(error.message)
            res.status(500).json({
                mensaje: 'Error al consultar el turno'
            })
        }
    })

    // Procesa, guarda y devuelve el resultado.
    app.get(
        '/contar-turnos-por-profesional',
        async (req, res, next) => {
            try {
                const turnos = await leerTurnos()

                req.resultadoProceso = contarTurnosPorProfesional(turnos)
                next()
            } catch (error) {
                console.error(error.message)
                res.status(500).json({
                    mensaje: 'Error al contar los turnos'
                })
            }
        },
        guardarResultadoMiddleware,
        (req, res) => {
            res.json(req.resultadoProceso)
        }
    )
}