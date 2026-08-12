const news = [
  {date:'۱۴۰۵/۰۵/۲۸', title:'برگزاری جلسه و بررسی برنامه‌های تعاونی', text:'گزارشی از آخرین نشست و برنامه‌های پیش‌رو برای توسعه فعالیت‌های شرکت.', body:'در این خبر می‌توانید متن کامل گزارش جلسه، موضوعات مطرح‌شده و تصمیم‌های اتخاذشده را قرار دهید. این بخش برای انتشار محتوای کامل اخبار طراحی شده است.'},
  {date:'۱۴۰۵/۰۵/۲۰', title:'گزارش تصویری فعالیت‌های شرکت', text:'تصاویر منتخب از فعالیت‌ها، بازدیدها و رویدادهای اخیر شرکت تعاونی.', body:'متن کامل گزارش تصویری در این قسمت قرار می‌گیرد و می‌توانید تصاویر متعدد را نیز به آن اضافه کنید.'},
  {date:'۱۴۰۵/۰۵/۱۲', title:'اطلاعیه جدید شرکت تعاونی', text:'اطلاعیه و اطلاعات مورد نیاز اعضا و جامعه هدف شرکت تعاونی.', body:'متن کامل اطلاعیه در این قسمت قرار می‌گیرد. ساختار صفحه طوری طراحی شده که اخبار طولانی نیز خوانا و مرتب نمایش داده شوند.'},
  {date:'۱۴۰۵/۰۴/۲۹', title:'فعالیت‌های جدید در مسیر توسعه تعاونی', text:'مروری کوتاه بر اقدامات و برنامه‌های جدید شرکت.', body:'در این قسمت می‌توانید جزئیات فعالیت‌ها، اهداف و نتایج به‌دست‌آمده را منتشر کنید.'},
  {date:'۱۴۰۵/۰۴/۱۸', title:'خبر و اطلاع‌رسانی شرکت', text:'آخرین مطالب و اطلاع‌رسانی‌های رسمی شرکت تعاونی.', body:'این متن نمونه است و بعداً می‌توانیم سیستم مدیریت اخبار را به سایت اضافه کنیم.'}
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

function renderNews(){
  track.innerHTML=news.map((n,i)=>`<article class="news-card" data-index="${i}"><div class="news-cover" aria-hidden="true">✦</div><div class="news-body"><time class="news-date">${n.date}</time><h3>${n.title}</h3><p>${n.text}</p></div></article>`).join('');
  dots.innerHTML=news.map((_,i)=>`<button aria-label="خبر ${i+1}" data-dot="${i}" class="${i===0?'active':''}"></button>`).join('');
  allNews.innerHTML=news.map((n,i)=>`<div class="all-news-item" data-index="${i}"><div><time>${n.date}</time><h3>${n.title}</h3><p>${n.text}</p></div><span>←</span></div>`).join('');
}
function openModal(id){const m=document.getElementById(id);m.classList.add('open');m.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeModal(id){const m=document.getElementById(id);m.classList.remove('open');m.setAttribute('aria-hidden','true');document.body.style.overflow=''}
function showArticle(i){const n=news[i];articleContent.innerHTML=`<span class="eyebrow">خبر شرکت تعاونی</span><h2>${n.title}</h2><div class="article-meta">تاریخ انتشار: ${n.date}</div><div class="article-placeholder">✦</div><p>${n.body}</p>`;closeModal('newsModal');openModal('articleModal')}
function scrollNews(i){const card=track.querySelector(`[data-index="${i}"]`);if(card)card.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'});document.querySelectorAll('.dots button').forEach((b,j)=>b.classList.toggle('active',j===i))}

renderNews();

document.querySelectorAll('.menu-card').forEach(btn=>btn.addEventListener('click',()=>document.getElementById(btn.dataset.target)?.scrollIntoView({behavior:'smooth'})));
document.getElementById('openNews').addEventListener('click',()=>openModal('newsModal'));
document.getElementById('nextNews').addEventListener('click',()=>scrollNews(Math.min(news.length-1,currentIndex()+1)));
document.getElementById('prevNews').addEventListener('click',()=>scrollNews(Math.max(0,currentIndex()-1)));
dots.addEventListener('click',e=>{if(e.target.dataset.dot!==undefined)scrollNews(Number(e.target.dataset.dot))});
track.addEventListener('click',e=>{const c=e.target.closest('.news-card');if(c)showArticle(Number(c.dataset.index))});
allNews.addEventListener('click',e=>{const c=e.target.closest('.all-news-item');if(c)showArticle(Number(c.dataset.index))});
document.addEventListener('click',e=>{const close=e.target.closest('[data-close]');if(close)closeModal(close.dataset.close)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal('newsModal');closeModal('articleModal')}});
function currentIndex(){const cards=[...track.querySelectorAll('.news-card')];const center=track.scrollLeft+track.clientWidth/2;let best=0,dist=Infinity;cards.forEach((c,i)=>{const d=Math.abs(c.offsetLeft+c.offsetWidth/2-center);if(d<dist){dist=d;best=i}});return best}

let timer=setInterval(()=>{const i=currentIndex();scrollNews(i>=news.length-1?0:i+1)},5000);
track.addEventListener('pointerdown',()=>clearInterval(timer));

function renderDoc(i=0){const d=docs[i];viewer.innerHTML=`<img src="${d.url}" alt="${d.title}" loading="lazy"><div class="document-caption"><strong>${d.title}</strong><br>تصویر سند رسمی ارائه‌شده در بخش اسناد و مدارک.</div>`;document.querySelectorAll('.document-tab').forEach((b,j)=>b.classList.toggle('active',j===i))}
document.querySelectorAll('.document-tab').forEach(b=>b.addEventListener('click',()=>renderDoc(Number(b.dataset.doc))));
renderDoc();
