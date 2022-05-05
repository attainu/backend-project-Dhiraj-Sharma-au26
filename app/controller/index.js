var newProductsMenus  = require('../model/newProducts')
const cloudinary = require('cloudinary').v2
const fs = require('fs/promises')

var feedback = require('../model/feedback')
var contactUs = require('../model/contactUs')
var blog = require('../model/blog')



cloudinary.config({
    cloud_name: 'natural-phinorma',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  })


exports.index = async(req,res)=>{
    const newProducts = await newProductsMenus.find()
    res.render('index',{newProducts:newProducts})
}



exports.aboutUs = async (req,res)=>{
  const feedbacks = await feedback.find()
  res.render('aboutUs',{feedbacks:feedbacks})
}
exports.aboutUsPost = async(req,res)=>{
    var data = req.body
    var fileData = req.file
    
    
    if (fileData) {

        //Local path - Disk Storage
        cloudinary.uploader.upload(`./file/${fileData.filename}`,async function (error, result) {
          console.log(result, error)
          data.imageUrl = result.url
          //Deleting the file in local
          await  fs.unlink(`./file/${fileData.filename}`,(err)=>{
                    if (err) throw err;
                    console.log("deleted successfully")
          })
          const feedbacks = await feedback.create({
            name : data.name,
            avtar : data.imageUrl,
            role : data.role,
            comment : data.comment
          })
          
        })
    
    }
    

    res.redirect('/aboutUs')
}




exports.blog = async(req,res)=>{
  const blogs = await blog.find()
  res.render('blog',{blogs:blogs})
}


exports.contactUs = (req,res)=>{
  res.render('contactUs')
}

exports.contactUsPost = async(req,res)=>{
  
  const data = await contactUs.create({
    name : req.body.name,
    email : req.body.email,
    subject: req.body.subject,
    message: req.body.message
  })
  res.redirect('/contactUs')
}