'use client';
import { useState } from 'react';

const faqData = [
  {
    group: '平台相关',
    items: [
      { q: '甜甜网是什么？', a: '甜甜网是一个免费资源导航平台，提供甜甜导航、甜甜网盘、苹果证书、大流量卡、微信交流群等实用资源，致力于为用户提供便捷、免费、可靠的在线服务。' },
      { q: '甜甜网的资源都是免费的吗？', a: '甜甜网的导航和网盘基础服务完全免费。苹果证书和流量卡属于第三方服务，具体费用以对应页面为准，我们只提供入口，不直接收费。' },
      { q: '网站打不开了怎么办？', a: '如果本页无法访问，可以发送任意邮件到 yellowjiba@gmail.com，系统会自动回复最新地址。也可以加入微信交流群获取最新动态。建议收藏本页（Ctrl+D）。' },
      { q: '怎么收藏本页？', a: '电脑端按 Ctrl+D（Mac 为 Command+D）添加到收藏夹；手机端在浏览器菜单中选择"添加到主屏幕"或"添加书签"，下次直接点击图标访问。' },
    ],
  },
  {
    group: '甜甜导航',
    items: [
      { q: '甜甜导航收录了哪些类型的网站？', a: '甜甜导航收录了学习、工作、娱乐、工具等多个分类的优质网站，包括在线课程、设计工具、影视音乐、格式转换等各类实用站点，持续更新中。' },
      { q: '可以推荐网站加入导航吗？', a: '可以。欢迎通过微信交流群或邮箱推荐优质网站，我们审核后会加入导航收录。' },
    ],
  },
  {
    group: '甜甜网盘',
    items: [
      { q: '甜甜网盘空间多大？', a: '甜甜网盘提供免费存储空间，具体空间大小以网盘页面说明为准。注册即可使用，支持文件上传、下载和分享。' },
      { q: '下载速度有限制吗？', a: '免费用户享有基础下载速度，大文件建议使用下载工具。具体速度限制以网盘页面说明为准。' },
      { q: '分享的文件会过期吗？', a: '分享链接可以设置有效期，也可以设置为永久有效。建议重要文件设置提取码保护隐私。' },
    ],
  },
  {
    group: '苹果证书',
    items: [
      { q: '苹果证书有什么用？', a: '苹果证书用于对 iOS 应用进行签名，使未上架 App Store 的应用可以在 iPhone / iPad 上安装运行。适合测试版应用、企业应用等场景。' },
      { q: '证书有效期多久？', a: '不同类型的证书有效期不同，具体以购买页面说明为准。证书到期后需要重新签名才能继续使用。' },
      { q: '签名后应用闪退怎么办？', a: '可能是证书过期或被吊销。需要重新购买证书并重新签名。建议关注微信交流群获取证书状态通知。' },
    ],
  },
  {
    group: '流量卡',
    items: [
      { q: '流量卡是正规的吗？', a: '所有流量卡均为正规运营商产品，支持官方查询和售后。线上办理后由运营商发货，收到卡后按说明激活即可使用。' },
      { q: '办理需要什么条件？', a: '需要年满 16 周岁，提供真实身份信息进行实名认证（运营商要求）。一个身份证在同一运营商可办理一定数量的卡品。' },
      { q: '卡多久能收到？', a: '一般提交订单后 1-3 个工作日内发货，具体到货时间取决于物流。偏远地区可能稍慢。' },
      { q: '可以异地使用吗？', a: '大部分套餐支持全国通用（除港澳台），具体以套餐说明为准。流量一般不分省内省外。' },
    ],
  },
  {
    group: '交流与联系',
    items: [
      { q: '怎么加入微信交流群？', a: '点击首页"微信交流群"卡片，按照页面提示操作即可入群。群内会第一时间发布资源更新和重要通知。' },
      { q: '有问题怎么联系？', a: '可以加入微信交流群提问，或发送邮件到 yellowjiba@gmail.com。我们会尽快回复。' },
    ],
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container">
      <div className="page-hero">
        <h1>常见<span className="gradient-text">问题</span></h1>
        <p>你可能想知道的问题都在这里</p>
      </div>
      <div className="content-card">
        {faqData.map((group, gi) => (
          <div key={gi} className="faq-group">
            <h3>{group.group}</h3>
            {group.items.map((item, ii) => {
              const idx = `${gi}-${ii}`;
              const isOpen = openIndex === idx;
              return (
                <div key={ii} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => setOpenIndex(isOpen ? null : idx)}>
                    {item.q}
                    <span className="faq-icon">+</span>
                  </button>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
