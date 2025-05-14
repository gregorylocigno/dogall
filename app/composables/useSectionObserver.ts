import { ref, onMounted, onBeforeUnmount } from "vue";

export interface SectionObserverOptions {
  sectionSelector?: string;
  threshold?: number;
  rootMargin?: string;
  activeOffset?: number;
  debug?: boolean;
}

export function useSectionObserver(options: SectionObserverOptions = {}) {
  // Référence réactive pour stocker l'ID de la section actuellement active
  const activeSection = ref<string | null>(null);

  // Options par défaut avec un sélecteur qui cible n'importe quel élément avec les IDs spécifiés
  const {
    sectionSelector = "[id='home'], [id='vision'], [id='prices']",
    threshold = 0.5,
    rootMargin = "0px",
    activeOffset = 100,
    debug = false,
  } = options;

  // Fonction pour déterminer quelle section est la plus proche du point d'observation
  const updateActiveSection = () => {
    const sections = document.querySelectorAll(sectionSelector);
    if (!sections.length) {
      debug &&
        console.warn(
          "Aucune section trouvée avec le sélecteur:",
          sectionSelector
        );
      return;
    }

    let closestSection = null;
    let closestDistance = Infinity;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // Calculer la distance entre le haut de la section et le point d'offset
      const distance = Math.abs(rect.top - activeOffset);

      // Conserver la section avec la distance la plus faible
      if (distance < closestDistance) {
        closestDistance = distance;
        closestSection = section;
      }
    });

    // Mettre à jour la section active
    activeSection.value = closestSection?.id || null;
    debug && console.log("Section active:", activeSection.value);
  };

  onMounted(() => {
    // Attendre que le DOM soit complètement chargé avant d'initialiser l'observateur
    setTimeout(() => {
      const sections = document.querySelectorAll(sectionSelector);

      if (debug) {
        console.log(
          "Sections trouvées:",
          Array.from(sections)
            .map((s) => s.id)
            .join(", ")
        );
        if (sections.length === 0) {
          console.error(
            "AUCUNE SECTION TROUVÉE! Vérifiez vos IDs et sélecteurs"
          );
        }
      }

      // Ne rien faire si aucune section n'est trouvée
      if (sections.length === 0) return;

      // Créer l'observateur d'intersection
      const observer = new IntersectionObserver(
        (entries) => {
          // Si au moins une entrée est visible, mettre à jour la section active
          if (entries.some((entry) => entry.isIntersecting)) {
            updateActiveSection();
          }
        },
        {
          root: null, // Utiliser le viewport comme conteneur
          threshold, // Seuil de visibilité pour déclencher l'observateur
          rootMargin, // Marge autour du viewport (utile pour ajuster le header)
        }
      );

      // Observer toutes les sections trouvées
      sections.forEach((section) => {
        observer.observe(section);
      });

      // Ajouter un écouteur de défilement pour une mise à jour continue pendant le scroll
      window.addEventListener("scroll", updateActiveSection, { passive: true });

      // Initialiser l'état
      updateActiveSection();

      // Configuration du nettoyage lors du démontage du composant
      onBeforeUnmount(() => {
        observer.disconnect();
        window.removeEventListener("scroll", updateActiveSection);
      });
    }, 300); // Délai raisonnable pour que le DOM soit prêt
  });

  return { activeSection };
}
