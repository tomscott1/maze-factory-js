var f={generateSquares:(a,r)=>new Promise(async l=>{let s=[];for(let o=0;o<r;o++)for(let i=0;i<a;i++)s.push({location:[i,o],pathNorth:!1,pathEast:!1,pathSouth:!1,pathWest:!1,visited:!1});let n=1,t=0,e=0,p=[[0,-1],[1,0],[0,1],[-1,0]],u=[];for(s[e*r+t].visited=!0,u.push([t,e]);n<a*r;){[t,e]=u[u.length-1];let o=[];if(e>0&&!s[(e-1)*r+t].visited&&o.push(0),t<a-1&&!s[e*r+(t+1)].visited&&o.push(1),e<r-1&&!s[(e+1)*r+t].visited&&o.push(2),t>0&&!s[e*r+(t-1)].visited&&o.push(3),o.length==0)u.pop();else{switch(o[Math.floor(Math.random()*o.length)]){case 0:s[(e-1)*r+t].visited=!0,s[(e-1)*r+t].pathSouth=!0,s[e*r+t].pathNorth=!0,u.push([t,e-1]);break;case 1:s[e*r+(t+1)].visited=!0,s[e*r+(t+1)].pathWest=!0,s[e*r+t].pathEast=!0,u.push([t+1,e]);break;case 2:s[(e+1)*r+t].visited=!0,s[(e+1)*r+t].pathNorth=!0,s[e*r+t].pathSouth=!0,u.push([t,e+1]);break;case 3:s[e*r+(t-1)].visited=!0,s[e*r+(t-1)].pathEast=!0,s[e*r+t].pathWest=!0,u.push([t-1,e]);break}n++}}l(s)}),generateHexagons:(a,r)=>new Promise(async l=>{let s=[];for(let u=0;u<a;u++)for(let o=0;o<r;o++)s.push({location:[o,u],pathNorthWest:!1,pathNorth:!1,pathNorthEast:!1,pathSouthWest:!1,pathSouth:!1,pathSouthEast:!1,visited:!1});let n=1,t=0,e=0,p=[];for(s[e*a+t].visited=!0,p.push([t,e]);n<r*a;){[t,e]=p[p.length-1];let u=[];if(e>0&&!s[(e-1)*a+t].visited&&u.push(0),t>0&&(t%2==1||e!=0)&&!s[(e-1+t%2)*a+(t-1)].visited&&u.push(1),t<r-1&&(t%2==1||e!=0)&&!s[(e-1+t%2)*a+(t+1)].visited&&u.push(2),e<a-1&&!s[(e+1)*a+t].visited&&u.push(3),t>0&&(t%2==0||e!==a-1)&&!s[(e+t%2)*a+(t-1)].visited&&u.push(4),t<r-1&&(t%2==0||e!==a-1)&&!s[(e+t%2)*a+(t+1)].visited&&u.push(5),u.length==0)p.pop();else{switch(u[Math.floor(Math.random()*u.length)]){case 0:s[(e-1)*a+t].visited=!0,s[(e-1)*a+t].pathSouth=!0,s[e*a+t].pathNorth=!0,p.push([t,e-1]);break;case 1:s[(e-1+t%2)*a+(t-1)].visited=!0,s[(e-1+t%2)*a+(t-1)].pathSouthEast=!0,s[e*a+t].pathNorthWest=!0,p.push([t-1,e-1+t%2]);break;case 2:s[(e-1+t%2)*a+(t+1)].visited=!0,s[(e-1+t%2)*a+(t+1)].pathSouthWest=!0,s[e*a+t].pathNorthEast=!0,p.push([t+1,e-1+t%2]);break;case 3:s[(e+1)*a+t].visited=!0,s[(e+1)*a+t].pathNorth=!0,s[e*a+t].pathSouth=!0,p.push([t,e+1]);break;case 4:s[(e+t%2)*a+(t-1)].visited=!0,s[(e+t%2)*a+(t-1)].pathNorthEast=!0,s[e*a+t].pathSouthWest=!0,p.push([t-1,e+t%2]);break;case 5:s[(e+t%2)*a+(t+1)].visited=!0,s[(e+t%2)*a+(t+1)].pathNorthWest=!0,s[e*a+t].pathSouthEast=!0,p.push([t+1,e+t%2]);break}n++}}l(s)})};var v={buildMaze:(a,r)=>{if(isNaN(r)||isNaN(a))throw new Error("[buildMaze] height and width must be valid numbers");r=r|0,a=a|0;let l=[];for(let s=0;s<r;s++)l.push(Array.from({length:a},()=>Math.round(Math.random())));return l},generateBacktrack:(a,r,l)=>{switch(l){case"squares":return f.generateSquares(a,r);case"hexagons":return f.generateHexagons(a,r)}}};export{v as default};
