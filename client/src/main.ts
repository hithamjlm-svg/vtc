import "./index.css";

document.documentElement.lang = "ar";
document.documentElement.dir = "rtl";

type Specialization = {
  slug: string;
  number: string;
  icon: string;
  title: string;
  audience: string;
  image: string;
  intro: string;
  duration: string;
  level: string;
  outcomes: string[];
  modules: string[];
};

const specializations: Specialization[] = [
  { slug: "data-entry", number: "01", icon: "▦", title: "مدخل بيانات", audience: "للإناث فقط", image: "track-data-entry_0abc2882.jpg", intro: "ابدئي طريقك نحو العمل المكتبي بثقة، وتعلمي كيف تتحولين من مستخدمة للحاسوب إلى محترفة في تنظيم البيانات وإدارة المعلومات.", duration: "6 أشهر", level: "مبتدئ", outcomes: ["إتقان برامج معالجة النصوص والجداول", "تنظيم الملفات والسجلات الرقمية", "كتابة البيانات ومراجعتها بدقة", "أساسيات التواصل والعمل المكتبي"], modules: ["مهارات الحاسوب الأساسية", "الجداول الإلكترونية", "إدارة الملفات والأرشفة", "الطباعة وإدخال البيانات"] },
  { slug: "solar-energy", number: "02", icon: "☼", title: "الطاقة الشمسية", audience: "للإناث والذكور", image: "track-solar_7c4e89c2.jpg", intro: "اكتسب أساسيات تركيب أنظمة الطاقة الشمسية وفحصها، وشارك في بناء حلول أكثر استدامة للمنازل والمنشآت.", duration: "6 أشهر", level: "مبتدئ إلى متوسط", outcomes: ["قراءة مخططات الأنظمة الشمسية", "تركيب الألواح والمنظمات والبطاريات", "فحص الجهد والتيار بأمان", "تنفيذ أعمال الصيانة الدورية"], modules: ["مبادئ الكهرباء", "مكونات النظام الشمسي", "التركيب والتوصيل", "الفحص والسلامة المهنية"] },
  { slug: "vehicle-mechanics", number: "03", icon: "⚙", title: "ميكانيك مركبات", audience: "للإناث والذكور", image: "track-mechanics_93996eb9.jpg", intro: "حوّل شغفك بالمركبات إلى مهارة عملية من خلال التدريب على الفحص والصيانة وتشخيص الأعطال الأساسية.", duration: "9 أشهر", level: "مبتدئ إلى متوسط", outcomes: ["فحص المحرك وأنظمة التبريد", "استخدام العدد اليدوية بأمان", "تنفيذ الصيانة الدورية", "تحديد الأعطال الميكانيكية الشائعة"], modules: ["محركات المركبات", "الزيوت والفلاتر", "نظام الفرامل والتعليق", "الفحص والصيانة الوقائية"] },
  { slug: "vehicle-electrics", number: "04", icon: "ϟ", title: "كهرباء مركبات", audience: "للإناث والذكور", image: "track-auto-electrics_3474df2f.jpg", intro: "تعلّم قراءة دوائر المركبات وتشخيص الأعطال الكهربائية باستخدام أدوات القياس الحديثة وبطريقة عملية.", duration: "6 أشهر", level: "مبتدئ إلى متوسط", outcomes: ["قراءة مخططات الدوائر الكهربائية", "فحص البطارية ودائرة الشحن", "تشخيص أعطال التشغيل والإضاءة", "استخدام الملتيميتر وأجهزة الفحص"], modules: ["أساسيات كهرباء المركبات", "البطارية والمولد", "التشغيل والإضاءة", "التشخيص والسلامة"] },
  { slug: "home-electric", number: "05", icon: "⌁", title: "تمديدات كهرباء منزلية", audience: "للإناث والذكور", image: "track-home-electric_f81ed22c.jpg", intro: "ابنِ أساسًا قويًا في تنفيذ التمديدات المنزلية وقراءة المخططات مع التركيز على السلامة والدقة.", duration: "6 أشهر", level: "مبتدئ", outcomes: ["قراءة مخططات التمديدات", "تركيب المفاتيح والمقابس", "اختيار القواطع والحمايات", "تنفيذ العمل وفق قواعد السلامة"], modules: ["مبادئ الكهرباء المنزلية", "التمديدات والأنابيب", "لوحات التوزيع والحماية", "الاختبار والسلامة المهنية"] },
  { slug: "auto-paint", number: "06", icon: "◒", title: "تجليس ودهان المركبات", audience: "للذكور فقط", image: "track-auto-paint_9db6c000.jpg", intro: "تعلّم تجهيز أسطح المركبات ومعالجة الأضرار وتنفيذ أعمال الدهان بلمسة احترافية داخل بيئة تدريب عملية.", duration: "9 أشهر", level: "مبتدئ إلى متوسط", outcomes: ["تقييم أضرار هيكل المركبة", "تجهيز الأسطح والصنفرة", "خلط الدهانات بطريقة صحيحة", "استخدام مسدس الرش ومعدات الوقاية"], modules: ["التجليس وإصلاح الهيكل", "المعالجة والصنفرة", "أساسيات الدهان", "التشطيب والسلامة"] },
];

