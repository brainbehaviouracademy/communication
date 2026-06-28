/* ============================================================
   TALK IT OUT — app.js
   Brain Behaviour Academy · communication module
   ============================================================ */

/* ------------------------- DATA ------------------------- */
const LOOP = [
  {step:"Stage 1", title:"Formulation of thought", ico:"💡", text:"The sender has an idea, thought, or feeling they want to share. Right now it lives only inside one mind."},
  {step:"Stage 2", title:"Sender encodes", ico:"🧑‍💼", text:"The sender turns that inner idea into a message — choosing words, tone, and gestures to carry the meaning."},
  {step:"Stage 3", title:"Communication channel", ico:"📡", text:"The message is transmitted through a chosen channel: verbal, non-verbal, written, or digital."},
  {step:"Stage 4", title:"Receiver receives", ico:"🧑‍🎓", text:"The receiver picks up the message through the channel — what reaches them may be shaped by noise or barriers along the way."},
  {step:"Stage 5", title:"Receiver decodes", ico:"🧠", text:"The receiver interprets the message using their own experiences, feelings, and beliefs — rebuilding the idea inside their head."},
  {step:"Stage 6", title:"Response / feedback", ico:"🔁", text:"The receiver responds, gives feedback, or asks for clarification. This completes the loop — and the cycle begins again."}
];

const JOURNEY = [
  {t:"Sender has an idea", d:"A thought, feeling or piece of information arises in the mind.", c:"var(--teal)"},
  {t:"Encode the idea", d:"The idea is converted into words, symbols or actions.", c:"var(--teal-deep)"},
  {t:"Transmit the message", d:"The message is sent through a chosen communication channel.", c:"var(--green)"},
  {t:"Overcome the barrier", d:"The message faces internal and external barriers. Effective communication pushes through them.", c:"var(--amber)"},
  {t:"Receive the message", d:"The receiver gets the message through the channel.", c:"var(--coral)"},
  {t:"Decode the message", d:"The receiver interprets the meaning.", c:"var(--violet)"},
  {t:"Understand the message", d:"Understanding leads to a response, feedback or action.", c:"var(--ink)"}
];

const CHANNELS = [
  {ico:"🗣️", name:"Verbal", sub:"Face-to-face, phone call", best:"Quick, warm, and instant — great for working things out together in real time.", watch:"Words vanish once spoken; easy to mishear or forget."},
  {ico:"🙂", name:"Non-verbal", sub:"Body language, tone, expression", best:"Carries the emotion behind the words — often the loudest part of any message.", watch:"Easily misread, and completely lost over plain text."},
  {ico:"✉️", name:"Written", sub:"Text, email, document", best:"Clear, considered, and you can re-read it. Good for detail and records.", watch:"No tone — sarcasm and warmth often don't survive the trip."},
  {ico:"📱", name:"Digital", sub:"Chat, social media, video", best:"Fast and reaches anyone, anywhere. Video adds back tone and face.", watch:"Public, permanent, and easy to fire off before thinking."}
];

const INFLUENCES = ["Knowledge","Culture","Values","Feelings","Past experiences","Attitude","Generation","Gender"];

const INTERNAL = [
  {name:"Cognitive", ico:"🧠", color:"var(--violet)", note:"Barriers in how we think and process.", items:["Assumptions","Prejudices / biases","Selective perception","Stereotyping","Lack of attention","Information overload","Misinterpretation","Poor memory","Fixed mindset","Low knowledge"]},
  {name:"Emotional", ico:"❤️", color:"var(--coral)", note:"Barriers from how we feel in the moment.", items:["Anger","Anxiety","Fear","Stress","Sadness","Frustration","Jealousy","Resentment","Defensiveness","Low emotional regulation"]},
  {name:"Attitudinal", ico:"🙅", color:"var(--amber-deep)", note:"Barriers from our stance toward others.", items:["Lack of trust","Ego","Arrogance","Closed-mindedness","Resistance to change","Disinterest","Lack of respect","Overconfidence","Poor listening habits","Negative attitude"]},
  {name:"Physiological", ico:"💪", color:"var(--teal)", note:"Barriers from the body and senses.", items:["Fatigue","Hunger","Illness","Pain","Hearing difficulties","Speech difficulties","Sensory impairments","Cognitive disabilities","Stress-related exhaustion"]}
];

