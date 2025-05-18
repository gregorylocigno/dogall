// ── app/router.options.ts ──
import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // 1) Si on navigue en arrière
    if (savedPosition) {
      return savedPosition;
    }
    // 2) Si on a un hash, on scroll vers l’élément
    if (to.hash) {
      return {
        // le sélecteur de l’ancre
        el: to.hash,
        // top-offset si tu as un header fixe
        top: 96,
        behavior: "smooth",
      };
    }
    // 3) sinon en haut de page
    return { left: 0, top: 0 };
  },
};
