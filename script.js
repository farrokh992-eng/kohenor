const NEWS = [
  {
    id: "n1",
    date: "۱۴۰۳/۱۲/۲۹",
    title: "برگزاری مجمع عمومی عادی سالیانه شرکت",
    summary: "جلسه مجمع عمومی عادی سالیانه شرکت تعاونی عشایری کوه نور دهدشت با حضور اکثریت اعضاء برگزار گردید.",
    images: [
      "https://s6.uupload.ir/files/img_20260812_214231_921_rebj.jpg",
      "https://s6.uupload.ir/files/img_20260812_214235_290_uw11.jpg",
      "https://s6.uupload.ir/files/img_20260812_214236_565_7pnm.jpg",
      "https://s6.uupload.ir/files/img_20260812_214240_309_d7re.jpg",
      "https://s6.uupload.ir/files/img_20260812_214243_421_m4nm.jpg",
      "https://s6.uupload.ir/files/img_20260812_214249_165_wdkv.jpg"
    ],
    body: "جلسه مجمع عمومی عادی سالیانه سال مالی منتهی به 1403/12/29 شرکت تعاونی عشایری کوه نور دهدشت با حضور اکثریت اعضاء برگزار گردید. در این جلسه صورتهای مالی سال 1403 به تصویب اعضاء مجمع رسید."
  },
  {
    id: "n2",
    date: "۱۴۰۴",
    title: "تداوم خدمات آبرسانی و پشتیبانی از عشایر شهرستان کهگیلویه",
    summary: "خدمات آبرسانی سیار و مجموعه‌ای از خدمات پشتیبانی برای عشایر شهرستان کهگیلویه به صورت مستمر انجام می‌شود.",
    images: [
      "https://s6.uupload.ir/files/img_20260812_215010_415_84rr.jpg",
      "https://s6.uupload.ir/files/img_20260812_215006_572_bmkq.jpg",
      "https://s6.uupload.ir/files/img_20260812_215004_101_yomi.jpg",
      "https://s6.uupload.ir/files/img_20260812_215000_262_fr6a.jpg",
      "https://s6.uupload.ir/files/img_20260812_214958_234_7hze.jpg",
      "https://s6.uupload.ir/files/img_20260812_214956_145_e3p3.jpg",
      "https://s6.uupload.ir/files/img_20260812_214954_885_neu7.jpg"
    ],
    body: "خدمات آبرسانی سیار با تانکر به عشایر شهرستان کهگیلویه توسط شرکت تعاونی عشایری کوه نور دهدشت به صورت مستمر صورت می‌پذیرد. آقای پروره مدیرعامل تعاونی عشایری کوه نور دهدشت در همین راستا بیان کردند که طی سال 1404 قریب به 1500 سرویس 12000 لیتری آب شرب با تانکر سیار تحویل عشایر شهرستان کهگیلویه گردیده است. وی افزود سال 1404 خدماتی اعم از توزیع آرد، علوفه دامی، توزیع نفت سفید، توزیع سیلندر گاز مایع و موارد دیگر به صورت مستمر در اختیار عشایر تحت پوشش و سهامدار شرکت تعاونی قرار گرفته است."
  }
];

const DOCS = [
  ["استعلام شناسه ملی","https://s6.uupload.ir/files/picsart_26-08-12_20-52-02-273_symw.png"],
  ["ثبت شرکت در دهدشت","https://s6.uupload.ir/files/picsart_26-08-12_20-52-39-057_vja0.png"],
  ["آگهی تأسیس","https://s6.uupload.ir/files/picsart_26-08-12_20-53-10-531_krf2.png"]
];

