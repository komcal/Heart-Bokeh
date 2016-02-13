exports.render = function(req, res) {
  res.render('index', {
    'randomImg': [
      '/pic/1.jpg',
      '/pic/2.jpg',
      '/pic/3.jpg',
      '/pic/4.jpg',
      '/pic/5.jpg',
    ]
  });
}
