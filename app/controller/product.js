const toolMenu = require('../model/toolMenu')
var vegetablelMenus = require('../model/vegetableMenu')
var seedsMenu = require('../model/seedsMenu')


exports.index = (req,res)=>{
    res.render('product/home')
}


exports.tools = async(req,res)=>{
    const tools = await toolMenu.find()

    res.render('product/tools',{tools : tools})
}

exports.vegetables = async(req,res)=>{
    const vegetables = await vegetablelMenus.find()

    res.render('product/vegetables',{vegetables : vegetables})
}
exports.seeds = async(req,res)=>{
    const seeds = await seedsMenu.find()
    res.render('product/seeds',{seeds : seeds})
}

