goog.provide('jayq.core');
goog.require('cljs.core');
goog.require('jayq.util');
goog.require('jayq.util');
goog.require('clojure.string');
jayq.core.crate_meta = (function crate_meta(func){
return func.prototype._crateGroup;
});
jayq.core.__GT_selector = (function __GT_selector(sel){
if(cljs.core.string_QMARK_.call(null,sel))
{return sel;
} else
{if(cljs.core.fn_QMARK_.call(null,sel))
{var temp__3971__auto__ = jayq.core.crate_meta.call(null,sel);
if(cljs.core.truth_(temp__3971__auto__))
{var cm = temp__3971__auto__;
return [cljs.core.str("[crateGroup="),cljs.core.str(cm),cljs.core.str("]")].join('');
} else
{return sel;
}
} else
{if(cljs.core.keyword_QMARK_.call(null,sel))
{return cljs.core.name.call(null,sel);
} else
{if("\uFDD0'else")
{return sel;
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.$ = (function() { 
var $__delegate = function (sel,p__3822){
var vec__3824 = p__3822;
var context = cljs.core.nth.call(null,vec__3824,0,null);
if(cljs.core.not.call(null,context))
{return jQuery(jayq.core.__GT_selector.call(null,sel));
} else
{return jQuery(jayq.core.__GT_selector.call(null,sel),context);
}
};
var $ = function (sel,var_args){
var p__3822 = null;
if (goog.isDef(var_args)) {
  p__3822 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return $__delegate.call(this, sel, p__3822);
};
$.cljs$lang$maxFixedArity = 1;
$.cljs$lang$applyTo = (function (arglist__3825){
var sel = cljs.core.first(arglist__3825);
var p__3822 = cljs.core.rest(arglist__3825);
return $__delegate(sel, p__3822);
});
$.cljs$lang$arity$variadic = $__delegate;
return $;
})()
;
jQuery.prototype.cljs$core$IReduce$ = true;
jQuery.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,cljs.core.first.call(null,this$),cljs.core.count.call(null,this$));
});
jQuery.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (this$,f,start){
return cljs.core.ci_reduce.call(null,jayq.core.coll,f,start,jayq.core.i);
});
jQuery.prototype.cljs$core$ILookup$ = true;
jQuery.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var or__3824__auto__ = this$.slice(k,(k + 1));
if(cljs.core.truth_(or__3824__auto__))
{return or__3824__auto__;
} else
{return null;
}
});
jQuery.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
return cljs.core._nth.call(null,this$,k,not_found);
});
jQuery.prototype.cljs$core$ISequential$ = true;
jQuery.prototype.cljs$core$IIndexed$ = true;
jQuery.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{return null;
}
});
jQuery.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
if((n < cljs.core.count.call(null,this$)))
{return this$.slice(n,(n + 1));
} else
{if((void 0 === not_found))
{return null;
} else
{return not_found;
}
}
});
jQuery.prototype.cljs$core$ICounted$ = true;
jQuery.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
return this$.size();
});
jQuery.prototype.cljs$core$ISeq$ = true;
jQuery.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
return this$.get(0);
});
jQuery.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
if((cljs.core.count.call(null,this$) > 1))
{return this$.slice(1);
} else
{return cljs.core.list.call(null);
}
});
jQuery.prototype.cljs$core$ISeqable$ = true;
jQuery.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
if(cljs.core.truth_(this$.get(0)))
{return this$;
} else
{return null;
}
});
jQuery.prototype.call = (function() {
var G__3826 = null;
var G__3826__2 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3826__3 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3826 = function(_,k,not_found){
switch(arguments.length){
case 2:
return G__3826__2.call(this,_,k);
case 3:
return G__3826__3.call(this,_,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3826;
})()
;
jayq.core.anim = (function anim(elem,props,dur){
return elem.animate(jayq.util.clj__GT_js.call(null,props),dur);
});
jayq.core.text = (function text($elem,txt){
return $elem.text(txt);
});
jayq.core.css = (function css($elem,opts){
if(cljs.core.keyword_QMARK_.call(null,opts))
{return $elem.css(cljs.core.name.call(null,opts));
} else
{return $elem.css(jayq.util.clj__GT_js.call(null,opts));
}
});
/**
* @param {...*} var_args
*/
jayq.core.attr = (function() { 
var attr__delegate = function ($elem,a,p__3827){
var vec__3829 = p__3827;
var v = cljs.core.nth.call(null,vec__3829,0,null);
var a__$1 = cljs.core.name.call(null,a);
if(cljs.core.not.call(null,v))
{return $elem.attr(a__$1);
} else
{return $elem.attr(a__$1,v);
}
};
var attr = function ($elem,a,var_args){
var p__3827 = null;
if (goog.isDef(var_args)) {
  p__3827 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return attr__delegate.call(this, $elem, a, p__3827);
};
attr.cljs$lang$maxFixedArity = 2;
attr.cljs$lang$applyTo = (function (arglist__3830){
var $elem = cljs.core.first(arglist__3830);
var a = cljs.core.first(cljs.core.next(arglist__3830));
var p__3827 = cljs.core.rest(cljs.core.next(arglist__3830));
return attr__delegate($elem, a, p__3827);
});
attr.cljs$lang$arity$variadic = attr__delegate;
return attr;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.data = (function() { 
var data__delegate = function ($elem,k,p__3831){
var vec__3833 = p__3831;
var v = cljs.core.nth.call(null,vec__3833,0,null);
var k__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v))
{return $elem.data(k__$1);
} else
{return $elem.data(k__$1,v);
}
};
var data = function ($elem,k,var_args){
var p__3831 = null;
if (goog.isDef(var_args)) {
  p__3831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return data__delegate.call(this, $elem, k, p__3831);
};
data.cljs$lang$maxFixedArity = 2;
data.cljs$lang$applyTo = (function (arglist__3834){
var $elem = cljs.core.first(arglist__3834);
var k = cljs.core.first(cljs.core.next(arglist__3834));
var p__3831 = cljs.core.rest(cljs.core.next(arglist__3834));
return data__delegate($elem, k, p__3831);
});
data.cljs$lang$arity$variadic = data__delegate;
return data;
})()
;
jayq.core.add_class = (function add_class($elem,cl){
var cl__$1 = cljs.core.name.call(null,cl);
return $elem.addClass(cl__$1);
});
jayq.core.remove_class = (function remove_class($elem,cl){
var cl__$1 = cljs.core.name.call(null,cl);
return $elem.removeClass(cl__$1);
});
jayq.core.append = (function append($elem,content){
return $elem.append(content);
});
jayq.core.prepend = (function prepend($elem,content){
return $elem.prepend(content);
});
jayq.core.remove = (function remove($elem){
return $elem.remove();
});
/**
* @param {...*} var_args
*/
jayq.core.hide = (function() { 
var hide__delegate = function ($elem,p__3835){
var vec__3837 = p__3835;
var speed = cljs.core.nth.call(null,vec__3837,0,null);
var on_finish = cljs.core.nth.call(null,vec__3837,1,null);
return $elem.hide(speed,on_finish);
};
var hide = function ($elem,var_args){
var p__3835 = null;
if (goog.isDef(var_args)) {
  p__3835 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return hide__delegate.call(this, $elem, p__3835);
};
hide.cljs$lang$maxFixedArity = 1;
hide.cljs$lang$applyTo = (function (arglist__3838){
var $elem = cljs.core.first(arglist__3838);
var p__3835 = cljs.core.rest(arglist__3838);
return hide__delegate($elem, p__3835);
});
hide.cljs$lang$arity$variadic = hide__delegate;
return hide;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.show = (function() { 
var show__delegate = function ($elem,p__3839){
var vec__3841 = p__3839;
var speed = cljs.core.nth.call(null,vec__3841,0,null);
var on_finish = cljs.core.nth.call(null,vec__3841,1,null);
return $elem.show(speed,on_finish);
};
var show = function ($elem,var_args){
var p__3839 = null;
if (goog.isDef(var_args)) {
  p__3839 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return show__delegate.call(this, $elem, p__3839);
};
show.cljs$lang$maxFixedArity = 1;
show.cljs$lang$applyTo = (function (arglist__3842){
var $elem = cljs.core.first(arglist__3842);
var p__3839 = cljs.core.rest(arglist__3842);
return show__delegate($elem, p__3839);
});
show.cljs$lang$arity$variadic = show__delegate;
return show;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.toggle = (function() { 
var toggle__delegate = function ($elem,p__3843){
var vec__3845 = p__3843;
var speed = cljs.core.nth.call(null,vec__3845,0,null);
var on_finish = cljs.core.nth.call(null,vec__3845,1,null);
return $elem.toggle(speed,on_finish);
};
var toggle = function ($elem,var_args){
var p__3843 = null;
if (goog.isDef(var_args)) {
  p__3843 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return toggle__delegate.call(this, $elem, p__3843);
};
toggle.cljs$lang$maxFixedArity = 1;
toggle.cljs$lang$applyTo = (function (arglist__3846){
var $elem = cljs.core.first(arglist__3846);
var p__3843 = cljs.core.rest(arglist__3846);
return toggle__delegate($elem, p__3843);
});
toggle.cljs$lang$arity$variadic = toggle__delegate;
return toggle;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_out = (function() { 
var fade_out__delegate = function ($elem,p__3847){
var vec__3849 = p__3847;
var speed = cljs.core.nth.call(null,vec__3849,0,null);
var on_finish = cljs.core.nth.call(null,vec__3849,1,null);
return $elem.fadeOut(speed,on_finish);
};
var fade_out = function ($elem,var_args){
var p__3847 = null;
if (goog.isDef(var_args)) {
  p__3847 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_out__delegate.call(this, $elem, p__3847);
};
fade_out.cljs$lang$maxFixedArity = 1;
fade_out.cljs$lang$applyTo = (function (arglist__3850){
var $elem = cljs.core.first(arglist__3850);
var p__3847 = cljs.core.rest(arglist__3850);
return fade_out__delegate($elem, p__3847);
});
fade_out.cljs$lang$arity$variadic = fade_out__delegate;
return fade_out;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.fade_in = (function() { 
var fade_in__delegate = function ($elem,p__3851){
var vec__3853 = p__3851;
var speed = cljs.core.nth.call(null,vec__3853,0,null);
var on_finish = cljs.core.nth.call(null,vec__3853,1,null);
return $elem.fadeIn(speed,on_finish);
};
var fade_in = function ($elem,var_args){
var p__3851 = null;
if (goog.isDef(var_args)) {
  p__3851 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return fade_in__delegate.call(this, $elem, p__3851);
};
fade_in.cljs$lang$maxFixedArity = 1;
fade_in.cljs$lang$applyTo = (function (arglist__3854){
var $elem = cljs.core.first(arglist__3854);
var p__3851 = cljs.core.rest(arglist__3854);
return fade_in__delegate($elem, p__3851);
});
fade_in.cljs$lang$arity$variadic = fade_in__delegate;
return fade_in;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_up = (function() { 
var slide_up__delegate = function ($elem,p__3855){
var vec__3857 = p__3855;
var speed = cljs.core.nth.call(null,vec__3857,0,null);
var on_finish = cljs.core.nth.call(null,vec__3857,1,null);
return $elem.slideUp(speed,on_finish);
};
var slide_up = function ($elem,var_args){
var p__3855 = null;
if (goog.isDef(var_args)) {
  p__3855 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_up__delegate.call(this, $elem, p__3855);
};
slide_up.cljs$lang$maxFixedArity = 1;
slide_up.cljs$lang$applyTo = (function (arglist__3858){
var $elem = cljs.core.first(arglist__3858);
var p__3855 = cljs.core.rest(arglist__3858);
return slide_up__delegate($elem, p__3855);
});
slide_up.cljs$lang$arity$variadic = slide_up__delegate;
return slide_up;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.slide_down = (function() { 
var slide_down__delegate = function ($elem,p__3859){
var vec__3861 = p__3859;
var speed = cljs.core.nth.call(null,vec__3861,0,null);
var on_finish = cljs.core.nth.call(null,vec__3861,1,null);
return $elem.slideDown(speed,on_finish);
};
var slide_down = function ($elem,var_args){
var p__3859 = null;
if (goog.isDef(var_args)) {
  p__3859 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return slide_down__delegate.call(this, $elem, p__3859);
};
slide_down.cljs$lang$maxFixedArity = 1;
slide_down.cljs$lang$applyTo = (function (arglist__3862){
var $elem = cljs.core.first(arglist__3862);
var p__3859 = cljs.core.rest(arglist__3862);
return slide_down__delegate($elem, p__3859);
});
slide_down.cljs$lang$arity$variadic = slide_down__delegate;
return slide_down;
})()
;
jayq.core.parent = (function parent($elem){
return $elem.parent();
});
jayq.core.find = (function find($elem,selector){
return $elem.find(cljs.core.name.call(null,selector));
});
jayq.core.inner = (function inner($elem,v){
return $elem.html(v);
});
jayq.core.empty = (function empty($elem){
return $elem.empty();
});
/**
* @param {...*} var_args
*/
jayq.core.val = (function() { 
var val__delegate = function ($elem,p__3863){
var vec__3865 = p__3863;
var v = cljs.core.nth.call(null,vec__3865,0,null);
if(cljs.core.truth_(v))
{return $elem.val(v);
} else
{return $elem.val();
}
};
var val = function ($elem,var_args){
var p__3863 = null;
if (goog.isDef(var_args)) {
  p__3863 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return val__delegate.call(this, $elem, p__3863);
};
val.cljs$lang$maxFixedArity = 1;
val.cljs$lang$applyTo = (function (arglist__3866){
var $elem = cljs.core.first(arglist__3866);
var p__3863 = cljs.core.rest(arglist__3866);
return val__delegate($elem, p__3863);
});
val.cljs$lang$arity$variadic = val__delegate;
return val;
})()
;
jayq.core.queue = (function queue($elem,callback){
return $elem.queue(callback);
});
jayq.core.dequeue = (function dequeue(elem){
return jayq.core.$.call(null,elem).dequeue();
});
jayq.core.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
jayq.core.xhr = (function xhr(p__3867,content,callback){
var vec__3869 = p__3867;
var method = cljs.core.nth.call(null,vec__3869,0,null);
var uri = cljs.core.nth.call(null,vec__3869,1,null);
var params = jayq.util.clj__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data","\uFDD0'success"],{"\uFDD0'type":clojure.string.upper_case.call(null,cljs.core.name.call(null,method)),"\uFDD0'data":jayq.util.clj__GT_js.call(null,content),"\uFDD0'success":callback}));
return jQuery.ajax(uri,params);
});
jayq.core.bind = (function bind($elem,ev,func){
return $elem.bind(cljs.core.name.call(null,ev),func);
});
jayq.core.trigger = (function trigger($elem,ev){
return $elem.trigger(cljs.core.name.call(null,ev));
});
jayq.core.delegate = (function delegate($elem,sel,ev,func){
return $elem.delegate(jayq.core.__GT_selector.call(null,sel),cljs.core.name.call(null,ev),func);
});
jayq.core.__GT_event = (function __GT_event(e){
if(cljs.core.keyword_QMARK_.call(null,e))
{return cljs.core.name.call(null,e);
} else
{if(cljs.core.map_QMARK_.call(null,e))
{return jayq.util.clj__GT_js.call(null,e);
} else
{if(cljs.core.coll_QMARK_.call(null,e))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,cljs.core.name,e));
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Unknown event type: "),cljs.core.str(e)].join('')));
} else
{return null;
}
}
}
}
});
/**
* @param {...*} var_args
*/
jayq.core.on = (function() { 
var on__delegate = function ($elem,events,p__3870){
var vec__3872 = p__3870;
var sel = cljs.core.nth.call(null,vec__3872,0,null);
var data = cljs.core.nth.call(null,vec__3872,1,null);
var handler = cljs.core.nth.call(null,vec__3872,2,null);
return $elem.on(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
};
var on = function ($elem,events,var_args){
var p__3870 = null;
if (goog.isDef(var_args)) {
  p__3870 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return on__delegate.call(this, $elem, events, p__3870);
};
on.cljs$lang$maxFixedArity = 2;
on.cljs$lang$applyTo = (function (arglist__3873){
var $elem = cljs.core.first(arglist__3873);
var events = cljs.core.first(cljs.core.next(arglist__3873));
var p__3870 = cljs.core.rest(cljs.core.next(arglist__3873));
return on__delegate($elem, events, p__3870);
});
on.cljs$lang$arity$variadic = on__delegate;
return on;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.one = (function() { 
var one__delegate = function ($elem,events,p__3874){
var vec__3876 = p__3874;
var sel = cljs.core.nth.call(null,vec__3876,0,null);
var data = cljs.core.nth.call(null,vec__3876,1,null);
var handler = cljs.core.nth.call(null,vec__3876,2,null);
return $elem.one(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),data,handler);
};
var one = function ($elem,events,var_args){
var p__3874 = null;
if (goog.isDef(var_args)) {
  p__3874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return one__delegate.call(this, $elem, events, p__3874);
};
one.cljs$lang$maxFixedArity = 2;
one.cljs$lang$applyTo = (function (arglist__3877){
var $elem = cljs.core.first(arglist__3877);
var events = cljs.core.first(cljs.core.next(arglist__3877));
var p__3874 = cljs.core.rest(cljs.core.next(arglist__3877));
return one__delegate($elem, events, p__3874);
});
one.cljs$lang$arity$variadic = one__delegate;
return one;
})()
;
/**
* @param {...*} var_args
*/
jayq.core.off = (function() { 
var off__delegate = function ($elem,events,p__3878){
var vec__3880 = p__3878;
var sel = cljs.core.nth.call(null,vec__3880,0,null);
var handler = cljs.core.nth.call(null,vec__3880,1,null);
return $elem.off(jayq.core.__GT_event.call(null,events),jayq.core.__GT_selector.call(null,sel),handler);
};
var off = function ($elem,events,var_args){
var p__3878 = null;
if (goog.isDef(var_args)) {
  p__3878 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return off__delegate.call(this, $elem, events, p__3878);
};
off.cljs$lang$maxFixedArity = 2;
off.cljs$lang$applyTo = (function (arglist__3881){
var $elem = cljs.core.first(arglist__3881);
var events = cljs.core.first(cljs.core.next(arglist__3881));
var p__3878 = cljs.core.rest(cljs.core.next(arglist__3881));
return off__delegate($elem, events, p__3878);
});
off.cljs$lang$arity$variadic = off__delegate;
return off;
})()
;
