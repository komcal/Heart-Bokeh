exports.render = function(req, res) {
  res.render('index', {
    'message': 'เปลี่ยนภาพของคุณให้เป็นรูปภาพโบเก้ เพื่อมอบให้คนพิเศษในวันวาเลนไทน์',
    'randomImg': [
      'http://g-ecx.images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg',
      'http://animaliaz-life.com/data_images/dog/dog4.jpg',
      'http://static.ddmcdn.com/gif/earliest-dogs-660x433-130306-akita-660x433.jpg',
      'http://d121tcdkpp02p4.cloudfront.net/clim/93053/Giles-front-view-1.jpg'
    ]
  });
}
