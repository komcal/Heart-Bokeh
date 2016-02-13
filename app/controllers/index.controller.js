exports.render = function(req, res) {
  res.render('index', {
    'message': 'เปลี่ยนภาพของคุณให้เป็นรูปภาพโบเก้ เพื่อมอบให้คนพิเศษในวันวาเลนไทน์',
    'randomImg': [
      '/pic/1.jpg',
      '/pic/2.jpg',
      '/pic/3.jpg',
      '/pic/4.jpg',
      '/pic/5.jpg',
    ]
  });
}
