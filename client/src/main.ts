import "./index.css";

const tracks = [
  ["▦", "مدخل بيانات", "للإناث فقط", "أساسيات الحاسوب، تنظيم البيانات، ومهارات العمل المكتبي الحديثة."],
  ["☼", "الطاقة الشمسية", "للإناث والذكور", "تعرّف إلى تقنيات الطاقة المتجددة وتركيب الأنظمة الشمسية وصيانتها."],
  ["⚙", "ميكانيك مركبات", "للإناث والذكور", "تدريب عملي على الفحص الدوري، المحركات، وأنظمة المركبات الأساسية."],
  ["ϟ", "كهرباء مركبات", "للإناث والذكور", "تشخيص الدوائر الكهربائية وأنظمة التشغيل والإضاءة في المركبات."],
  ["⌁", "تمديدات كهرباء منزلية", "للإناث والذكور", "مهارات التمديدات الآمنة وقراءة المخططات وتنفيذ الأعمال الكهربائية."],
  ["◒", "تجليس ودهان المركبات", "للذكور فقط", "تقنيات تجهيز الأسطح، معالجة الأضرار، والدهان الاحترافي للمركبات."],
];

const benefits = [
  ["🔧", "تدريب عملي", "تعلم بالممارسة داخل بيئة تضع المهارة أولًا."],
  ["↗", "مهارات سوق العمل", "طوّر قدرات قابلة للتطبيق في مهن متنوعة."],
  ["✓", "مدربون متخصصون", "إرشاد من خبرات تعرف واقع المهنة."],
  ["▣", "بيئة حديثة", "مساحات تدريب مصممة لتشبه موقع العمل."],
  ["♡", "خدمة المجتمع", "فرص تعلم أقرب إلى احتياجات وادي الأردن."],
  ["✦", "تطور مستمر", "خطوة عملية نحو ثقة ومهارة ومستقبل أفضل."],
];

const steps = ["اختيار التخصص", "تعبئة الطلب", "رفع الوثائق", "مراجعة الطلب", "إرسال الطلب", "متابعة الحالة"];
const faqs = [
  ["هل التخصصات المعروضة متاحة حاليًا في المعهد؟", "هذه التخصصات معروضة كنماذج تجريبية لتوضيح شكل البوابة فقط، ولا تمثل قائمة البرامج المتاحة فعليًا."],
  ["ما الوثائق المطلوبة للتسجيل؟", "عادةً تتضمن الوثائق الهوية الشخصية، آخر مؤهل دراسي، وصورة شخصية. يرجى متابعة إعلان القبول الرسمي."],
  ["هل يمكنني متابعة حالة طلبي إلكترونيًا؟", "نعم، صُممت البوابة لتتيح متابعة حالة الطلب بعد الإرسال باستخدام رقم المتابعة."],
  ["هل التدريب عملي بالكامل؟", "تعتمد البرامج المهنية على التوازن بين المعرفة النظرية والتطبيق العملي داخل الورش والمشاغل."],
];

const trackMarkup = tracks.map((track, i) => `<article class="track-card ${i === 0 ? "track-card--featured" : ""}"><div class="track-card__top"><span class="track-card__number">0${i + 1}</span><span class="track-card__icon">${track[0]}</span></div><div class="track-card__body"><span class="track-card__audience">${track[2]}</span><h3>${track[1]}</h3><p>${track[3]}</p></div><a href="#steps" class="track-card__link">اعرف المزيد <span>←</span></a></article>`).join("");
const benefitMarkup = benefits.map((b) => `<article class="benefit-card"><span class="benefit-card__icon">${b[0]}</span><h3>${b[1]}</h3><p>${b[2]}</p><span class="benefit-card__arrow">↖</span></article>`).join("");
const stepMarkup = steps.map((step, i) => `<article class="step-card"><span class="step-card__number">0${i + 1}</span><span class="step-card__connector"></span><span class="step-card__icon">${i === 5 ? "✓" : "＋"}</span><h3>${step}</h3><p>${["تعرّف إلى المسارات واختر ما يناسبك.", "أدخل بياناتك الأساسية بدقة.", "أرفق المستندات المطلوبة بسهولة.", "يتحقق الفريق من اكتمال البيانات.", "أرسل طلبك واستلم رقم المتابعة.", "تابع مستجدات طلبك إلكترونيًا."][i]}</p></article>`).join("");
const faqMarkup = faqs.map((faq, i) => `<div class="faq-item ${i === 0 ? "faq-item--open" : ""}"><button type="button" aria-expanded="${i === 0}"><span>${faq[0]}</span><span class="faq-chevron">⌄</span></button><div class="faq-answer"><p>${faq[1]}</p></div></div>`).join("");

document.documentElement.lang = "ar";
document.documentElement.dir = "rtl";
document.title = "بوابة التسجيل الإلكترونية | معهد الغور الأوسط";

