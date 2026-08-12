const news = [
  {
    date:'۱۴۰۳/۱۲/۲۹',
    title:'برگزاری مجمع عمومی عادی سالیانه شرکت',
    text:'جلسه مجمع عمومی عادی سالیانه شرکت تعاونی عشایری کوه نور دهدشت با حضور اکثریت اعضاء برگزار شد.',
    body:'جلسه مجمع عمومی عادی سالیانه سال مالی منتهی به 1403/12/29 شرکت تعاونی عشایری کوه نور دهدشت با حضور اکثریت اعضاء برگزار گردید. در این جلسه صورتهای مالی سال 1403 به تصویب اعضاء مجمع رسید.',
    images:[
      'https://s6.uupload.ir/files/img_20260812_214231_921_rebj.jpg',
      'https://s6.uupload.ir/files/img_20260812_214235_290_uw11.jpg',
      'https://s6.uupload.ir/files/img_20260812_214236_565_7pnm.jpg',
      'https://s6.uupload.ir/files/img_20260812_214240_309_d7re.jpg',
      'https://s6.uupload.ir/files/img_20260812_214243_421_m4nm.jpg',
      'https://s6.uupload.ir/files/img_20260812_214249_165_wdkv.jpg'
    ]
  },
  {
    date:'۱۴۰۴',
    title:'تداوم خدمات آبرسانی و پشتیبانی از عشایر شهرستان کهگیلویه',
    text:'خدمات آبرسانی سیار و توزیع اقلام مورد نیاز عشایر شهرستان کهگیلویه به صورت مستمر انجام می‌شود.',
    body:'خدمات آبرسانی سیار با تانکر به عشایر شهرستان کهگیلویه توسط شرکت تعاونی عشایری کوه نور دهدشت به صورت مستمر صورت می پذیرد. آقای پروره مدیرعامل تعاونی عشایری کوه نور دهدشت در همین راستا بیان کردند که طی سال 1404 قریب به 1500 سرویس 12000 لیتری آب شرب با تانکر سیار تحویل عشایر شهرستان کهگیلویه گردیده است. وی افزود سال 1404 خدماتی اعم از توزیع آرد، علوفه دامی، توزیع نفت سفید، توزیع سیلندر گاز مایع و...... به صورت مستمر در اختیار عشایر تحت پوشش و سهامدار شرکت تعاونی قرار گرفته است.',
    images:[
      'https://s6.uupload.ir/files/img_20260812_215010_415_84rr.jpg',
      'https://s6.uupload.ir/files/img_20260812_215006_572_bmkq.jpg',
      'https://s6.uupload.ir/files/img_20260812_215004_101_yomi.jpg',
      'https://s6.uupload.ir/files/img_20260812_215000_262_fr6a.jpg',
      'https://s6.uupload.ir/files/img_20260812_214958_234_7hze.jpg',
      'https://s6.uupload.ir/files/img_20260812_214956_145_e3p3.jpg',
      'https://s6.uupload.ir/files/img_20260812_214954_885_neu7.jpg'
    ]
  },
  {date:'۱۴۰۵/۰۵/۲۰', title:'گزارش تصویری فعالیت‌های شرکت', text:'تصاویر منتخب از فعالیت‌ها، بازدیدها و رویدادهای اخیر شرکت تعاونی.', body:'متن کامل گزارش تصویری در این قسمت قرار می‌گیرد.', images:[]},
  {date:'۱۴۰۵/۰۵/۱۲', title:'اطلاعیه جدید شرکت تعاونی', text:'اطلاعیه و اطلاعات مورد نیاز اعضا و جامعه هدف شرکت تعاونی.', body:'متن کامل اطلاعیه در این قسمت قرار می‌گیرد.', images:[]},
  {date:'۱۴۰۵/۰۴/۲۹', title:'فعالیت‌های جدید در مسیر توسعه تعاونی', text:'مروری کوتاه بر اقدامات و برنامه‌های جدید شرکت.', body:'در این قسمت می‌توانید جزئیات فعالیت‌ها، اهداف و نتایج به‌دست‌آمده را منتشر کنید.', images:[]}
];

const docs = [
  {title:'استعلام شناسه ملی', url:'https://s6.uupload.ir/files/picsart_26-08-12_20-52-02-273_symw.png'},
  {title:'ثبت شرکت در دهدشت', url:'https://s6.uupload.ir/files/picsart_26-08-12_20-52-39-057_vja0.png'},
  {title:'آگهی تأسیس', url:'https://s6.uupload.ir/files/picsart_26-08-12_20-53-10-531_krf2.png'}
];

const track=document.getElementById('newsTrack');
const dots=document.getElementById('newsDots');
const allNews=document.getElementById('allNewsList');
const articleContent=document.getElementById('articleContent');
const viewer=document.getElementById('documentViewer');
let activeNews=0;
let timer;