const pageShell = (content: string, title: string) => `
  <div class="portal-shell" dir="rtl">
    <div class="announcement-bar"><div class="container announcement-bar__inner"><span>◉ بوابة التسجيل الإلكترونية — نسخة تجريبية قيد التطوير</span><a href="/#faq">الأسئلة الشائعة ←</a></div></div>
    <header class="site-header site-header--detail"><div class="container site-header__inner"><a href="/" class="brand-mark"><span class="brand-mark__logo"><img src="/manus-storage/Hw5qy4eR6gFD_79b09863.jpg" alt="شعار مؤسسة التدريب المهني الأردنية"></span><span class="brand-mark__text"><strong>معهد الغور الأوسط</strong><small>مؤسسة التدريب المهني الأردنية</small></span></a><button class="mobile-menu-toggle" aria-label="فتح القائمة" aria-expanded="false">☰</button><nav class="main-nav"><a href="/#about">عن المعهد</a><a href="/#tracks">التخصصات</a><a href="/#steps">شروط التسجيل</a><a href="/#documents">الوثائق المطلوبة</a><a href="/#faq">الأسئلة الشائعة</a><a href="/#contact">اتصل بنا</a><a class="nav-register" href="/#steps">سجّل الآن ↖</a></nav></div></header>
    <main>${content}</main>
    <footer class="site-footer"><div class="container site-footer__top"><div class="site-footer__brand"><a href="/" class="brand-mark"><span class="brand-mark__logo"><img src="/manus-storage/Hw5qy4eR6gFD_79b09863.jpg" alt="شعار مؤسسة التدريب المهني الأردنية"></span><span class="brand-mark__text"><strong>معهد الغور الأوسط</strong><small>مؤسسة التدريب المهني الأردنية</small></span></a><p>بوابة رقمية تمهّد لرحلتك في التدريب المهني، وتقرّبك من المهارة التي تبحث عنها.</p><span class="footer-demo">واجهة تأسيسية · محتوى تجريبي</span></div><div class="site-footer__links"><div><h3>استكشف</h3><a href="/#about">عن المعهد</a><a href="/#tracks">التخصصات</a><a href="/#steps">شروط التسجيل</a></div><div><h3>مساعدة</h3><a href="/#documents">الوثائق المطلوبة</a><a href="/#faq">الأسئلة الشائعة</a><a href="/#contact">اتصل بنا</a></div><div><h3>تواصل</h3><a href="tel:+96265000000">06 500 0000</a><a href="mailto:info@example.vtc.gov.jo">info@example.vtc.gov.jo</a><span>وادي الأردن، المملكة الأردنية الهاشمية</span></div></div></div><div class="container site-footer__bottom"><span>© 2026 معهد الغور الأوسط — جميع الحقوق محفوظة</span><span>جزء من مؤسسة التدريب المهني الأردنية</span></div></footer>
  </div>`;

