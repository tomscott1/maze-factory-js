var c={generateSquares:(s,u)=>new Promise(async n=>{let a=[];for(let r=0;r<u;r++)for(let p=0;p<s;p++)a.push({location:[p,r],pathNorth:!1,pathEast:!1,pathSouth:!1,pathWest:!1,visited:!1});let i=1,e=0,t=0,o=[[0,-1],[1,0],[0,1],[-1,0]],l=[];for(a[t*u+e].visited=!0,l.push([e,t]);i<s*u;){[e,t]=l[l.length-1];let r=[];if(t>0&&!a[(t-1)*s+e].visited&&r.push(0),e<s-1&&!a[t*s+(e+1)].visited&&r.push(1),t<u-1&&!a[(t+1)*s+e].visited&&r.push(2),e>0&&!a[t*s+(e-1)].visited&&r.push(3),r.length==0)l.pop();else{switch(r[Math.floor(Math.random()*r.length)]){case 0:a[(t-1)*s+e].visited=!0,a[(t-1)*s+e].pathSouth=!0,a[t*s+e].pathNorth=!0,l.push([e,t-1]);break;case 1:a[t*s+(e+1)].visited=!0,a[t*s+(e+1)].pathWest=!0,a[t*s+e].pathEast=!0,l.push([e+1,t]);break;case 2:a[(t+1)*s+e].visited=!0,a[(t+1)*s+e].pathNorth=!0,a[t*s+e].pathSouth=!0,l.push([e,t+1]);break;case 3:a[t*s+(e-1)].visited=!0,a[t*s+(e-1)].pathEast=!0,a[t*s+e].pathWest=!0,l.push([e-1,t]);break}i++}}n(a)}),generateHexagons:(s,u)=>new Promise(async n=>{let a=[];for(let r=0;r<u;r++)for(let p=0;p<s;p++)a.push({location:[p,r],pathNorthWest:!1,pathNorth:!1,pathNorthEast:!1,pathSouthWest:!1,pathSouth:!1,pathSouthEast:!1,visited:!1});let i=1,e=0,t=0,o=[];a[t*s+e].visited=!0,o.push([e,t]);let l=(r,p)=>{let[f,h]=r;switch(p){case 0:return(h-1)*s+f}};for(;i<s*u;){[e,t]=o[o.length-1];let r=[];if(t>0&&!a[l([e,t],0)].visited&&r.push(0),e>0&&(e%2==1||t!=0)&&!a[(t-1+e%2)*s+(e-1)].visited&&r.push(1),e<s-1&&(e%2==1||t!=0)&&!a[(t-1+e%2)*s+(e+1)].visited&&r.push(2),t<u-1&&!a[(t+1)*s+e].visited&&r.push(3),e>0&&(e%2==0||t!==u-1)&&!a[(t+e%2)*s+(e-1)].visited&&r.push(4),e<s-1&&(e%2==0||t!==u-1)&&!a[(t+e%2)*s+(e+1)].visited&&r.push(5),r.length==0)o.pop();else{switch(r[Math.floor(Math.random()*r.length)]){case 0:a[(t-1)*s+e].visited=!0,a[(t-1)*s+e].pathSouth=!0,a[t*s+e].pathNorth=!0,o.push([e,t-1]);break;case 1:a[(t-1+e%2)*s+(e-1)].visited=!0,a[(t-1+e%2)*s+(e-1)].pathSouthEast=!0,a[t*s+e].pathNorthWest=!0,o.push([e-1,t-1+e%2]);break;case 2:a[(t-1+e%2)*s+(e+1)].visited=!0,a[(t-1+e%2)*s+(e+1)].pathSouthWest=!0,a[t*s+e].pathNorthEast=!0,o.push([e+1,t-1+e%2]);break;case 3:a[(t+1)*s+e].visited=!0,a[(t+1)*s+e].pathNorth=!0,a[t*s+e].pathSouth=!0,o.push([e,t+1]);break;case 4:a[(t+e%2)*s+(e-1)].visited=!0,a[(t+e%2)*s+(e-1)].pathNorthEast=!0,a[t*s+e].pathSouthWest=!0,o.push([e-1,t+e%2]);break;case 5:a[(t+e%2)*s+(e+1)].visited=!0,a[(t+e%2)*s+(e+1)].pathNorthWest=!0,a[t*s+e].pathSouthEast=!0,o.push([e+1,t+e%2]);break}i++}}n(a)})};var b={buildMaze:(s,u)=>{if(isNaN(u)||isNaN(s))throw new Error("[buildMaze] height and width must be valid numbers");u=u|0,s=s|0;let n=[];for(let a=0;a<u;a++)n.push(Array.from({length:s},()=>Math.round(Math.random())));return n},generateBacktrack:(s,u,n)=>{switch(n){case"squares":return c.generateSquares(s,u);case"hexagons":return c.generateHexagons(s,u)}}};export{b as default};
