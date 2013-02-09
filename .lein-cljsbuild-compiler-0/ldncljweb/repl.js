goog.provide('ldncljweb.repl');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('fetch.remotes');
ldncljweb.repl.map__GT_js = (function map__GT_js(m){
var out = {};
var G__9856 = cljs.core.seq.call(null,m);
while(true){
if(G__9856)
{var vec__9857 = cljs.core.first.call(null,G__9856);
var k = cljs.core.nth.call(null,vec__9857,0,null);
var v = cljs.core.nth.call(null,vec__9857,1,null);
(out[cljs.core.name.call(null,k)] = v);
{
var G__9858 = cljs.core.next.call(null,G__9856);
G__9856 = G__9858;
continue;
}
} else
{}
break;
}
return out;
});
ldncljweb.repl.document = jayq.core.$.call(null);
ldncljweb.repl.$repl_div = jayq.core.$.call(null,"\uFDD0'#repl-in-container");
ldncljweb.repl.$repl_input = jayq.core.$.call(null,"\uFDD0'#repl-command");
ldncljweb.repl.$repl_out = jayq.core.$.call(null,"\uFDD0'#repl-out-container");
ldncljweb.repl.$repl_command = cljs.core.first.call(null,jayq.core.$.call(null,"\uFDD0'#repl-command"));
ldncljweb.repl.$repl_output = cljs.core.first.call(null,jayq.core.$.call(null,"\uFDD0'#repl-output"));
ldncljweb.repl.history = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
ldncljweb.repl.curr_history = cljs.core.atom.call(null,-1);
ldncljweb.repl.$repl_container = jayq.core.$.call(null,"\uFDD0'#repl");
ldncljweb.repl.$try_repl = jayq.core.$.call(null,"\uFDD0'#try-link");
jayq.core.delegate.call(null,ldncljweb.repl.$try_repl,null,"\uFDD0'click",(function (e){
ldncljweb.repl.$repl_container.lightbox_me(ldncljweb.repl.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["centered","onLoad"],{"centered":true,"onLoad":(function (){
ldncljweb.repl.editor = ((!((CodeMirror == null)))?CodeMirror.fromTextArea(ldncljweb.repl.$repl_command,ldncljweb.repl.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'mode","\uFDD0'lineNumbers","\uFDD0'autofocus","\uFDD0'theme","\uFDD0'extraKeys"],{"\uFDD0'mode":"text/x-clojure","\uFDD0'lineNumbers":true,"\uFDD0'autofocus":true,"\uFDD0'theme":"blackboard","\uFDD0'extraKeys":ldncljweb.repl.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["Ctrl-Enter","Up","Down"],{"Ctrl-Enter":ldncljweb.repl.repl_submit,"Up":ldncljweb.repl.history_up,"Down":ldncljweb.repl.history_down}))}))):null);
ldncljweb.repl.editor.setSize(600,100);
ldncljweb.repl.results = ((!((CodeMirror == null)))?(new CodeMirror(ldncljweb.repl.$repl_output,ldncljweb.repl.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'readOnly","\uFDD0'theme"],{"\uFDD0'readOnly":true,"\uFDD0'theme":"blackboard"})))):null);
return ldncljweb.repl.results.setSize(600,200);
})})));
return e.preventDefault();
}));
ldncljweb.repl.set_editor = (function set_editor(txt){
return ldncljweb.repl.editor.setValue(txt);
});
/**
* Called by either pressing Ctrl+Enter or clicking on the 'Evaluate' button
*/
ldncljweb.repl.repl_submit = (function repl_submit(_){
var param = cljs.core.apply.call(null,cljs.core.str,ldncljweb.repl.editor.getValue());
cljs.core.reset_BANG_.call(null,ldncljweb.repl.curr_history,-1);
cljs.core.swap_BANG_.call(null,ldncljweb.repl.history,cljs.core.conj,param);
fetch.remotes.remote_callback.call(null,"repl",cljs.core.PersistentVector.fromArray([param], true),ldncljweb.repl.repl_callback);
return ldncljweb.repl.set_editor.call(null,"");
});
ldncljweb.repl.history_up = (function history_up(key){
if(!((cljs.core.deref.call(null,ldncljweb.repl.history) == null)))
{return cljs.core.swap_BANG_.call(null,ldncljweb.repl.curr_history,cljs.core.dec);
} else
{if((cljs.core.deref.call(null,ldncljweb.repl.curr_history) <= -1))
{return cljs.core.reset_BANG_.call(null,ldncljweb.repl.curr_history,(cljs.core.count.call(null,cljs.core.deref.call(null,ldncljweb.repl.history)) - 1));
} else
{return null;
}
}
});
ldncljweb.repl.history_down = (function history_down(key){
if(!((cljs.core.deref.call(null,ldncljweb.repl.history) == null)))
{return cljs.core.swap_BANG_.call(null,ldncljweb.repl.curr_history,cljs.core.inc);
} else
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,ldncljweb.repl.curr_history),cljs.core.count.call(null,cljs.core.deref.call(null,ldncljweb.repl.history))))
{return cljs.core.reset_BANG_.call(null,ldncljweb.repl.curr_history,0);
} else
{return null;
}
}
});
var group__3008__auto__ = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
ldncljweb.repl.button = (function button(p__9859){
var map__9861 = p__9859;
var map__9861__$1 = ((cljs.core.seq_QMARK_.call(null,map__9861))?cljs.core.apply.call(null,cljs.core.hash_map,map__9861):map__9861);
var param = cljs.core._lookup.call(null,map__9861__$1,"\uFDD0'param",null);
var action = cljs.core._lookup.call(null,map__9861__$1,"\uFDD0'action",null);
var label = cljs.core._lookup.call(null,map__9861__$1,"\uFDD0'label",null);
var elem__3009__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'a.button",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":"#"}),label], true));
elem__3009__auto__.setAttribute("crateGroup",group__3008__auto__);
return elem__3009__auto__;
});
ldncljweb.repl.button.prototype._crateGroup = group__3008__auto__;
jayq.core.append.call(null,ldncljweb.repl.$repl_div,ldncljweb.repl.button.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'label"],{"\uFDD0'label":"Evaluate"})));
/**
* Function called back after calling the remote providing the result of the expression.
*/
ldncljweb.repl.repl_callback = (function repl_callback(data){
var curr_history = ldncljweb.repl.results.getValue();
var new_expr = [cljs.core.str("user => "),cljs.core.str((new cljs.core.Keyword("\uFDD0'expr")).call(null,data)),cljs.core.str("\n"),cljs.core.str(cljs.core._lookup.call(null,data,"\uFDD0'message",(new cljs.core.Keyword("\uFDD0'result")).call(null,data)))].join('');
ldncljweb.repl.results.setValue([cljs.core.str(curr_history),cljs.core.str("\n"),cljs.core.str(new_expr)].join(''));
var line_nums = ldncljweb.repl.results.lineCount();
try{ldncljweb.repl.results.setLineClass("repl-error");
return ldncljweb.repl.results.setCursor((line_nums + 1));
}catch (e9863){if(cljs.core.instance_QMARK_.call(null,ldncljweb.repl.Error,e9863))
{var e = e9863;
return alert("Error while setting the cursor ",e);
} else
{if("\uFDD0'else")
{throw e9863;
} else
{return null;
}
}
}});
jayq.core.delegate.call(null,ldncljweb.repl.$repl_div,ldncljweb.repl.button,"\uFDD0'click",(function (e){
e.preventDefault();
ldncljweb.repl.repl_submit.call(null);
var me = this;
return null;
}));
