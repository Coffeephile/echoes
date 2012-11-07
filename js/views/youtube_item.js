<<<<<<< HEAD
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/youtube_item.html'
], function($, _, Backbone, YoutubeItemTemplate) {
   
    var YoutubeItemView = Backbone.View.extend({
		tagName: 'li',
		
		className: 'well youtube-item span3 nicer-ux ux-maker',

		events: {
			'click .media-title': 'selectMedia',
			'click .media-desc': 'toggleInformation'
		},

		initialize: function() {
			this.template = _.template(YoutubeItemTemplate);
		},

		render: function() {
			this.$el.html( this.template(this.model.toJSON()) );
			this.$el.find('.twipsy').tooltip();
			return this;
		},

		selectMedia: function(ev) {
			this.trigger('media-clicked', this.model.toJSON());
		},

		toggleInformation: function() {
			this.$el.toggleClass('show-description');
			this.$el.find('.icon-white').toggleClass('icon-chevron-up').toggleClass('icon-chevron-down');
		},

		destroy: function() {
			this.undelegateEvents();
			this.$el.remove();
		}
	});
   
    return YoutubeItemView;
=======
define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/youtube_item.html'
], function($, _, Backbone, YoutubeItemTemplate) {
   
    var YoutubeItemView = Backbone.View.extend({
		tagName: 'li',
		
		className: 'well youtube-item span3 nicer-ux',

		events: {
			'click .media-title': 'selectMedia',
			'click .media-desc': 'toggleInformation'
		},

		initialize: function() {
			this.template = _.template(YoutubeItemTemplate);
		},

		render: function() {
			this.$el.html( this.template(this.model.toJSON()) );
			this.$el.find('.twipsy').tooltip();
			return this;
		},

		selectMedia: function(ev) {
			this.trigger('media-clicked', this.model.toJSON());
		},

		toggleInformation: function() {
			this.$el.toggleClass('show-description');
			this.$el.find('.icon-white').toggleClass('icon-chevron-up').toggleClass('icon-chevron-down');
		},

		destroy: function() {
			this.undelegateEvents();
			this.$el.remove();
		}
	});
   
    return YoutubeItemView;
>>>>>>> 06733dbf417cff57bd33aa814287ba470dc15df0
});