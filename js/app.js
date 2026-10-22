
(function(){
var $=function(s){return document.querySelector(s)},$$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var m=$('#mq');m.innerHTML+=m.innerHTML;
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
$$('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*70+'ms';io.observe(el)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var n=+e.target.dataset.n,t0=null;
function f(t){t0=t0||t;var p=Math.min((t-t0)/1400,1);e.target.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}
rm?e.target.textContent=n:requestAnimationFrame(f)})},{threshold:.6});
$$('.n').forEach(function(n){co.observe(n)});
var W=['dashboards that get used','clean data models','automated daily reports','insights that drive decisions'],wi=0,ci=0,del=false,ty=$('#ty');
function tick(){var w=W[wi];if(rm){ty.textContent=w;return}
ci+=del?-1:1;ty.textContent=w.slice(0,ci);var d=del?35:75;
if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;wi=(wi+1)%W.length;d=300}
setTimeout(tick,d)}tick();
var bar=$('#bar');addEventListener('scroll',function(){var h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%'},{passive:true});
$$('.card').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--x',(e.clientX-r.left)+'px');c.style.setProperty('--y',(e.clientY-r.top)+'px')})});
var RT=document.documentElement;try{var s=localStorage.getItem('th');if(s)RT.setAttribute('data-theme',s)}catch(e){}
$('#tg').onclick=function(){var dark=RT.getAttribute('data-theme')?RT.getAttribute('data-theme')==='dark':matchMedia('(prefers-color-scheme:dark)').matches;var v=dark?'light':'dark';RT.setAttribute('data-theme',v);try{localStorage.setItem('th',v)}catch(e){}};

var IC={claude:'<svg viewBox="0 0 24 24" fill="none" stroke="#D97757" stroke-width="2.6" stroke-linecap="round"><path d="M12 2.5v19M2.5 12h19M5.3 5.3l13.4 13.4M18.7 5.3L5.3 18.7"/></svg>',chatgpt:'<svg viewBox="0 0 24 24" fill="none" stroke="#10A37F" stroke-width="2" stroke-linejoin="round"><path d="M12 2.8l7.2 4.1v8.2L12 19.2 4.8 15.1V6.9z"/><path d="M12 2.8v8.7l7.2 4M12 11.5l-7.2 4"/><circle cx="12" cy="11.5" r="2.2"/></svg>',gemini:'<svg viewBox="0 0 24 24"><defs><linearGradient id="gm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4285F4"/><stop offset=".5" stop-color="#9B72CB"/><stop offset="1" stop-color="#D96570"/></linearGradient></defs><path fill="url(#gm)" d="M12 1.5c.7 5.6 4.9 9.8 10.5 10.5-5.6.7-9.8 4.9-10.5 10.5C11.3 16.9 7.1 12.7 1.5 12 7.1 11.3 11.3 7.1 12 1.5z"/></svg>',agents:'<svg viewBox="0 0 24 24" fill="none" stroke="#7C5CFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="12" rx="3.5"/><path d="M12 8V4.5M2 13v3M22 13v3"/><circle cx="9" cy="14" r="1.3" fill="#7C5CFF"/><circle cx="15" cy="14" r="1.3" fill="#7C5CFF"/></svg>',mcp:'<svg viewBox="0 0 24 24" fill="none" stroke="#00B8E6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v5M15 3v5"/><path d="M6.5 8h11v3.5a5.5 5.5 0 01-11 0z"/><path d="M12 17v4"/></svg>',powerbi:'<svg viewBox="0 0 24 24"><rect x="3" y="11" width="5" height="10" rx="1" fill="#F2C811"/><rect x="10" y="6" width="5" height="15" rx="1" fill="#F29A0C"/><rect x="17" y="2" width="5" height="19" rx="1" fill="#E8870A"/></svg>',
excel:'<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="18" rx="3" fill="#1D6F42"/><path d="M8 8l8 8M16 8l-8 8" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/></svg>',
pq:'<svg viewBox="0 0 24 24" fill="none" stroke="#F2C811" stroke-width="2.2" stroke-linejoin="round"><path d="M3 4h18l-7 8.5V20l-4-2v-5.5z"/></svg>',
tableau:'<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M12 2v7M12 15v7" stroke="#1F6FD0"/><path d="M2 12h7M15 12h7" stroke="#E8762D"/><path d="M6 6v4M18 14v4M6 14v4M18 6v4" stroke="#59A14F"/></svg>',
dax:'<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" fill="#F2C811"/><text x="12" y="16.5" font-family="Georgia,serif" font-style="italic" font-weight="700" font-size="12" text-anchor="middle" fill="#14213D">fx</text></svg>',
sql:'<svg viewBox="0 0 24 24" fill="none" stroke="#4DA3FF" stroke-width="2"><ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
python:'<svg viewBox="0 0 24 24"><path d="M12 2C7 2 7 4 7 6v2h5v1H5C3 9 2 11 2 13s1 4 3 4h2v-3c0-2 2-3 3-3h5c2 0 3-1 3-3V6c0-2-2-4-6-4z" fill="#3776AB"/><path d="M12 22c5 0 5-2 5-4v-2h-5v-1h7c2 0 3-2 3-4s-1-4-3-4h-2v3c0 2-2 3-3 3H9c-2 0-3 1-3 3v3c0 2 2 4 6 4z" fill="#FFD43B"/></svg>',
snowflake:'<svg viewBox="0 0 24 24" stroke="#29B5E8" stroke-width="2" stroke-linecap="round"><path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7"/></svg>',
odoo:'<svg viewBox="0 0 24 24"><circle cx="8" cy="12" r="5" fill="none" stroke="#A24689" stroke-width="3"/><circle cx="17" cy="12" r="3.5" fill="#714B67"/></svg>',
sheets:'<svg viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="3" fill="#0F9D58"/><path d="M8 9h8M8 13h8M8 17h8M12 9v10" stroke="#fff" stroke-width="1.5"/></svg>',
cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="#9D87FF" stroke-width="2" stroke-linejoin="round"><path d="M7 18a4 4 0 010-8 5 5 0 019.6-1A4.5 4.5 0 0117 18z"/></svg>',
etl:'<svg viewBox="0 0 24 24" fill="none" stroke="#18C99B" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h14l-3-3M21 16H7l3 3"/></svg>'};
$$('[data-i]').forEach(function(e){var v=IC[e.dataset.i];if(!v)return;e.insertAdjacentHTML('afterbegin',e.classList.contains('tool')?'<div class="ic">'+v+'</div>':v)});
$$('[data-e]').forEach(function(e){e.insertAdjacentHTML('afterbegin','<div class="ic">'+e.dataset.e+'</div>')});
function rn(q){return function(){q=(q*9301+49297)%233280;return q/233280}}
function R(x,y,w,h,f,o,r){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+(r||3)+'" fill="'+f+'" fill-opacity="'+(o==null?1:o)+'"/>'}
function art(t,c,k){var r=rn(k*37+11),i,j,x,P=[],o='<svg viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="g'+k+'" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#17153f"/><stop offset="1" stop-color="#0a0a1c"/></linearGradient><linearGradient id="a'+k+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+c+'" stop-opacity=".65"/><stop offset="1" stop-color="'+c+'" stop-opacity="0"/></linearGradient></defs><rect width="320" height="180" fill="url(#g'+k+')"/>'+R(0,0,320,20,'#fff',.05,0)+'<circle cx="11" cy="10" r="3" fill="#FF5F57"/><circle cx="22" cy="10" r="3" fill="#FEBC2E"/><circle cx="33" cy="10" r="3" fill="#28C840"/>';
var K=function(){var q='';for(i=0;i<3;i++)q+=R(14+i*100,28,92,34,'#fff',.07,6)+R(22+i*100,36,32,5,'#fff',.35,2)+R(22+i*100,46,52,10,c,1,3);return q};
if(t=='dash'){o+=K();for(i=0;i<9;i++){j=18+r()*58;o+=R(16+i*22,172-j,14,j,c,.9,3);P.push((23+i*22)+','+(164-j))}o+='<polyline points="'+P.join(' ')+'" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/><circle cx="262" cy="124" r="26" fill="none" stroke="#fff" stroke-opacity=".1" stroke-width="11"/><circle cx="262" cy="124" r="26" fill="none" stroke="'+c+'" stroke-width="11" stroke-dasharray="105 164" transform="rotate(-90 262 124)"/>'}
else if(t=='area'){o+=K();for(i=0;i<9;i++)P.push((14+i*36.5)+','+(150-r()*55-i*3));o+='<path d="M14,172 L'+P.join(' L')+' L306,172Z" fill="url(#a'+k+')"/><polyline points="'+P.join(' ')+'" fill="none" stroke="'+c+'" stroke-width="3" stroke-linejoin="round"/>'}
else if(t=='hbar'){o+=K();for(i=0;i<6;i++){j=40+r()*170;o+=R(14,76+i*17,38,7,'#fff',.3,2)+R(58,75+i*17,j,9,c,.92,3)}}
else if(t=='funnel'){for(i=0;i<5;i++){j=250-i*46;o+=R(14+(250-j)/2,34+i*28,j,22,c,1-i*.16,5)+R(24+(250-j)/2,42+i*28,28,6,'#fff',.5,2);o+='<circle cx="292" cy="'+(46+i*28)+'" r="'+(10-i*1.5)+'" fill="#fff" fill-opacity="'+(.5-i*.08)+'"/>'}}
else if(t=='heat'){for(i=0;i<10;i++)for(j=0;j<6;j++)o+=R(14+i*29.6,30+j*24,26,20,c,.1+r()*.9,4)}
else if(t=='code'){var N=[0,0,16,16,32,16,0,0,16,0];for(i=0;i<10;i++){x=40+N[i];o+=R(14,30+i*14.5,10,6,'#fff',.2,2)+R(x,30+i*14.5,20+r()*40,6,c,.95,2)+R(x+30+r()*30,30+i*14.5,20+r()*60,6,'#fff',.45,2);if(r()>.5)o+=R(x+150,30+i*14.5,30+r()*40,6,'#FFB020',.8,2)}}
else if(t=='pivot'){o+=R(14,28,292,16,c,.9,4);for(i=0;i<7;i++){o+=R(14,48+i*18,292,15,'#fff',i%2?.04:.09,3);for(j=0;j<4;j++)o+=R(24+j*72,53+i*18,36+r()*20,5,'#fff',.4,2)}o+=R(168,66,60,15,'#FFB020',.35,3)}
else{for(i=0;i<3;i++)o+='<line x1="20" x2="306" y1="'+(50+i*40)+'" y2="'+(50+i*40)+'" stroke="#fff" stroke-opacity=".07"/>';o+='<path d="M20 28V165H308" stroke="#fff" stroke-opacity=".3" fill="none"/>';for(i=0;i<46;i++){x=28+r()*270;o+='<circle cx="'+x+'" cy="'+(150-(x-28)*.38+(r()-.5)*46)+'" r="'+(2.5+r()*2.5)+'" fill="'+c+'" fill-opacity=".85"/>'}o+='<line x1="28" y1="150" x2="298" y2="48" stroke="#fff" stroke-width="2" stroke-dasharray="6 5"/>'}
return o+'</svg>'}
function tryImg(box,src,alt){var im=new Image();im.onload=function(){box.innerHTML='';box.appendChild(im)};im.alt=alt;im.src=src}
$$('.shot').forEach(function(b,i){b.innerHTML=art(b.dataset.t,b.dataset.c,i+3);tryImg(b,b.dataset.img,'Project screenshot')});



var IMG='img/',RX=/^(data:|https?:)/;
function U(x){return RX.test(x)?x:IMG+x}
function Us(x){return RX.test(x)?x:IMG+x.replace(/\.webp$/,'-sm.webp')}
function cover(sh,p,n){sh.innerHTML='';if(!p.imgs.length){sh.innerHTML=art(p.art,p.c,n+3);return}var im=new Image();im.alt=p.t+' project screenshot';im.width=640;im.height=360;im.decoding='async';im.loading='lazy';im.onerror=function(){sh.innerHTML=art(p.art,p.c,n+3)};im.src=Us(p.imgs[0]);sh.appendChild(im);if(p.imgs.length>1)sh.insertAdjacentHTML('beforeend','<span class="cnt">'+p.imgs.length+' images</span>')}
var P=window.PROJECTS,pg=$('#pg'),mo=$('#mo'),cur=0,gi=0,lastF=null;
function tg(a){return a.map(function(t){return '<span>'+(IC[t[0]]||'')+t[1]+'</span>'}).join('')}
P.forEach(function(p,n){var a=document.createElement('article');a.className='card rv';a.style.setProperty('--a',p.c);
a.innerHTML='<div class="shot"></div><span class="cat">'+p.cat+'</span><h3><button type="button" class="cb" aria-haspopup="dialog">'+p.t+'</button></h3><p><b>'+p.hook+'</b>'+p.sum+'</p><div class="tags">'+tg(p.tools)+'</div><span class="more">View details</span>';
cover(a.firstChild,p,n);
a.onclick=function(){op(n,a.querySelector('.cb'))};
a.addEventListener('mousemove',function(e){var r=a.getBoundingClientRect();a.style.setProperty('--x',(e.clientX-r.left)+'px');a.style.setProperty('--y',(e.clientY-r.top)+'px')});
a.style.transitionDelay=(n%3)*80+'ms';pg.appendChild(a);io.observe(a)});
function gal(){var p=P[cur],m=$('#mm'),t=$('#th'),k=p.imgs.length;
if(k){m.innerHTML='<img src="'+U(p.imgs[gi])+'" alt="'+p.caps[gi]+'"><span class="cap">'+p.caps[gi]+(k>1?' ('+(gi+1)+' of '+k+')':'')+'</span>'+(k>1?'<button type="button" class="ga l" aria-label="Previous image">‹</button><button type="button" class="ga r" aria-label="Next image">›</button>':'');
t.innerHTML=k>1?p.imgs.map(function(s,i){return '<button type="button" class="'+(i===gi?'on':'')+'" data-k="'+i+'" aria-label="Show image '+(i+1)+'"><img src="'+Us(s)+'" alt="" width="96" height="58" loading="lazy"></button>'}).join(''):''}
else{m.innerHTML=art(p.art,p.c,cur+3)+'<span class="cap">Preview illustration. Open the GitHub repo to see the workbooks.</span>';t.innerHTML=''}}
function fill(){var p=P[cur];gi=0;$('#mp').style.setProperty('--a',p.c);
$('#mi').innerHTML='<span class="cat" style="--a:'+p.c+'">'+p.cat+'</span><h3 id="mt">'+p.t+'</h3><p class="hk">'+p.hook+'</p><p>'+p.sum+'</p><h4>What I built</h4><ul>'+p.built.map(function(b){return '<li>'+b+'</li>'}).join('')+'</ul><h4>Results</h4><div class="kp">'+p.kpi.map(function(k){return '<div><b>'+k[0]+'</b><span>'+k[1]+'</span></div>'}).join('')+'</div><h4>Tools</h4><div class="tags" style="--a:'+p.c+'">'+tg(p.tools)+'</div><a class="btn main" style="background:linear-gradient(90deg,#7C5CFF,#FF4D8D);border-color:transparent" href="'+p.gh+'" target="_blank" rel="noopener">View on GitHub</a><a class="btn" href="'+p.cs+'" target="_blank" rel="noopener">Case study page</a>';
$('#mi').scrollTop=0;$('#ct').textContent=(cur+1)+' / '+P.length;gal()}
function op(n,f){cur=n;if(f)lastF=f;fill();mo.classList.add('on');document.body.style.overflow='hidden';$('#xx').focus()}
function cl(){mo.classList.remove('on');document.body.style.overflow='';if(lastF)lastF.focus()}
function go(d){cur=(cur+d+P.length)%P.length;fill()}
function gs(d){var k=P[cur].imgs.length;if(k>1){gi=(gi+d+k)%k;gal()}}
$('#xx').onclick=cl;$('#pv').onclick=function(){go(-1)};$('#nx').onclick=function(){go(1)};
mo.addEventListener('click',function(e){var t=e.target;if(t===mo)cl();else if(t.closest('.ga.l'))gs(-1);else if(t.closest('.ga.r'))gs(1);else if(t.closest('.th button')){gi=+t.closest('.th button').dataset.k;gal()}else if(t.matches('.mm>img'))gs(1)});
document.addEventListener('keydown',function(e){if(!mo.classList.contains('on'))return;
if(e.key==='Escape')cl();else if(e.key==='ArrowRight')go(1);else if(e.key==='ArrowLeft')go(-1);
else if(e.key==='Tab'){var f=$$('#mp button,#mp a');var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
var cpb=$('#cp');if(cpb)cpb.onclick=function(){var m='abdulrahman.mo.aziz@gmail.com';try{navigator.clipboard.writeText(m).then(function(){cpb.textContent='Copied!'})}catch(e){cpb.textContent=m}setTimeout(function(){cpb.textContent='Copy email'},2200)};

$$('#pg .card').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.setProperty('--rx',(-y*6)+'deg');c.style.setProperty('--ry',(x*8)+'deg')});c.addEventListener('mouseleave',function(){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})});
var to=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');to.unobserve(e.target)}})},{threshold:.1});$$('.tl').forEach(function(t){to.observe(t)});
var nl=$$('nav a[href^="#"]');var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)nl.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-45% 0px -50% 0px'});nl.forEach(function(a){var t=$(a.getAttribute('href'));if(t)so.observe(t)});
var up=$('#up');addEventListener('scroll',function(){up.classList.toggle('show',scrollY>700)},{passive:true});
if(!rm&&matchMedia('(hover:hover)').matches){var cg=$('#cg'),tx=0,ty=0,raf=0;addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;if(!raf)raf=requestAnimationFrame(function(){cg.style.transform='translate('+(tx-180)+'px,'+(ty-180)+'px)';cg.style.opacity=1;raf=0})})}

