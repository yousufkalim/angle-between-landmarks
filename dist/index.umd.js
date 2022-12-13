!function(a,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(a||self).angleBetweenLandmarks=o()}(this,function(){return function(a,o,e,r){void 0===r&&(r={small:!1,round:!0});var t,n,s,l,d,i,p,h,f,u,m,w,y,M=function(a,o,e,r){if(!a||!o||!e)throw new Error("Please provide landmarks");if(!r)throw new Error("Please provide options");if([a,o,e].some(function(a){return isNaN(parseFloat(a.x))||isNaN(parseFloat(a.y))}))throw new Error("Please provide landmarks with correct x and y values");if("boolean"!=typeof r.small||"boolean"!=typeof r.round)throw new Error("Please provide options with correct small and round values");return{landmarks1:{x:parseFloat(a.x),y:parseFloat(a.y)},landmarks2:{x:parseFloat(o.x),y:parseFloat(o.y)},landmarks3:{x:parseFloat(e.x),y:parseFloat(e.y)}}}(a,o,e,r),x=M.landmarks1,c=M.landmarks2,k=M.landmarks3;return t=x.x,n=x.y,s=c.x,l=c.y,d=k.x,i=k.y,p=r.small,h=r.round,f=Math.sqrt(Math.pow(s-t,2)+Math.pow(l-n,2)),u=Math.sqrt(Math.pow(s-d,2)+Math.pow(l-i,2)),m=Math.sqrt(Math.pow(d-t,2)+Math.pow(i-n,2)),w=Math.acos((u*u+f*f-m*m)/(2*u*f)),y=((y=Math.round(180*w/Math.PI,1))+360)%360,y=p?Math.min(y,360-y):Math.max(y,360-y),h&&(y=Math.round(y,0)),y}});
//# sourceMappingURL=index.umd.js.map