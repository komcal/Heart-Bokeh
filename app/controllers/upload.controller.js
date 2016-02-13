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

  lwip.open(pathPic, function(err, image){
    if(err){
      console.log(err);
    }else{
      var imageWidth = image.width();
      var imageHeight = image.height();
      var widthRatio =  700 / imageWidth;
      var heightRatio = 700 / imageHeight;
      var ratio = Math.min(widthRatio, heightRatio);

      image.scale(ratio,function(err, image){
        image.writeFile(newPic, 'png', {compression : "high", interlaced : false, transparency: 'auto'}, function(err) {
          fs.unlinkSync(pathPic);

          var env = process.env.NODE_ENV || 'development';
          if (env == 'production') {
            var makebokeh = require('./makebokeh.controller');
            makebokeh.exec(newPicFileName, function() {
              res.render('finbokeh',{
                'pic': './' + newPic.replace('uploads', 'downloads') // DeBug :)
              });
            });
          }
          else {
            res.render('finbokeh',{
              'pic': './' + pathPic.replace('.jpeg', '.png').replace('/', '/new_resize_')
            });
          }

        });
      });
    }
  });

}
