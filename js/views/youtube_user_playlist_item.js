define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/youtube_user_playlist_item.html'
], function($, _, Backbone, YoutubeUserPlaylistItemTemplate) {
   
    var YoutubeUserPlaylistItem = Backbone.View.extend({
		tagName: 'li',
		
		className: 'user-playlist',

		template: _.template(YoutubeUserPlaylistItemTemplate),

		events: {
			'click a': 'onPlaylistSelected'
		},

		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
		},
		
		render: function() {
			this.$el.html( this.template(this.model.toJSON()) );
			return this;
		},

		onPlaylistSelected: function(ev) {
			this.trigger('playlist-selected', this.model.toJSON());
			this.$el.addClass('active');
		},

		destroy: function() {
			this.undelegateEvents();
			this.$el.remove();
		}
	});
   
    return YoutubeUserPlaylistItem;
});