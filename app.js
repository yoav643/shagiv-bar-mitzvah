const GUESTS=[{"name":"ברוך ערן","table":"1","phones":["0524377333"],"guests":1},{"name":"דוד רענן","table":"1","phones":["0524050761"],"guests":1},{"name":"טקטוביץ יאיר","table":"1","phones":["0555024824"],"guests":1},{"name":"יואב אמיר","table":"1","phones":["0507761779"],"guests":1},{"name":"יוסף איתי","table":"1","phones":["0525564804"],"guests":1},{"name":"מוסייב גלוריה","table":"1","phones":["0544232912"],"guests":1},{"name":"מכלוף תמי","table":"1","phones":["0507527955"],"guests":1},{"name":"מלכה מור","table":"1","phones":["0545959884"],"guests":1},{"name":"משיקר אורן","table":"1","phones":["0523737078"],"guests":1},{"name":"משפחת אלימלך","table":"2","phones":["0502883378","0587474184"],"guests":3},{"name":"משפחת רסיוק","table":"2","phones":["0525758480","0546666478"],"guests":5},{"name":"עמרן נתנאל","table":"2","phones":["0539309294"],"guests":2},{"name":"עשור יוספי","table":"2","phones":["0523508065"],"guests":1},{"name":"פלדמן יהודית","table":"2","phones":["0505716133"],"guests":1},{"name":"קרפוב טמילה","table":"2","phones":["0526644517"],"guests":1},{"name":"שמואלוביץ דן","table":"2","phones":["0504215000"],"guests":1},{"name":"תותחני יאיר","table":"2","phones":["0522509782"],"guests":1},{"name":"וינברג מקסי","table":"3","phones":["0502424615"],"guests":1},{"name":"מיארה אבי","table":"3","phones":["0538813337"],"guests":1},{"name":"משפחת וולצ'יק","table":"3","phones":["0542128345","0504883391"],"guests":4},{"name":"משפחת פלדמן זאגא","table":"3","phones":["0547706223"],"guests":4},{"name":"משפחת פרקש","table":"3","phones":["0528843171","0525419035"],"guests":4},{"name":"משפחת קושלביץ","table":"4","phones":["0508841605","0585213331"],"guests":4},{"name":"משפחת קלימוק","table":"4","phones":["0524596899","0544418004"],"guests":4},{"name":"פלדמן שחר","table":"4","phones":["0505716639"],"guests":1},{"name":"קושילביץ שירן","table":"4","phones":["0526052258"],"guests":1},{"name":"אברג'יל ליהי","table":"5","phones":["0546599831"],"guests":1},{"name":"בן משה תמר","table":"5","phones":["0504899509"],"guests":1},{"name":"ברוכוב ביאטה","table":"5","phones":["0527555792"],"guests":1},{"name":"ברשדסקי אליסה","table":"5","phones":["0547890627"],"guests":1},{"name":"גולדנר שרה","table":"5","phones":["0546811986"],"guests":1},{"name":"זטולה אינה","table":"5","phones":["0524865673"],"guests":1},{"name":"זיכרמן בר","table":"5","phones":["0526055103"],"guests":1},{"name":"מליכוב תמרה","table":"5","phones":["0528555089"],"guests":1},{"name":"סרודי רענן","table":"5","phones":["0526330611"],"guests":1},{"name":"פנחס שרית","table":"5","phones":["0505777510"],"guests":1},{"name":"שגב אלון","table":"5","phones":["0537763312"],"guests":1},{"name":"גרביץ שי","table":"6","phones":["0509009891"],"guests":3},{"name":"גרובשטיין עופר","table":"6","phones":["0546765251"],"guests":1},{"name":"טרפלר אלינה","table":"6","phones":["0542116489"],"guests":1},{"name":"נווה הלנה ונדב","table":"6","phones":["0524553123"],"guests":5},{"name":"נעמן קארין ורפאל","table":"6","phones":["0503701400"],"guests":2},{"name":"רוזנשטיין קרן","table":"6","phones":["0544821352"],"guests":1},{"name":"איליה אבלין","table":"7","phones":["0505964356"],"guests":1},{"name":"דניאל ענת","table":"7","phones":["0502889171"],"guests":4},{"name":"דניאל שמוליק","table":"7","phones":["0524708634"],"guests":1},{"name":"יעקב אליהו","table":"7","phones":["0527929518"],"guests":1},{"name":"יעקב יעקב","table":"7","phones":["0522749416"],"guests":1},{"name":"יעקב ניצן","table":"7","phones":["0506282772"],"guests":1},{"name":"מני יורם ומוניקה","table":"7","phones":["0523932777"],"guests":2},{"name":"אלוש אבי","table":"8","phones":["0547207070"],"guests":1},{"name":"בר קובי ואיילת","table":"8","phones":["0548032609","0542270694"],"guests":2},{"name":"האס איריס","table":"8","phones":["0545654799"],"guests":2},{"name":"מאני שושי","table":"8","phones":["0546615176"],"guests":1},{"name":"מימון יוסי","table":"8","phones":["0506650222"],"guests":1},{"name":"מני תאיר","table":"8","phones":["0544449822"],"guests":1},{"name":"עובדיה דרור","table":"8","phones":["0584585766"],"guests":1},{"name":"עובדיה שלמה","table":"8","phones":["0523275801"],"guests":2},{"name":"אזוט פלישה ויחיאל","table":"9","phones":["0502900133"],"guests":2},{"name":"פסטינגר גיל","table":"9","phones":["0548882129"],"guests":1},{"name":"פסטינגר יפתח","table":"9","phones":["0544488150","0504496105"],"guests":2},{"name":"פסטינגר נעמה וניב","table":"9","phones":["0544744143","0545448188"],"guests":6},{"name":"גבעון רן וענת","table":"10","phones":["0522766777"],"guests":2},{"name":"דניאל יורם ואביבה","table":"10","phones":["0547662992"],"guests":2},{"name":"פסטינגר דור ושיר","table":"10","phones":["0547825766","0547664262"],"guests":3},{"name":"צביה ועדי וייסמרק","table":"10","phones":["0523991822"],"guests":2},{"name":"קרפ מיכל","table":"10","phones":["0523382096"],"guests":1},{"name":"שמש תמי","table":"10","phones":["0522766444"],"guests":1},{"name":"שרבף דנה","table":"10","phones":["0524713199"],"guests":1}];
const TABLE_GROUP={"1":["1","2"],"2":["1","2"],"3":["3","4"],"4":["3","4"]};
function groupOf(t){t=String(t);return TABLE_GROUP[t]||[t];}
const TABLES={"1":{x:28,y:168,w:28,h:48},"2":{x:28,y:118,w:28,h:48},"3":{x:148,y:168,w:28,h:48},"4":{x:148,y:118,w:28,h:48},"5":{x:22,y:78,w:36,h:28},"6":{x:132,y:72,w:36,h:28},"7":{x:38,y:18,w:36,h:32},"8":{x:92,y:18,w:36,h:32},"9":{x:228,y:16,w:36,h:32},"10":{x:228,y:56,w:36,h:32},"11":{x:228,y:96,w:36,h:32},"12":{x:228,y:136,w:36,h:32},"13":{x:228,y:176,w:36,h:32},"14":{x:228,y:216,w:36,h:32}};
function normalize(raw){if(!raw)return"";let d=String(raw).replace(/\D/g,"");if(d.startsWith("972"))d="0"+d.slice(3);if(d.length===9&&!d.startsWith("0"))d="0"+d;return d;}
function floorMap(highlight){
  const hi=groupOf(highlight);
  const rects=Object.keys(TABLES).map(num=>{ const t=TABLES[num]; const on=hi.includes(num); return `<rect class="${on?"tbl-hi":"tbl"}" x="${t.x}" y="${t.y}" width="${t.w}" height="${t.h}" rx="4"/><text class="tbl-txt" x="${t.x+t.w/2}" y="${t.y+t.h/2}">${num}</text>`; }).join("");
  return `<div class="map-wrap"><div class="map-title">מפת האולם · השולחן שלכם מסומן בזהב</div><svg class="floor" viewBox="0 0 280 270"><rect x="1" y="1" width="278" height="268" rx="10" fill="#fbf6ea" stroke="#d7cbb3"/><ellipse class="dance" cx="108" cy="175" rx="34" ry="26"/><text class="zone-txt" x="108" y="176">רחבה</text><rect class="zone" x="86" y="236" width="36" height="18" rx="3"/><text class="zone-txt" x="104" y="247">בר</text><rect class="zone" x="58" y="236" width="24" height="18" rx="3"/><text class="zone-txt" x="70" y="247">DJ</text><line class="wall" x1="8" y1="56" x2="148" y2="56"/><line class="wall" x1="210" y1="8" x2="210" y2="262"/>${rects}<path d="M42 248 L42 222" stroke="#1a2744" fill="none"/><polygon fill="#1a2744" points="42,216 38,224 46,224"/><text class="zone-txt" x="42" y="260">כניסה</text></svg></div>`;
}
function search(){
  const phoneEl=document.getElementById("phone");
  const out=document.getElementById("result");
  if(!phoneEl||!out) return;
  const q=normalize(phoneEl.value);
  if(q.length<9){ out.innerHTML='<div class="box">נא להזין מספר טלפון מלא</div>'; return; }
  const hits=GUESTS.filter(g=>(g.phones||[]).some(ph=>{ const p=normalize(ph); return p===q||(p&&q&&p.slice(-9)===q.slice(-9)); }));
  if(!hits.length){ out.innerHTML='<div class="box">לא מצאנו את המספר ברשימה</div>'; return; }
  out.innerHTML=hits.map(g=>{
    const grp=groupOf(g.table);
    const mates=GUESTS.filter(x=>grp.includes(String(x.table)));
    const list=mates.map(x=>`<li>${x.name}${x.name===g.name?' · אתם':''}</li>`).join("");
    const title=grp.length>1?grp.join(" + "):g.table;
    const label=grp.length>1?"שולחנות מאוחדים":"מספר שולחן";
    return `<div class="box"><div class="name">${g.name}</div><div class="table-num">${title}</div><div class="table-label">${label}</div><div class="mates"><h4>מי איתכם בשולחן?</h4><ul>${list}</ul></div>${floorMap(g.table)}</div>`;
  }).join("");
}
function bindSearch(){
  const go=document.getElementById("go");
  const phone=document.getElementById("phone");
  if(go) go.onclick=search;
  if(phone) phone.addEventListener("keydown",e=>{ if(e.key==="Enter") search(); });
}
if(document.readyState==="loading") document.addEventListener("DOMContentLoaded", bindSearch);
else bindSearch();
const EVENT_AT=new Date("2026-08-27T19:30:00+03:00").getTime();
function tick(){
  const el=document.getElementById("countdown"); if(!el) return;
  const diff=EVENT_AT-Date.now();
  if(diff<=0){ el.innerHTML='<div style="font-weight:800;color:#1a2744">האירוע התחיל</div>'; return; }
  const s=Math.floor(diff/1000), h=Math.floor(s/3600), m=Math.floor((s%3600)/60), sec=s%60;
  const pad=n=>String(n).padStart(2,"0");
  const box=(v,l)=>`<div class="cd-box"><b>${v}</b><span>${l}</span></div>`;
  el.innerHTML=box(pad(h),"שעות")+box(pad(m),"דקות")+box(pad(sec),"שניות");
}
tick(); setInterval(tick,1000);
