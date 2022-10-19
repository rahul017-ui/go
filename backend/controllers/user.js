const document =require('../models/xlsx and csv');
var path = require('path');


const getfile= async (req,res)=>{
    try {

        const doc = await document.find();
        console.log(doc);
        res.json(doc);
        
    
      } catch (error) {
        res.json({ message: "error" });
      }
    
}

const getf=async (req,res)=>{
    filepath = path.join(__dirname)+ "../uploadxlsxandcsv"
    console.log(__dirname);
    res.sendFile(filepath);
}


const uploadfile = async (req, res) => {
    try {

        let file = await new document({
        })
        if (req.file) {
            file.document= req.file.path
        }
        console.log(file);
        file.save();
        res.send("file uploaded")

    } catch (error) {
        res.send({ message: error });
    }

}
module.exports={
    uploadfile,
    getfile,
    getf

}