const { Router } = require("express")
const router = Router()

const productos = require('../prod_data.json')

router.get('/productos', (req, res) => {
    res.json(productos)  //el servidor envia un obj json
})

router.post('/productos', (req, res) => {
    //console.log(req.body)
    const {name, precio, marca} = req.body
    const id = productos.length + 1
    if (name && precio && marca) {
        const newProduct = {...req.body, id}
        console.log(newProduct)
        productos.push(newProduct)
        res.json(productos)
    } else {
        res.status(500).json({error:'el registro no fue guardado'}) 
    }
 })

module.exports = router