export function contarTurnosPorProfesional(turnos) {
    // Selecciona los turnos de cada profesional.
    const turnosAgustina = turnos.filter((turno) => {
        return turno.profesional === 'Agustina'
    })

    const turnosRocio = turnos.filter((turno) => {
        return turno.profesional === 'Rocio'
    })

    // Devuelve el detalle del proceso y las cantidades.
    return {
        proceso: 'Conteo de turnos por profesional',
        totalProcesados: turnos.length,
        resultado: {
            Agustina: turnosAgustina.length,
            Rocio: turnosRocio.length
        }
    }
}