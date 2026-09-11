import "./index.css";

document.documentElement.lang = "ar";
document.documentElement.dir = "rtl";

const header = document.querySelector<HTMLElement>(".site-header");
const menuButton = document.querySelector<HTMLButtonElement>(".mobile-menu-toggle");
const nav = document.querySelector<HTMLElement>(".main-nav");

window.addEventListener("scroll", () => {
  header?.classList.toggle("site-header--scrolled", window.scrollY > 24);
}, { passive: true });

menuButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("main-nav--open") ?? false;
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll<HTMLAnchorElement>(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("main-nav--open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (menuButton) menuButton.textContent = "☰";
  });
});

document.querySelectorAll<HTMLButtonElement>(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const wasOpen = item?.classList.contains("faq-item--open") ?? false;

    document.querySelectorAll(".faq-item").forEach((faq) => faq.classList.remove("faq-item--open"));
    document.querySelectorAll<HTMLButtonElement>(".faq-item button").forEach((faqButton) => faqButton.setAttribute("aria-expanded", "false"));

    if (!wasOpen) {
      item?.classList.add("faq-item--open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});