const EXTERNAL = [
  {ico:"🔊", t:"Environment / noise", d:"A loud or distracting setting drowns the message."},
  {ico:"🪜", t:"Status / role differences", d:"Power gaps make people hold back or filter what they say."},
  {ico:"📨", t:"Choice of channel", d:"The wrong channel for the message muddles it."},
  {ico:"📏", t:"Length of communication", d:"Too long or too rushed and the point gets lost."},
  {ico:"🗺️", t:"Language differences", d:"Different languages or jargon block shared meaning."},
  {ico:"♿", t:"Disabilities", d:"Unsupported access needs can interrupt the exchange."},
  {ico:"❓", t:"Unknown receiver", d:"Not knowing your audience makes you guess wrong."},
  {ico:"⚖️", t:"Perceptions & judgments", d:"Snap judgments colour how the message is read."},
  {ico:"🌫️", t:"Lack of clarity", d:"A vague message leaves too much to interpretation."},
  {ico:"🔇", t:"Lack of feedback", d:"With no reply, the sender never knows if it landed."}
];

const KEYS = [
  {t:"Clarity of message", d:"Say what you actually mean, simply.", do:"Try: before you speak, finish the sentence \"The one thing I want them to get is…\""},
  {t:"Active listening", d:"Fully focus and check you understood.", do:"Try: \"So what you're saying is…\" before you reply."},
  {t:"Empathy", d:"Imagine the message from their side.", do:"Try: ask \"how would I feel hearing this?\" first."},
  {t:"Feedback", d:"Respond so the sender knows it landed.", do:"Try: react, don't just receive — a nod, a reply, a question."},
  {t:"Respect", d:"Treat the other person as worth hearing.", do:"Try: let them finish, even when you disagree."},
  {t:"Trust", d:"Be reliable and honest over time.", do:"Try: do the small thing you said you'd do."},
  {t:"Appropriate channel", d:"Match the road to the message.", do:"Try: if it's heavy, pick voice or in person, not text."}
];

const FINAL = [
  {q:"Communication has succeeded when…", o:["you spoke for a long time","your meaning arrives in the other person's mind","you used difficult words","you got the last word"], a:1},
  {q:"In the loop, the sender turns an idea into a message. This step is called…", o:["decoding","feedback","encoding","the channel"], a:2},
  {q:"The receiver rebuilds the message using their own experiences. This is…", o:["encoding","decoding","transmitting","the channel"], a:1},
  {q:"Anger, anxiety and defensiveness are examples of which barrier?", o:["external","cognitive","emotional (internal)","physiological"], a:2},
  {q:"Background noise in a crowded room is which kind of barrier?", o:["internal — attitudinal","external","cognitive","there's no barrier"], a:1},
  {q:"For sorting out an emotional disagreement, the best channel is usually…", o:["a 2am text","a public post","a call or face-to-face","silence"], a:2},
  {q:"Why do two people react differently to the same comment?", o:["different phones","different backpacks of knowledge, values and feelings","random luck","the weather"], a:1},
  {q:"The module says great communication is mainly about…", o:["speaking impressively","winning the argument","understanding deeply","being the loudest"], a:2}
];

/* ------------------- STATE (localStorage) ------------------- */
const NS = "bba_talkitout_v2";
let state = loadState();
function loadState(){
  try{ return JSON.parse(localStorage.getItem(NS)) || {done:{},notes:{},final:null}; }
  catch(e){ return {done:{},notes:{},final:null}; }
}
function saveState(){
  try{ localStorage.setItem(NS, JSON.stringify(state)); }catch(e){}
}

/* ------------------- BUILD CONTENT ------------------- */
const lessons = [...document.querySelectorAll('.lesson')];
const TOTAL = lessons.length;
let current = 0;

function buildTOC(){
  const ol = document.getElementById('tocList');
  ol.innerHTML = "";
  lessons.forEach((sec,i)=>{
    const li = document.createElement('li');
    const b = document.createElement('button');
    b.innerHTML = `<span class="num"><span>${i}</span></span><span>${sec.dataset.title}</span>`;
    b.onclick = ()=>{ goto(i); closeNav(); };
    li.appendChild(b);
    ol.appendChild(li);
  });
}