const TEXT = {
  nomads: ["عشایر؛ سرمایه ملّی", `جامعه عشایری ایران یکی از ارزشمندترین بخش‌های اجتماعی، فرهنگی و اقتصادی کشور است؛ جامعه‌ای که در طول تاریخ، پیوندی عمیق و ناگسستنی با سرزمین، طبیعت، تولید و فرهنگ ایرانی داشته و بخش مهمی از هویت تاریخی و اجتماعی ایران را شکل داده است. عشایر تنها یک شیوه زندگی یا یک جامعه کوچ‌رو نیستند، بلکه مجموعه‌ای از ظرفیت‌های انسانی، اقتصادی، فرهنگی و زیست‌محیطی را در خود جای داده‌اند که حفظ، تقویت و حمایت از آن‌ها، بخشی از صیانت از سرمایه‌های ملی کشور به شمار می‌رود.

زندگی عشایری بر پایه ارتباط مستقیم و مستمر انسان با طبیعت و بهره‌برداری متعادل از منابع طبیعی شکل گرفته است. عشایر با شناخت دقیق از مراتع، منابع آب، شرایط اقلیمی و ظرفیت‌های محیطی مناطق مختلف، نسل‌های متعددی از زندگی خود را در هماهنگی با طبیعت توسعه داده‌اند.

عشایر در تولید محصولات دامی، فرآورده‌های لبنی، گوشت، پشم و دیگر محصولات نقش مهمی دارند و فرهنگ، موسیقی، پوشاک، صنایع دستی و آیین‌های آنان نیز بخشی ارزشمند از میراث فرهنگی ایران است. حمایت از جامعه عشایری در حقیقت حمایت از تنوع فرهنگی، امنیت غذایی، توسعه پایدار و صیانت از منابع طبیعی کشور است.`],
  coop: ["چگونگی تعاونی", `تعاونی یکی از مهم‌ترین شیوه‌های سازمان‌دهی اقتصادی و اجتماعی بر پایه مشارکت افراد است. در نظام تعاونی، افراد با گردهم آمدن و تجمیع توانایی‌ها، سرمایه، تجربه و نیازهای مشترک خود، برای دستیابی به اهداف اقتصادی و اجتماعی مشترک همکاری می‌کنند.

تعاونی‌های عشایری با توجه به ویژگی‌های خاص جامعه عشایری، نقش مهمی در سامان‌دهی فعالیت‌های اقتصادی و ارائه خدمات مورد نیاز اعضا دارند. خدماتی مانند تأمین و توزیع نهاده‌های دامی، آبرسانی، توزیع برخی اقلام مورد نیاز و پشتیبانی از فعالیت‌های تولیدی می‌تواند در چارچوب فعالیت‌های تعاونی انجام شود.

یکی از مزیت‌های مهم تعاونی، ایجاد قدرت جمعی است. زمانی که اعضا به صورت سازمان‌یافته فعالیت می‌کنند، امکان برنامه‌ریزی، تأمین کالا و خدمات، پیگیری مسائل و استفاده بهتر از ظرفیت‌های موجود افزایش پیدا می‌کند. برگزاری مجامع، تصویب صورت‌های مالی، انتخاب ارکان قانونی و نظارت اعضا نیز به شفافیت و مشارکت در ساختار تعاونی کمک می‌کند.`],
  about: ["درباره شرکت", `شرکت تعاونی عشایری کوه نور دهدشت با هدف ارائه خدمات و پشتیبانی از جامعه عشایری منطقه فعالیت می‌کند و در چارچوب ضوابط و مقررات بخش تعاون و با نظارت سازمان امور عشایر ایران، خدمات مورد نیاز اعضا و سهامداران خود را دنبال می‌نماید.

این مجموعه تلاش می‌کند با اتکا به مشارکت اعضا، ظرفیت‌های محلی و همکاری دستگاه‌های مرتبط، در مسیر بهبود خدمات و حمایت از فعالیت‌های اقتصادی و معیشتی عشایر شهرستان کهگیلویه گام بردارد.`]
};

const $ = s => document.querySelector(s);
const overlay = $("#overlay");
const content = $("#content");
const news = $("#news");
const photos = $("#photos");

function modal(html) {
  content.innerHTML = html;
  overlay.classList.add("show");
  overlay.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  overlay.classList.remove("show");
  overlay.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
}

