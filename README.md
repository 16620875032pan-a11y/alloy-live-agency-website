# Alloy Static Website

这是 ALLOY NETWORK LTD / Alloy 的纯静态企业官网，可用于 Cloudflare Pages 部署，以及 TikTok Developer / Business Messaging API 审核所需的官网、Privacy Policy 和 Terms of Service 展示。

## 文件结构

```text
/
├── index.html
├── privacy.html
├── terms.html
├── styles.css
├── script.js
├── robots.txt
├── sitemap.xml
├── 404.html
├── _headers
├── README.md
└── assets/
    ├── alloy-live-visual.svg
    ├── favicon.svg
    └── og-image.svg
```

## 上传到 GitHub

1. 在 GitHub 创建一个新仓库，例如 `alloy-live-agency`.
2. 将本目录中的全部文件上传到仓库根目录，包括 `_headers`、`robots.txt`、`sitemap.xml` 和 `assets` 文件夹。
3. 确认仓库根目录可以直接看到 `index.html`、`privacy.html` 和 `terms.html`。
4. 提交并推送到默认分支，例如 `main`。

## 在 Cloudflare Pages 创建项目

1. 登录 Cloudflare Dashboard。
2. 进入 `Workers & Pages`，选择 `Create application`。
3. 选择 `Pages`，然后选择 `Connect to Git`。
4. 授权并选择刚创建的 GitHub 仓库。
5. Framework preset 选择 `None`。
6. Build command 留空。
7. Build output directory 使用根目录。Cloudflare UI 如接受 `/`，填写 `/`；如要求相对路径，填写 `.`。
8. 保存并部署。

## 绑定自定义域名

1. 部署成功后，在 Pages 项目中进入 `Custom domains`。
2. 添加 `alloy-live-agency.com`。
3. 按 Cloudflare 提示确认 DNS 记录。如果域名 DNS 已托管在 Cloudflare，系统通常会自动添加所需记录。
4. 再添加 `www.alloy-live-agency.com` 作为另一个 Custom domain。

## 将 www 重定向到主域名

推荐在 Cloudflare Dashboard 中创建 Redirect Rule：

1. 进入网站的 Cloudflare 区域。
2. 打开 `Rules`，选择 `Redirect Rules`。
3. 创建规则：当 hostname 等于 `www.alloy-live-agency.com` 时，301 重定向到 `https://alloy-live-agency.com/${uri.path}`。
4. 保存并启用规则。

也可以在 Cloudflare Pages 中使用 `_redirects` 文件实现主机名级重定向，但 Dashboard Redirect Rule 更直观，便于以后维护。

## 验证 HTTPS

1. 在 Cloudflare Pages 的 Custom domains 页面确认两个域名状态为 `Active`。
2. 访问 `https://alloy-live-agency.com/`，浏览器地址栏应显示安全锁。
3. 访问 `https://www.alloy-live-agency.com/`，确认会跳转到主域名。
4. 如果证书仍在签发中，等待 Cloudflare 完成验证后再重试。

## 修改网站内容

- 首页内容主要在 `index.html`。
- Privacy Policy 在 `privacy.html`。
- Terms of Service 在 `terms.html`。
- 视觉样式在 `styles.css`。
- 语言切换、移动端菜单和 mailto 表单逻辑在 `script.js`。
- SEO 的 sitemap URL 在 `sitemap.xml`，上线域名改变时需要同步更新。
- 不需要运行 npm、Node.js、构建命令或数据库。

## 检查公开页面

部署后请测试以下网址：

- `https://alloy-live-agency.com/`
- `https://alloy-live-agency.com/privacy.html`
- `https://alloy-live-agency.com/terms.html`

每个页面都应能公开访问，并且导航中的 Privacy Policy、Terms of Service、Contact 链接应能正常打开。

## 审核前检查清单

- 首页默认显示英文，点击 `TR` 后切换为土耳其语。
- 切换语言后进入 Privacy Policy 或 Terms of Service，语言选择会保持。
- 移动端宽度下汉堡菜单可打开和关闭。
- Contact 表单提交时会打开邮件应用，收件人为 `developer@alloy-live-agency.com`。
- 页面没有登录、注册、支付、广告追踪、Google Analytics、Cookie 弹窗或虚构业务数据。
- Alloy 没有声称由 TikTok 拥有，也没有承诺流量、收入、账号恢复或申诉成功。
