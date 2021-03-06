import Animations from "../screens/guides/components/animations/docs";
import CustomComponents from "../screens/guides/components/custom-components/docs";
import DataAccessors from "../screens/guides/components/data-accessors/docs";
import Events from "../screens/guides/components/events/docs";
import Layout from "../screens/guides/components/layout/docs";
import CustomCharts from "../screens/guides/components/custom-charts/docs";
import Themes from "../screens/recipes/components/theme-park";
import Tooltips from "../screens/guides/components/tooltips/docs";
import PanZoom from "../screens/recipes/components/pan-and-zoom/docs";

export const configGuides = [
  {
    text: "Animations",
    slug: "animations",
    docs: Animations,
    editUrl: "/screens/guides/components/animations/ecology.md"
  },
  {
    text: "Custom Components",
    slug: "custom-components",
    docs: CustomComponents,
    editUrl: "/screens/guides/components/custom-components/ecology.md"
  }, {
    text: "Data Accessors",
    slug: "data-accessors",
    docs: DataAccessors,
    editUrl: "/screens/guides/components/data-accessors/ecology.md"
  }, {
    text: "Events",
    slug: "events",
    docs: Events,
    editUrl: "/screens/guides/components/events/ecology.md"
  }, {
    text: "Layout",
    slug: "layout",
    docs: Layout,
    editUrl: "/screens/guides/components/layout/ecology.md"
  }, {
    text: "Custom Charts",
    slug: "custom-charts",
    docs: CustomCharts,
    editUrl: "/screens/guides/components/custom-charts/ecology.md"
  }, {
    text: "Themes",
    slug: "themes",
    docs: Themes,
    editUrl: "/screens/recipes/components/theme-park/index.js"
  }, {
    text: "Tooltips",
    slug: "tooltips",
    docs: Tooltips,
    editUrl: "/screens/guides/components/tooltips/ecology.md"
  }, {
    text: "Pan and Zoom",
    slug: "pan-and-zoom",
    docs: PanZoom,
    category: "customize",
    editUrl: "/screens/recipes/components/pan-and-zoom/ecology.md"
  }
];
