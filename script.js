const animationFamilies = [
  {
    family: "Entrance",
    key: "fade",
    name: "Fade",
    property: "opacity",
    when: "softly introducing content without changing layout",
    note: "Opacity moves from low visibility to full visibility, so surrounding elements do not reflow.",
  },
  {
    family: "Entrance",
    key: "slide",
    name: "Slide",
    property: "transform: translateX",
    when: "revealing panels, cards, and navigation from one side",
    note: "Translate moves the painted layer horizontally while preserving the element's document position.",
  },
  {
    family: "Entrance",
    key: "lift",
    name: "Lift",
    property: "transform: translateY",
    when: "making cards feel like they rise into attention",
    note: "Vertical translation is useful for entry motion because it creates depth without layout shift.",
  },
  {
    family: "Emphasis",
    key: "scale",
    name: "Scale",
    property: "transform: scale",
    when: "emphasizing buttons, badges, thumbnails, or selected items",
    note: "Scale changes perceived size without changing the box model, so it is safer than width animation.",
  },
  {
    family: "Emphasis",
    key: "rotate",
    name: "Rotate",
    property: "transform: rotate",
    when: "showing change, refresh, direction, or playful state feedback",
    note: "Rotation works best in small angles unless the element is clearly decorative or icon-like.",
  },
  {
    family: "Depth",
    key: "flip",
    name: "Flip",
    property: "transform: rotateY",
    when: "turning cards, media tiles, or before-and-after states",
    note: "A 3D rotation communicates a side change; perspective should be set by the parent or transform.",
  },
  {
    family: "Depth",
    key: "blur",
    name: "Blur",
    property: "filter: blur",
    when: "moving focus away from secondary or departing content",
    note: "Filter animation is visually rich but can be heavier than transform, so keep it subtle.",
  },
  {
    family: "Emphasis",
    key: "glow",
    name: "Glow",
    property: "box-shadow",
    when: "drawing attention to a primary action or active object",
    note: "Glow animates shadow spread and opacity; use sparingly because large shadows can repaint.",
  },
  {
    family: "Utility",
    key: "pulse",
    name: "Pulse",
    property: "transform + opacity",
    when: "indicating live status, loading, or a temporary highlight",
    note: "A pulse combines scale and opacity, which reads as an object breathing or requesting attention.",
  },
  {
    family: "Text",
    key: "skew",
    name: "Skew",
    property: "transform: skewX",
    when: "adding editorial energy to labels or directional banners",
    note: "Skew tilts the element's coordinate system; small values keep text readable.",
  },
  {
    family: "Text",
    key: "clip",
    name: "Clip Reveal",
    property: "clip-path",
    when: "uncovering typography, image masks, and section headers",
    note: "Clip-path hides part of the painted layer, creating a mask reveal without changing layout.",
  },
  {
    family: "Emphasis",
    key: "bounce",
    name: "Bounce",
    property: "transform: translateY",
    when: "communicating elasticity after drag, drop, or invalid placement",
    note: "A bounce overshoots then settles, so it should be short and tied to a meaningful event.",
  },
  {
    family: "Emphasis",
    key: "swing",
    name: "Swing",
    property: "transform: rotate",
    when: "showing a hinged or pendulum-like reaction",
    note: "Alternating rotation around the center gives a swing; transform-origin can move the hinge point.",
  },
  {
    family: "Utility",
    key: "shake",
    name: "Shake",
    property: "transform: translateX",
    when: "communicating invalid input or failed action",
    note: "Shake uses quick side-to-side translation; reserve it for errors so it keeps meaning.",
  },
  {
    family: "Depth",
    key: "float",
    name: "Float",
    property: "transform: translate3d",
    when: "making decorative cards and previews feel suspended",
    note: "Translate3d can promote a layer on many browsers and helps create smooth floating motion.",
  },
  {
    family: "Entrance",
    key: "revealY",
    name: "Vertical Reveal",
    property: "transform + opacity",
    when: "revealing stacked content as it enters the viewport",
    note: "Combining upward motion with opacity gives a common scroll-reveal pattern.",
  },
  {
    family: "Entrance",
    key: "revealX",
    name: "Horizontal Reveal",
    property: "transform + opacity",
    when: "introducing side-by-side editorial layouts",
    note: "The element begins offset on the x-axis and becomes opaque as it reaches its final position.",
  },
  {
    family: "Depth",
    key: "perspective",
    name: "Perspective Tilt",
    property: "transform: perspective rotateX",
    when: "making dashboards, media, or cards feel spatial",
    note: "Perspective rotation simulates a plane tilting in 3D space; subtle values look premium.",
  },
  {
    family: "Text",
    key: "focus",
    name: "Focus Pull",
    property: "filter: blur + saturate",
    when: "transitioning image or text from background to focus",
    note: "Reducing blur and increasing saturation mimics a camera focus pull.",
  },
  {
    family: "Utility",
    key: "orbit",
    name: "Orbit",
    property: "transform: rotate translate",
    when: "showing loading, processing, or object relationship",
    note: "Orbit combines rotation with translation so an object moves around an implied center point.",
  },
];

