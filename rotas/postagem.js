const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) => {
    res.json({
        titulo:'testando',
        conteudo: 'era uma vesz testando',
        autor: 'livio'
    })
})

module.exports = router