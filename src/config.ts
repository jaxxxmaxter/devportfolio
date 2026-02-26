// 所有的配置必须封装在 siteConfig 对象内导出
export const siteConfig = {
  // 1. 基础信息 - 必须包含 email 才能修复 Footer.astro 报错
  name: "Jaxxxmaxter",
  role: "全栈开发者 | 极客",
  description: "致力于用全栈技术解决生活中的细微痛点，擅长 Android 开发与 AI 工具集成。",
  title: "Jaxxxmaxter | Portfolio",
  email: "zjhzhj0307@gmail.com", // 修复 Footer.astro 报错的关键行

  // 2. 社交链接 (修复 About.astro 顶部)
  socialLinks: [
    { name: "GitHub", url: "https://github.com/jaxxxmaxter", icon: "github" },
    { name: "小红书", url: "https://www.xiaohongshu.com/user/profile/5644653131", icon: "share-2" }
  ],

  // 3. 技能列表 (修复 About.astro 中部)
  skills: ["Android Studio", "Supabase", "Alist / 123云盘", "Gemini Pro API", "VS Code"],

  // 4. 项目展示 (修复 Projects.astro)
  projects: [
    {
      title: "Parking Assistant (停车助手)",
      description: "安卓端停车计时与位置记忆应用，解决城市停车寻车难的痛点。",
      github: "https://github.com/jaxxxmaxter/*",
      link: "https://*/d/parking_assistant_apk", 
      tags: ["Android", "Kotlin"]
    },
    {
      title: "Password Safe (密码保险箱)",
      description: "纯本地、离线加密的密码管理器，保护个人账户安全。",
      github: "https://github.com/jaxxxmaxter/*",
      tags: ["Security", "Android"]
    }
  ],

  // 5. 经历板块 (必须包含 bullets 数组)
  experience: [
    {
      company: "个人项目开发",
      role: "全栈开发者",
      date: "2026 - 至今",
      description: "基于 AMD 7500F + RTX 4060 Ti 硬件环境开发多端应用。",
      bullets: [
        "利用 GitHub Actions 自动化部署个人主页",
        "通过 Alist 挂载 123 云盘实现 APK 分发"
      ]
    }
  ],

  // 6. 教育背景 (必须包含 achievements 数组，修复 Education.astro 报错)
  education: [
    {
      school: "自主技术探索与实践",
      course: "全栈开发与 AI 应用集成",
      date: "2026",
      description: "深入研究移动端硬件调试与自动化部署流程。",
      achievements: [
        "精通 Android Studio 开发流程",
        "熟练运用 Supabase 云数据库",
        "成功上线“禹禹的暖心厨房”等多个应用"
      ]
    }
  ]
}; // 确保结尾有这个分号