document.querySelector<HTMLDivElement>("#root")!.innerHTML = `
<div class="portal-shell" dir="rtl">
  <div class="announcement-bar"><div class="container announcement-bar__inner"><span>◉ بوابة التسجيل الإلكترونية — نسخة تجريبية قيد التطوير</span><a href="#faq">الأسئلة الشائعة ←</a></div></div>
  <header class="site-header"><div class="container site-header__inner"><a href="#home" class="brand-mark"><span class="brand-mark__logo"><img src="/manus-storage/Hw5qy4eR6gFD_79b09863.jpg" alt="شعار مؤسسة التدريب المهني الأردنية"></span><span class="brand-mark__text"><strong>معهد الغور الأوسط</strong><small>مؤسسة التدريب المهني الأردنية</small></span></a><button class="mobile-menu-toggle" aria-label="فتح القائمة">☰</button><nav class="main-nav"><a href="#about">عن المعهد</a><a href="#tracks">التخصصات</a><a href="#steps">شروط التسجيل</a><a href="#documents">الوثائق المطلوبة</a><a href="#faq">الأسئلة الشائعة</a><a href="#contact">اتصل بنا</a><a class="nav-register" href="#steps">سجّل الآن ↖</a></nav></div></header>
  <main>
    <section class="hero" id="home"><div class="hero__image"></div><div class="hero__veil"></div><div class="container hero__content"><div class="hero__copy animate-in"><span class="hero-kicker"><span class="hero-kicker__dot"></span> فرصتك العملية تبدأ بخطوة</span><h1>مستقبلك المهني<br><em>يبدأ من هنا</em></h1><p>اكتسب مهارة، طوّر قدراتك، وابدأ طريقك نحو مستقبل مهني أفضل.</p><div class="hero__actions"><a class="button button--primary" href="#steps">سجّل الآن ↖</a><a class="button button--ghost" href="#tracks">▶ استكشف التخصصات</a></div><div class="hero__microcopy">✓ بيانات تجريبية — سيتم ربط التسجيل بالبيانات الرسمية لاحقًا</div></div><div class="hero__aside"><div class="hero__aside-card"><span class="hero__aside-index">01</span><strong>تعلّم. طبّق.<br>انطلق.</strong></div></div></div><div class="hero__bottom-edge"></div></section>
    <section class="about-strip" id="about"><div class="container about-strip__grid"><div class="about-strip__statement"><span class="eyebrow eyebrow--light"><i></i> بوابتك إلى المهارة</span><h2>مهنة تعرفها.<br><span>مهارة تبنيها.</span></h2></div><div class="about-strip__copy"><p>في معهد الغور الأوسط، نؤمن أن التدريب المهني ليس محطة مؤقتة، بل بداية لمسار يصنع فرقًا حقيقيًا في حياة الفرد والمجتمع.</p><a href="#benefits" class="text-link">لماذا تختار المعهد؟ ←</a></div><div class="about-strip__seal"><span>50</span><small>عامًا من<br>التدريب المهني</small></div></div></section>
    <section class="section section--tracks" id="tracks"><div class="container"><div class="section-heading-row"><div class="section-intro"><span class="eyebrow"><i></i> مساراتك القادمة</span><h2>تخصص يفتح لك بابًا</h2><p>نماذج من المسارات المهنية التي يمكن أن تبدأ بها رحلتك. البرامج المعروضة تجريبية وليست قائمة اعتماد رسمية.</p></div><a href="#steps" class="button button--outline">كيف أسجّل؟ ←</a></div><div class="tracks-grid">${trackMarkup}</div></div></section>
    <section class="section section--benefits" id="benefits"><div class="container"><div class="benefits-layout"><div class="benefits-heading"><div class="section-intro"><span class="eyebrow"><i></i> لماذا نحن؟</span><h2>أكثر من تدريب</h2><p>نصنع تجربة تعلم عملية، قريبة من الناس، ومتصلة بما يحتاجه سوق العمل.</p></div><div class="benefits-heading__note"><span>02</span><p>كل مهارة جديدة<br>تفتح احتمالًا جديدًا.</p></div></div><div class="benefits-grid">${benefitMarkup}</div></div></div></section>
    <section class="registration-section" id="steps"><div class="container"><div class="registration-head"><div class="section-intro"><span class="eyebrow eyebrow--light"><i></i> طريقك واضح</span><h2>ست خطوات إلى بداية جديدة</h2><p>صممنا رحلة التقديم لتكون مباشرة ومفهومة من أول اختيار حتى متابعة الطلب.</p></div><span class="registration-head__mark">03</span></div><div class="steps-grid">${stepMarkup}</div><div class="registration-note" id="documents"><strong>✓ جهّز وثائقك مبكرًا</strong><p>الهوية الشخصية، آخر مؤهل دراسي، وصورة شخصية — القائمة النهائية تعتمد على إعلان القبول الرسمي.</p><a href="#faq">اعرف المزيد ←</a></div></div></section>
    <section class="stats-section"><div class="container"><div class="stats-section__head"><span class="eyebrow eyebrow--light"><i></i> صورة أولية بالأرقام</span><span class="demo-pill">DEMO DATA · بيانات تجريبية</span></div><div class="stats-grid"><div class="stat-card"><strong>+500</strong><span>متدرب</span></div><div class="stat-card"><strong>+10</strong><span>تخصصات</span></div><div class="stat-card"><strong>+100</strong><span>دورة تدريبية</span></div><div class="stat-card"><strong>+80%</strong><span>تدريب عملي</span></div></div><p class="stats-disclaimer">الأرقام أعلاه للعرض التجريبي فقط وليست أرقامًا رسمية.</p></div></section>
    <section class="section section--faq" id="faq"><div class="container faq-layout"><div class="faq-side"><div class="section-intro"><span class="eyebrow"><i></i> نجيبك بوضوح</span><h2>أسئلة في بالك؟</h2><p>إجابات أولية تساعدك على فهم الرحلة. سيتم تحديث المحتوى عند إطلاق النظام الرسمي.</p></div><div class="faq-side__contact"><span>هل لديك سؤال آخر؟</span><a href="#contact">تواصل مع فريق المعهد ←</a></div></div><div class="faq-list">${faqMarkup}</div></div></section>
    <section class="cta-section" id="contact"><div class="container cta-section__inner"><div class="cta-section__ornament">→</div><div><span class="eyebrow eyebrow--light"><i></i> خطوتك الأولى</span><h2>جاهز لتبدأ<br><em>مستقبلك المهني؟</em></h2></div><div class="cta-section__action"><p>لا تنتظر الفرصة. اصنعها بمهارة جديدة.</p><a class="button button--light" href="#steps">ابدأ التسجيل الآن ↖</a></div></div></section>
  </main>
  <footer class="site-footer"><div class="container site-footer__top"><div class="site-footer__brand"><a href="#home" class="brand-mark"><span class="brand-mark__logo"><img src="/manus-storage/Hw5qy4eR6gFD_79b09863.jpg" alt="شعار مؤسسة التدريب المهني الأردنية"></span><span class="brand-mark__text"><strong>معهد الغور الأوسط</strong><small>مؤسسة التدريب المهني الأردنية</small></span></a><p>بوابة رقمية تمهّد لرحلتك في التدريب المهني، وتقرّبك من المهارة التي تبحث عنها.</p><span class="footer-demo">واجهة تأسيسية · محتوى تجريبي</span></div><div class="site-footer__links"><div><h3>استكشف</h3><a href="#about">عن المعهد</a><a href="#tracks">التخصصات</a><a href="#steps">شروط التسجيل</a></div><div><h3>مساعدة</h3><a href="#documents">الوثائق المطلوبة</a><a href="#faq">الأسئلة الشائعة</a><a href="#contact">اتصل بنا</a></div><div><h3>تواصل</h3><a href="tel:+96265000000">06 500 0000</a><a href="mailto:info@example.vtc.gov.jo">info@example.vtc.gov.jo</a><span>وادي الأردن، المملكة الأردنية الهاشمية</span></div></div></div><div class="container site-footer__bottom"><span>© 2026 معهد الغور الأوسط — جميع الحقوق محفوظة</span><span>جزء من مؤسسة التدريب المهني الأردنية</span></div></footer>
</div>`;

document.querySelector(".hero__image")?.setAttribute("style", "background-image:url('/manus-storage/vtc-middle-jordan-valley-hero_1649f223.jpg')");
const header = document.querySelector<HTMLElement>(".site-header");
window.addEventListener("scroll", () => header?.classList.toggle("site-header--scrolled", window.scrollY > 24));
document.querySelector(".mobile-menu-toggle")?.addEventListener("click", () => document.querySelector(".main-nav")?.classList.toggle("main-nav--open"));
document.querySelectorAll<HTMLButtonElement>(".faq-item button").forEach((button) => button.addEventListener("click", () => {
  const item = button.parentElement;
  const wasOpen = item?.classList.contains("faq-item--open");
  document.querySelectorAll(".faq-item").forEach((faq) => faq.classList.remove("faq-item--open"));
  document.querySelectorAll(".faq-item button").forEach((faqButton) => faqButton.setAttribute("aria-expanded", "false"));
  if (!wasOpen) { item?.classList.add("faq-item--open"); button.setAttribute("aria-expanded", "true"); }
}));
document.querySelectorAll<HTMLAnchorElement>(".main-nav a").forEach((link) => link.addEventListener("click", () => document.querySelector(".main-nav")?.classList.remove("main-nav--open")));