const variants = [
  { label: "Soft", duration: "900ms", delay: "0ms", easing: "ease-out", accentA: "#2563eb", accentB: "#0891b2" },
  { label: "Crisp", duration: "520ms", delay: "80ms", easing: "cubic-bezier(.2,.8,.2,1)", accentA: "#18181b", accentB: "#71717a" },
  { label: "Elastic", duration: "1100ms", delay: "120ms", easing: "cubic-bezier(.34,1.56,.64,1)", accentA: "#e11d48", accentB: "#f97316" },
  { label: "Editorial", duration: "760ms", delay: "40ms", easing: "cubic-bezier(.16,1,.3,1)", accentA: "#047857", accentB: "#84cc16" },
  { label: "Cinematic", duration: "1400ms", delay: "180ms", easing: "cubic-bezier(.65,0,.35,1)", accentA: "#7c3aed", accentB: "#2563eb" },
  { label: "Micro", duration: "260ms", delay: "0ms", easing: "ease-out", accentA: "#b45309", accentB: "#eab308" },
];

const transitions = [
  ["Color Wash", "background-color, color", "Use for hover states where the action changes from neutral to primary.", "background-color 180ms ease, color 180ms ease", "none", "1", "none", "#18181b", "#fff", "#18181b", "none"],
  ["Border Brighten", "border-color", "Clarifies focus or selection without moving the component.", "border-color 180ms ease", "none", "1", "none", "#fff", "#09090b", "#2563eb", "none"],
  ["Shadow Lift", "box-shadow", "Suggests elevation for cards and popovers.", "box-shadow 220ms ease, transform 220ms cubic-bezier(.22,1,.36,1)", "translateY(-8px)", "1", "none", "#fff", "#09090b", "rgba(24,24,27,.1)", "0 22px 42px rgba(24,24,27,.18)"],
  ["Scale Select", "transform: scale", "Makes selected chips, thumbnails, and controls feel tactile.", "transform 180ms ease-out", "scale(1.06)", "1", "none", "#fff", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Fade Disable", "opacity", "Communicates unavailable controls without removing their layout space.", "opacity 180ms ease", "none", ".48", "none", "#fff", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Blur Away", "filter: blur", "Softens outgoing or background content.", "filter 240ms ease, opacity 240ms ease", "none", ".72", "blur(2px)", "#fff", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Slide Nudge", "transform: translateX", "Good for list rows that expose extra actions.", "transform 200ms cubic-bezier(.22,1,.36,1)", "translateX(14px)", "1", "none", "#fff", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Press Down", "transform: translateY", "Useful for active button feedback on pointer down.", "transform 120ms ease-out", "translateY(4px)", "1", "none", "#f4f4f5", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Icon Spin", "transform: rotate", "Indicates refresh, sync, or expanded state.", "transform 260ms ease-out", "rotate(90deg)", "1", "none", "#fff", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Panel Expand", "transform: scaleY", "A transform-based alternative to animating height.", "transform 240ms cubic-bezier(.22,1,.36,1)", "scaleY(1.12)", "1", "none", "#fff", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Saturation Pop", "filter: saturate", "Makes media previews feel active on hover.", "filter 220ms ease", "none", "1", "saturate(1.7)", "#fff", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Contrast Focus", "filter: contrast", "Adds focus to image or data cards without changing geometry.", "filter 220ms ease", "none", "1", "contrast(1.22)", "#fff", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Glass Reveal", "background-color, backdrop-filter", "Works for sticky navigation and overlays.", "background-color 220ms ease, backdrop-filter 220ms ease", "none", "1", "blur(8px)", "rgba(255,255,255,.72)", "#09090b", "rgba(255,255,255,.8)", "none"],
  ["Underline Grow", "box-shadow", "Simulates an underline expanding without adding extra markup.", "box-shadow 180ms ease", "none", "1", "none", "#fff", "#09090b", "#2563eb", "inset 0 -8px 0 rgba(37,99,235,.18)"],
  ["Route Fade", "opacity + translate", "Common for page and tab content transitions.", "opacity 240ms ease, transform 240ms ease", "translateY(-6px)", ".76", "none", "#fff", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Modal Rise", "translate + shadow", "Makes dialogs appear to move above the page.", "transform 260ms cubic-bezier(.16,1,.3,1), box-shadow 260ms ease", "translateY(-12px)", "1", "none", "#fff", "#09090b", "rgba(24,24,27,.12)", "0 30px 80px rgba(24,24,27,.24)"],
  ["Badge Fill", "background-color", "Signals active filters and selected segments.", "background-color 160ms ease, color 160ms ease", "none", "1", "none", "#2563eb", "#fff", "#2563eb", "none"],
  ["Warning Tint", "background-color, border-color", "Gives validation feedback without aggressive motion.", "background-color 180ms ease, border-color 180ms ease", "none", "1", "none", "#fff7ed", "#9a3412", "#fb923c", "none"],
  ["Success Tint", "background-color, border-color", "Confirms completion in forms and task rows.", "background-color 180ms ease, border-color 180ms ease", "none", "1", "none", "#ecfdf5", "#047857", "#34d399", "none"],
  ["Depth Tilt", "perspective rotateX", "Premium hover for media cards and dashboards.", "transform 260ms cubic-bezier(.22,1,.36,1)", "perspective(520px) rotateX(8deg)", "1", "none", "#fff", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Mask Hint", "clip-path", "Hints at hidden content by trimming the visible surface.", "clip-path 240ms ease", "none", "1", "none", "#fff", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Brightness Dim", "filter: brightness", "Ducks inactive media behind active controls.", "filter 220ms ease", "none", "1", "brightness(.78)", "#fff", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Spacing Feel", "transform only", "Creates apparent spacing without animating margin or gap.", "transform 220ms cubic-bezier(.22,1,.36,1)", "translateY(-4px) scale(.98)", "1", "none", "#fff", "#09090b", "rgba(24,24,27,.12)", "none"],
  ["Content Swap", "opacity + filter", "Useful when replacing one label, icon, or panel with another.", "opacity 180ms ease, filter 180ms ease", "none", ".64", "blur(1px)", "#18181b", "#fff", "#18181b", "0 18px 34px rgba(24,24,27,.18)"],
];

const animationGrid = document.querySelector("#animationGrid");
const transitionGrid = document.querySelector("#transitionGrid");
const animationSearch = document.querySelector("#animationSearch");
const detailPage = document.querySelector("#detailPage");
let activeFilter = "all";
let activeQuery = "";

const loadingDetails = [
  {
    id: 1,
    name: "Skeleton shimmer",
    className: "shimmer-load",
    property: "background-position + opacity",
    summary: "A skeleton reserves the exact media space, then a soft shimmer tells the visitor the image is still loading.",
    bestFor: "card grids, feeds, and product listings where many images may arrive at different times",
    risk: "Avoid using shimmer forever; stop it as soon as the image is loaded or failed.",
  },
  {
    id: 2,
    name: "Blur-up reveal",
    className: "blur-load",
    property: "filter: blur + transform + opacity",
    summary: "The image begins soft and slightly enlarged, then sharpens after the full image is decoded.",
    bestFor: "editorial imagery, blog covers, and photography-heavy layouts",
    risk: "Heavy blur on very large images can cost more paint time, so keep the transition short.",
  },
  {
    id: 3,
    name: "Dominant color plate",
    className: "color-load",
    property: "placeholder color + opacity",
    summary: "A color block approximates the final image mood before the pixels arrive.",
    bestFor: "image cards where you know or can compute a dominant color",
    risk: "The color should be close to the image palette, otherwise the reveal can feel like a flash.",
  },
  {
    id: 4,
    name: "Horizontal wipe",
    className: "wipe-load",
    property: "clip-path inset",
    summary: "The image is clipped until it loads, then the mask opens from one side.",
    bestFor: "premium feature rows, case studies, and architecture/product imagery",
    risk: "Use sparingly; strong directional reveals become noisy in dense grids.",
  },
  {
    id: 5,
    name: "Zoom settle",
    className: "zoom-load",
    property: "transform: scale + opacity",
    summary: "The image starts slightly zoomed and settles into its frame after loading.",
    bestFor: "large hero images and immersive media panels",
    risk: "Keep scale subtle so the image does not feel like a distracting zoom effect.",
  },
  {
    id: 6,
    name: "Grayscale to color",
    className: "grayscale-load",
    property: "filter: grayscale + opacity",
    summary: "The image appears muted first, then color returns after load.",
    bestFor: "premium galleries, portfolios, and editorial grids",
    risk: "Do not use it when color carries urgent meaning before the image is loaded.",
  },
  {
    id: 7,
    name: "Aperture open",
    className: "aperture-load",
    property: "clip-path circle",
    summary: "A circular mask expands from the center, creating a camera-like reveal.",
    bestFor: "featured media cards and special gallery moments",
    risk: "It is theatrical, so avoid applying it to every item in a feed.",
  },
  {
    id: 8,
    name: "Scanline reveal",
    className: "scan-load",
    property: "transform on overlay",
    summary: "A scan highlight moves across the placeholder while the image is pending.",
    bestFor: "technical dashboards, AI tools, and processing-heavy interfaces",
    risk: "Keep contrast low so it reads as loading feedback rather than an error.",
  },
  {
    id: 9,
    name: "Split curtain",
    className: "split-load",
    property: "transform on pseudo-elements",
    summary: "Two panels slide apart after the image is loaded.",
    bestFor: "case-study covers, premium launch pages, and hero gallery items",
    risk: "Too many curtain reveals make the page feel slower than it is.",
  },
  {
    id: 10,
    name: "Soft rise",
    className: "rise-load",
    property: "translateY + opacity",
    summary: "The loaded image fades in and rises a few pixels into place.",
    bestFor: "masonry grids, content cards, and lazy-loaded sections",
    risk: "Avoid large travel distance; this is a subtle loading finish, not a page transition.",
  },
  {
    id: 11,
    name: "Focus pull",
    className: "focus-load",
    property: "blur + saturation",
    summary: "The image resolves from soft focus to sharp focus, mimicking a camera lens.",
    bestFor: "lifestyle images, product photos, and textured scenes",
    risk: "Like blur-up, it can repaint; keep the image area constrained.",
  },
  {
    id: 12,
    name: "Frame build",
    className: "frame-load",
    property: "border scale + opacity",
    summary: "A frame draws around the image while loading, then the media fades through it.",
    bestFor: "branded hero art, product shots, and high-value visual assets",
    risk: "The frame should match the visual system and not compete with the image.",
  },
];

const animations = animationFamilies.flatMap((family, familyIndex) =>
  variants.map((variant, variantIndex) => ({
    ...family,
    ...variant,
    id: familyIndex * variants.length + variantIndex + 1,
    title: `${variant.label} ${family.name}`,
  })),
);

function renderAnimations() {
  const query = activeQuery.trim().toLowerCase();
  const filtered = animations.filter((item) => {
    const matchesFilter = activeFilter === "all" || item.family === activeFilter;
    const searchable = `${item.title} ${item.family} ${item.property} ${item.when} ${item.note}`.toLowerCase();
    return matchesFilter && (!query || searchable.includes(query));
  });

  animationGrid.innerHTML = filtered
    .map(
      (item) => `
        <article class="motion-card" data-detail-type="animation" data-detail-id="${item.id}" data-family="${item.family}" data-reveal role="link" tabindex="0" aria-label="Open details for ${item.title}" style="--demo-animation:${item.key}; --demo-delay:${item.delay}; --accent-a:${item.accentA}; --accent-b:${item.accentB};">
          <div class="card-meta"><span>${String(item.id).padStart(3, "0")}</span><span>${item.family}</span></div>
          <div class="demo-stage"><div class="demo-dot" style="animation-duration:${item.duration}; animation-timing-function:${item.easing};"></div></div>
          <h3>${item.title}</h3>
          <p>${item.note} Use it for ${item.when}.</p>
          <ul class="spec-list">
            <li><span>Property:</span> ${item.property}</li>
            <li><span>Duration:</span> ${item.duration}</li>
            <li><span>Easing:</span> ${item.easing}</li>
          </ul>
        </article>
      `,
    )
    .join("") || `<p class="empty-state" data-reveal>No matching animations found.</p>`;
  observeReveals();
  observeMotionScopes();
}

function renderTransitions() {
  transitionGrid.innerHTML = transitions
    .map(
      ([name, property, explanation, rule, transform, opacity, filter, bg, color, border, shadow], index) => `
        <article class="transition-card" data-detail-type="transition" data-detail-id="${index + 1}" data-reveal role="link" tabindex="0" aria-label="Open details for ${name}" style="--transition-rule:${rule}; --hover-transform:${transform}; --hover-opacity:${opacity}; --hover-filter:${filter}; --hover-bg:${bg}; --hover-color:${color}; --hover-border:${border}; --hover-shadow:${shadow};">
          <div class="card-meta"><span>${String(index + 1).padStart(2, "0")}</span><span>Transition</span></div>
          <div class="transition-surface"><div class="transition-demo">${name}</div></div>
          <h3>${name}</h3>
          <p>${explanation}</p>
          <ul class="spec-list">
            <li><span>Animates:</span> ${property}</li>
            <li><span>Rule:</span> ${rule}</li>
          </ul>
        </article>
      `,
    )
    .join("");
}

let revealObserver;
let motionObserver;
function observeReveals() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((item) => {
    revealObserver.observe(item);
  });
}

function observeMotionScopes() {
  if (motionObserver) motionObserver.disconnect();
  motionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("motion-inview", entry.isIntersecting);
      });
    },
    { rootMargin: "80px 0px", threshold: 0.08 },
  );

  document
    .querySelectorAll(".hero, .motion-card, .load-card, .laptop-story, .marquee-wrap, .detail-page")
    .forEach((item) => motionObserver.observe(item));
}

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderAnimations();
  });
});

