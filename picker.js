/* Style picker for design review. Delete this file and its <script> tag in index.html to launch. */
(()=>{const P=[["Noir Gold","#000000","#D9CCB9","#E3A66B","#BE9B49","#000000"],["Midnight Navy","#0B1426","#DCE0EA","#D8BE8A","#A98F5E","#0B1426"],["Emerald Brass","#0D1F1A","#DCE5DF","#C9A96A","#9A8352","#0D1F1A"],["Oxblood Cream","#25090F","#EBDCD0","#E6C8A0","#B98D62","#25090F"],["Plum Rosegold","#1C0F20","#E8DCE4","#E2A999","#B07A70","#1C0F20"],["Mocha Sand","#2A201B","#E6D9CC","#D9B99B","#A88868","#2A201B"],["Champagne Ivory","#F6F0E6","#2B2420","#8F6A3A","#B38A4F","#FFFFFF"],["Blush Rosegold","#F6E8E3","#3A2A2A","#A95F6B","#C58A8F","#FFFFFF"],["Pearl Charcoal","#F1EFEB","#1E1E1E","#7A5F3F","#A38A68","#FFFFFF"],["Sage Ivory","#E8EADF","#26302A","#5C6E4C","#8A9A78","#FFFFFF"]];
const T=[["Classic","Playfair Display","Montserrat",".16em","italic",400,1],["Editorial","Cormorant Garamond","Jost",".2em","italic",500,1.15],["Modern","Bodoni Moda","DM Sans",".14em","italic",400,.95],["Flared","Marcellus","Nunito Sans",".14em","normal",400,1]];
const R=document.documentElement.style;let pi=0,ti=0;
try{const q=new URLSearchParams(location.search),s=JSON.parse(localStorage.getItem('lt-style')||'[0,0]');pi=+(q.get('p')??s[0]);ti=+(q.get('t')??s[1])}catch(e){}
if(!(pi>=0&&pi<P.length))pi=0;if(!(ti>=0&&ti<T.length))ti=0;
const lum=h=>parseInt(h.slice(1,3),16)*.3+parseInt(h.slice(3,5),16)*.59+parseInt(h.slice(5,7),16)*.11;
function apply(){const[,bg,ink,g,g2,bt]=P[pi],L=lum(bg)>140,t=T[ti];
R.setProperty('--bg',bg);R.setProperty('--ink',ink);R.setProperty('--gold',g);R.setProperty('--gold2',g2);R.setProperty('--bt',bt);R.setProperty('--mk',L?'#000':'transparent');R.setProperty('--mp',L?'1.2rem':'0');
R.setProperty('--hf',`'${t[1]}',Georgia,serif`);R.setProperty('--bf',`'${t[2]}',system-ui,sans-serif`);R.setProperty('--ls',t[3]);R.setProperty('--it',t[4]);R.setProperty('--hw',t[5]);R.setProperty('--hs',t[6]);
const m=document.querySelector('meta[name=theme-color]');if(m)m.content=bg;
try{localStorage.setItem('lt-style',JSON.stringify([pi,ti]));history.replaceState(null,'','?p='+pi+'&t='+ti+location.hash)}catch(e){}}
apply();
document.addEventListener('DOMContentLoaded',()=>{
const ic=n=>`<svg class="i"><use href="#${n}"/></svg>`;
const o=document.createElement('button');o.className='spo';o.type='button';o.innerHTML=ic('pal')+'Style';
const p=document.createElement('div');p.className='sp';p.hidden=true;
document.body.append(o,p);
const link=()=>location.href.split('?')[0].split('#')[0]+'?p='+pi+'&t='+ti;
const label=()=>P[pi][0]+' colours with '+T[ti][0]+' type ('+T[ti][1]+' + '+T[ti][2]+')';
function draw(){p.innerHTML=`<div class="hd"><b>Choose a style</b><button class="x" type="button" aria-label="Close">${ic('x')}</button></div>
<h5>Colour</h5><div class="sg">${P.map((c,i)=>`<button type="button" class="sw" data-p="${i}" aria-pressed="${i==pi}" aria-label="${c[0]}" style="background:linear-gradient(135deg,${c[1]} 50%,${c[3]} 50%)"></button>`).join('')}</div><div class="pn">${P[pi][0]}</div>
<h5>Type</h5><div class="ty">${T.map((t,i)=>`<button type="button" data-t="${i}" aria-pressed="${i==ti}"><span class="aa" style="font-family:'${t[1]}',serif">Aa</span><span><b>${t[0]}</b><small>${t[1]} + ${t[2]}</small></span></button>`).join('')}</div>
<div class="sa"><button type="button" data-s>${ic('share')}Send my pick</button><button type="button" class="g2" data-c>${ic('copy')}Copy link</button></div>`}
draw();
o.onclick=()=>p.hidden=!p.hidden;
p.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
if(b.dataset.p){pi=+b.dataset.p;apply();draw()}else if(b.dataset.t){ti=+b.dataset.t;apply();draw()}
else if(b.classList.contains('x'))p.hidden=true;
else if('s' in b.dataset)window.open('https://wa.me/?text='+encodeURIComponent('My pick for The Lush Theory website: '+label()+'\n'+link()),'_blank','noopener');
else if('c' in b.dataset){const t=label()+' '+link();(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>{b.lastChild.textContent='Copied'},()=>{prompt('Copy this',t)})}});
});})();
