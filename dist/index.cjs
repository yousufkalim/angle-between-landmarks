module.exports=function(a,r,o,t){void 0===t&&(t={small:!1,round:!0});var e,s,n,l,p,d,h,i,m,w,u,M,x,y=function(a,r,o,t){if(!a||!r||!o)throw new Error("Please provide landmarks");if(!t)throw new Error("Please provide options");if([a,r,o].some(function(a){return isNaN(parseFloat(a.x))||isNaN(parseFloat(a.y))}))throw new Error("Please provide landmarks with correct x and y values");if("boolean"!=typeof t.small||"boolean"!=typeof t.round)throw new Error("Please provide options with correct small and round values");return{landmarks1:{x:parseFloat(a.x),y:parseFloat(a.y)},landmarks2:{x:parseFloat(r.x),y:parseFloat(r.y)},landmarks3:{x:parseFloat(o.x),y:parseFloat(o.y)}}}(a,r,o,t),f=y.landmarks1,c=y.landmarks2,k=y.landmarks3;return e=f.x,s=f.y,n=c.x,l=c.y,p=k.x,d=k.y,h=t.small,i=t.round,m=Math.sqrt(Math.pow(n-e,2)+Math.pow(l-s,2)),w=Math.sqrt(Math.pow(n-p,2)+Math.pow(l-d,2)),u=Math.sqrt(Math.pow(p-e,2)+Math.pow(d-s,2)),M=Math.acos((w*w+m*m-u*u)/(2*w*m)),x=((x=Math.round(180*M/Math.PI,1))+360)%360,x=h?Math.min(x,360-x):Math.max(x,360-x),i&&(x=Math.round(x,0)),x};
//# sourceMappingURL=index.cjs.map
