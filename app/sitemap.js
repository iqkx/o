export default function sitemap() {
  const baseUrl = 'https://iqkx.cn';
  const routes = ['', '/about', '/faq', '/help', '/privacy', '/terms'];
  const now = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
