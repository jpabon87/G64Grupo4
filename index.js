const express = require('express')
const app = express()
const morgan = require('morgan')

//Configuración
app.set('port', process.env.PORT || 8081)
app.set('json spaces', 2)

//middleware : funcion que procesa datos antes de recibirlos el servidor.
app.use(morgan('dev'))
app.use(express.json()) //habilita el servidor para recibir y procesar json.
app.use(express.urlencoded({extended: false})) //datos de input en formulario.

// rutas
app.use(require('./rutas/productos'))

//Iniciación de servidor
app.listen(app.get('port'), () => {
    console.log(`servidor escuchando en el puerto ${app.get('port')}`)
})