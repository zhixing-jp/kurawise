import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// デザイン（/css/*.css）とスクリプト（/js/*.js）の読み込みに、ビルドごとに変わる印（?v=）を付ける（2026-10-23）。
// ファイル名が毎回同じなので、付けないとブラウザが前のデザインを使い続けることがある。
// ビルドが終わったあと、dist の全 HTML の該当部分だけを書き換える。
const ASSET_VERSION = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 12);
function assetVersion() {
  return {
    name: 'kurawise-asset-version',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        async function walk(d) {
          for (const e of await readdir(d, { withFileTypes: true })) {
            const p = join(d, e.name);
            if (e.isDirectory()) await walk(p);
            else if (e.name.endsWith('.html')) {
              const html = await readFile(p, 'utf-8');
              const out = html.replace(/((?:href|src)=["'])(\/(?:css|js)\/[A-Za-z0-9_.-]+\.(?:css|js))(["'])/g, `$1$2?v=${ASSET_VERSION}$3`);
              if (out !== html) await writeFile(p, out);
            }
          }
        }
        await walk(root);
      }
    }
  };
}


// 注：本项目的多语言路由是靠 src/pages/[lang]/ 下每个页面自己的 getStaticPaths()
// 手动实现的（配合 src/i18n/index.js 的 getLangFromUrl 等辅助函数），并没有使用
// Astro 内置的 i18n 路由 API（astro:i18n / Astro.currentLocale / getRelativeLocaleUrl）。
// 之前这里同时配置了 Astro 内置的 i18n.routing，会让 Astro 引擎自己也介入 /en/ /ja/
// 这类路径的路由解析，和手写的 [lang] 路由是两套互不知情、并行生效的机制，
// dev 模式下可能造成路由状态混淆（同一路径不同请求返回内容不一致）。
// 由于项目实际上没有使用任何内置 i18n API，这段配置本身是无用的历史遗留，直接移除。
export default defineConfig({
  site: 'https://kurawise.com',
  integrations: [sitemap({
    // 準備中・noindex のページはサイトマップから外す（暮らし＆お金の知恵は公開時にこの行から削除）
    filter: (page) => !['https://kurawise.com/kurashi/', 'https://kurawise.com/guides/', 'https://kurawise.com/guides/login/', 'https://kurawise.com/guides/my-purchases/', 'https://kurawise.com/download/'].includes(page)
  }), assetVersion()]
});