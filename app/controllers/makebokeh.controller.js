exports.exec = function(filename, callback) {
	var command = "python make-heart-bokeh.py "+ filename + " upload download";
	var exec = require('child_process').exec;
	var process = exec(cmd[0] + filename + cmd[1]);

	process.on('close', function(code, signal) {
		callback();
	});

}
