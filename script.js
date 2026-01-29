(() => {
  const root = document.documentElement;

  // ===== Theme =====
  const themeBtn = document.getElementById("themeBtn");
  const savedTheme = localStorage.getItem("jf_theme");
  if (savedTheme) root.setAttribute("data-theme", savedTheme);

  themeBtn?.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    localStorage.setItem("jf_theme", next);
  });

  // ===== Mobile nav =====
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileNav = document.getElementById("mobileNav");
  burgerBtn?.addEventListener("click", () => {
    const isHidden = mobileNav?.hasAttribute("hidden");
    if (!mobileNav) return;
    if (isHidden) mobileNav.removeAttribute("hidden");
    else mobileNav.setAttribute("hidden", "");
  });

  // Close mobile nav after click
  mobileNav?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => mobileNav.setAttribute("hidden", ""));
  });

  // ===== WhatsApp links =====
  const phoneRaw = "584128573499"; // no +, no spaces
  const waUrl = `https://wa.me/${phoneRaw}`;

  const waBtn = document.getElementById("waBtn");
  const waBtn2 = document.getElementById("waBtn2");
  const waLink = document.getElementById("waLink");

  [waBtn, waBtn2, waLink].forEach(el => {
    if (!el) return;
    el.setAttribute("href", waUrl);
    el.setAttribute("target", "_blank");
  });

  // ===== Copy =====
  const copyBtn = document.getElementById("copyBtn");
  const copyBox = document.getElementById("copyBox");
  copyBtn?.addEventListener("click", async () => {
    try{
      const text = copyBox?.textContent?.trim() || "";
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = "Copiado ✓";
      setTimeout(() => (copyBtn.textContent = "Copiar"), 1500);
    }catch(e){
      copyBtn.textContent = "No se pudo copiar";
      setTimeout(() => (copyBtn.textContent = "Copiar"), 1500);
    }
  });

  // ===== Year =====
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();