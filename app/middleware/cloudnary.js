const multer = require('multer')
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./file')
    },
    filename:function(req,file,cb){
        const file_ext = Date.now()
        cb(null,`${file_ext}-${file.originalname}`)
    }
})


const uploads = multer({storage:storage})

module.exports = uploads
