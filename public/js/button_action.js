function downloadImage() {
	var link = document.createElement('a');
	link.href = document.getElementById('imgShow').src;
	link.download = 'Download.jpg';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
}

function shareOnFacebook() {
	
}

function shareOnTwitter() {
	
}