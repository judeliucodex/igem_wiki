// ════════════════════════════════════════════════
//  EDIT THESE TO CUSTOMIZE THE NAVBAR
// ════════════════════════════════════════════════

window.APP_TITLE = "HKSSC IGEM";

window.NAV_BG            = "#f7abf1";   // navbar background
window.NAV_BORDER        = "#f7abf1";   // navbar border (slightly darker than bg)
window.NAV_TEXT          = "#ebe8ea";   // nav link text
window.NAV_ACCENT        = "#ebe8ea";   // link hover border, progress bar
window.NAV_ACCENT_HOVER  = "#ebe8ea";   // accent hover variant
window.NAV_ACCENT_LIGHT  = "#ebe8ea";   // secondary accent
window.TITLE_COLOR       = "#ebe8ea";   // logo / title text
window.NAV_HOVER_BG      = "#ebe8ea";   // link / dropdown toggle hover bg

// Progress icon: 3-frame scroll-driven walk cycle (transparent PNGs)
window.PROGRESS_ICONS = [
  'frog1.png',
  'frog2.png',
  'frog3.png'
];
window.PROGRESS_STEP  = 340;          // scroll pixels before next frame (higher = slower)

// ════════════════════════════════════════════════
//  APPLY AS CSS VARIABLES (do not edit below)
// ════════════════════════════════════════════════

(function () {
  var root = document.documentElement;
  root.style.setProperty('--nav-bg',           window.NAV_BG);
  root.style.setProperty('--nav-border',       window.NAV_BORDER);
  root.style.setProperty('--nav-text',         window.NAV_TEXT);
  root.style.setProperty('--nav-accent',       window.NAV_ACCENT);
  root.style.setProperty('--nav-accent-hover', window.NAV_ACCENT_HOVER);
  root.style.setProperty('--nav-accent-light', window.NAV_ACCENT_LIGHT);
  root.style.setProperty('--nav-title',        window.TITLE_COLOR);
  root.style.setProperty('--nav-hover-bg',     window.NAV_HOVER_BG);
})();
