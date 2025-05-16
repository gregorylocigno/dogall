// ~/composables/useScrollSpy.ts
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

/**
 * Scroll-spy : observe toutes les sections <section id="…">
 * @param selector par défaut 'section[id]'
 */
export function useScrollSpy(selector = "section[id]") {
  const activeSection = ref<string | null>(null);
  const stops: (() => void)[] = [];

  onMounted(async () => {
    // 1. Attendre que Nuxt ait rendu le DOM
    await nextTick();

    // 2. Récupérer toutes les sections
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(selector)
    );
    // 3. Observer chaque section
    sections.forEach((el) => {
      const stop = useIntersectionObserver(
        el,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            activeSection.value = el.id;
          }
        },
        {
          // quand l'élément atteint le centre de la fenêtre
          rootMargin: "-50% 0px -50% 0px",
          threshold: 0,
        }
      );
      stops.push(stop);
    });
  });

  onBeforeUnmount(() => {
    // Déconnecter tous les observers
    stops.forEach((stop) => stop());
  });

  return { activeSection };
}
