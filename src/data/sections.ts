// 全站版块名称/入口URL的唯一数据源。
// 底部导航栏（Base.astro）、各版块页面的面包屑（经由 Breadcrumb.astro）都从这里取值，
// 以后要改版块名称，只需要改这一个文件。
//
// 注：label 是简体中文（zh）页面的面包屑用的名称。版块的正式名（6种语言，＝底部tab名）
// 以 src/data/sectionNames.ts 为准，这里的 label 与其中的 zh 保持一致（2026-10-23）。

import { SECTION_NAMES } from './sectionNames';

export interface SectionInfo {
  label: string;
  url: string;
}

export const SECTIONS: Record<'rescue' | 'medical' | 'career' | 'guides' | 'kurashi' | 'apps', SectionInfo> = {
  rescue:  { label: SECTION_NAMES.rescue.zh, url: '/' },
  medical: { label: SECTION_NAMES.medical.zh, url: '/medical/' },
  career:  { label: SECTION_NAMES.career.zh, url: '/career/' },
  // guides（专业指南）不再作为底部tab，只通过受诊/日语/转职三个版块的横幅进入
  guides:  { label: '专业指南', url: '/guides/' },
  // 暮らし＆お金の知恵（ST）版块：入口页 /kurashi/
  kurashi: { label: SECTION_NAMES.kurashi.zh, url: '/kurashi/' },
  // 应用版块：/apps/ 为应用一览，各应用的公开页为 /应用名/（如 /kuraphoto/）
  apps:    { label: SECTION_NAMES.apps.zh, url: '/apps/' }
};