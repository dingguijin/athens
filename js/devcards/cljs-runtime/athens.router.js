goog.provide('athens.router');
goog.require('cljs.core');
goog.require('day8.re_frame.tracing');
goog.require('re_frame.core');
goog.require('reitit.coercion.spec');
goog.require('reitit.frontend');
goog.require('reitit.frontend.controllers');
goog.require('reitit.frontend.easy');
var G__49635_49781 = new cljs.core.Keyword(null,"current-route","current-route",2067529448);
var G__49636_49782 = (function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__49635_49781,G__49636_49782) : re_frame.core.reg_sub.call(null,G__49635_49781,G__49636_49782));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (_,p__49644){
var vec__49650 = p__49644;
var seq__49651 = cljs.core.seq(vec__49650);
var first__49652 = cljs.core.first(seq__49651);
var seq__49651__$1 = cljs.core.next(seq__49651);
var ___$1 = first__49652;
var route = seq__49651__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate!","navigate!",79998348),route], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"navigated","navigated",540897836),(function (p__49679,p__49680){
var map__49681 = p__49679;
var map__49681__$1 = (((((!((map__49681 == null))))?(((((map__49681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49681):map__49681);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49681__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49692 = p__49680;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49692,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49692,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
var node = (function (){var G__49707 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","uid","block/uid",-1623585167),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(new_match))], null)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__49707) : re_frame.core.subscribe.call(null,G__49707));
})();
var node_title = new cljs.core.Keyword("node","title","node/title",628940777).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(node));
var page_title = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = node_title;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "untitled";
}
})())," \u2013 Athens"].join('');
(document.title = page_title);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers)),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"merge-prompt","merge-prompt",1428758084)], null)], null);
}));
var G__49709_49803 = new cljs.core.Keyword(null,"navigate!","navigate!",79998348);
var G__49710_49804 = ((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (route){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol("rfee","push-state","rfee/push-state",305346137,null),new cljs.core.Symbol(null,"route","route",1970422836,null)));

var opts__47664__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__47665__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var opts__47664__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47665__auto__ = reitit.frontend.easy.push_state;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47665__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("rfee","push-state","rfee/push-state",305346137,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47665__auto__;
})(),(function (){var opts__47664__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__47665__auto__ = route;
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47665__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__47665__auto__;
})());
debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__47665__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol("rfee","push-state","rfee/push-state",305346137,null),new cljs.core.Symbol(null,"route","route",1970422836,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__47665__auto__;
}catch (e49723){var e = e49723;
throw e;
}}):(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__49709_49803,G__49710_49804) : re_frame.core.reg_fx.call(null,G__49709_49803,G__49710_49804));
athens.router.routes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"about","about",1423892543)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pages",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pages","pages",-285406513)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["page/:id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"page","page",849072397)], null)], null)], null);
athens.router.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(athens.router.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
athens.router.on_navigate = (function athens$router$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
var G__49748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigated","navigated",540897836),new_match], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49748) : re_frame.core.dispatch.call(null,G__49748));
} else {
return null;
}
});
athens.router.navigate = (function athens$router$navigate(page){
var G__49752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),page], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49752) : re_frame.core.dispatch.call(null,G__49752));
});
athens.router.navigate_page = (function athens$router$navigate_page(uid){
var G__49756 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),uid], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49756) : re_frame.core.dispatch.call(null,G__49756));
});
athens.router.toggle_open = (function athens$router$toggle_open(dbid,open){
var G__49761 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("block","toggle-open","block/toggle-open",2080151710),dbid,open], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__49761) : re_frame.core.dispatch.call(null,G__49761));
});
athens.router.init_routes_BANG_ = (function athens$router$init_routes_BANG_(){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Initializing routes"], 0));

return reitit.frontend.easy.start_BANG_(athens.router.router,athens.router.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true], null));
});

//# sourceMappingURL=athens.router.js.map