animationSearch.addEventListener("input", () => {
  activeQuery = animationSearch.value;
  renderAnimations();
});

function updateScrollImages() {
  const viewport = window.innerHeight || 1;
  document.querySelectorAll(".sticky-image").forEach((image) => {
    const rect = image.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, 1 - rect.top / viewport));
    const shift = `${(progress - 0.5) * -42}px`;
    const scale = 1.12 - progress * 0.08;
    const mask = 12 - progress * 12;
    image.style.setProperty("--scroll-shift", shift);
    image.style.setProperty("--scroll-scale", scale.toFixed(3));
    image.style.setProperty("--mask-inset", `${Math.max(0, mask).toFixed(2)}%`);
  });
}

function updateLaptopStory() {
  const story = document.querySelector(".laptop-story");
  if (!story) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    story.querySelectorAll(".story-step").forEach((step, index) => {
      step.classList.toggle("is-active", index === 0);
    });
    return;
  }

  const rect = story.getBoundingClientRect();
  if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
  const travel = Math.max(1, rect.height - window.innerHeight);
  const progress = Math.min(1, Math.max(0, -rect.top / travel));
  const segment = (start, end) => Math.min(1, Math.max(0, (progress - start) / (end - start)));
  const openProgress = segment(0.12, 0.4);
  const internalProgress = segment(0.34, 0.54);
  const thermalProgress = segment(0.52, 0.7);
  const airProgress = segment(0.66, 0.9);

  story.style.setProperty("--story-progress", progress.toFixed(4));
  story.style.setProperty("--story-percent", `${(progress * 100).toFixed(2)}%`);
  story.style.setProperty("--lid-angle", `${(-84 + openProgress * 112).toFixed(2)}deg`);
  story.style.setProperty("--open-progress", openProgress.toFixed(4));
  story.style.setProperty("--keyboard-opacity", (1 - internalProgress).toFixed(4));
  story.style.setProperty("--internal-progress", internalProgress.toFixed(4));
  story.style.setProperty("--thermal-progress", thermalProgress.toFixed(4));
  story.style.setProperty("--air-progress", airProgress.toFixed(4));
  story.style.setProperty("--screen-opacity", (0.42 + openProgress * 0.58).toFixed(4));
  story.style.setProperty("--ring-one-scale", (0.38 + thermalProgress * 0.76).toFixed(4));
  story.style.setProperty("--ring-two-scale", (0.28 + thermalProgress * 0.9).toFixed(4));
  story.style.setProperty("--pipe-one-scale", (0.26 + airProgress * 0.74).toFixed(4));
  story.style.setProperty("--pipe-two-scale", (0.24 + airProgress * 0.76).toFixed(4));
  story.style.setProperty("--callout-open-y", `${(10 - openProgress * 10).toFixed(2)}px`);
  story.style.setProperty("--callout-thermal-y", `${(10 - thermalProgress * 10).toFixed(2)}px`);
  story.style.setProperty("--callout-air-y", `${(10 - airProgress * 10).toFixed(2)}px`);
  story.classList.toggle("story-air-active", airProgress > 0.04);

  const steps = [...story.querySelectorAll(".story-step")];
  const activeIndex = Math.min(steps.length - 1, Math.max(0, Math.round(progress * (steps.length - 1))));
  steps.forEach((step, index) => {
    step.classList.toggle("is-active", index === activeIndex);
  });
}

