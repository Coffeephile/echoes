define(["jquery","underscore","backbone","safe"],function(e,t,n,r){var i=n.Router.extend({routes:{"":"explore",explore:"explore","access_token=:token&token_type=:tokenType&expires_in=:expires":"connect","filter/:feedType":"filter","searches/:query":"search","play/:type/:mediaId":"playMedia","play/playlist/:playlistId/:index":"playPlaylistItem"},initialize:function(e){this.model=e.model,this.model.on("change:currentIndex",this.updatePlaylistUrl,this),n.history.start()},explore:function(){this.model.route("explore"),this.markNav("explore")},history:function(){},connect:function(e,t,n){this.model.connect(e)},search:function(e){this.model.set({query:e},{silent:!0})},filter:function(e){this.model.set("filter",e)},playMedia:function(e,t){this.model.playMedia(t,{type:e})},playPlaylistItem:function(e,t){this.model.playMedia(e,{type:"playlist",playlistId:e,index:t})},updatePlaylistUrl:function(e,n){var r=this.model.get("play")||"";t.isNumber(n)&&r!==""&&this.navigate("play/playlist/"+r+"/"+n,{trigger:!1})},markNav:function(t){e("#library-nav").find("li").removeClass("active").end().find("a[href^='#"+t+"']").parent().addClass("active")}});return i})