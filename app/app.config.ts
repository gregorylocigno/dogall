export default defineAppConfig({
  uiPro: {
    prose: {
      h1: {
        base: "text-4xl font-bold text-gray-900 mb-6 mt-8",
      },
      h2: {
        base: "text-3xl font-semibold text-gray-800 mb-4 mt-8",
      },
      h3: {
        base: "text-2xl font-semibold text-gray-800 mb-3 mt-6",
      },
      p: {
        base: "text-lg text-gray-700 mb-4 leading-relaxed",
      },
      ul: {
        base: "list-disc list-inside mb-4 space-y-2",
      },
      li: {
        base: "text-lg text-gray-700 ml-4",
      },
      strong: {
        base: "font-semibold text-gray-900",
      },
      blockquote: {
        base: "border-l-4 border-primary-500 pl-4 italic text-gray-600 my-6",
      },
    },
    header: {
      slots: {
        root: "bg-default/75 border-none backdrop-blur h-(--ui-header-height) sticky top-0 z-50",
      },
    },
    pageGrid: {
      base: "relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-[2fr_1fr] gap-6",
    },
    pricingPlan: {
      slots: {
        featureTitle: "text-muted text-sm break-normal whitespace-normal",
        feature: "flex items-center gap-4 min-w-0",
        featureIcon: "text-xl",
      },
    },
    pageCTA: {
      slots: {
        root: "bg-accent-100",
        container:
          "flex flex-col lg:grid px-6 py-12 sm:px-12 sm:py-24 lg:px-16 lg:py-24 gap-8 sm:gap-16",
      },
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
        container:
          "flex flex-col lg:grid py-0 pt-16 sm:py-0 sm:pt-16 lg:py-0 lg:pt-16 gap-8 sm:gap-16",
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
          "2xl": {
            base: "text-3xl",
          },
        },
      },
      compoundVariants: [
        {
          size: "2xl",
          square: true,
          class: "p-2",
        },
      ],
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
