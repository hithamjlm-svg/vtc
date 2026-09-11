import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpLeft,
  ArrowUpRight,
  BadgeCheck,
  BellRing,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  ChevronLeft,
  Clock3,
  FileCheck2,
  HeartHandshake,
  Instagram,
  Laptop2,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRound,
  Wrench,
  X,
  Youtube,
} from "lucide-react";
import { benefits, faqs, news, steps, tracks } from "@/data/portalData";

const heroImage = "/manus-storage/vtc-middle-jordan-valley-hero_1649f223.jpg";
const logoImage = "/manus-storage/Hw5qy4eR6gFD_79b09863.jpg";

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className={`brand-mark ${compact ? "brand-mark--compact" : ""}`} aria-label="العودة إلى الرئيسية">
      <span className="brand-mark__logo">
        <img src={logoImage} alt="شعار مؤسسة التدريب المهني الأردنية" />
      </span>
      <span className="brand-mark__text">
        <strong>معهد الغور الأوسط</strong>
        <small>مؤسسة التدريب المهني الأردنية</small>
      </span>
    </a>
  );
}

function SectionIntro({ eyebrow, title, description, align = "right" }: { eyebrow: string; title: string; description?: string; align?: "right" | "center" }) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      <span className="eyebrow"><i />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portal-shell" dir="rtl">
      <div className="announcement-bar">
        <div className="container announcement-bar__inner">
          <span><BellRing size={15} /> بوابة التسجيل الإلكترونية — نسخة تجريبية قيد التطوير</span>
          <a href="#faq">الأسئلة الشائعة <ArrowLeft size={13} /></a>
        </div>
      </div>

      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="container site-header__inner">
          <BrandMark />
          <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="التنقل الرئيسي">
            <a href="#about" onClick={closeMenu}>عن المعهد</a>
            <a href="#tracks" onClick={closeMenu}>التخصصات</a>
            <a href="#steps" onClick={closeMenu}>شروط التسجيل</a>
            <a href="#documents" onClick={closeMenu}>الوثائق المطلوبة</a>
            <a href="#faq" onClick={closeMenu}>الأسئلة الشائعة</a>
            <a href="#contact" onClick={closeMenu}>اتصل بنا</a>
            <a href="#steps" className="nav-register" onClick={closeMenu}>سجّل الآن <ArrowUpLeft size={16} /></a>
          </nav>
          <button type="button" className="mobile-menu-toggle" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__image" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="hero__veil" />
          <div className="container hero__content">
            <div className="hero__copy animate-in">
              <span className="hero-kicker"><span className="hero-kicker__dot" /> فرصتك العملية تبدأ بخطوة</span>
              <h1>مستقبلك المهني<br /><em>يبدأ من هنا</em></h1>
              <p>اكتسب مهارة، طوّر قدراتك، وابدأ طريقك نحو مستقبل مهني أفضل.</p>
              <div className="hero__actions">
                <a className="button button--primary" href="#steps">سجّل الآن <ArrowUpLeft size={18} /></a>
                <a className="button button--ghost" href="#tracks"><Play size={17} fill="currentColor" /> استكشف التخصصات</a>
              </div>
              <div className="hero__microcopy"><ShieldCheck size={16} /> بيانات تجريبية — سيتم ربط التسجيل بالبيانات الرسمية لاحقًا</div>
            </div>
            <div className="hero__aside animate-in animate-in--delay">
              <div className="hero__aside-card">
                <span className="hero__aside-index">01</span>
                <div>
                  <span className="hero__aside-label">مسارات مهنية</span>
                  <strong>تعلّم. طبّق.<br />انطلق.</strong>
                </div>
                <ArrowUpRight size={20} />
              </div>
              <div className="hero__scroll-hint"><span>مرّر لاكتشاف المزيد</span><span className="hero__scroll-line" /></div>
            </div>
          </div>
          <div className="hero__bottom-edge" />
        </section>

        <section className="about-strip" id="about">
          <div className="container about-strip__grid">
            <div className="about-strip__statement">
              <span className="eyebrow eyebrow--light"><i /> بوابتك إلى المهارة</span>
              <h2>مهنة تعرفها.<br /><span>مهارة تبنيها.</span></h2>
            </div>
            <div className="about-strip__copy">
              <p>في معهد الغور الأوسط، نؤمن أن التدريب المهني ليس محطة مؤقتة، بل بداية لمسار يصنع فرقًا حقيقيًا في حياة الفرد والمجتمع.</p>
              <a href="#benefits" className="text-link">لماذا تختار المعهد؟ <ArrowLeft size={17} /></a>
            </div>
            <div className="about-strip__seal"><span>50</span><small>عامًا من<br />التدريب المهني</small></div>
          </div>
        </section>

        <section className="section section--tracks" id="tracks">
          <div className="container">
            <div className="section-heading-row">
              <SectionIntro eyebrow="مساراتك القادمة" title="تخصص يفتح لك بابًا" description="نماذج من المسارات المهنية التي يمكن أن تبدأ بها رحلتك. البرامج المعروضة تجريبية وليست قائمة اعتماد رسمية." />
              <a href="#steps" className="button button--outline">كيف أسجّل؟ <ArrowLeft size={16} /></a>
            </div>
            <div className="tracks-grid">
              {tracks.map((track, index) => (
                <article className={`track-card track-card--${track.tone} ${index === 0 ? "track-card--featured" : ""}`} key={track.title}>
                  <div className="track-card__top"><span className="track-card__number">0{index + 1}</span><span className="track-card__icon">{track.icon}</span></div>
                  <div className="track-card__body">
                    <span className="track-card__audience">{track.audience}</span>
                    <h3>{track.title}</h3>
                    <p>{track.description}</p>
                  </div>
                  <a href="#steps" className="track-card__link" aria-label={`سجّل في ${track.title}`}>اعرف المزيد <ArrowLeft size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--benefits" id="benefits">
          <div className="container">
            <div className="benefits-layout">
              <div className="benefits-heading">
                <SectionIntro eyebrow="لماذا نحن؟" title="أكثر من تدريب" description="نصنع تجربة تعلم عملية، قريبة من الناس، ومتصلة بما يحتاجه سوق العمل." />
                <div className="benefits-heading__note"><span>02</span><p>كل مهارة جديدة<br />تفتح احتمالًا جديدًا.</p></div>
              </div>
              <div className="benefits-grid">
                {benefits.map((benefit) => {
                  const Icon = { Wrench, TrendingUp, BadgeCheck, Building2, HeartHandshake, Sparkles }[benefit.icon as "Wrench"];
                  return <article className="benefit-card" key={benefit.title}><span className="benefit-card__icon"><Icon size={21} /></span><h3>{benefit.title}</h3><p>{benefit.description}</p><ArrowUpLeft className="benefit-card__arrow" size={17} /></article>;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="registration-section" id="steps">
          <div className="container">
            <div className="registration-head">
              <SectionIntro eyebrow="طريقك واضح" title="ست خطوات إلى بداية جديدة" description="صممنا رحلة التقديم لتكون مباشرة ومفهومة من أول اختيار حتى متابعة الطلب." />
              <span className="registration-head__mark">03</span>
            </div>
            <div className="steps-grid">
              {steps.map((step, index) => <article className="step-card" key={step.number}><span className="step-card__number">{step.number}</span><span className="step-card__connector" />{index === steps.length - 1 ? <FileCheck2 size={24} className="step-card__icon" /> : <Check size={22} className="step-card__icon" />}<h3>{step.title}</h3><p>{step.description}</p></article>)}
            </div>
            <div className="registration-note" id="documents"><div><ShieldCheck size={20} /><strong>جهّز وثائقك مبكرًا</strong></div><p>الهوية الشخصية، آخر مؤهل دراسي، وصورة شخصية — القائمة النهائية تعتمد على إعلان القبول الرسمي.</p><a href="#faq">اعرف المزيد <ArrowLeft size={15} /></a></div>
          </div>
        </section>

        <section className="stats-section" aria-label="إحصائيات تجريبية">
          <div className="container">
            <div className="stats-section__head"><span className="eyebrow eyebrow--light"><i /> صورة أولية بالأرقام</span><span className="demo-pill">DEMO DATA · بيانات تجريبية</span></div>
            <div className="stats-grid">
              {[{ value: "+500", label: "متدرب", icon: UserRound }, { value: "+10", label: "تخصصات", icon: BookOpen }, { value: "+100", label: "دورة تدريبية", icon: Laptop2 }, { value: "+80%", label: "تدريب عملي", icon: Wrench }].map(({ value, label, icon: Icon }) => <div className="stat-card" key={label}><Icon size={20} /><strong>{value}</strong><span>{label}</span></div>)}
            </div>
            <p className="stats-disclaimer">الأرقام أعلاه للعرض التجريبي فقط وليست أرقامًا رسمية.</p>
          </div>
        </section>

        <section className="section section--news" id="news">
          <div className="container">
            <div className="section-heading-row"><SectionIntro eyebrow="من أخبار المعهد" title="أفكار تحرّك مستقبلك" description="محتوى تجريبي يمكن استبداله لاحقًا بآخر الأخبار والإعلانات الرسمية." /><a href="#contact" className="text-link text-link--dark">كل الأخبار <ArrowLeft size={17} /></a></div>
            <div className="news-grid">
              {news.map((item, index) => <article className={`news-card news-card--${item.tone}`} key={item.title}><div className="news-card__visual"><span className="news-card__index">0{index + 1}</span><span className="news-card__visual-icon">{index === 0 ? <BookOpen /> : index === 1 ? <Wrench /> : <Laptop2 />}</span></div><div className="news-card__body"><div className="news-card__meta"><span>{item.category}</span><time>{item.date}</time></div><h3>{item.title}</h3><p>{item.description}</p><a href="#contact" className="text-link text-link--dark">اقرأ المزيد <ArrowLeft size={16} /></a></div></article>)}
            </div>
          </div>
        </section>

        <section className="section section--faq" id="faq">
          <div className="container faq-layout">
            <div className="faq-side"><SectionIntro eyebrow="نجيبك بوضوح" title="أسئلة في بالك؟" description="إجابات أولية تساعدك على فهم الرحلة. سيتم تحديث المحتوى عند إطلاق النظام الرسمي." /><div className="faq-side__contact"><span>هل لديك سؤال آخر؟</span><a href="#contact">تواصل مع فريق المعهد <ArrowLeft size={16} /></a></div></div>
            <div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "faq-item--open" : ""}`} key={faq.question}><button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}><span>{faq.question}</span><ChevronDown size={19} /></button>{openFaq === index && <div className="faq-answer"><p>{faq.answer}</p></div>}</div>)}</div>
          </div>
        </section>

        <section className="cta-section" id="contact">
          <div className="container cta-section__inner"><div className="cta-section__ornament" aria-hidden="true"><span>→</span></div><div><span className="eyebrow eyebrow--light"><i /> خطوتك الأولى</span><h2>جاهز لتبدأ<br /><em>مستقبلك المهني؟</em></h2></div><div className="cta-section__action"><p>لا تنتظر الفرصة. اصنعها بمهارة جديدة.</p><a className="button button--light" href="#steps">ابدأ التسجيل الآن <ArrowUpLeft size={18} /></a></div></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__top"><div className="site-footer__brand"><BrandMark compact /><p>بوابة رقمية تمهّد لرحلتك في التدريب المهني، وتقرّبك من المهارة التي تبحث عنها.</p><span className="footer-demo">واجهة تأسيسية · محتوى تجريبي</span></div><div className="site-footer__links"><div><h3>استكشف</h3><a href="#about">عن المعهد</a><a href="#tracks">التخصصات</a><a href="#steps">شروط التسجيل</a></div><div><h3>مساعدة</h3><a href="#documents">الوثائق المطلوبة</a><a href="#faq">الأسئلة الشائعة</a><a href="#contact">اتصل بنا</a></div><div><h3>تواصل</h3><a href="tel:+96265000000"><Phone size={15} /> 06 500 0000</a><a href="mailto:info@example.vtc.gov.jo"><Mail size={15} /> info@example.vtc.gov.jo</a><span><MapPin size={15} /> وادي الأردن، المملكة الأردنية الهاشمية</span></div></div></div>
        <div className="container site-footer__bottom"><span>© 2026 معهد الغور الأوسط — جميع الحقوق محفوظة</span><div className="social-links"><a href="#contact" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="#contact" aria-label="Instagram"><Instagram size={17} /></a><a href="#contact" aria-label="YouTube"><Youtube size={17} /></a></div><span>جزء من مؤسسة التدريب المهني الأردنية</span></div>
      </footer>
    </div>
  );
}

export default Home;
