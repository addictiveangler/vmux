!function(g,f){"function"===typeof define&&"object"===typeof define.amd?define(f):this[g]=f()}("draggable",function(){function g(a){a.draggableListeners={start:[],drag:[],stop:[]};a.whenDragStarts=f(a,"start");a.whenDragging=f(a,"drag");a.whenDragStops=f(a,"stop")}function f(a,c){return function(d){a.draggableListeners[c].push(d)}}function h(a,b){for(var d=!0,e=c.draggableListeners[a],k=e.length-1;0<=k;k--)!1===e[k](b)&&(d=!1);return d}function l(a){a.preventDefault&&a.preventDefault();a.stopPropagation&&
a.stopPropagation();return a.returnValue=!1}function m(a){var b=c.style,d=parseInt(b.left,10),e=parseInt(b.top,10),d=d+(a.clientX-c.lastXPosition),e=e+(a.clientY-c.lastYPosition);b.left=d+"px";b.top=e+"px";c.lastXPosition=a.clientX;c.lastYPosition=a.clientY;h("drag",{x:d,y:e,mouseEvent:a})}function n(a){document.removeEventListener("selectstart",l);document.removeEventListener("mousemove",m);document.removeEventListener("mouseup",n);var b=parseInt(c.style.left,10),d=parseInt(c.style.top,10);h("stop",
{x:b,y:d,mouseEvent:a})}var c;return function(a,b){b=b||a;a.style.position="absolute";g(a);b.addEventListener("mousedown",function(d){var e,b;c&&(e=c,e.style["z-index"]=9,e.style.zIndex=9);a.style["z-index"]="10";a.style.zIndex="10";c=a;b=c.getBoundingClientRect();e=b.top;b=b.left;c.style.left=b+"px";c.style.top=e+"px";c.lastXPosition=d.clientX;c.lastYPosition=d.clientY;h("start",{x:b,y:e,mouseEvent:d})&&(document.addEventListener("selectstart",l),document.addEventListener("mousemove",m),document.addEventListener("mouseup",
n))})}}); 