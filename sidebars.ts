import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/**
 * 配置sidebar的目录
 */
export default {
  sidebar: [
    {
      type: "autogenerated",
      dirName: ".", // 这会自动生成根目录下所有文档的侧边栏
    },
  ],
} satisfies SidebarsConfig;
