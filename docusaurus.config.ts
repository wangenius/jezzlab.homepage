import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "介子文档",
  tagline: "Jezz Docs",
  favicon: "img/icon.ico",
  url: "https://wangenius.github.io",
  baseUrl: "/gc_docs/",
  organizationName: "wangenius",
  projectName: "gc_docs",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    customThemes: [
      {
        theme: "@docusaurus/theme-classic",
        customCss: require.resolve("./src/css/custom.css"),
      },
    ],
    image: "img/icon.svg",
    navbar: {
      title: "介子文档",
      logo: {
        alt: "My Site Logo",
        src: "img/icon.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "文档",
        },
        { to: "/blog", label: "文章", position: "right" },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "产品",
          items: [
            {
              label: "Tutorial",
              to: "/docs/start",
            },
          ],
        },
        {
          title: "文档",
          items: [
            {
              label: "Tutorial",
              to: "/docs/start",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 创生语宙, Inc. Built with Docusaurus.`,
    },

    palette: {
      primary: {
        main: "#07f", // 主色调
      },
      secondary: {
        main: "#ff4081", // 次色调
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
