exports.render = function (req, res){
  res.render('upload');
}
exports.up = function(req, res){
  var lwip = require('lwip');
  var fs = require('fs');
  var pathPic = 'uploads/'+req.file.filename;
  console.log(pathPic);
  
  var newPicFileName = 'new_resize_'+req.file.filename;
  newPicFileName = newPicFileName.split('.')[0] + '.png';
  var newPic = 'uploads/' + newPicFileName;

  var makebokeh = require('./makebokeh.controller');

  lwip.open(pathPic, function(err, image){
    if(err){
      console.log(err);
    }else{
      var imageWidth = image.width();
      var imageHeight = image.height();
      var widthRatio =  501 / imageWidth;
      var heightRatio = 501 / imageHeight;
      var ratio = Math.min(widthRatio, heightRatio);

      image.scale(ratio,function(err, image){
        image.writeFile(newPic, 'png', {compression : "high", interlaced : false, transparency: 'auto'}, function(err) {
          fs.unlinkSync(pathPic);

          makebokeh.exec(newPicFileName, function() {
            res.render('finbokeh',{
              'pic': './' + newPic.replace('uploads', 'downloads') // DeBug :)
            });
          });
          
        });
      });
    }
  });
  
}