$("#close").onclick = closeModal;
overlay.onclick = e => { if (e.target === overlay) closeModal(); };
document.onkeydown = e => { if (e.key === "Escape") closeModal(); };

function addDots(box, count) {
  box.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const d = document.createElement("i");
    d.className = "dot" + (i === 0 ? " active" : "");
    box.appendChild(d);
  }
}

function scrollTrack(box, direction) {
  const amount = Math.max(box.clientWidth * 0.86, 280);
  box.scrollBy({ left: direction * amount, behavior: "smooth" });
}

NEWS.forEach(n => {
  const c = document.createElement("article");
  c.className = "card";
  c.innerHTML = `<img src="${n.images[0]}" alt="${n.title}" loading="lazy">
    <div class="body"><div class="date">${n.date}</div><h3>${n.title}</h3><p>${n.summary}</p></div>`;
  c.onclick = () => openNews(n);
  news.appendChild(c);
});
addDots($("#ndots"), NEWS.length);

const G = NEWS.flatMap(n => n.images.map(src => ({src, title:n.title})));

G.forEach((g, i) => {
  const c = document.createElement("article");
  c.className = "card gallery-card";
  c.innerHTML = `<img src="${g.src}" alt="${g.title}" loading="lazy"><div class="body"><h3>${g.title}</h3></div>`;
  c.onclick = () => openPhoto(i);
  photos.appendChild(c);
});
addDots($("#pdots"), Math.min(G.length, 8));

$("#nprev").onclick = () => scrollTrack(news, 1);
$("#nnext").onclick = () => scrollTrack(news, -1);
$("#gprev").onclick = () => scrollTrack(photos, 1);
$("#gnext").onclick = () => scrollTrack(photos, -1);

function openNews(n) {
  modal(`<div class="eyebrow">خبر شرکت تعاونی</div>
    <h2>${n.title}</h2>
    <div class="date">تاریخ انتشار: ${n.date}</div>
    <div class="article-images">${n.images.map((x,i)=>`<img src="${x}" alt="${n.title} - تصویر ${i+1}" loading="lazy">`).join("")}</div>
    <div class="full">${n.body}</div>`);
}

function openPhoto(i) {
  const g = G[i];
  modal(`<div class="eyebrow">گزارش تصویری</div>
    <h2>${g.title}</h2>
    <div class="photo">
      <button class="pv" id="pp" aria-label="تصویر قبلی">›</button>
      <img src="${g.src}" alt="${g.title}">
      <button class="pv" id="pn" aria-label="تصویر بعدی">‹</button>
    </div>
    <p class="counter">${i+1} از ${G.length}</p>`);
  $("#pp").onclick = () => openPhoto((i - 1 + G.length) % G.length);
  $("#pn").onclick = () => openPhoto((i + 1) % G.length);
}

$("#gallery").onclick = () => openPhoto(0);

$("#archive").onclick = () => {
  modal(`<div class="eyebrow">آرشیو اطلاع‌رسانی</div><h2>همه اخبار</h2>
    <div class="list">${NEWS.map(n=>`
      <button class="item" data-id="${n.id}">
        <div class="date">${n.date}</div><h3>${n.title}</h3><p>${n.summary}</p>
      </button>`).join("")}</div>`);
  document.querySelectorAll(".item").forEach(item => {
    item.onclick = () => openNews(NEWS.find(n => n.id === item.dataset.id));
  });
};

document.querySelectorAll(".buttons button").forEach(b => {
  b.onclick = () => {
    const k = b.dataset.panel;
    if (k === "docs") {
      modal(`<div class="eyebrow">مدارک رسمی</div><h2>اسناد و مدارک</h2>
        ${DOCS.map(d=>`<div class="doc"><h3>${d[0]}</h3><img src="${d[1]}" alt="${d[0]}" loading="lazy"></div>`).join("")}`);
    } else {
      const t = TEXT[k];
      modal(`<div class="eyebrow">معرفی</div><h2>${t[0]}</h2><div class="full">${t[1]}</div>`);
    }
  };
});
