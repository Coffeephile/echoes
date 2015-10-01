!function(){"use strict";angular.module("htmlTemplates",[])}(),function(){"use strict";angular.module("drawer",[])}(),function(){"use strict";angular.module("media.info",["youtube.player","echoes.services","ngSanitize"])}(),function(){"use strict";function e(e,i){e.when("/myPlaylists",{templateUrl:"app/my-playlists/my-playlists.tpl.html",controller:"MyPlaylistsController",controllerAs:"vm"}).when("/playlist/:playlistId",{templateUrl:"app/my-playlists/my-playlist.tpl.html",controller:"MyPlaylistCtrl",controllerAs:"vm",resolve:{videos:t,playlist:n}})}function t(e,t,n,i){var o=e.current.params.playlistId;return i.isSignedIn()?t.getPlaylist(o):n.list(o)}function n(e,t){return t.list(e.current.params.playlistId)}angular.module("youtube.playlists",["youtube.api","youtube.directives","youtube.player","echoes.resources"]).config(e),e.$inject=["$routeProvider","$locationProvider"],t.$inject=["$route","YoutubeVideoInfo","PlaylistInfo","YoutubeUser"],n.$inject=["$route","YoutubePlaylistInfo"]}(),function(){"use strict";angular.module("playlist.editor",["echoes.services"])}(),function(){"use strict";angular.module("playlist.saver",["echoes.services"])}(),function(){"use strict";function e(e){}angular.module("presets",["echoes.resources","echoes.services"]).config(e),e.$inject=["$httpProvider"]}(),function(){"use strict";angular.module("echoes.resources",[])}(),function(){"use strict";angular.module("media.search",["echoes.services","youtube.player"])}(),function(){"use strict";angular.module("echoes.services",["echoes.resources","LocalStorageModule","youtube.api"])}(),function(){"use strict";angular.module("youtube.player",["LocalStorageModule"])}(),angular.module("ui.controls",[]),angular.module("youtube.directives",[]),function(){"use strict";function e(e,t,n){function i(t){function i(t,n){return l=e.defer(),t=t||{},o(angular.copy(c,t),n),l.promise}function o(e,t){n.auth().then(function(){r(e,t).then(function(e){l.resolve(e.result)})})}function r(t,n){function i(){return gapi.client.youtube[s].list(t).then(function(e){return o=e.result.nextPageToken,e}).then(n).then(function(e){var n=e;return Array.prototype.push.apply(r,e.length?e:e.result.items),o?(t.pageToken=o,i()):(e.result&&(e.result.items=r),e.length&&(n={items:r}),a.resolve(n),n)})}var o,r=[],a=e.defer();return i(),a.promise}function a(e){return gapi.client.youtube[s].insert(e).then(function(e){return e})}function u(e){var t={id:e};return gapi.client.youtube[s]["delete"](t)}var l,s=t.resourceName,c=(t.pages||0,{part:"snippet,contentDetails",maxResults:50,mine:!0}),d={list:i,params:c,insert:a,remove:u};return d}return i}angular.module("youtube.api",["youtube.directives"]).factory("uGapi",e),e.$inject=["$q","$rootScope","YoutubeApi"]}(),function(){"use strict";angular.Component({selector:"[navigator]"}).Class({constructor:"NavigatorCtrl"})}(),function(){"use strict";angular.Component({selector:"youtube-videos",appInjector:["echoes.services","youtube.player"]}).View({templateUrl:"app/youtube-videos/youtube.videos.tpl.html"}).Class({constructor:"YoutubeVideosCtrl"})}(),function(){"use strict";function e(e,t,n){n.setPrefix("EchoesPlayer"),e.when("/",{template:"<youtube-videos></youtube-videos>"}).when("/video/:id",{templateUrl:"app/youtube-video/youtube.video.tpl.html",controller:"YoutubeVideoCtrl",controllerAs:"vm"}).otherwise({redirectTo:"/"})}angular.module("echoes",["ngRoute","ngSanitize","htmlTemplates","youtube.directives","ui.controls","ui.bootstrap","echoes.services","echoes.resources","youtube.api","youtube.playlists","youtube.player","youtube-videos","media.info","media.search","drawer","presets","ngAnimate","LocalStorageModule","infinite-scroll","navigator","playlist.editor","playlist.saver","ui.sortable","720kb.socialshare"]).config(e),e.$inject=["$routeProvider","$locationProvider","localStorageServiceProvider"]}(),function(){function e(e,t,n){var i=this;i.searching=t.getIsSearching,i.drawerIsOpened=n.opened}angular.module("echoes").controller("AppCtrl",e),e.$inject=["$scope","YoutubeSearch","DrawerSettings"]}(),function(){function e(e,t){function n(e,n){t.setType(t.types.VIDEO),t.setDuration(o[n]),t.search()}var i=this;i.durations=["Any","Short (less then 4 minutes)","Medium (4-20 minutes)","Long (longer than 20 minutes)"];var o=["","short","medium","long"];i.onDurationChange=n}angular.module("echoes").controller("DurationCtrl",e),e.$inject=["$scope","YoutubeSearch"]}(),function(){function e(e,t,n){function i(e){o.active=e,n.setType(e.value)}var o=this;o.data={items:[{label:"Videos",icon:"film",value:"video"},{label:"Playlists",icon:"th-list",value:"playlist"}]},o.active=o.data.items[0],o.setFeed=i}angular.module("echoes").controller("FeedCtrl",e),e.$inject=["$scope","$rootScope","YoutubeSearch"]}(),function(){"use strict";function e(e,t,n,i){function o(){n.auth().then(function(e){i.update(e)})}function r(e){i.update(e.items[0])}function a(e){i.signOut(),e.stopPropagation()}var u=this;u.title="UserMenuCtrl",u.saveUser=r,u.signOut=a,u.user=i.data,o()}angular.module("echoes").controller("UserMenuCtrl",e),e.$inject=["$scope","$rootScope","YoutubeApi","YoutubeUser"]}(),function(){"use strict";function e(e){function t(e,t,n){}var n={link:t,restrict:"A"};return n}angular.module("echoes").directive("loader",e),e.$inject=["$http"]}(),function(){"use strict";function e(e){function t(t,n,i){function o(){n.toggleClass(r,e.opened())}var r=i.drawerToggle;n.bind("click",function(n){n.preventDefault(),e.toggle(),r&&r.length&&o(),t.$apply()}),o()}var n={link:t,restrict:"A"};return n}angular.module("drawer").directive("drawerToggle",e),e.$inject=["DrawerSettings"]}(),function(){"use strict";function e(e){function t(t,n,i){function o(){n.toggleClass(r,!t.drawerOpened())}var r=i.drawerClosed;t.drawerOpened=e.opened,t.$watch("drawerOpened()",function(e,t){e!==t&&o()}),o()}var n={link:t,restrict:"A"};return n}angular.module("drawer").directive("drawerClosed",e),e.$inject=["DrawerSettings"]}(),function(){"use strict";function e(e){function t(){}var n=this;n.title="DrawerCtrl",n.opened=e.opened,n.toggle=e.toggle,t()}angular.module("drawer").controller("DrawerCtrl",e),e.$inject=["DrawerSettings"]}(),function(){"use strict";function e(){function e(){n=!n}function t(){return n}var n=!0,i={toggle:e,opened:t};return i}angular.module("drawer").factory("DrawerSettings",e)}(),angular.module("echoes").filter("titleCase",[function(){var e=function(e){for(var t=e.split(" "),n=0;n<t.length;n++)t[n]=t[n].charAt(0).toUpperCase()+t[n].slice(1);return t.join(" ")};return e}]),function(){"use strict";function e(e,t,n){function i(e){e&&e.length&&(u.video.title=e[0].snippet.title,u.video.desc=o(e[0].snippet.description),u.video.thumb=e[0].snippet.thumbnails.high.url)}function o(e){var t=e.replace(/([0-9]*[0-9]*:*[0-9]*[0-9]:[0-9][0-9])/gim,'<a class="btn btn-mini play-time" time="$1">$1</a>\r',"gim");return t}function r(e){n.seekTo(a(e))}function a(e){e=e.split(":");var t=3===e.length,n=t?60*parseInt(e[0],10)*60:0,i=t?e[1]:e[0],o=t?e[2]:e[1];return n+60*parseInt(i,10)+parseInt(o,10)}var u=this;u.video={title:"No Media Yet...",desc:"",thumb:"",id:n.getCurrentId},u.onDescriptionClick=r,e.$watch("vm.video.id()",function(e,n){e&&t.list(e).then(i)})}angular.module("media.info").controller("MediaInfoCtrl",e),e.$inject=["$scope","YoutubeVideoInfo","YoutubePlayerSettings"]}(),function(){"use strict";function e(e,t){function n(n,i,o){function r(e){var n=e.target.innerText;a(n),t.$apply()}var a=e(o.onSourceClick)(n);i.bind("click",r)}var i={link:n,restrict:"A"};return i}angular.module("media.info").directive("onSourceClick",e),e.$inject=["$parse","$rootScope"]}(),function(){"use strict";function e(e,t,n,i){function o(){}function r(e){console.log("playing user video"),i.playVideoId(e),i.nowPlaylist.length=0,angular.extend(i.nowPlaylist,u.videos),u.videos.forEach(function(t,n){t===e&&(i.nowPlaying.index=n)})}function a(e){i.queueVideo(e)}var u=this;u.title="MyPlaylistCtrl",u.videos=t,u.playlist=n[0],u.playVideo=r,u.queueVideo=a,o()}angular.module("youtube.playlists").controller("MyPlaylistCtrl",e),e.$inject=["$scope","videos","playlist","YoutubePlayerSettings"]}(),function(){"use strict";function e(e,t,n,i,o){function r(e){i.getPlaylist(e.id).then(t.playPlaylist)}var a=this;a.title="UserPlaylistsCtrl",a.playlists=n.tracks,a.playPlaylist=r,a.search="",a.isUserSignedIn=o.isSignedIn}angular.module("youtube.playlists").controller("MyPlaylistsController",e),e.$inject=["$http","YoutubePlayerSettings","UserPlaylists","YoutubeVideoInfo","YoutubeUser"]}(),function(){"use strict";function e(e){function t(){r.bind("click",n)}function n(e){var t=angular.element(e.target),n=t.parent();n.hasClass(o)||(a.removeClass(o),n.addClass(o))}var i=this,o="active",r=e.find("a"),a=r.parent();i.title="NavigatorCtrl",t()}angular.module("navigator").controller("NavigatorCtrl",e),e.$inject=["$element"]}(),function(){"use strict";function e(e,t){function n(n){function i(){n.$watch("vm.search",function(e){var t=u.playlists.map(function(e){return e.snippet.title}).join(" ");u.showCreate=-1===t.indexOf(e)?!0:!1})}function o(e){function i(t){200===t.status&&(e.contentDetails.itemCount++,e.inProcess=!1,n.$apply())}e.inProcess=!0,t.addToPlaylist(e.id,u.getMedia()).then(i)}function r(){t.createPlaylist(u.search,"")}function a(e){return e.inProcess=!0,t.removePlaylist(e.id).then(function(t){e.inProcess=!1,n.$apply()})}var u=this;u.getMedia=e.getMedia,u.playlists=t.tracks,u.search="",u.add=o,u.showCreate=!1,u.create=r,u.remove=a,i()}function i(t,n,i){function o(){t.$watch("isVisible()",function(e,t){if(!angular.equals(e,t)){var n=e?"show":"hide";a.modal(n)}}),a.on("hidden.bs.modal",function(){e.hide(),t.vm.search="",t.$apply()})}function r(){a.modal("hide")}var a=n;t.isVisible=e.visibility,t.close=r,o()}var o={link:i,controller:n,controllerAs:"vm",restrict:"E",replace:!0,templateUrl:"app/playlist-editor/playlist.editor.tpl.html",scope:{}};return n.$inject=["$scope"],o}angular.module("playlist.editor").directive("playlistEditor",e),e.$inject=["PlaylistEditorSettings","UserPlaylists"]}(),function(){"use strict";function e(e){function t(e){u=e}function n(){return u}function i(e){u=e}function o(){s=!0}function r(){s=!1}function a(){return s}var u,l={add:t,getMedia:n,addMedia:i,show:o,hide:r,visibility:a},s=!1;return l}angular.module("playlist.editor").factory("PlaylistEditorSettings",e),e.$inject=["UserPlaylists"]}(),function(){"use strict";function e(e,t){function n(){}function i(){function n(t){o.onSave(t),o.inSaveMode=!1,e.$apply()}function i(e){console.log("failed to save tracks to playlist",e)}o.inSaveMode=!0,t.save(o.tracks).then(n,i)}var o=this;o.title="PlaylistSaverController",o.save=i,o.playlist=t.playlist,o.inSaveMode=!1,n()}angular.module("playlist.saver").controller("PlaylistSaverController",e),e.$inject=["$scope","PlaylistSaverSettings"]}(),function(){"use strict";function e(){var e={controller:"PlaylistSaverController",bindToController:!0,controllerAs:"vm",restrict:"E",replace:!0,templateUrl:"app/playlist-saver/playlist.saver.tpl.html",scope:{onSave:"&?",onCancel:"&?",tracks:"="}};return e}angular.module("playlist.saver").directive("playlistSaver",e)}(),function(){"use strict";function e(e,t,n){function i(e){var n={part:"snippet,contentDetails",resource:{snippet:{title:c.title,description:c.description||""}}};return t.insert(n).then(function(t){return c.id=t.result.id,o(e)})}function o(e){return l=n.defer(),s=e,p=0,u=e.length,r(e[0]),l.promise}function r(t){function n(e){return p++,u>p?r(s[p]):(l.resolve(c.id),a(),e)}function i(e){return l.reject(e),e}return e.addToPlaylist(c.id,t).then(n,i)}function a(){c.id="",c.title="",c.description=""}var u,l,s,c={title:"",id:"",description:""},d={save:i,playlist:c},p=0;return d}angular.module("playlist.saver").factory("PlaylistSaverSettings",e),e.$inject=["UserPlaylists","ApiPlaylists","$q"]}(),function(){function e(e,t){function n(n){t.params.q=e.update(t.params.q,n),t.search()}var i=this;i.data={label:"Preset"},i.presets=e.items,i.updatePreset=n,i.selected=e.selected().index}angular.module("presets").controller("PresetCtrl",e),e.$inject=["preset","YoutubeSearch"]}(),function(){"use strict";function e(e){function t(){i(s)}function n(t,n){var o=t.replace(s,"").trim();return s=n.toLowerCase(),"all"===s&&(s=""),o+=" "+s.toLowerCase(),e.set(u.PRESET,s),i(s),o}function i(e){var t=l.indexOf(e);c=-1===t?0:t}function o(){return{label:s,index:c}}function r(){return a}var a,u={PRESET:"preset"},l=["all","albums","live"],s=e.get(u.PRESET),c=0,d={selected:o,update:n,items:l,getQuery:r};return t(),d}function t(e){function t(e){function t(e,t){}return e.url.match(/v3\/search/gim)&&(e.transformRequest=t),e}return{request:t}}angular.module("presets").factory("preset",e).factory("searchListener",t),e.$inject=["localStorageService"],t.$inject=["preset"]}(),function(){"use strict";angular.module("echoes.resources").constant("YOUTUBE_API_KEY","AIzaSyB7fFNreY1UzX1la5arnnAi3ZOyvqOV6kk")}(),function(){"use strict";function e(e,t,n,i){function o(e,t,n){i.search()}function r(i){function o(e){r.resolve(e[1].map(function(e){return e[0]}))}var r=t.defer();n.handleEchoesSuggest=o;{var a={params:{hl:"en",ds:"yt",xhr:"t",client:"youtube",q:i,callback:"handleEchoesSuggest"}};e.jsonp("http://suggestqueries.google.com/complete/search",a)}return r.promise}var a=this;a.title="SearchCtrl",a.params=i.params,a.resetPageToken=i.resetPageToken,a.search=i.search,a.complete=r,a.updateSearch=o}angular.module("media.search").controller("SearchCtrl",e),e.$inject=["$http","$q","$window","YoutubeSearch"]}(),function(){"use strict";function e(e,t,n,i){function o(t){var n=e.defer();return u.params.playlistId=t,r(a,u).then(function(e){n.resolve(e)}),n.promise}function r(n,o){function r(){return t.get(n,o).then(function(e){return a=e.data.nextPageToken,e}).then(i.enrichItems).then(function(e){return Array.prototype.push.apply(u,e),a?(o.params.pageToken=a,r()):void l.resolve(u)})}var a,u=[],l=e.defer();return r(),l.promise}var a="https://www.googleapis.com/youtube/v3/playlistItems",u={params:{part:"snippet,contentDetails",key:n,playlistId:"",maxResults:50}},l={list:o};return l}angular.module("echoes.services").factory("PlaylistInfo",e),e.$inject=["$q","$http","YOUTUBE_API_KEY","YoutubeVideoInfo"]}(),function(){"use strict";function e(e,t){function n(t){return o.params.id=t,e.get(i,o).then(function(e){return e.data.items})}var i="https://www.googleapis.com/youtube/v3/playlists",o={params:{part:"snippet,contentDetails",key:t,id:"",maxResults:50}},r={list:n};return r}angular.module("echoes.services").factory("YoutubePlaylistInfo",e),e.$inject=["$http","YOUTUBE_API_KEY"]}(),function(){"use strict";function e(e,t,n,i,o){function r(t,i){function r(e){var t=P.params.type;y=e.data.nextPageToken;var n=e.data.items.map(function(e){return e.id[m[t]]}).join(","),i=b[t].list(n);return i}function a(e){d()===v.VIDEO&&e.forEach(function(e){e.time=n.toFriendlyDuration(e.contentDetails.duration)}),Array.prototype.push.apply(S,e)}function l(){$=!1}return i||u(),$=!0,t&&t!==P.params.q&&(P.params.pageToken=""),f(),P.params.q=t||P.params.q,o.set(h.QUERY,P.params.q),e.get(g,P).then(r).then(a).then(l)}function a(){!$&&S.length&&(P.params.pageToken=y,r(P.params.q,!0))}function u(){S.length=0}function l(){P.params.pageToken=""}function s(e){P.params.type=e,l(),S.length=0}function c(e){return""===e||void 0===e?void delete P.params.videoDuration:void(P.params.videoDuration=e)}function d(){return P.params.type}function p(){return $}function f(){P.params.type===v.PLAYLIST&&delete P.params.videoDuration}var y,g="https://www.googleapis.com/youtube/v3/search",h={QUERY:"query"},v={VIDEO:"video",PLAYLIST:"playlist"},m={video:"videoId",playlist:"playlistId"},P={params:{part:"snippet,id",key:t,q:o.get(h.QUERY),maxResults:50,type:v.VIDEO}},b={video:n,playlist:i},S=[],$=!1,w={search:r,setType:s,setDuration:c,items:S,types:v,params:P.params,getFeedType:d,getIsSearching:p,searchMore:a,resetPageToken:l};return w}angular.module("echoes.services").factory("YoutubeSearch",e),e.$inject=["$http","YOUTUBE_API_KEY","YoutubeVideoInfo","YoutubePlaylistInfo","localStorageService"]}(),function(){"use strict";function e(e,t,n,i){function o(e){r(e);var n={params:angular.extend({},f.params)};return t.get(p,n).then(function(e){return e.data.items})}function r(e){f.params.id=e}function a(e){var t=e.split("PT")[1],n="";return t?(t=t.replace(/(H|M)/g,":").replace("S",""),n=t.split(":"),n=n.map(function(e){return 1===e.length?"0"+e:e})):(t=e.split("P")[1],t=t.replace("D",""),n=[24*parseInt(t),":00:00"]),n.join(":")}function u(t){var n=e.defer();return i.getPlaylist(t).then(function(e){return l(e.items).then(function(e){var t=[];e[0].forEach(function(e){t=t.concat(e)}),n.resolve(t)})}),n.promise}function l(t){function n(e,t){var n=50*t,i=50*(t+1);return s({items:e.slice(n,i)}).then(c).then(function(e){return r[t]=e,r})}for(var i=t.length,o=Math.ceil(i/50),r=[],a=[],u=0;o>u;u++)a.push(n(t,u));return e.all(a)}function s(e){var t=e.items.map(function(e){return e.snippet.resourceId.videoId}).join(",");return o(t)}function c(e){return e.forEach(function(e){e.time=a(e.contentDetails.duration)}),e}function d(e){return s(e.result||e.data).then(c)}var p="https://www.googleapis.com/youtube/v3/videos",f={params:{part:"snippet,contentDetails,statistics",key:n,id:"",maxResults:50}},y={list:o,setId:r,toFriendlyDuration:a,getPlaylist:u,enrichItems:d,enrichItemsInBulk:l};return y}angular.module("echoes.services").factory("YoutubeVideoInfo",e),e.$inject=["$q","$http","YOUTUBE_API_KEY","UserPlaylists"]}(),function(){"use strict";function e(e,t,n){function i(e,n){u.nowPlaying.index=n,t.playVideoId(e)}function o(e,n,i){e.stopPropagation(),t.remove(n,i)}function r(){u.showPlaylistSaver=!u.showPlaylistSaver}function a(){r(),n.list()}var u=this;u.title="UserPlaylistsCtrl",u.playlists=t.nowPlaylist,u.playVideo=i,u.nowPlaying=t.nowPlaying,u.playlistSearch="",u.remove=o,u.clearPlaylist=t.clear,u.togglePlaylistSaver=r,u.showPlaylistSaver=!1,u.onPlaylistSave=a}angular.module("echoes").controller("UserPlaylistsCtrl",e),e.$inject=["$http","YoutubePlayerSettings","UserPlaylists"]}(),function(){"use strict";function e(e,t,n,i,o){function r(){n.list(i.id).then(function(e){s.video=e[0],s.time=l(e[0].contentDetails.duration)})}function a(){t.queueVideo(s.video),t.playVideoId(s.video)}function u(){o.url("/")}function l(e){var t=e.split("PT")[1].replace(/(H|M)/g,":").replace("S",""),n=t.split(":");return n=n.map(function(e){return 1===e.length?"0"+e:e}),n.join(":")}var s=this;s.goBack=u,s.playVideo=a,r()}function t(){return function(e,t){var n=/\n/gm,i=/(http:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/;return e?e.replace(n,"<br>").replace(i,'<a href="$1" target="blank" title="opens in a new tab">$1</a>'):e}}angular.module("echoes").controller("YoutubeVideoCtrl",e).filter("tohtml",t),e.$inject=["$scope","YoutubePlayerSettings","YoutubeVideoInfo","$routeParams","$location"]}(),function(){"use strict";function e(e){function t(t,n,i){t.$watch("isFullScreen()",function(e,t){e!==t&&n.toggleClass(i.playerResizer,e)}),t.isFullScreen=function(){return e.isFullScreen()}}var n={link:t,restrict:"A"};return n}angular.module("youtube.player").directive("playerResizer",e),e.$inject=["PlayerResizer"]}(),function(){function e(e){function t(t){if(o=t,!t)return r.height=i.height,void(r.width=i.width);var n=["sidebar"],a=-1===n.indexOf("sidebar")?$(".sidebar").outerWidth():0,u=e.innerHeight,l=e.innerWidth-a;r.height=u,r.width=l}function n(){return o}var i={height:270,width:300},o=!1,r={height:i.height,width:i.width,setFullScreen:t,isFullScreen:n};return r}angular.module("youtube.player").factory("PlayerResizer",e),e.$inject=["$window"]}(),function(){"use strict";function e(e,t,n){var i=n.defer(),o={ready:i.promise};return function(){var e=["http:","https:"],t="//www.youtube.com/iframe_api";e.indexOf(window.location.protocol)<0&&(t="http:"+t);var n=document.createElement("script");n.src=t;var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}(),t.onYouTubeIframeAPIReady=function(){i.resolve()},o}angular.module("youtube.player").factory("youtubePlayerApi",e),e.$inject=["$rootScope","$window","$q"]}(),function(){"use strict";function e(e,t){function n(e,t,n,i){function r(e){o.seekTo(e,!0)}function a(){return o=new YT.Player(t.id,{height:e.height,width:e.width,videoId:e.videoId,events:{onReady:l,onStateChange:u}}),i.setYTPlayer(o),o.id=t.id,o}function u(n){var o=n.data;angular.isDefined(t.autoNext)&&o===YT.PlayerState.ENDED&&i.playNextTrack(),o===YT.PlayerState.PAUSED&&(i.playerState=YT.PlayerState.PAUSED),o===YT.PlayerState.PLAYING&&(i.playerState=YT.PlayerState.PLAYING,console.log("playing",i.playerState)),e.$apply()}function l(e){}var s=this;s.seek=i.getSeek,e.$watch("vm.seek()",function(e,t){o&&e!==t&&r(e)}),n.ready.then(a)}function i(e,t,n){function i(t){o.loadVideoById(t),o.playVideo(),e.onVideoStart({id:t})}e.$watch("videoId",function(e){o&&i(e)}),e.$watch("height",function(t,n){o&&t!==n&&o.setSize(e.width,e.height)})}var o,r={link:i,controller:n,controllerAs:"vm",restrict:"A",scope:{videoId:"=",height:"=",width:"=",index:"=",seek:"=",autoNext:"@",onVideoStart:"&"}};return n.$inject=["$scope","$attrs","youtubePlayerApi","YoutubePlayerSettings"],r}angular.module("youtube.player").directive("youtubePlayer",e),e.$inject=["$rootScope","$window"]}(),function(){function e(e){function t(){return h.mediaId}function n(e){h.mediaId=e.id,v=0,r(e),h.media=e}function i(t){b.push(t||{}),e.set(P.NOW_PLAYLIST,b)}function o(t){angular.extend(b,t),e.set(P.NOW_PLAYLIST,b)}function r(e){b.some(function(t,n){return t.id===e.id?(h.index=n,!0):void 0})}function a(e,t){var i=angular.isNumber(t)?t:0,r=e[i];b.length=0,o(e),n(r)}function u(){return v}function l(e){!isNaN(e)&&angular.isNumber(e)&&(v=e)}function s(){var e=h.index+1;e===b.length&&(e=0),n(b[e])}function c(){var e=h.index;if(1!==b.length&&0!==b.length){var t=0===e?b.length-1:e-1;n(b[t])}}function d(t,n){b.splice(n,1),r(h.media),e.set(P.NOW_PLAYLIST,b)}function p(){b.length=0,e.set(P.NOW_PLAYLIST,b)}function f(e){m=e}function y(){return m}function g(){return S.playerState}var h={mediaId:"",index:0,media:{}},v=0,m={},P={NOW_PLAYLIST:"nowPlaylist"},b=e.get(P.NOW_PLAYLIST)||[],S={getCurrentId:t,playVideoId:n,playPlaylist:a,nowPlaying:h,nowPlaylist:b,queueVideo:i,queuePlaylist:o,getSeek:u,seekTo:l,playNextTrack:s,playPreviousTrack:c,remove:d,clear:p,setYTPlayer:f,getYTPlayer:y,getPlayerState:g,playerState:{}};return S}angular.module("youtube.player").factory("YoutubePlayerSettings",e),e.$inject=["localStorageService"]}(),function(){function e(e,t,n){function i(){t.search()}function o(t){e.queueVideo(t),e.playVideoId(t)}function r(t){return n.getPlaylist(t.id).then(e.playPlaylist)}var a=this;a.playVideo=o,a.playPlaylist=r,a.queueVideo=e.queueVideo,a.feedType=t.getFeedType,a.videos=t.items,a.loadMore=t.searchMore,i()}angular.module("youtube-videos").controller("YoutubeVideosCtrl",e),e.$inject=["YoutubePlayerSettings","YoutubeSearch","YoutubeVideoInfo"]}(),function(){function e(e,t,n){function i(e){p.showPlayer=e}function o(){p.isFullScreen=!p.isFullScreen,t.setFullScreen(p.isFullScreen)}function r(){""!==p.video.mediaId&&(n.addMedia(p.video.media),n.show())}function a(){e.getYTPlayer().playVideo()}function u(){e.getYTPlayer().pauseVideo()}function l(){return 1===e.getPlayerState()}function s(){return 0===e.nowPlaylist.length}function c(){return e.nowPlaying.index>0&&!s()}function d(){return 1===e.nowPlaylist.length}var p=this;p.video=e.nowPlaying,p.nowPlaylist=e.nowPlaylist,p.size=t,p.showPlayer=!1,p.togglePlayer=i,p.isFullScreen=!1,p.toggleFullScreen=o,p.seek=e.getSeek,p.addToPlaylist=r,p.playNextTrack=e.playNextTrack,p.playPreviousTrack=e.playPreviousTrack,p.isPlaying=l,p.play=a,p.pause=u,p.playlistIsEmpty=s,p.playlistHasTracks=c,p.playlistHasOneTrack=d}angular.module("echoes").controller("YoutubePlayerCtrl",e),e.$inject=["YoutubePlayerSettings","PlayerResizer","PlaylistEditorSettings"]}(),function(){"use strict";function e(e,t,n,i){function o(){e.$on("user-signed-in",r)}function r(e){y.length=0,p.list().then(a,u,a)}function a(e){Array.prototype.push.apply(y,e.items)}function u(e){console.log(e)}function l(e,t){return delete f.params.mine,f.params.playlistId=e,f.list({},t)}function s(e,t){var n=i.defer(),o={part:"snippet",resource:{snippet:{playlistId:e,resourceId:{videoId:t.id,playlistId:e,kind:"youtube#video"}}}};return f.insert(o).then(n.resolve,n.reject),n.promise}function c(e){return p.remove(e).then(function(t){return y.some(function(t,n){t.id===e&&y.splice(n,1)}),t})}function d(e,t){var n={part:"snippet,contentDetails",resource:{snippet:{title:e,description:t||""}}};return p.insert(n).then(r)}var p=n,f=t({resourceName:"playlistItems",pages:"all"}),y=[],g={tracks:y,list:r,getPlaylist:l,addToPlaylist:s,removePlaylist:c,createPlaylist:d};return o(),g}function t(e){return e({resourceName:"playlists",pages:"all"})}angular.module("youtube.api").factory("UserPlaylists",e).factory("ApiPlaylists",t),e.$inject=["$rootScope","uGapi","ApiPlaylists","$q"],t.$inject=["uGapi"]}(),function(){"use strict";function e(e,t){function n(t){angular.copy(t,a),e.$broadcast("user-signed-in",a)}function i(){return Object.keys(a).length}function o(){function e(e){console.log("signout success",e),r()}function n(t){return""===t.statusText?e(t):void console.log("singout failed")}var i=u+gapi.auth.getToken().access_token;t.get(i).then(e,n)}function r(){Object.keys(a).forEach(function(e){delete a[e]})}var a={},u="https://accounts.google.com/o/oauth2/revoke?token=",l={update:n,data:a,isSignedIn:i,signOut:o};return l}angular.module("echoes.resources").factory("YoutubeUser",e),e.$inject=["$rootScope","$http"]}(),function(){"use strict";function e(){function e(e,t,n){e.activeIndex=""!==n.selected?parseInt(e.selected):0,e.handleClick=function(t,n){e.activeIndex=n,e.onSelect({item:t,index:n})}}var t={restrict:"E",replace:!0,templateUrl:"app/directives/ui/e-dropdown/e-dropdown-tpl.html",scope:{label:"@",icon:"@",items:"=",onSelect:"&",selected:"@"},link:e};return t}angular.module("ui.controls").directive("eDropdown",e)}(),function(){"use strict";function e(e,t,n,i){function o(){e.onGapiLoad=function(){t.$apply(function(){s.resolve()})},function(){var e=["http:","https:"],t="//apis.google.com/js/client.js?onload=onGapiLoad";e.indexOf(window.location.protocol)<0&&(t="http:"+t);var n=document.createElement("script");n.src=t;var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}()}function r(){return s.promise}function a(){return r().then(function(){gapi.auth.authorize({client_id:"971861197531",scope:"https://www.googleapis.com/auth/youtube",immediate:!0},function(e){u(e)})}),c.promise}function u(e){i.load("youtube","v3").then(function(n){l(e)||gapi.client.youtube.channels.list({part:"snippet,contentDetails",mine:!0}).then(function(n){console.log("results user",n),c.resolve(n.result.items[0],e),t.$digest()})})}function l(e){return e.error&&e.error.indexOf("fail")>-1}var s=n.defer(),c=n.defer(),d={load:r,auth:a,signIn:u};return o(),d}function t(e,t,n,i){function o(e,i,o){function r(e){e.preventDefault(),n.load().then(function(){gapi.auth.authorize({client_id:"971861197531",scope:"https://www.googleapis.com/auth/youtube",immediate:!1},a)})}function a(e){t.signIn(e)}i.get(0).addEventListener("click",r)}var r={link:o,restrict:"A",scope:{youtubeSignIn:"&"}};return r}function n(e,t,n,i,o){function r(e,t){return o.load().then(function(){a.resolve()}),a.promise}var a=e.defer(),u={load:r};return u}function i(e){function t(e,t){return gapi.client.setApiKey(i),gapi.client.load(e,t,n),o.promise}function n(e){console.log("client load success",e),o.resolve(e)}var i="AIzaSyCgrK5ds9uCSRM-WBUFm8V8jPX66q8-Od0",o=e.defer(),r={load:t};return r}angular.module("youtube.directives").directive("youtubeSignIn",t).factory("YoutubeApi",e).factory("YoutubeClientApi",n).factory("GoogleClientApi",i),e.$inject=["$window","$rootScope","$q","GoogleClientApi"],t.$inject=["$window","YoutubeApi","YoutubeClientApi","GoogleClientApi"],n.$inject=["$q","$rootScope","$window","GoogleClientApi","YoutubeApi"],i.$inject=["$q"]}(),function(){"use strict";function e(){function e(e,t,n){e.playSelectedVideo=function(t){e.onSelect({video:t})},e.queueSelectedVideo=function(t){e.onQueue({video:t})}}var t={restrict:"E",replace:!0,templateUrl:"app/directives/youtube/youtube-list/media-list.tpl.html",scope:{videos:"=model",onSelect:"&",onQueue:"&"},link:e};return t}angular.module("youtube.directives").directive("mediaList",e)}(),function(){function e(e,t){function n(e){function n(t){e.onPlay({video:t})}function i(t){e.onQueue({video:t})}function o(){t.addMedia(e.video),t.show()}var r=this;r.playVideo=n,r.queueVideo=i,r.add=o}var i={restrict:"E",templateUrl:"app/directives/youtube/youtube-media/youtube.media.tpl.html",replace:!0,scope:{onPlay:"&",onQueue:"&",video:"="},controller:n,controllerAs:"vm"};return n.$inject=["$scope"],i}angular.module("youtube.directives").directive("youtubeMedia",e),e.$inject=["UserPlaylists","PlaylistEditorSettings"]}(),function(){function e(){function e(e,t,n){e.isVideoItem=function(e){return"youtube#video"===e.id.kind},e.isChannelItem=function(e){return"youtube#channel"===e.id.kind},e.playVideo=function(t){e.loading=!0,e.onPlay({video:t}).then(function(t){e.loading=!1})}}var t={restrict:"E",templateUrl:"app/directives/youtube/youtube-playlist/youtube.playlist.tpl.html",replace:!0,scope:{onPlay:"&",video:"="},link:e};return t}angular.module("youtube.directives").directive("youtubePlaylistItem",e)}();