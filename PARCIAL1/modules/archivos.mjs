import fsp from 'node:fs/promises'
import path from 'node:path'

const RUTA_TURNOS = path.join('./datos/turnos.json')
const RUTA_RESULTADO = path.join('./datos/resultado.json')

export async function leerTurnos() {
    const contenido = await fsp.readFile(RUTA_TURNOS, 'utf-8')
    return JSON.parse(contenido)
}

export async function guardarResultado(resultado) {
    const contenido = JSON.stringify(resultado, null, 2)
    await fsp.writeFile(RUTA_RESULTADO, contenido, 'utf-8')
}