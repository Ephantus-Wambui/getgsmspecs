const Gsm= require('../models/gsmspecs.js');

module.exports = async (req,res)=>{
    const gsm = await Gsm.find().sort({ datePosted: -1 })
    res.render('index', {
        gsm
    })
}
