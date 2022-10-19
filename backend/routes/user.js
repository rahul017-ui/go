const router = require("express").Router();
const userController = require('../controllers/user');
const upload = require('../middleware/xlsxand csv');



router.post('/fileupload',upload.array('document'),userController.uploadfile);
router.post('/download',userController.getf);
router.get('/getfile',userController.getfile);


module.exports=router;

