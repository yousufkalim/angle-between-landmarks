const a=(a,r,o,t={small:!1,round:!0})=>{const e=((a,r,o,t)=>{if(!a||!r||!o)throw new Error("Please provide landmarks");if(!t)throw new Error("Please provide options");if([a,r,o].some(a=>isNaN(parseFloat(a.x))||isNaN(parseFloat(a.y))))throw new Error("Please provide landmarks with correct x and y values");if("boolean"!=typeof t.small||"boolean"!=typeof t.round)throw new Error("Please provide options with correct small and round values");return{landmarks1:{x:parseFloat(a.x),y:parseFloat(a.y)},landmarks2:{x:parseFloat(r.x),y:parseFloat(r.y)},landmarks3:{x:parseFloat(o.x),y:parseFloat(o.y)}}})(a,r,o,t),{x:s,y:l}=e.landmarks1,{x:n,y:p}=e.landmarks2,{x:d,y:h}=e.landmarks3,{small:w,round:i}=t,m=((a,r,o,t,e,s,l,n)=>{const p=Math.sqrt(Math.pow(o-a,2)+Math.pow(t-r,2)),d=Math.sqrt(Math.pow(o-e,2)+Math.pow(t-s,2)),h=Math.sqrt(Math.pow(e-a,2)+Math.pow(s-r,2)),w=Math.acos((d*d+p*p-h*h)/(2*d*p));let i=Math.round(180*w/Math.PI,1);return i=(i+360)%360,i=l?Math.min(i,360-i):Math.max(i,360-i),n&&(i=Math.round(i,0)),i})(s,l,n,p,d,h,w,i);return m};export{a as default};
//# sourceMappingURL=index.modern.js.map
