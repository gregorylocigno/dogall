export default defineAppConfig({
  uiPro: {
    header: {
      slots: {
        root: "bg-default/75 border-none backdrop-blur h-(--ui-header-height) sticky top-0 z-50",
      },
    },
    pageGrid: {
      base: "relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-16",
    },
    pricingPlan: {
      slots: {
        featureTitle: "text-muted text-sm break-normal whitespace-normal",
        feature: "flex items-center gap-4 min-w-0",
        featureIcon: "text-xl",
      },
    },
    pageCTA: {
      variants: {
        variant: {
          soft: {
            root: "bg-accent-100",
          },
        },
      },
    },
    pageSection: {
      slots: {
        container: "lg:p-0",
        title:
          "text-3xl sm:text-4xl lg:text-4xl text-pretty tracking-tight font-bold text-highlighted",
      },
      variants: {
        orientation: {
          vertical: {
            headline: "justify-start",
            title: "text-left",
            description: "text-left text-wrap",
          },
        },
      },
    },
  },
  ui: {
    colors: {
      primary: "brand",
      accent: "accent",
    },
    button: {
      slots: {
        base: ["rounded-full cursor-pointer"],
      },
      variants: {
        size: {
          md: {
            base: "px-5",
          },
        },
      },
    },
    navigationMenu: {
      compoundVariants: [
        {
          orientation: "horizontal",
          highlight: true,
          class: {
            link: [
              "after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:block after:h-1.5 after:w-1.5 after:rounded-full",
              "after:transition-colors",
            ],
          },
        },
      ],
    },
  },
});
