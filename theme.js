// ════════════════════════════════════════════════
//  EDIT THESE TO CUSTOMIZE THE NAVBAR
// ════════════════════════════════════════════════

window.APP_TITLE = "HKSSC IGEM";

window.NAV_BG            = "#db84b5";   // navbar background
window.NAV_BORDER        = "#e4dcc0";   // navbar border (slightly darker than bg)
window.NAV_TEXT          = "#ffffff";   // nav link text
window.NAV_ACCENT        = "#ff9140";   // link hover border, progress bar
window.NAV_ACCENT_HOVER  = "#ef7919";   // accent hover variant
window.NAV_ACCENT_LIGHT  = "#ffc053";   // secondary accent
window.TITLE_COLOR       = "#379139";   // logo / title text
window.NAV_HOVER_BG      = "#ffffff";   // link / dropdown toggle hover bg

// Progress icon: 4-frame scroll-driven animation
// TEST IMAGES — replace with your own when ready
window.PROGRESS_ICONS = [
  'https://placehold.co/48x48/ff9140/faf2dD?text=1',
  'https://placehold.co/48x48/ef7919/faf2dD?text=2',
  'https://placehold.co/48x48/ffc053/faf2dD?text=3',
  'https://placehold.co/48x48/045c32/faf2dD?text=4'
];
window.PROGRESS_STEP  = 170;          // scroll pixels before next frame

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