function observeImageLoads() {
  document.querySelectorAll(".load-preview").forEach((preview) => {
    const image = preview.querySelector("img");
    if (!image) return;

    const markLoaded = () => preview.classList.add("is-loaded");
    if (image.complete && image.naturalWidth > 0) {
      markLoaded();
      return;
    }

    image.addEventListener("load", markLoaded, { once: true });
    image.addEventListener("error", () => preview.classList.add("is-loaded", "has-error"), { once: true });
  });
}

function getTransitionDetail(id) {
  const item = transitions[id - 1];
  if (!item) return null;
  const [name, property, explanation, rule, transform, opacity, filter, bg, color, border, shadow] = item;
  return { id, name, property, explanation, rule, transform, opacity, filter, bg, color, border, shadow };
}

function getDetail(type, id) {
  if (type === "animation") return animations.find((item) => item.id === id);
  if (type === "transition") return getTransitionDetail(id);
  if (type === "loading") return loadingDetails.find((item) => item.id === id);
  return null;
}

function buildExamples(type, item) {
  if (type === "animation") {
    return [
      ["Navigation reveal", `Use ${item.title.toLowerCase()} when a menu, side panel, or dropdown enters the interface.`],
      ["Card grid entrance", `Apply it to cards with a small stagger so the grid feels organized instead of appearing all at once.`],
      ["Inline feedback", `Use the same motion at a smaller duration for badges, labels, or helper text that needs attention.`],
      ["Section storytelling", `Pair it with scroll reveal when ${item.when}, especially in editorial or product sections.`],
    ];
  }

  if (type === "transition") {
    return [
      ["Button state", `${item.name} can make hover, focus, or pressed states feel responsive without changing layout.`],
      ["Card interaction", `Use it on cards when the user needs a clear signal that the surface is clickable.`],
      ["Panel change", `Apply the rule during tabs, accordions, drawers, or content swaps so state changes feel connected.`],
      ["Accessibility note", `Keep the transition short and preserve visible focus so keyboard users still understand the current target.`],
    ];
  }

  return [
    ["Gallery thumbnail", `${item.name} works when images lazy-load below the fold and each tile needs a stable placeholder.`],
    ["Hero or feature image", `Use a slower version for a large visual where the reveal is part of the page's first impression.`],
    ["Media card", `Pair it with fixed aspect-ratio containers so text and buttons never jump while the image loads.`],
    ["Fallback state", `If loading fails, replace the animation with a readable unavailable state instead of leaving an empty frame.`],
  ];
}

