# Parcial 1 - Aplicaciones Web 2

Alumno: Sebastian De Diego  
Comisión: MB

## Descripción

Backend de consulta de turnos de un consultorio de kinesiología,
desarrollado con Node.js, Express y módulos ES.

Los turnos se leen desde datos/turnos.json en cada solicitud.

## Ejecución

Desde la carpeta PARCIAL1, instalar las dependencias:

```bash
pnpm install
```

Iniciar el servidor:

```bash
node index.mjs
```

El servidor utiliza el puerto 3000.

## Rutas

- GET /api/turnos: devuelve todos los turnos.
- GET /api/turnos/:id: devuelve el turno correspondiente al ID.
- GET /contar-turnos-por-profesional: cuenta los turnos de Agustina
  y Rocio y devuelve el resultado.

Si el turno no existe, devuelve el estado 404.
Los errores de lectura, procesamiento o escritura devuelven el estado 500.

## Middleware

El middleware guarda el resultado del conteo en datos/resultado.json
antes de enviar la respuesta. El archivo se actualiza en cada ejecución
del procedimiento.

## Pruebas

El archivo pruebas.http contiene las consultas para ejecutar
con la extensión REST Client de VS Code.

Los datos de los pacientes son ficticios.