import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WatercolorBg from '@/components/WatercolorBg';

export const metadata = {
  metadataBase: new URL('https://iqkx.cn'),
  title: {
    default: '甜甜网 - 免费实用资源导航 | 永久发布页 iqkx.cn',
    template: '%s | 甜甜网',
  },
  description: '甜甜网(iqkx.cn)是专注免费实用资源的导航平台，提供甜甜导航、甜甜网盘、苹果证书、大流量卡、微信交流群等优质服务，永久发布页确保永不失联。',
  keywords: ['甜甜网', '免费资源导航', '甜甜导航', '甜甜网盘', '苹果证书', '大流量卡', '免费网盘', 'iOS签名', '流量卡办理', '永久发布页', 'iqkx'],
  authors: [{ name: '甜甜网' }],
  creator: '甜甜网',
  publisher: '甜甜网',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://iqkx.cn/',
    siteName: '甜甜网',
    title: '甜甜网 - 免费实用资源导航 | 永久发布页',
    description: '甜甜网提供甜甜导航、甜甜网盘、苹果证书、大流量卡等免费实用资源，永久发布页确保永不失联。',
  },
  twitter: {
    card: 'summary_large_image',
    title: '甜甜网 - 免费实用资源导航',
    description: '免费实用资源导航平台，永久发布页确保永不失联。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export const viewport = {
  themeColor: '#faf8f5',
  width: 'device-width',
  initialScale: 1,
};

const jsonLdWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '甜甜网',
  url: 'https://iqkx.cn/',
  description: '免费实用资源导航平台，提供甜甜导航、甜甜网盘、苹果证书、大流量卡等服务',
  inLanguage: 'zh-CN',
  publisher: {
    '@type': 'Organization',
    name: '甜甜网',
    url: 'https://iqkx.cn/',
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '甜甜网是什么？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '甜甜网是一个免费资源导航平台，提供甜甜导航、甜甜网盘、苹果证书、大流量卡、微信交流群等实用资源。',
      },
    },
    {
      '@type': 'Question',
      name: '甜甜网的资源都是免费的吗？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '甜甜网的导航和网盘基础服务完全免费。苹果证书和流量卡属于第三方服务，具体费用以对应页面为准。',
      },
    },
    {
      '@type': 'Question',
      name: '网站打不开了怎么办？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '如果本页无法访问，可以发送任意邮件到 yellowjiba@gmail.com，系统会自动回复最新地址。也可以加入微信交流群获取最新动态。',
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍬</text></svg>" />
        <link rel="stylesheet" href="https://miaoda.feishu.cn/fonts/css2?family=Noto+Serif+SC:wght@300;400;600;700&family=Noto+Sans+SC:wght@300;400;500&display=swap" />
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7156604582462189" crossorigin="anonymous"></script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      </head>
      <body>
        <WatercolorBg />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
