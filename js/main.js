const root = document.documentElement;
root.classList.add("js");

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const player = document.querySelector("[data-player]");
const heroLabel = document.querySelector("[data-hero-label]");
const nowPlaying = document.querySelector("[data-now-playing]");
const nowRelease = document.querySelector("[data-now-release]");
const playButtons = [...document.querySelectorAll(".js-play")];
const releases = [...document.querySelectorAll(".release")];

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const closeNav = () => {
  navToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
};

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("nav-open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeNav();
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

let isPlaying = false;

const setPlayerState = (active, track, release) => {
  isPlaying = active;
  player.classList.toggle("is-playing", active);

  if (track) {
    nowPlaying.textContent = track;
    nowRelease.textContent = release;
  }

  playButtons.forEach((button) => {
    const isCurrent = button.dataset.track === track;
    button.setAttribute("aria-pressed", String(active && isCurrent));
  });

  releases.forEach((card) => {
    card.classList.toggle("is-playing", active && card.dataset.track === track);
  });

  if (heroLabel) {
    heroLabel.textContent = active && track === "Midnight Static" ? "Pause" : "Listen now";
  }
};

playButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const { track, release } = button.dataset;
    const isCurrent = button.dataset.track === nowPlaying.textContent;
    const isActive = isPlaying && isCurrent;

    if (isActive) {
      setPlayerState(false, track, release);
    } else {
      setPlayerState(true, track, release);
      if (window.innerWidth <= 720) {
        player.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  });
});

const form = document.querySelector("[data-form]");
const formNote = document.querySelector("[data-form-note]");

if (form && formNote) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    formNote.textContent = name
      ? `Thanks, ${name} — your message is on its way.`
      : "Thanks — your message is on its way.";
    form.reset();

    window.clearTimeout(form.noteTimer);
    form.noteTimer = window.setTimeout(() => {
      formNote.textContent = "";
    }, 6000);
  });
}

document.querySelectorAll("[data-year]").forEach((year) => {
  year.textContent = new Date().getFullYear();
});
