// ~/composables/useScrollSpy.ts
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useRoute } from "vue-router";

export function useScrollSpy(selector = "section[id]") {
  const activeSection = ref<string | null>(null);
  const stops: (() => void)[] = [];
  const route = useRoute();

  // fonction d'init / cleanup
  const initObservers = async () => {
    // 1) cleanup des anciens observers
    stops.forEach((stop) => stop());
    stops.length = 0;

    // 2) attendre que le DOM soit à jour
    await nextTick();

    // 3) (re)créer un observer par section
    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      const { stop } = useIntersectionObserver(
        el,
        ([{ isIntersecting }]) => {
          if (isIntersecting) activeSection.value = el.id;
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );
      stops.push(stop);
    });
  };

  onMounted(() => {
    if (route.path === "/") initObservers();
  });

  // à chaque navigation
  watch(
    () => route.path,
    (path) => {
      if (path === "/") {
        initObservers();
      } else {
        // on quitte /
        stops.forEach((stop) => stop());
        activeSection.value = null;
      }
    }
  );

  onBeforeUnmount(() => {
    stops.forEach((stop) => stop());
  });

  return { activeSection };
}
