const Gsm =require('../models/gsmspecs.js')

module.exports = async (req, res) => {
    const gsm = await Gsm.findOne({ slug: req.params.slug })
    console.log(gsm)
    res.render('specs',{
        specs: true,
        gsm
    });
}
