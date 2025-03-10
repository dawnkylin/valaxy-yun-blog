import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://dawnkylin.github.io/valaxy-yun-blog',
  /**
   * enable auto (light/dark mode)
   * @default 'auto'
   */
  mode: 'auto',
  lang: 'zh-CN',
  title: "dawnkylin's blog",
  subtitle: '',
  /**
   * 站点描述
   */
  description: '学习笔记与生活记录',
  author: {
    name: 'dawnkylin',
    email: 'dawnkylin@163.com',
    /**
     * @zh 个人简介
     */
    intro: '没有工作经验的前端开发者',
    /**
     * The status of you
     * @description 状态
     */
    status:{
      /**
       * Emoji representation of your status like '👨‍💻'
       * @description 你的状态的 Emoji 表示，如 '👨‍💻'
       */
      emoji: '😣',
      /**
       * show when hover emoji
       * @description 当鼠标悬浮在图标上时显示
       */
      message: '迷路了'
    }
  },

  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ 群 1050458482',
      link: 'https://qm.qq.com/cgi-bin/qm/qr?k=kZJzggTTCf4SpvEQ8lXWoi5ZjhAx0ILZ&jump_from=webapi',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/dwnkylin',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    // {
    //   name: '微博',
    //   link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '豆瓣',
    //   link: 'https://www.douban.com/people/yunyoujun/',
    //   icon: 'i-ri-douban-line',
    //   color: '#007722',
    // },
    // {
    //   name: '网易云音乐',
    //   link: 'https://music.163.com/#/user/home?id=247102977',
    //   icon: 'i-ri-netease-cloud-music-line',
    //   color: '#C20C0C',
    // },
    // {
    //   name: '知乎',
    //   link: 'https://www.zhihu.com/people/yunyoujun/',
    //   icon: 'i-ri-zhihu-line',
    //   color: '#0084FF',
    // },
    // {
    //   name: '哔哩哔哩',
    //   link: 'https://space.bilibili.com/1579790',
    //   icon: 'i-ri-bilibili-line',
    //   color: '#FF8EB3',
    // },
    // {
    //   name: '微信公众号',
    //   link: 'https://cdn.yunyoujun.cn/img/about/white-qrcode-and-search.jpg',
    //   icon: 'i-ri-wechat-2-line',
    //   color: '#1AAD19',
    // },
    // {
    //   name: 'Twitter',
    //   link: 'https://twitter.com/YunYouJun',
    //   icon: 'i-ri-twitter-x-fill',
    //   color: 'black',
    // },
    // {
    //   name: 'Telegram Channel',
    //   link: 'https://t.me/elpsycn',
    //   icon: 'i-ri-telegram-line',
    //   color: '#0088CC',
    // },
    {
      name: 'E-Mail',
      link: 'mailto:dawnkylin@163.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    // {
    //   name: 'Travelling',
    //   link: 'https://www.travellings.cn/go.html',
    //   icon: 'i-ri-train-line',
    //   color: 'var(--va-c-text)',
    // },
  ],

  /**
   * @en search engine for your site
   * @zh 搜索功能
   */
  search: {
    enable: true,
    /**
     * Search Type
     * - algolia: Algolia Search
     * - engine: Engine Search, like Google/Baidu
     * - fuse: Local Search by fuse.js
     */
    type: 'fuse'
  },

  /**
   *
   * fuse search
   * @see https://fusejs.io/
   * @description 本地搜索
   * Please set search.type to 'fuse'
   */
  fuse: {
    /**
     * @default 'valaxy-fuse-list.json'
     * @description 搜索结果列表数据所在路径
     */
    // dataPath: 'valaxy-fuse-list.json',
    /**
     * @see https://fusejs.io/api/options.html
     */
    options:{
      /**
       * @en_US The fields to be searched.
       * @zh_CN 搜索的字段
       * @default ['title', 'tags', 'categories', 'excerpt']
       * @description:en-US List of keys that will be searched. This supports nested paths, weighted search, and searching in arrays of strings and objects
       * @description:zh-CN 搜索将会涉及的字段列表，支持嵌套路径、加权搜索以及在字符串和对象数组中进行搜索
       * @see https://fusejs.io/api/options.html#keys
       */
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      /**
       * @default 0.6
       * @see https://www.fusejs.io/api/options.html#threshold
       * 设置匹配阈值，越低越精确
       */
      // threshold: 0.6,
      /**
       * @default false
       * @see https://www.fusejs.io/api/options.html#ignoreLocation
       * 忽略位置
       * 这对于搜索文档全文内容有用，若无需全文搜索，则无需设置此项
       */
      ignoreLocation: true,
    }
  },

  encrypt:{
    enable: true
  },

  /**
   * image preview by medium-zoom
   * @url https://github.com/francoischalifour/medium-zoom
   */
  mediumZoom:{
    /**
     * @zh 启用图片预览
     */
    enable: true,
  },

  /**
   * The license of your posts
   * @description 文章所使用的协议，默认使用 Creative Commons
   * @default https://creativecommons.org/licenses/
   */
  license: {
    /**
     * Whether to show at the bottom of the article
     * @description 是否显示在文章底部
     * @default true
     */
    enabled: true,
    /**
     * Type of license
     * @description 证书类型 'zero' | 'by-sa' | 'by-nd' | 'by-nc' | 'by-nc-sa' | 'by-nc-nd'
     * @default 'by-nc-sa'
     */
    type: 'by-nc-sa'
  },

  /**
   * statistics readingTime and wordCount
   * @description 统计阅读时间和字数
   */
  statistics: {
    enable: true,
    readTime: {
      speed: {
        /**
         * Chinese word count speed
         * @description 中文每分钟阅读字数
         * @default 300 (300 字/分钟)
         */
        cn: 200,
        en: 100
      }
    }
  },

  // sponsor: {
  //   enable: true,
  //   title: '我很可爱，请给我钱！',
  //   methods: [
  //     {
  //       name: '支付宝',
  //       url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
  //       color: '#00A3EE',
  //       icon: 'i-ri-alipay-line',
  //     },
  //     {
  //       name: 'QQ 支付',
  //       url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
  //       color: '#12B7F5',
  //       icon: 'i-ri-qq-line',
  //     },
  //     {
  //       name: '微信支付',
  //       url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
  //       color: '#2DC100',
  //       icon: 'i-ri-wechat-pay-line',
  //     },
  //   ],
  // },
})