function buildLoop(){
  const track = document.getElementById('loopTrack');
  LOOP.forEach((n,i)=>{
    const el = document.createElement('div');
    el.className='node'; el.dataset.i=i;
    el.innerHTML = `<div class="nico">${n.ico}</div><div class="nstep">${n.step}</div><div class="ntitle">${n.title}</div>`;
    el.onclick = ()=>showLoop(i);
    track.appendChild(el);
    if(i<LOOP.length-1){
      const a=document.createElement('div'); a.className='loop-arrow'; a.textContent='→';
      track.appendChild(a);
    }
  });
}
function showLoop(i){
  document.querySelectorAll('#loopTrack .node').forEach(n=>n.classList.toggle('on', +n.dataset.i===i));
  const d=document.getElementById('loopDetail');
  d.innerHTML = `<h4>${LOOP[i].ico} ${LOOP[i].title}</h4><p style="margin:0">${LOOP[i].text}</p>`;
}
let loopTimer=null;
function playLoop(){
  if(loopTimer){ clearInterval(loopTimer); loopTimer=null; }
  let i=0; showLoop(0);
  document.getElementById('playLoop').textContent='▶ Playing…';
  loopTimer=setInterval(()=>{
    i++;
    if(i>=LOOP.length){ clearInterval(loopTimer); loopTimer=null; document.getElementById('playLoop').textContent='▶ Play the loop again'; return; }
    showLoop(i);
  },1500);
}

function buildJourney(){
  const j=document.getElementById('journey');
  JOURNEY.forEach((s,i)=>{
    const el=document.createElement('div'); el.className='jstep';
    el.innerHTML=`<div class="jn" style="background:${s.c}">${i+1}</div><div><h4>${s.t}</h4><p>${s.d}</p></div>`;
    j.appendChild(el);
  });
}

function buildChannels(){
  const c=document.getElementById('channels');
  CHANNELS.forEach(ch=>{
    const el=document.createElement('div'); el.className='tile';
    el.innerHTML=`<span class="ico">${ch.ico}</span><h4>${ch.name}</h4>
      <p class="small" style="margin:0 0 8px;color:var(--muted)">${ch.sub}</p>
      <p class="small" style="margin:0 0 6px"><b style="color:var(--good)">Best for:</b> ${ch.best}</p>
      <p class="small" style="margin:0"><b style="color:var(--bad)">Watch out:</b> ${ch.watch}</p>`;
    c.appendChild(el);
  });
}

function buildInfluences(){
  const wrap=document.getElementById('influenceChips');
  wrap.innerHTML = `<p class="small" style="margin:0 0 8px">Both the sender and the receiver carry these — and they shape every message:</p>` +
    INFLUENCES.map(x=>`<span class="pill">${x}</span>`).join('');
}

function buildInternal(){
  const wrap=document.getElementById('intAcc');
  INTERNAL.forEach((cat,idx)=>{
    const acc=document.createElement('div'); acc.className='acc';
    acc.innerHTML=`
      <button class="acc-h" type="button">
        <span class="ai" style="background:${cat.color}">${cat.ico}</span>
        <span>${idx+1}. ${cat.name}</span>
        <span class="chev">▾</span>
      </button>
      <div class="acc-body"><div class="inner">
        <p class="small" style="margin:8px 0 8px;color:var(--muted)">${cat.note}</p>
        ${cat.items.map(it=>`<span class="pill" style="background:#F1EBE0;color:var(--ink-soft)">${it}</span>`).join('')}
      </div></div>`;
    const head=acc.querySelector('.acc-h');
    const body=acc.querySelector('.acc-body');
    head.onclick=()=>{
      const open=acc.classList.toggle('open');
      body.style.maxHeight = open ? body.scrollHeight+'px' : 0;
    };
    wrap.appendChild(acc);
  });
}

