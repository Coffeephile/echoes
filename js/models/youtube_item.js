define([
	'underscore',
	'backbone',
	'utils'
], function(_, Backbone, Utils) {
   
    var YoutubeItemModel = Backbone.Model.extend({
		defaults: {
			//- custom properties not related to json response
			likeCountDisplay: 0,
			time: 0,
			mediaType: 'video',
			isPlaying: false
		},

		initialize: function() {
			//- convert rating to 2 numbers after the decimal point
			var likeCount = this.get('likeCount') || 0;
			//- format the likeCount with comma each 3 numbers
			this.set("likeCountDisplay", Utils.formatNumberWithComma(likeCount));
			this.set('time', Utils.secondsToHms(this.get('duration')));
		}
	});
   
    return YoutubeItemModel;
});