const renderDetailPage = (specialization: Specialization) => {
  document.title = `${specialization.title} | معهد الغور الأوسط`;
  const outcomes = specialization.outcomes.map((item) => `<li><span>✓</span>${item}</li>`).join("");
  const modules = specialization.modules.map((item, index) => `<li><b>0${index + 1}</b><span>${item}</span></li>`).join("");
  document.body.innerHTML = pageShell(`
    <section class="detail-hero"><div class="detail-hero__image" style="background-image:url('/manus-storage/${specialization.image}')"></div><div class="detail-hero__veil"></div><div class="container detail-hero__inner"><a class="detail-back" href="/#tracks">← العودة إلى التخصصات</a><div class="detail-hero__copy"><span class="hero-kicker"><span class="hero-kicker__dot"></span> التخصص ${specialization.number} · ${specialization.audience}</span><h1>${specialization.title}</h1><p>${specialization.intro}</p><a class="button button--primary" href="/#steps">التسجيل المباشر ↖</a></div><span class="detail-hero__icon">${specialization.icon}</span></div></section>
    <section class="detail-content"><div class="container"><div class="detail-content__grid"><article class="detail-main"><span class="eyebrow"><i></i> ماذا ستتعلم؟</span><h2>مهارات عملية تفتح لك الطريق</h2><p class="detail-lead">صُمم هذا المسار ليمنحك قاعدة عملية واضحة، تبدأ من المفاهيم الأساسية وتصل إلى تطبيقات تشبه ما ستواجهه في بيئة العمل.</p><ul class="outcomes-list">${outcomes}</ul><div class="detail-modules"><span class="eyebrow"><i></i> محتوى المسار</span><h3>محاور التدريب</h3><ol>${modules}</ol></div></article><aside class="detail-aside"><div class="detail-facts"><div><span>مدة التدريب</span><strong>${specialization.duration}</strong></div><div><span>المستوى</span><strong>${specialization.level}</strong></div><div><span>الفئة</span><strong>${specialization.audience}</strong></div></div><div class="detail-register-card"><span class="detail-register-card__number">${specialization.number}</span><h3>مستعد للبدء؟</h3><p>ابدأ طلب التسجيل الآن، ثم جهّز وثائقك لإكمال الخطوات.</p><a class="button button--primary" href="/#steps">سجّل في هذا التخصص ↖</a><small>بيانات التسجيل الرسمية قيد الربط.</small></div></aside></div></div></section>
    <section class="detail-bottom-cta"><div class="container"><span class="eyebrow eyebrow--light"><i></i> خطوتك التالية</span><h2>المهارة تبدأ بقرار.</h2><a class="button button--light" href="/#steps">انتقل إلى التسجيل ↖</a></div></section>
  `, specialization.title);
};

const detailSlug = window.location.pathname.match(/^\/specializations\/([^/]+)\/?$/)?.[1];
const specialization = specializations.find((item) => item.slug === detailSlug);
if (specialization) renderDetailPage(specialization);

const header = document.querySelector<HTMLElement>(".site-header");
const menuButton = document.querySelector<HTMLButtonElement>(".mobile-menu-toggle");
const nav = document.querySelector<HTMLElement>(".main-nav");

window.addEventListener("scroll", () => header?.classList.toggle("site-header--scrolled", window.scrollY > 24), { passive: true });
menuButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("main-nav--open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});
document.querySelectorAll<HTMLAnchorElement>(".main-nav a").forEach((link) => link.addEventListener("click", () => {
  nav?.classList.remove("main-nav--open");
  menuButton?.setAttribute("aria-expanded", "false");
  if (menuButton) menuButton.textContent = "☰";
}));
document.querySelectorAll<HTMLButtonElement>(".faq-item button").forEach((button) => button.addEventListener("click", () => {
  const item = button.parentElement;
  const wasOpen = item?.classList.contains("faq-item--open") ?? false;
  document.querySelectorAll(".faq-item").forEach((faq) => faq.classList.remove("faq-item--open"));
  document.querySelectorAll<HTMLButtonElement>(".faq-item button").forEach((faqButton) => faqButton.setAttribute("aria-expanded", "false"));
  if (!wasOpen) { item?.classList.add("faq-item--open"); button.setAttribute("aria-expanded", "true"); }
}));
