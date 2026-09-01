export const metadata = {
  title: '关于我们',
  description: '甜甜网(iqkx.cn)是专注免费实用资源的导航平台，致力于让优质资源触手可及。',
  alternates: { canonical: '/about/' },
};

export default function About() {
  return (
    <div className="container">
      <div className="page-hero">
        <h1>关于<span className="gradient-text">甜甜网</span></h1>
        <p>用免费实用的资源，服务每一位用户</p>
      </div>
      <div className="content-card">
        <h2>我们是谁</h2>
        <p>甜甜网（iqkx.cn）是一个专注于免费实用资源的导航平台。我们深知互联网上优质资源分散、难找，因此致力于将各类实用服务整合到一个平台，让用户能够快速、便捷地获取所需资源。</p>
        <p>从网站导航到网盘存储，从 iOS 证书到流量卡办理，甜甜网精选每一项资源，确保安全、可靠、易用。我们坚持免费原则，基础服务永久免费，让每个人都能享受互联网的便利。</p>

        <h2>我们的使命</h2>
        <p>让优质资源触手可及，让互联网使用更简单。我们相信，好的服务应该是免费的、易用的、不迷路的。甜甜网永久发布页的设计，就是为了让用户永远能找到我们。</p>

        <h2>平台资源</h2>
        <ol>
          <li><strong>甜甜导航</strong>：精选学习、工作、娱乐、工具类优质网站导航</li>
          <li><strong>甜甜网盘</strong>：免费文件存储与分享服务</li>
          <li><strong>苹果证书</strong>：iOS 应用签名证书服务</li>
          <li><strong>大流量卡</strong>：正规运营商低月租大流量手机卡</li>
          <li><strong>微信交流群</strong>：用户交流与资源更新通知</li>
          <li><strong>邮箱备用通道</strong>：失联时自动获取最新地址</li>
        </ol>

        <h2>发展历程</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h4>平台上线</h4>
            <p>甜甜网正式上线，最初提供基础导航服务</p>
          </div>
          <div className="timeline-item">
            <h4>资源扩展</h4>
            <p>陆续增加网盘、证书、流量卡等服务</p>
          </div>
          <div className="timeline-item">
            <h4>用户增长</h4>
            <p>用户规模持续扩大，微信交流群建立</p>
          </div>
          <div className="timeline-item">
            <h4>全新改版</h4>
            <p>页面全面升级，增加使用教程和帮助中心</p>
          </div>
        </div>

        <h2>防失联指南</h2>
        <p>为确保用户始终能找到甜甜网，我们提供多重备用渠道：</p>
        <ul>
          <li><strong>收藏本页</strong>：按 Ctrl+D 将本站加入收藏夹</li>
          <li><strong>添加到主屏幕</strong>：手机端将网站添加到桌面，像 APP 一样访问</li>
          <li><strong>邮箱获取</strong>：发送任意邮件到 yellowjiba@gmail.com，自动回复最新地址</li>
          <li><strong>加入交流群</strong>：微信群内第一时间发布最新地址和通知</li>
        </ul>

        <h2>联系我们</h2>
        <p>如有问题、建议或合作意向，欢迎通过以下方式联系：</p>
        <ul>
          <li>邮箱：<a href="mailto:yellowjiba@gmail.com">yellowjiba@gmail.com</a></li>
          <li>微信交流群：<a href="https://iosyyds.github.io/vxq/" target="_blank" rel="noopener noreferrer">点击加入</a></li>
          <li>网站：iqkx.cn</li>
        </ul>
        <p>感谢每一位用户的支持，你们的反馈是我们前进的动力。甜甜网会持续优化，为大家提供更好的服务。</p>
      </div>
    </div>
  );
}