function renderDetail(type, id) {
  const item = getDetail(type, id);
  if (!item) {
    location.hash = "#top";
    return;
  }

  const title = item.title || item.name;
  const property = item.property;
  const summary = item.note || item.explanation || item.summary;
  const bestFor = item.when || item.bestFor || "state changes that need clear visual feedback";
  const rule = item.easing || item.rule || item.property;
  const examples = buildExamples(type, item);

  const preview =
    type === "animation"
      ? `<div class="detail-demo animation-detail-demo" style="--demo-animation:${item.key}; --demo-delay:${item.delay}; --accent-a:${item.accentA}; --accent-b:${item.accentB};">
          <div class="demo-dot" style="animation-duration:${item.duration}; animation-timing-function:${item.easing};"></div>
        </div>`
      : type === "transition"
        ? `<div class="detail-demo transition-detail-demo" style="--transition-rule:${item.rule}; --hover-transform:${item.transform}; --hover-opacity:${item.opacity}; --hover-filter:${item.filter}; --hover-bg:${item.bg}; --hover-color:${item.color}; --hover-border:${item.border}; --hover-shadow:${item.shadow};">
            <div class="transition-demo">Hover this preview</div>
          </div>`
        : `<div class="detail-demo loading-detail-demo">
            <figure class="load-preview ${item.className} is-loaded">
              <img src="assets/motion-atlas-hero.png" alt="${item.name} detail preview" />
            </figure>
          </div>`;

  detailPage.innerHTML = `
    <div class="detail-shell">
      <a class="back-link" href="#${type === "loading" ? "image-loading" : `${type}s`}">Back to ${type === "loading" ? "image loading" : `${type}s`}</a>
      <div class="detail-hero">
        <div>
          <p class="section-kicker">${type === "loading" ? "Image loading animation" : type}</p>
          <h1>${title}</h1>
          <p class="detail-copy">${summary} Use it for ${bestFor}.</p>
        </div>
        ${preview}
      </div>
      <div class="detail-grid">
        <article class="detail-panel">
          <h2>How it works</h2>
          <p>The main animated property is <strong>${property}</strong>. This matters because motion should explain a state change without forcing the browser to recalculate layout on every frame.</p>
          <p>Recommended rule: <code>${rule}</code>. Keep the motion purposeful, short enough to feel responsive, and consistent with nearby components.</p>
        </article>
        <article class="detail-panel">
          <h2>When to use it</h2>
          <p>${bestFor}. It is strongest when the user can connect the movement to a clear cause, such as loading, entering, selecting, opening, closing, or confirming.</p>
          <p>${item.risk || "Avoid overusing it across every element on the screen; repeated motion lowers clarity and can feel distracting."}</p>
        </article>
      </div>
      <section class="detail-examples" aria-labelledby="exampleTitle">
        <h2 id="exampleTitle">Examples</h2>
        <div class="example-grid">
          ${examples
            .map(
              ([name, text], index) => `
                <article class="example-card">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${name}</h3>
                  <p>${text}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>
  `;

  document.body.classList.add("detail-mode");
  detailPage.hidden = false;
  observeImageLoads();
  observeMotionScopes();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeDetail() {
  document.body.classList.remove("detail-mode");
  detailPage.hidden = true;
  detailPage.innerHTML = "";
}

function handleRoute() {
  const match = location.hash.match(/^#detail\/(animation|transition|loading)\/(\d+)$/);
  if (!match) {
    closeDetail();
    return;
  }
  renderDetail(match[1], Number(match[2]));
}

function openDetailFromCard(card) {
  const { detailType, detailId } = card.dataset;
  if (!detailType || !detailId) return;
  location.hash = `#detail/${detailType}/${detailId}`;
}

