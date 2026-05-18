const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");
const navLinks = [...document.querySelectorAll(".site-nav a[href^='#']")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

navToggle?.addEventListener("click", () => {
  const open = nav?.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(Boolean(open)));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const number = entry.target;
      const target = Number(number.dataset.count);
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        number.textContent = Math.floor(progress * target).toLocaleString("en-IN");
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      countObserver.unobserve(number);
    });
  },
  { threshold: 0.75 }
);

document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

const industryData = {
  construction: {
    label: "Construction",
    image: "assets/industry-construction.svg",
    problem: "Heavy construction equipment demands robust, high-force hydraulic systems.",
    solution:
      "Merlin provides heavy-duty hydraulic cylinders, high-flow power packs, and durable hose assemblies designed for excavators, cranes, and concrete pumps.",
    impact: "Reduced machine downtime by up to 40%; extended service intervals; enhanced operator safety."
  },
  agriculture: {
    label: "Agriculture",
    image: "assets/industry-agriculture.svg",
    problem: "Agricultural machinery needs compact, reliable hydraulics for dust, humidity, and vibration.",
    solution:
      "Lightweight, corrosion-resistant cylinders and compact power packs engineered for tractors, harvesters, and sprayers.",
    impact: "Improved implement efficiency by 30%; reduced maintenance costs; longer operational life."
  },
  manufacturing: {
    label: "Manufacturing",
    image: "assets/industry-manufacturing.svg",
    problem: "Industrial presses and assembly lines demand precise, repeatable hydraulic actuation.",
    solution:
      "Synchronised cylinder systems, precision control valves, and custom power packs integrated with PLC automation.",
    impact: "20% reduction in cycle time; zero-defect hydraulic operation; full automation compatibility."
  },
  automotive: {
    label: "Automotive",
    image: "assets/industry-automotive.svg",
    problem: "Stamping, lifting, and testing equipment requires consistent pressure control and fast response.",
    solution:
      "High-precision pumps, proportional control valves, and multi-axis cylinder systems for automotive tooling.",
    impact: "Cycle efficiency improved by 25%; product quality consistency achieved; meets OEM standards."
  }
};

document.querySelectorAll("[data-industry]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.industry;
    const data = industryData[key];
    if (!data) return;

    document.querySelectorAll("[data-industry]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    document.querySelector("[data-industry-image]").src = data.image;
    document.querySelector("[data-industry-label]").textContent = data.label;
    document.querySelector("[data-industry-problem]").textContent = data.problem;
    document.querySelector("[data-industry-solution]").textContent = data.solution;
    document.querySelector("[data-industry-impact]").textContent = data.impact;
  });
});

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const active = navLinks.find((link) => link.getAttribute("href") === `#${entry.target.id}`);
      navLinks.forEach((link) => link.classList.toggle("active", link === active));
    });
  },
  { rootMargin: "-38% 0px -58% 0px" }
);

sections.forEach((section) => activeObserver.observe(section));

window.addEventListener(
  "scroll",
  () => {
    document.documentElement.style.setProperty("--scroll", String(window.scrollY));
  },
  { passive: true }
);

document.querySelector(".enquiry-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  button.textContent = "Enquiry Ready";
  setTimeout(() => {
    button.textContent = "Send Enquiry";
  }, 1800);
});
