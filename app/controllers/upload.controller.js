exports.render = function (req, res){
  res.render('upload');
}
exports.up = function(req, res){
  var lwip = require('lwip');
  var fs = require('fs');
  var pathPic = 'uploads/'+req.file.filename;
  var newPic = 'uploads/new_resize_'+req.file.filename;
  newPic = newPic.split('.')[0] + '.png';
  console.log(newPic);
  require('lwip').open(pathPic, function(err, image){
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
        });
      });
    }
  });
  res.render('uploaded',{
    'pic': newPic
  });
}