function buildExternal(){
  const g=document.getElementById('extGrid');
  EXTERNAL.forEach(e=>{
    const el=document.createElement('div'); el.className='tile';
    el.innerHTML=`<span class="ico">${e.ico}</span><h4 style="font-size:.98rem">${e.t}</h4><p class="small" style="margin:0">${e.d}</p>`;
    g.appendChild(el);
  });
}

function buildKeys(){
  const k=document.getElementById('keys');
  KEYS.forEach((key,i)=>{
    const el=document.createElement('div'); el.className='key';
    el.innerHTML=`<div class="kh"><div class="kn">${i+1}</div><h4>${key.t}</h4></div>
      <p class="small" style="margin:0">${key.d}</p>
      <div class="do">✦ ${key.do}</div>`;
    k.appendChild(el);
  });
}

function buildFinal(){
  const f=document.getElementById('finalQuiz');
  FINAL.forEach((item,qi)=>{
    const box=document.createElement('div'); box.className='quiz'; box.dataset.answer=item.a; box.dataset.final='1';
    box.innerHTML=`<div class="q">${qi+1}. ${item.q}</div>
      <div class="opts">${item.o.map((o,oi)=>`<div class="opt" data-i="${oi}"><span class="mk">${String.fromCharCode(65+oi)}</span><span>${o}</span></div>`).join('')}</div>`;
    box.querySelectorAll('.opt').forEach(opt=>{
      opt.onclick=()=>{
        if(box.dataset.locked) return;
        box.querySelectorAll('.opt').forEach(o=>{o.removeAttribute('data-chosen');o.style.borderColor='';});
        opt.setAttribute('data-chosen','1');
        opt.style.borderColor='var(--teal)';
      };
    });
    f.appendChild(box);
  });
}

/* ------------------- QUIZ (per-lesson) ------------------- */
function wireQuizzes(){
  document.querySelectorAll('.lesson .quiz:not([data-final])').forEach(q=>{
    const ans=+q.dataset.answer;
    const fb=q.querySelector('.fb');
    q.querySelectorAll('.opt').forEach(opt=>{
      opt.onclick=()=>{
        if(q.dataset.locked) return;
        q.dataset.locked='1';
        const pick=+opt.dataset.i;
        q.querySelectorAll('.opt').forEach(o=>{ if(+o.dataset.i===ans) o.classList.add('correct'); });
        if(pick!==ans) opt.classList.add('wrong');
        fb.classList.add('show', pick===ans?'ok':'no');
        fb.textContent = pick===ans ? "Exactly right. ✅" : "Not quite — the highlighted answer is the one. Re-read the section above and it'll click.";
      };
    });
  });
}

/* ------------------- REFLECTIONS ------------------- */
function wireReflections(){
  document.querySelectorAll('.reflect').forEach(r=>{
    const key=r.dataset.key;
    const ta=r.querySelector('textarea');
    const tag=r.querySelector('.saved-tag');
    if(state.notes[key]) ta.value=state.notes[key];
    let t;
    ta.addEventListener('input',()=>{
      state.notes[key]=ta.value; saveState();
      tag.textContent="Saved ✓";
      clearTimeout(t); t=setTimeout(()=>tag.textContent="",1400);
    });
  });
}

/* ------------------- NAVIGATION + PROGRESS ------------------- */
function goto(i){
  i=Math.max(0,Math.min(TOTAL-1,i));
  current=i;
  lessons.forEach((s,idx)=>s.classList.toggle('active',idx===i));
  document.querySelectorAll('#tocList button').forEach((b,idx)=>b.classList.toggle('active',idx===i));
  window.scrollTo({top:0,behavior:'smooth'});
  refreshTOC();
}
function next(){ goto(current+1); }
function prev(){ goto(current-1); }
function markAndNext(btn){
  state.done[current]=true; saveState();
  btn.classList.add('btn-done'); btn.textContent="Completed ✓";
  refreshTOC(); updateProgress();
  setTimeout(()=>next(),350);
}
function refreshTOC(){
  document.querySelectorAll('#tocList li button').forEach((b,idx)=>{
    b.classList.toggle('done', !!state.done[idx]);
  });
  const sec=lessons[current];
  const mark=sec.querySelector('.mark');
  if(mark && state.done[current]){ mark.classList.add('btn-done'); mark.textContent="Completed ✓"; }
}
function updateProgress(){
  const completed = Object.keys(state.done).filter(k=>state.done[k]).length;
  const pct = Math.round((completed/TOTAL)*100);
  document.getElementById('progBar').style.width=pct+'%';
  document.getElementById('progPct').textContent=pct+'%';
}

