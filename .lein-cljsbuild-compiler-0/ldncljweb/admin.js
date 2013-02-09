goog.provide('ldncljweb.admin');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('jayq.core');
ldncljweb.admin.load_post_data = (function load_post_data(id,title){
var success_fn = (function (data,status,xhr){
jayq.core.$.call(null,"\uFDD0'#post-id").val(data.call(null,"_id"));
jayq.core.$.call(null,"\uFDD0'#post-data").val(data.call(null,"date"));
jayq.core.$.call(null,"\uFDD0'#post-title").val(data.call(null,"title"));
return jayq.core.$.call(null,"\uFDD0'#post-edit-area").val(data.call(null,"body"));
});
jayq.core.$.call(null,"\uFDD0'#post-edit-area").val([cljs.core.str("Loading"),cljs.core.str(title),cljs.core.str("...")].join(''));
return jQuery.ajax([cljs.core.str("/admin/posts/"),cljs.core.str(id)].join(''),cljs.core.ObjMap.fromObject(["\uFDD0'dataType","\uFDD0'success"],{"\uFDD0'dataType":"json","\uFDD0'success":success_fn}));
});
ldncljweb.admin.load_posts_success_fn = (function load_posts_success_fn(data,status,xhr){
var posts = cljs.core.map.call(null,ldncljweb.admin.post_format_fn,data);
ldncljweb.admin.posts_list_element.append(posts.join(""));
return jayq.core.$.call(null,"#posts-list div").click((function (){
ldncljweb.admin.remove_class.call(null,jayq.core.$.call(null,"#posts-list div"),"selected");
var el = this;
ldncljweb.admin.add_class.call(null,el,"selected");
return ldncljweb.admin.load_post_data.call(null,el.attr("data-id"),el.text());
}));
});
ldncljweb.admin.load_posts = (function load_posts(){
var posts_list_element = jayq.core.$.call(null,"\uFDD0'#posts-list");
var post_format_fn = (function (k,post){
return [cljs.core.str("<div data-id=\""),cljs.core.str(post.call(null,"id_")),cljs.core.str("\">"),cljs.core.str(jayq.core.$.call(null,"div").text(post.call(null,"title")).html()),cljs.core.str("</div>")].join('');
});
var ajax_url = "/admin/posttitles";
var ajax_params = cljs.core.ObjMap.fromObject(["\uFDD0'dataType","\uFDD0'success"],{"\uFDD0'dataType":"json","\uFDD0'success":ldncljweb.admin.load_posts_success_fn});
return jQuery.ajax(ajax_url,ajax_params);
});
ldncljweb.admin.clear_post_fields = (function clear_post_fields(){
jayq.core.$.call(null,"\uFDD0'#post-id").val("");
jayq.core.$.call(null,"\uFDD0'#post-title").val("");
jayq.core.$.call(null,"\uFDD0'#post-date").val("");
jayq.core.$.call(null,"\uFDD0'#post-edit-area").val("");
jayq.core.remove_class.call(null,jayq.core.$.call(null,"#posts-list div"),"selected");
return jayq.util.log.call(null,"Our clear-post-fields called");
});
ldncljweb.admin.post_save_click = (function post_save_click(){
var post_id_element = jayq.core.$.call(null,"\uFDD0'#post-id");
var post_id = post_id_element.val();
var ajax_params = cljs.core.ObjMap.fromObject(["\uFDD0'data","\uFDD0'success"],{"\uFDD0'data":cljs.core.ObjMap.fromObject(["\uFDD0'title","\uFDD0'date","\uFDD0'body"],{"\uFDD0'title":jayq.core.$.call(null,"\uFDD0'#post-title").val(),"\uFDD0'date":jayq.core.$.call(null,"\uFDD0'#post-date").val(),"\uFDD0'body":jayq.core.$.call(null,"\uFDD0'#post-edit-area").val()}),"\uFDD0'success":(function (){
return ldncljweb.admin.load_posts.call(null);
})});
if(cljs.core._EQ_.call(null,post_id.length,0))
{return jQuery.ajax(cljs.core.assoc.call(null,ajax_params,"\uFDD0'url","/admin/posts/new","\uFDD0'type","POST"));
} else
{return jQuery.ajax(cljs.core.assoc.call(null,ajax_params,"\uFDD0'url",[cljs.core.str("/admin/posts/"),cljs.core.str(post_id)].join(''),"\uFDD0'type","PUT"));
}
});
ldncljweb.admin.main = (function main(){
return jayq.core.$.call(null,(function (){
return jayq.core.$.call(null,"\uFDD0'#post-save").button().click(ldncljweb.admin.post_save_click);
}));
});
goog.exportSymbol('ldncljweb.admin.main', ldncljweb.admin.main);
