// node_modules/vitepress/dist/client/theme-default/index.js
import "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/styles/fonts.css";

// node_modules/vitepress/dist/client/theme-default/without-fonts.js
import "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/styles/vars.css";
import "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/styles/base.css";
import "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/styles/utils.css";
import "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/styles/components/custom-block.css";
import "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/styles/components/vp-code.css";
import "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/styles/components/vp-code-group.css";
import "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/styles/components/vp-doc.css";
import "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/styles/components/vp-sponsor.css";
import VPBadge from "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/components/VPBadge.vue";
import Layout from "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/Layout.vue";
import { default as default2 } from "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue";
import { default as default3 } from "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue";
import { default as default4 } from "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue";
import { default as default5 } from "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue";
import { default as default6 } from "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue";
import { default as default7 } from "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue";
import { default as default8 } from "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue";
import { default as default9 } from "E:/workspace/cocoLib/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue";
var theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", VPBadge);
  }
};
var without_fonts_default = theme;
export {
  default5 as VPDocAsideSponsors,
  default3 as VPHomeFeatures,
  default2 as VPHomeHero,
  default4 as VPHomeSponsors,
  default9 as VPTeamMembers,
  default6 as VPTeamPage,
  default8 as VPTeamPageSection,
  default7 as VPTeamPageTitle,
  without_fonts_default as default
};
//# sourceMappingURL=@theme_index.js.map