var S=window.SITE||{},hf=$('#hf');
if(hf){
var t0=Date.now(),sb=$('#hsub'),ms=$('#hmsg'),cnt=$('#hcnt'),fb=$('#hfb'),dn=$('#hdone'),RE=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,KS=['name','company','email','message'];
if(S.book){var bk=document.createElement('a');bk.className='btn';bk.textContent='Book a call';bk.href=S.book;bk.target='_blank';bk.rel='noopener';$('#hq').appendChild(bk)}
ms.addEventListener('input',function(){cnt.textContent=ms.value.length+' / 1500'});
function val(){var d={};['name','company','email','role','mode','reply','phone','message','website'].forEach(function(k){d[k]=(hf.elements[k].value||'').trim()});var e={};
if(d.name.length<2)e.name='Please enter your name.';if(d.company.length<2)e.company='Please enter your company.';if(!RE.test(d.email))e.email='Please enter a valid work email.';if(d.message.length<10)e.message='Please write at least 10 characters.';return{d:d,e:e}}
function show(e){KS.forEach(function(k){var el=hf.elements[k],has=!!e[k];el.setAttribute('aria-invalid',has);el.closest('.fld').classList.toggle('err',has);$('#e-'+k).textContent=e[k]||''});var f=KS.filter(function(k){return e[k]})[0];if(f)hf.elements[f].focus()}
hf.addEventListener('input',function(ev){var f=ev.target.closest('.fld');if(f&&f.classList.contains('err')){f.classList.remove('err');ev.target.setAttribute('aria-invalid','false');var m=f.querySelector('.em');if(m)m.textContent=''}});
function busy(b){sb.disabled=b;sb.classList.toggle('busy',b);sb.querySelector('.sl').textContent=b?'Sending...':'Send message'}
function text(d){return 'Hi Abdulrahman, I am '+d.name+' from '+d.company+'.'+(d.role?' Role: '+d.role+'.':'')+(d.mode?' Work mode: '+d.mode+'.':'')+'\n\n'+d.message+'\n\nReply to: '+d.email+(d.phone?' / '+d.phone:'')}
function done(d){hf.hidden=true;fb.hidden=true;dn.hidden=false;$('#hdp').textContent='Thanks '+d.name.split(' ')[0]+'. I will reply to '+d.email+(d.reply==='WhatsApp'&&d.phone?' and on WhatsApp':'')+' soon.';hf.reset();cnt.textContent='0 / 1500';$('#hdt').focus()}
function fall(d,why){hf.hidden=true;dn.hidden=true;fb.hidden=false;$('#hfbt').textContent=why||'Choose how to send it. Your message is already filled in.';
$('#hfw').href='https://wa.me/'+(S.whatsapp||'201152675829')+'?text='+encodeURIComponent(text(d));
$('#hfm').href='mailto:'+(S.email||'abdulrahman.mo.aziz@gmail.com')+'?subject='+encodeURIComponent('Opportunity from '+d.company)+'&body='+encodeURIComponent(text(d));fb.querySelector('h3').focus&&fb.scrollIntoView({block:'center',behavior:rm?'auto':'smooth'})}
hf.addEventListener('submit',function(ev){ev.preventDefault();var r=val();show(r.e);if(Object.keys(r.e).length)return;var d=r.d;
if(d.website||Date.now()-t0<1200)return done(d);
if(!S.endpoint)return fall(d,'');
busy(true);var c=new AbortController(),to=setTimeout(function(){c.abort()},15000);
fetch(S.endpoint,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({name:d.name,company:d.company,email:d.email,role:d.role,mode:d.mode,reply:d.reply,phone:d.phone,message:d.message,website:d.website,page:location.href}),signal:c.signal})
.then(function(x){return x.json()}).then(function(j){clearTimeout(to);busy(false);if(j&&j.ok)done(d);else fall(d,(j&&j.error)||"We couldn't send it automatically.")})
.catch(function(){clearTimeout(to);busy(false);fall(d,"We couldn't send it automatically.")})});
$('#hfx').onclick=function(){fb.hidden=true;hf.hidden=false};
$('#hdx').onclick=function(){dn.hidden=true;hf.hidden=false;hf.elements.name.focus()};
}
})();
