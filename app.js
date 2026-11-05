(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
document.documentElement.classList.add('js');
const NUM='917042520220',sel=new Map(),tray=$('.tray'),chips=$('.chips'),EMPTY=chips.innerHTML;
const url=x=>{let t='Hello, I would like to book an appointment at The Lush Theory.';if(sel.size)t+='\nServices: '+[...sel.values()].join(', ');return 'https://wa.me/'+NUM+'?text='+encodeURIComponent(t+(x||''))};
function sync(){$$('.sv').forEach(b=>b.setAttribute('aria-pressed',sel.has(b.dataset.v)));$$('[data-wa]').forEach(a=>a.href=url());
tray.hidden=!sel.size;$('b',tray).textContent=sel.size;
chips.innerHTML=sel.size?[...sel.values()].map(v=>`<button type="button" class="chip2" data-r="${v.replace(/"/g,'&quot;')}">${v.replace(/&/g,'&amp;')}<svg class="i"><use href="#x"/></svg></button>`).join(''):EMPTY}
document.addEventListener('click',e=>{const b=e.target.closest('.sv'),c=e.target.closest('.chip2'),k=e.target.closest('[data-clear]');
if(b){const v=b.dataset.v;sel.has(v)?sel.delete(v):sel.set(v,v);sync()}
if(c){sel.delete(c.dataset.r);sync()}if(k){sel.clear();sync()}});
const tabs=$$('.tab');function show(t){tabs.forEach(x=>{const on=x===t;x.setAttribute('aria-selected',on);x.tabIndex=on?0:-1;$('#'+x.getAttribute('aria-controls')).classList.toggle('on',on)})}
tabs.forEach((t,i)=>{t.onclick=()=>show(t);t.onkeydown=e=>{const n=e.key=='ArrowRight'?1:e.key=='ArrowLeft'?-1:0;if(n){const x=tabs[(i+n+tabs.length)%tabs.length];show(x);x.focus()}}});
const q=$('.search input'),none=$('.none'),pn=$('.panels');
q.addEventListener('input',()=>{const v=q.value.trim().toLowerCase();document.body.classList.toggle('searching',!!v);let any=0;
$$('.panel').forEach(p=>{let pc=0;$$('.g',p).forEach(g=>{let gc=0;$$('li',g).forEach(li=>{const m=!v||li.textContent.toLowerCase().includes(v);li.hidden=!m;gc+=m});g.hidden=!gc;pc+=gc});p.hidden=!pc&&!!v;any+=pc});
none.hidden=!!any||!v;pn.hidden=!any&&!!v});
const f=$('#bf');f.d.min=new Date().toISOString().slice(0,10);
f.addEventListener('submit',e=>{e.preventDefault();let x='';if(f.n.value.trim())x+='\nName: '+f.n.value.trim();if(f.d.value)x+='\nPreferred date: '+f.d.value;if(f.m.value.trim())x+='\nNotes: '+f.m.value.trim();window.open(url(x),'_blank','noopener')});
tabs.forEach((t,i)=>t.tabIndex=i?-1:0);sync()})();
