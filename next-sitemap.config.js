/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://kudoutai.vercel.app/', // ← あなたの本番URLを入れる
    generateRobotsTxt: true, // robots.txt も同時に生成
    sitemapSize: 7000, // ページ数が多い場合の分割設定
};
