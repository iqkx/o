import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4>甜甜网</h4>
            <p>免费实用资源导航平台，提供甜甜导航、甜甜网盘、苹果证书、大流量卡等优质服务。永久发布页，确保永不失联。</p>
          </div>
          <div className="footer-col">
            <h5>快速导航</h5>
            <Link href="/">首页</Link>
            <Link href="/about">关于我们</Link>
            <Link href="/faq">常见问题</Link>
            <Link href="/help">使用帮助</Link>
          </div>
          <div className="footer-col">
            <h5>资源入口</h5>
            <a href="https://iosdh.cn" target="_blank" rel="noopener noreferrer">甜甜导航</a>
            <a href="https://pan.puaaa.cn" target="_blank" rel="noopener noreferrer">甜甜网盘</a>
            <a href="https://puaaa.cn/shop/10.html" target="_blank" rel="noopener noreferrer">苹果证书</a>
            <a href="https://172.lot-ml.com/ProductEn/Index/03607e34ea182d64" target="_blank" rel="noopener noreferrer">大流量卡</a>
          </div>
          <div className="footer-col">
            <h5>联系与支持</h5>
            <a href="mailto:yellowjiba@gmail.com">邮箱联系</a>
            <a href="https://iosyyds.github.io/vxq/" target="_blank" rel="noopener noreferrer">微信交流群</a>
            <Link href="/privacy">隐私政策</Link>
            <Link href="/terms">服务条款</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024-2026 甜甜网 iqkx.cn · 永久发布页 · 收藏本页永不失联</p>
        </div>
      </div>
    </footer>
  );
}