function enhanceDetailLinks() {
  document.querySelectorAll(".load-card").forEach((card, index) => {
    const title = card.querySelector("h3")?.textContent || "image loading animation";
    card.dataset.detailType = "loading";
    card.dataset.detailId = String(index + 1);
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", `Open details for ${title}`);
    card.tabIndex = 0;
  });
}

document.addEventListener("click", (event) => {
  const card = event.target.closest("[data-detail-type][data-detail-id]");
  if (!card) return;
  openDetailFromCard(card);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-detail-type][data-detail-id]");
  if (!card) return;
  event.preventDefault();
  openDetailFromCard(card);
});

renderAnimations();
renderTransitions();
enhanceDetailLinks();
observeReveals();
observeMotionScopes();
observeImageLoads();
updateScrollImages();
updateLaptopStory();

document.querySelector("#animationCount").textContent = animations.length;
document.querySelector("#transitionCount").textContent = transitions.length;

window.addEventListener("scroll", () => {
  updateScrollImages();
  updateLaptopStory();
}, { passive: true });
window.addEventListener("resize", () => {
  updateScrollImages();
  updateLaptopStory();
});
window.addEventListener("hashchange", handleRoute);

const marquee = document.querySelector(".image-marquee");
if (marquee) marquee.innerHTML += marquee.innerHTML;
handleRoute();
