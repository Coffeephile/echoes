var GapiHandler = require('./gapi');
var url = require('url');

// Browser apps key
var API_KEY='AIzaSyCgrK5ds9uCSRM-WBUFm8V8jPX66q8-Od0';

var youtubeHandler = GapiHandler.create({
	key: API_KEY,
	template: 'index',
	discover: ['youtube', 'v3'],
	apis: 'youtube.videos.list'
});

exports.index = function(req, res){
	// var fs = require('fs');
	// var ytdl = require('ytdl');

	// ytdl('https://www.youtube.com/watch?v=oF68P5N1RJM')
	// .pipe(fs.createWriteStream('video.flv'));
	// http://echotu.be/#play/video/pkCQr5AMdvE
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	var videoId = req.param('play');
    youtubeHandler.set('id', videoId);
    youtubeHandler.request(res);
	// res.render('index', { title: 'Express' });
};