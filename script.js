const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("open");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  observer.observe(element);
});

const form = document.querySelector("#eoi-form");
const formNote = document.querySelector("#form-note");

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const org = String(data.get("org") || "").trim();
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const interest = String(data.get("interest") || "").trim();

    if (!org || !name || !email || !interest) {
      formNote.textContent = "Please complete all fields before sending your EOI.";
      return;
    }

    const subject = encodeURIComponent(`EOI - ${org}`);
    const body = encodeURIComponent(
      `Club/Organisation: ${org}\nContact: ${name}\nEmail: ${email}\n\nInterest:\n${interest}`
    );

    window.location.href = `mailto:hello@yardfootballcreative.com?subject=${subject}&body=${body}`;
    formNote.textContent = "Your mail app is opening now. If needed, email hello@yardfootballcreative.com directly.";
    form.reset();
  });
}
