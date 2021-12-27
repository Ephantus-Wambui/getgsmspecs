const Gsm = require('../models/gsmspecs.js')
const path = require('path')

module.exports = (req, res) => {
    Gsm.create(req.body, (error, user) => {
        res.redirect('/')
    })
}
