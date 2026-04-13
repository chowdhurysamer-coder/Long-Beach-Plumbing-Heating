// Long Beach Plumbing & Heating - small interactions

// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Smooth-scroll for in-page nav links (fallback for browsers
// without CSS smooth scrolling)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Subtle header shadow on scroll
const header = document.querySelector(".site-header");
const onScroll = () => {
  if (!header) return;
  if (window.scrollY > 10) {
    header.style.boxShadow = "0 4px 20px rgba(6, 26, 51, 0.35)";
  } else {
    header.style.boxShadow = "none";
  }
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
