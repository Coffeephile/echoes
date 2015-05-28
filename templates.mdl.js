angular.module("htmlTemplates").run(["$templateCache",function(i){i.put("app/my-playlists/my-playlist.tpl.html",'<div class="view-content youtube-results"><div class="well clearfix"><div class="col-md-2 playlist-thumbnail"><img ng-src="{{:: vm.playlist.snippet.thumbnails.default.url }}" class="" title="Play All" ng-click="vm.playVideo(vm.videos[0])"> <button class="btn btn-default btn-lg ux-maker play-media" title="Play All" ng-click="vm.playVideo(vm.videos[0])"><i class="fa fa-play"></i></button></div><div class="col-md-10"><h2>{{:: vm.playlist.snippet.title }}</h2><p>Total {{:: vm.videos.length}} videos</p></div></div><media-list class="list-unstyled ux-maker youtube-items-container clearfix" model="vm.videos" on-select="vm.playVideo(video)" on-queue="vm.queueVideo(video)"></media-list></div>')}]),angular.module("htmlTemplates").run(["$templateCache",function(i){i.put("app/my-playlists/my-playlists.tpl.html",'<div class="view-content youtube-results"><div class="col-md-12"><input type="text" ng-model="vm.search" placeholder="find a playlist..."></div><div ng-if="!vm.isUserSignedIn()" class="col-md-12 well text-center"><a href="" class="sign-in btn btn-primary btn-lg" youtube-sign-in=""><span class="fa fa-google-plus-square"></span> Sign In</a><p>to view your playlists</p></div><ul class="list-unstyled ux-maker youtube-items-container clearfix"><youtube-playlist-item ng-repeat="playlist in vm.playlists | filter:vm.search | orderBy:\'snippet.title\'" video="playlist" on-play="vm.playPlaylist(playlist)"></youtube-playlist-item></ul></div>')}]),angular.module("htmlTemplates").run(["$templateCache",function(i){i.put("app/playlist-editor/playlist.editor.tpl.html",'<div id="playlists-viewer" class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><div class="thumbnail"><img ng-src="{{ vm.getMedia().snippet.thumbnails.high.url }}" class="media-thumb"></div><h3>Add To A Playlist:</h3><div class="video-title ellipsis">{{ vm.getMedia().snippet.title }}</div><form class="form-inline"><input class="form-control" type="search" placeholder="find or create a playlist" ng-model="vm.search"> <button class="btn btn-success btn-sm add-btn" ng-show="vm.showCreate" ng-click="vm.create()">Create New</button></form></div><div class="modal-body"><h5 class="title">Select a playlist to add the video to it</h5><ul class="list-unstyled playlists user-playlist"><li ng-repeat="playlist in vm.playlists | filter:vm.search | orderBy:\'snippet.title\'"><div class="user-playlist" href="#none" ng-click="vm.add(playlist)">{{ playlist.snippet.title }} <span ng-show="playlist.inProcess">Updating Playlist...</span> <span class="badge badge-info">{{ playlist.contentDetails.itemCount }}</span></div><span class="badge badge-danger remove" ng-click="vm.remove(playlist)">Remove</span></li></ul></div><div class="modal-footer"><button class="btn btn-primary" data-dismiss="modal">Close</button></div></div></div></div>')}]),angular.module("htmlTemplates").run(["$templateCache",function(i){i.put("app/youtube-player/youtube.player.tpl.html",'<div id="player" class="ux-maker" seek="vm.video.seek" video-id="vm.video.mediaId" is-playlist="vm.video.type" index="vm.video.index" height="vm.size.height" width="vm.size.width"></div>')}]),angular.module("htmlTemplates").run(["$templateCache",function(i){i.put("app/youtube-video/youtube.video.tpl.html",'<div class="row view-content youtube-video"><div class="col-md-12"><div class="panel panel-default"><div class="panel-heading"><h4><button class="btn btn-default" ng-click="vm.goBack()"><i class="fa fa-chevron-left"></i> Back</button> {{vm.video.snippet.title}}</h4><aside class="label label-primary"><i class="fa" ng-class="{ \'fa-film\': vm.video.kind === \'youtube#video\', \'fa-youtube-play\': vm.video.kind === \'youtube#channel\'}"></i></aside></div><div class="panel-body"><div class="thumbnail" title="Play this video now" ng-click="vm.playVideo()"><img ng-src="{{vm.video.snippet.thumbnails.high.url}}" alt="{{vm.video.snippet.title}}"> <button class="btn btn-default btn-lg ux-maker play-media"><i class="fa fa-play"></i></button></div><div class="caption pull"><span>{{vm.video.snippet.publishedAt | date}}</span> <span class="label label-info">{{vm.time}}</span><div ng-bind-html="vm.video.snippet.description | linky"></div></div></div></div></div></div>')}]),angular.module("htmlTemplates").run(["$templateCache",function(i){i.put("app/youtube-videos/youtube.videos.tpl.html",'<div class="view-content youtube-results"><section ng-switch="vm.feedType()"><div ng-switch-when="video"><media-list model="vm.videos" class="list-unstyled ux-maker youtube-items-container clearfix" on-select="vm.playVideo(video)" on-queue="vm.queueVideo(video)"></media-list></div><div ng-switch-when="playlist"><ul class="list-unstyled ux-maker youtube-items-container clearfix"><youtube-playlist-item ng-repeat="video in vm.videos" video="video" on-play="vm.playVideo(video)"></youtube-playlist-item></ul></div></section></div>')}]),angular.module("htmlTemplates").run(["$templateCache",function(i){i.put("app/directives/ui/e-dropdown/e-dropdown-tpl.html",'<li class="dropdown"><div class="dropdown-toggle" data-toggle="dropdown"><i class="glyphicon glyphicon-{{icon}}"></i> {{label}} <span class="caret"></span></div><ul class="dropdown-menu"><li ng-repeat="item in items" ng-click="handleClick(item, $index)" ng-class="{\'active\': $index === activeIndex}"><a data-duration="{{$index}}">{{item}}</a></li></ul></li>')}]),angular.module("htmlTemplates").run(["$templateCache",function(i){i.put("app/directives/youtube/youtube-list/media-list.tpl.html",'<ul><youtube-media ng-repeat="video in videos" video="video" on-play="$parent.playSelectedVideo(video)" on-queue="$parent.queueSelectedVideo(video)"></youtube-media></ul>')}]),angular.module("htmlTemplates").run(["$templateCache",function(i){i.put("app/directives/youtube/youtube-media/youtube.media.tpl.html",'<li class="youtube-item card ux-maker col-sm-3 col-xs-12" ng-class="{ \'show-description\': showDesc}"><section class="media-title"><div class="front face"><div class="indicators clearfix"><span class="pull-left item-is-playing playing-{{ isPlaying }}"><i class="fa fa-play"></i>Now Playing</span></div><section class="dropdown share"><a class="dropdown-toggle" data-toggle="dropdown" href=""><span class="fa fa-share-alt"></span></a><ul class="dropdown-menu"><li><a class="" socialshare="" socialshare-provider="google+" socialshare-hashtags="echotube, youtube video, nowlistening" socialshare-url="http://echotu.be/#/video/{{:: video.id }}"><span class="fa fa-google-plus-square"></span> Google+</a></li><li><a class="" socialshare="" socialshare-provider="twitter" socialshare-url="http://echotu.be/#/video/{{:: video.id }}"><span class="fa fa-twitter-square"></span> Twitter</a></li><li><a class="" socialshare="" socialshare-provider="facebook" socialshare-url="http://echotu.be/#/video/{{:: video.id }}"><span class="fa fa-facebook-square"></span> Facebook</a></li></ul></section><div rel="tooltip" title="{{:: video.snippet.title}}" class="media-thumb" ng-click="vm.playVideo(video)"><div class="thumbnail"><img ng-src="{{:: video.snippet.thumbnails.high.url}}"></div><button class="btn btn-default btn-lg ux-maker play-media"><i class="fa fa-play"></i></button></div><section class="item-actions main-actions"><h4 class="title span11"><a href="#/video/{{:: video.id}}" rel="tooltip" title="{{:: video.snippet.title}}" class="media-thumb ellipsis">{{:: video.snippet.title}}</a></h4><section class="media-actions clearfix"><button class="btn btn-link btn-xs add-to-playlist" title="Queue this video to now playlist" ng-click="vm.queueVideo(video)"><i class="fa fa-share"></i> Queue</button> <button class="btn btn-link btn-xs add-to-playlist" title="Add this video to a playlist" ng-click="vm.add()"><i class="fa fa-plus"></i> Add</button></section><span ng-click="showDesc = !showDesc" class="btn btn-default btn-xs media-desc" title="more info about this video"><i class="fa fa-info-circle"></i></span> <span class="item-action"><i class="fa fa-clock-o"></i>{{:: video.time}}</span> <span class="item-likes item-action" rel="tooltip" title="Number of Likes"><i class="fa fa-thumbs-up"></i> {{:: video.statistics.likeCount | number}}</span> <span class="item-views item-action" rel="tooltip" title="Number of Views"><i class="fa fa-eye"></i> {{:: video.statistics.viewCount | number}}</span></section></div><div class="description back face"><h4><a href="#/video/{{:: video.id}}" rel="tooltip" title="{{:: video.snippet.title}}" class="media-thumb">{{:: video.snippet.title}}</a></h4><div ng-bind-html="video.snippet.description | linky"></div></div><section class="item-actions close-desc" ng-hide="!showDesc"><span ng-click="showDesc = !showDesc" class="btn btn-default btn-xs media-desc" title="flip back..."><i class="fa fa-times-circle"></i></span></section></section></li>')}]),angular.module("htmlTemplates").run(["$templateCache",function(i){i.put("app/directives/youtube/youtube-playlist/youtube.playlist.tpl.html",'<li class="well youtube-item youtube-playlist-item col-md-3 ux-maker card"><section class="media-title front"><div class="indicators clearfix"><span class="pull-left item-is-playing playing-<%= isPlaying %>"><i class="icon-play"></i>Now Playing</span></div><div xhref="#play/playlist/{{video.id}}/0" rel="tooltip" title="{{ video.snippet.title }}" class="media-thumb"><div class="thumbnail"><img ng-src="{{video.snippet.thumbnails.high.url}}"></div><button class="btn btn-default btn-lg play-media" ng-click="playVideo(video)"><i class="glyphicon glyphicon-play"></i></button></div><section class="item-actions"><a href="#playlist/{{video.id}}"><h4 class="title">{{ video.snippet.title }}</h4><span class="item-action badge badge-info"><i class="icon-list"></i> {{video.contentDetails.itemCount }}</span> videos</a></section></section></li>')}]);