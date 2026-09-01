import Link from 'next/link';

const resources = [
  {
    title: '甜甜导航',
    desc: '精选学习、工作、娱乐、工具类优质网站导航，持续更新中，让好资源触手可及。',
    href: 'https://iosdh.cn',
    color: 'indigo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: '甜甜网盘',
    desc: '免费文件存储与分享服务，支持上传、下载和分享，注册即可使用。',
    href: 'https://pan.puaaa.cn',
    color: 'violet',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    title: '苹果证书',
    desc: 'iOS 应用签名证书服务，让未上架 App Store 的应用也能在 iPhone / iPad 上安装运行。',
    href: 'https://puaaa.cn/shop/10.html',
    color: 'pink',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: '大流量卡',
    desc: '正规运营商低月租大流量手机卡，免费包邮，线上办理，运营商直发。',
    href: 'https://172.lot-ml.com/ProductEn/Index/03607e34ea182d64',
    color: 'indigo',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: '微信交流群',
    desc: '加入用户交流群，第一时间获取资源更新通知和最新地址，与大家一起交流。',
    href: 'https://iosyyds.github.io/vxq/',
    color: 'violet',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: '邮箱备用通道',
    desc: '发送任意邮件到 yellowjiba@gmail.com，系统自动回复最新地址，失联时的救命稻草。',
    href: 'mailto:yellowjiba@gmail.com',
    color: 'pink',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const features = [
  { title: '完全免费', desc: '基础服务永久免费', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg> },
  { title: '持续更新', desc: '资源实时更新维护', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" /></svg> },
  { title: '安全可靠', desc: '精选优质资源', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg> },
  { title: '即点即用', desc: '无需注册直接使用', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.8"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg> },
  { title: '全端适配', desc: '手机电脑都能用', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg> },
  { title: '永不失联', desc: '多重备用渠道', icon: <svg viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg> },
];

export default function Home() {
  return (
    <>
      <div className="container">
        <section className="hero">
          <span className="hero-badge">
            <span className="pulse"></span>
            永久发布页 · 永不失联
          </span>
          <h1>
            免费实用资源<br />
            <span className="gradient-text">一站直达</span>
          </h1>
          <p>甜甜网精选导航、网盘、证书、流量卡等优质服务，基础功能永久免费，多重备用渠道确保你永远找得到我们。</p>
          <div className="hero-actions">
            <a href="#resources" className="btn btn-primary">
              浏览资源
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="mailto:yellowjiba@gmail.com" className="btn btn-secondary">获取最新地址</a>
          </div>
        </section>

        <section className="section" id="resources">
          <div className="section-header">
            <span className="section-tag">Resources</span>
            <h2>精选资源</h2>
            <p>每一项都经过精心筛选，安全、可靠、即点即用</p>
          </div>
          <div className="card-grid">
            {resources.map((r) => (
              <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer" className="resource-card">
                <div className="card-icon">{r.icon}</div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <span className="card-arrow">
                  点击进入
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10" /></svg>
                </span>
              </a>
            ))}
          </div>
        </section>

        <div className="notice-banner">
          <h3>为防止失联，请收藏本页</h3>
          <p>电脑端按 <strong>Ctrl+D</strong>（Mac 为 Command+D）将本站加入收藏夹；手机端在浏览器菜单中选择"添加到主屏幕"，像 APP 一样随时访问。</p>
          <p>如遇网站无法访问，发送任意邮件到 <a href="mailto:yellowjiba@gmail.com" className="email-link">yellowjiba@gmail.com</a>，系统将自动回复最新地址。</p>
        </div>

        <section className="section">
          <div className="section-header">
            <span className="section-tag">Why Us</span>
            <h2>为什么选择甜甜网</h2>
            <p>我们坚持免费、可靠、易用的原则</p>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-item">
                <div className="feature-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
