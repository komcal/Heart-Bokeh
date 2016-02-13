var pic = document.getElementById('imgShow').src;

window.fbAsyncInit = function() {
    FB.init({
            appId      : 'MAI_BOK',
            xfbml      : true,
            version    : 'v2.3'
    });
};

(function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


function downloadImage() {
	var link = document.createElement('a');
	link.href = pic;
	link.download = 'Download.png';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function shareOnFacebook() {
    FB.ui({
            method: 'feed',
            link: 'http://research27.ml:3000',
            name: "Heart Bokeh",
            description: "มาสร้างูป โบเก้ หัวใจสวยๆ ทำให้รูปของคุณเต็มไปด้วยความรัก กันเลยที่นี่",
            picture: pic,
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
