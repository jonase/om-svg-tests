// Compiled by ClojureScript 0.0-2202
goog.provide('om_svg_tests.core');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('goog.events');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
om_svg_tests.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",1013904353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p1","p1",1013907763),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),101,new cljs.core.Keyword(null,"y","y",1013904363),137], null),new cljs.core.Keyword(null,"p2","p2",1013907764),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),121,new cljs.core.Keyword(null,"y","y",1013904363),83], null)], null),new cljs.core.Keyword(null,"m","m",1013904351),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),164,new cljs.core.Keyword(null,"y","y",1013904363),193], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),179,new cljs.core.Keyword(null,"y","y",1013904363),113], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),205,new cljs.core.Keyword(null,"y","y",1013904363),115], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),235,new cljs.core.Keyword(null,"y","y",1013904363),110], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),263,new cljs.core.Keyword(null,"y","y",1013904363),137], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),296,new cljs.core.Keyword(null,"y","y",1013904363),149], null)], null)], null));
om_svg_tests.core.drag_move_fn = (function drag_move_fn(app){return (function (evt){return om.core.update_BANG_.call(null,app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),evt.clientX,new cljs.core.Keyword(null,"y","y",1013904363),evt.clientY], null));
});
});
om_svg_tests.core.drag_end_fn = (function drag_end_fn(drag_move,drag_end){return (function (evt){goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,drag_move);
return goog.events.unlisten(window,goog.events.EventType.MOUSEUP,cljs.core.deref.call(null,drag_end));
});
});
om_svg_tests.core.dragging = (function dragging(app){var drag_move = om_svg_tests.core.drag_move_fn.call(null,app);var drag_end_atom = cljs.core.atom.call(null,null);var drag_end = om_svg_tests.core.drag_end_fn.call(null,drag_move,drag_end_atom);cljs.core.reset_BANG_.call(null,drag_end_atom,drag_end);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,drag_move);
return goog.events.listen(window,goog.events.EventType.MOUSEUP,drag_end);
});
om_svg_tests.core.point = (function point(app,owner){return React.DOM.circle({"onMouseDown": (function (){return om_svg_tests.core.dragging.call(null,app);
}), "stroke": "blue", "fill": "black", "strokeWidth": 2, "r": 5, "cy": new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(app), "cx": new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(app)});
});
om_svg_tests.core.square = (function square(x){return (x * x);
});
om_svg_tests.core.dist = (function dist(x1,y1,x2,y2){return Math.sqrt((om_svg_tests.core.square.call(null,(x2 - x1)) + om_svg_tests.core.square.call(null,(y2 - y1))));
});
om_svg_tests.core.circle = (function circle(p__5600,owner){var map__5607 = p__5600;var map__5607__$1 = ((cljs.core.seq_QMARK_.call(null,map__5607))?cljs.core.apply.call(null,cljs.core.hash_map,map__5607):map__5607);var p2 = cljs.core.get.call(null,map__5607__$1,new cljs.core.Keyword(null,"p2","p2",1013907764));var p1 = cljs.core.get.call(null,map__5607__$1,new cljs.core.Keyword(null,"p1","p1",1013907763));if(typeof om_svg_tests.core.t5608 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_svg_tests.core.t5608 = (function (p1,p2,map__5607,owner,p__5600,circle,meta5609){
this.p1 = p1;
this.p2 = p2;
this.map__5607 = map__5607;
this.owner = owner;
this.p__5600 = p__5600;
this.circle = circle;
this.meta5609 = meta5609;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_svg_tests.core.t5608.cljs$lang$type = true;
om_svg_tests.core.t5608.cljs$lang$ctorStr = "om-svg-tests.core/t5608";
om_svg_tests.core.t5608.cljs$lang$ctorPrWriter = ((function (map__5607,map__5607__$1,p2,p1){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"om-svg-tests.core/t5608");
});})(map__5607,map__5607__$1,p2,p1))
;
om_svg_tests.core.t5608.prototype.om$core$IRender$ = true;
om_svg_tests.core.t5608.prototype.om$core$IRender$render$arity$1 = ((function (map__5607,map__5607__$1,p2,p1){
return (function (this$){var self__ = this;
var this$__$1 = this;var map__5611 = self__.p1;var map__5611__$1 = ((cljs.core.seq_QMARK_.call(null,map__5611))?cljs.core.apply.call(null,cljs.core.hash_map,map__5611):map__5611);var cx = cljs.core.get.call(null,map__5611__$1,new cljs.core.Keyword(null,"x","x",1013904362));var cy = cljs.core.get.call(null,map__5611__$1,new cljs.core.Keyword(null,"y","y",1013904363));var map__5612 = self__.p2;var map__5612__$1 = ((cljs.core.seq_QMARK_.call(null,map__5612))?cljs.core.apply.call(null,cljs.core.hash_map,map__5612):map__5612);var px = cljs.core.get.call(null,map__5612__$1,new cljs.core.Keyword(null,"x","x",1013904362));var py = cljs.core.get.call(null,map__5612__$1,new cljs.core.Keyword(null,"y","y",1013904363));return React.DOM.g(null,React.DOM.circle({"strokeWidth": 4, "stroke": "black", "fill": "none", "r": om_svg_tests.core.dist.call(null,cx,cy,px,py), "cy": cy, "cx": cx}),om.core.build.call(null,om_svg_tests.core.point,self__.p1),om.core.build.call(null,om_svg_tests.core.point,self__.p2));
});})(map__5607,map__5607__$1,p2,p1))
;
om_svg_tests.core.t5608.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__5607,map__5607__$1,p2,p1){
return (function (_5610){var self__ = this;
var _5610__$1 = this;return self__.meta5609;
});})(map__5607,map__5607__$1,p2,p1))
;
om_svg_tests.core.t5608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__5607,map__5607__$1,p2,p1){
return (function (_5610,meta5609__$1){var self__ = this;
var _5610__$1 = this;return (new om_svg_tests.core.t5608(self__.p1,self__.p2,self__.map__5607,self__.owner,self__.p__5600,self__.circle,meta5609__$1));
});})(map__5607,map__5607__$1,p2,p1))
;
om_svg_tests.core.__GT_t5608 = ((function (map__5607,map__5607__$1,p2,p1){
return (function __GT_t5608(p1__$1,p2__$1,map__5607__$2,owner__$1,p__5600__$1,circle__$1,meta5609){return (new om_svg_tests.core.t5608(p1__$1,p2__$1,map__5607__$2,owner__$1,p__5600__$1,circle__$1,meta5609));
});})(map__5607,map__5607__$1,p2,p1))
;
}
return (new om_svg_tests.core.t5608(p1,p2,map__5607__$1,owner,p__5600,circle,null));
});
om_svg_tests.core.bezier_string = (function bezier_string(points){var vec__5614 = points;var p1 = cljs.core.nth.call(null,vec__5614,0,null);var ps = cljs.core.nthnext.call(null,vec__5614,1);var start_str = [cljs.core.str("M "),cljs.core.str(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1)),cljs.core.str(" ")].join('');var rest_str = cljs.core.reduce.call(null,((function (vec__5614,p1,ps,start_str){
return (function (s,p){return [cljs.core.str(s),cljs.core.str("T "),cljs.core.str(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p)),cljs.core.str(" ")].join('');
});})(vec__5614,p1,ps,start_str))
,"",ps);return [cljs.core.str(start_str),cljs.core.str(rest_str)].join('');
});
om_svg_tests.core.bezier = (function bezier(p__5615,owner){var vec__5620 = p__5615;var control_points = cljs.core.nthnext.call(null,vec__5620,0);var app = vec__5620;if(typeof om_svg_tests.core.t5621 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_svg_tests.core.t5621 = (function (app,control_points,vec__5620,owner,p__5615,bezier,meta5622){
this.app = app;
this.control_points = control_points;
this.vec__5620 = vec__5620;
this.owner = owner;
this.p__5615 = p__5615;
this.bezier = bezier;
this.meta5622 = meta5622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_svg_tests.core.t5621.cljs$lang$type = true;
om_svg_tests.core.t5621.cljs$lang$ctorStr = "om-svg-tests.core/t5621";
om_svg_tests.core.t5621.cljs$lang$ctorPrWriter = ((function (vec__5620,control_points,app){
return (function (this__4048__auto__,writer__4049__auto__,opt__4050__auto__){return cljs.core._write.call(null,writer__4049__auto__,"om-svg-tests.core/t5621");
});})(vec__5620,control_points,app))
;
om_svg_tests.core.t5621.prototype.om$core$IRender$ = true;
om_svg_tests.core.t5621.prototype.om$core$IRender$render$arity$1 = ((function (vec__5620,control_points,app){
return (function (this$){var self__ = this;
var this$__$1 = this;return cljs.core.apply.call(null,om.dom.g,null,React.DOM.path({"strokeWidth": 4, "fill": "none", "stroke": "black", "d": om_svg_tests.core.bezier_string.call(null,self__.control_points)}),om.core.build_all.call(null,om_svg_tests.core.point,self__.app));
});})(vec__5620,control_points,app))
;
om_svg_tests.core.t5621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__5620,control_points,app){
return (function (_5623){var self__ = this;
var _5623__$1 = this;return self__.meta5622;
});})(vec__5620,control_points,app))
;
om_svg_tests.core.t5621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__5620,control_points,app){
return (function (_5623,meta5622__$1){var self__ = this;
var _5623__$1 = this;return (new om_svg_tests.core.t5621(self__.app,self__.control_points,self__.vec__5620,self__.owner,self__.p__5615,self__.bezier,meta5622__$1));
});})(vec__5620,control_points,app))
;
om_svg_tests.core.__GT_t5621 = ((function (vec__5620,control_points,app){
return (function __GT_t5621(app__$1,control_points__$1,vec__5620__$1,owner__$1,p__5615__$1,bezier__$1,meta5622){return (new om_svg_tests.core.t5621(app__$1,control_points__$1,vec__5620__$1,owner__$1,p__5615__$1,bezier__$1,meta5622));
});})(vec__5620,control_points,app))
;
}
return (new om_svg_tests.core.t5621(app,control_points,vec__5620,owner,p__5615,bezier,null));
});
om.core.root.call(null,(function (app,owner){return React.DOM.svg({"height": "100%", "width": "100%"},om.core.build.call(null,om_svg_tests.core.circle,new cljs.core.Keyword(null,"o","o",1013904353).cljs$core$IFn$_invoke$arity$1(app)),om.core.build.call(null,om_svg_tests.core.bezier,new cljs.core.Keyword(null,"m","m",1013904351).cljs$core$IFn$_invoke$arity$1(app)));
}),om_svg_tests.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map