/* nav drawer (mobile) */
function openNav(){ document.getElementById('toc').classList.add('open'); document.getElementById('scrim').classList.add('show'); }
function closeNav(){ document.getElementById('toc').classList.remove('open'); document.getElementById('scrim').classList.remove('show'); }

/* tabs */
function setTab(btn,which){
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('on',t===btn));
  document.querySelectorAll('.tabpane').forEach(p=>p.classList.toggle('on',p.dataset.pane===which));
}

/* ------------------- FINAL SCORE ------------------- */
function scoreFinal(){
  const boxes=[...document.querySelectorAll('#finalQuiz .quiz')];
  let correct=0, answered=0;
  boxes.forEach(box=>{
    const chosen=box.querySelector('.opt[data-chosen]');
    if(chosen) answered++;
  });
  if(answered<boxes.length){
    alert("Pick an answer for all "+boxes.length+" questions first 🙂");
    return;
  }
  boxes.forEach(box=>{
    const ans=+box.dataset.answer;
    const chosen=box.querySelector('.opt[data-chosen]');
    box.dataset.locked='1';
    box.querySelectorAll('.opt').forEach(o=>{ if(+o.dataset.i===ans) o.classList.add('correct'); });
    if(chosen && +chosen.dataset.i!==ans) chosen.classList.add('wrong');
    if(chosen && +chosen.dataset.i===ans) correct++;
  });
  const pct=Math.round((correct/boxes.length)*100);
  state.final=pct; state.done[current]=true; saveState();
  updateProgress(); refreshTOC();
  const sb=document.getElementById('scoreBox');
  document.getElementById('scorePct').textContent=pct+'%';
  document.getElementById('scoreMsg').textContent =
    pct>=90 ? "Outstanding — you've really got this." :
    pct>=70 ? "Strong work. Revisit anything you missed." :
    pct>=50 ? "Good start — a quick review will lift this." :
              "Worth another pass through the lessons — you'll get there.";
  document.getElementById('scoreBadge').style.display = pct>=70 ? 'inline-flex':'none';
  sb.classList.add('show');
  document.getElementById('finalBtn').style.display='none';
  sb.scrollIntoView({behavior:'smooth',block:'center'});
}
function retryFinal(){
  document.querySelectorAll('#finalQuiz .quiz').forEach(b=>{
    delete b.dataset.locked;
    b.querySelectorAll('.opt').forEach(o=>{o.classList.remove('correct','wrong');o.removeAttribute('data-chosen');o.style.borderColor='';});
  });
  document.getElementById('scoreBox').classList.remove('show');
  document.getElementById('finalBtn').style.display='inline-flex';
}

/* ------------------- RESET ------------------- */
function resetAll(){
  if(!confirm("Reset all progress and notes on this device? This can't be undone.")) return;
  state={done:{},notes:{},final:null}; saveState();
  document.querySelectorAll('.reflect textarea').forEach(t=>t.value='');
  document.querySelectorAll('.mark').forEach(m=>{m.classList.remove('btn-done');});
  document.querySelectorAll('.quiz').forEach(q=>{
    delete q.dataset.locked;
    q.querySelectorAll('.opt').forEach(o=>{o.classList.remove('correct','wrong');o.removeAttribute('data-chosen');o.style.borderColor='';});
    const fb=q.querySelector('.fb'); if(fb){fb.className='fb';fb.textContent='';}
  });
  retryFinal();
  updateProgress(); refreshTOC(); goto(0);
}

/* ------------------- INIT ------------------- */
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('menuBtn').onclick=openNav;
  document.getElementById('scrim').onclick=closeNav;
  buildTOC();
  buildLoop();
  buildJourney();
  buildChannels();
  buildInfluences();
  buildInternal();
  buildExternal();
  buildKeys();
  buildFinal();
  wireQuizzes();
  wireReflections();
  updateProgress();
  refreshTOC();
  goto(0);
});