function renderNews(){
  track.innerHTML=news.map((n,i)=>{
    const cover=n.images?.[0]
      ? `<img src="${n.images[0]}" alt="${n.title}" loading="lazy">`
      : `<span aria-hidden="true">✦</span>`;
    return `<article class="news-card" data-index="${i}"><div class="news-cover">${cover}</div><div class="news-body"><time class="news-date">${n.date}</time><h3>${n.title}</h3><p>${n.text}</p></div></article>`;
  }).join('');
  dots.innerHTML=news.map((_,i)=>`<button aria-label="نمایش خبر ${i+1}" data-dot="${i}" class="${i===0?'active':''}"></button>`).join('');
  allNews.innerHTML=news.map((n,i)=>`<button class="all-news-item" data-index="${i}"><div><time>${n.date}</time><h3>${n.title}</h3><p>${n.text}</p></div><span aria-hidden="true">←</span></button>`).join('');
}

function openModal(id){const m=document.getElementById(id);m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(id){const m=document.getElementById(id);m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow=''}

function showArticle(i){
  const n=news[i];
  const gallery=n.images?.length ? `<div class="article-gallery">${n.images.map((src,j)=>`<img src="${src}" alt="${n.title} - تصویر ${j+1}" loading="lazy">`).join('')}</div>` : '';
  articleContent.innerHTML=`<span class="eyebrow">خبر شرکت تعاونی</span><h2>${n.title}</h2><div class="article-meta">تاریخ انتشار: ${n.date}</div>${gallery}<p>${n.body}</p>`;
  closeModal('newsModal');
  openModal('articleModal');
}

function setActiveDot(i){
  activeNews=i;
  dots.querySelectorAll('button').forEach((b,j)=>b.classList.toggle('active',j===i));
}
function goToNews(i){
  i=(i+news.length)%news.length;
  const card=track.querySelector(`[data-index="${i}"]`);
  if(!card)return;
  activeNews=i;
  track.scrollTo({left: card.offsetLeft - (track.clientWidth-card.offsetWidth)/2, behavior:'smooth'});
  setActiveDot(i);
}
function nextNews(){goToNews(activeNews+1)}
function prevNews(){goToNews(activeNews-1)}
function restartTimer(){clearInterval(timer);timer=setInterval(nextNews,5000)}

renderNews();

document.querySelectorAll('.menu-card').forEach(btn=>btn.addEventListener('click',()=>document.getElementById(btn.dataset.target)?.scrollIntoView({behavior:'smooth',block:'start'})));
document.getElementById('openNews').addEventListener('click',()=>openModal('newsModal'));
document.getElementById('nextNews').addEventListener('click',()=>{nextNews();restartTimer()});
document.getElementById('prevNews').addEventListener('click',()=>{prevNews();restartTimer()});
dots.addEventListener('click',e=>{if(e.target.dataset.dot!==undefined){goToNews(Number(e.target.dataset.dot));restartTimer()}});
track.addEventListener('click',e=>{const c=e.target.closest('.news-card');if(c)showArticle(Number(c.dataset.index))});
allNews.addEventListener('click',e=>{const c=e.target.closest('.all-news-item');if(c)showArticle(Number(c.dataset.index))});
document.addEventListener('click',e=>{const close=e.target.closest('[data-close]');if(close)closeModal(close.dataset.close)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal('newsModal');closeModal('articleModal')}if(e.key==='ArrowLeft'){nextNews()}if(e.key==='ArrowRight'){prevNews()}});
track.addEventListener('scroll',()=>{
  const cards=[...track.querySelectorAll('.news-card')];
  if(!cards.length)return;
  const center=track.scrollLeft+track.clientWidth/2;
  let best=0,dist=Infinity;
  cards.forEach((c,i)=>{const d=Math.abs(c.offsetLeft+c.offsetWidth/2-center);if(d<dist){dist=d;best=i}});
  setActiveDot(best);
},{passive:true});
track.addEventListener('pointerdown',()=>clearInterval(timer));
track.addEventListener('pointerup',restartTimer);
track.addEventListener('touchend',restartTimer,{passive:true});
restartTimer();

function renderDoc(i=0){
  const d=docs[i];
  viewer.innerHTML=`<img src="${d.url}" alt="${d.title}" loading="lazy"><div class="document-caption"><strong>${d.title}</strong><br>تصویر سند رسمی ارائه‌شده در بخش اسناد و مدارک.</div>`;
  document.querySelectorAll('.document-tab').forEach((b,j)=>b.classList.toggle('active',j===i));
}
document.querySelectorAll('.document-tab').forEach(b=>b.addEventListener('click',()=>renderDoc(Number(b.dataset.doc))));
renderDoc();
