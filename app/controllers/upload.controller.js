exports.render = function (req, res){
  res.render('upload');
}
exports.up = function(req, res){
  var lwip = require('lwip');
  var fs = require('fs');
  var pathPic = 'uploads/'+req.file.filename;
  var newPic = 'uploads/n'+req.file.filename;
  console.log(newPic);
  require('lwip').open(pathPic, function(err, image){
    if(err){
      console.log(err);
    }else{
      image.resize(500,500,'lanczos',function(err, image){
        image.writeFile('uploads/n'+req.file.filename,function(err){
          fs.unlinkSync(pathPic);
        });
      });
    }
  });
  res.render('uploaded',{
    'pic': newPic
  });
}
