module.exports = function(app){
  var multer = require('multer');
  var upload = require('../controllers/upload.controller');
  app.get('/upload',upload.render);
  var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.jpg')
  }
});
  app.post('/finbokeh',multer({
      storage: storage,
      limits: {
       fileSize: 1000*1000*10, // not sure 10 MB 
       files: 1,
       fields: 1
      }
  })
  .single('upl'),upload.up);
}
