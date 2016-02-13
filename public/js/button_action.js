function downloadImage() {
	var link = document.createElement('a');
	link.href = document.getElementById('imgShow').src;
	link.download = 'Download.jpg';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function shareOnFacebook() {
    var pic = document.getElementById('imgShow').src;
    FB.ui({
            method: 'feed',
            link: 'http://research27.ml:3000',
            name: "Heart Bokeh",
            description: "มาสร้างูป โบเก้ หัวใจสวยๆ ทำให้รูปของคุณเต็มไปด้วยความรัก กันเลยที่นี่",
            picture: pic,
            //picture: "http://research27.ml:3000/game1/game-meeting-result-1.png",
            display: 'popup'
    }, function (response) {
            if (response) {
                    alert('Success');
            } else {
                    alert("Fail");
            }
    });
}

function shareOnTwitter() {
	
}
