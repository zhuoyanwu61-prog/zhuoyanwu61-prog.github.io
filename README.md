# 个人学术主页

无需框架、后端或依赖的中文静态学术主页。所有个人信息与项目均明确使用占位内容，没有虚构成果。页面支持手机布局、键盘导航、项目详情弹窗与减少动态效果偏好。

## 文件结构
- index.html：页面结构、个人介绍、兴趣、项目与联系方式。
- styles.css：深色主题、几何装饰、响应式布局与动画。
- script.js：手机导航、滚动渐入、详情弹窗和年份。
- test.cjs：无需依赖的结构与交互逻辑检查。

## Windows 预览
在文件资源管理器中双击 index.html，使用最新版 Edge、Chrome 或 Firefox 打开即可，无需安装软件。修改文件后刷新页面。

如已安装 Python，也可在此目录打开 PowerShell，运行 `python -m http.server 8000`，浏览器访问 http://localhost:8000 ，结束时按 Ctrl+C。本项目不需要启动服务器。

## 修改个人信息
在 index.html 中搜索 Your Name 并统一替换；编辑“关于我”的段落、身份与页面 title 和 description。研究兴趣应保持与实际学习情况一致。

项目内容位于三个 class="project" 的 article 中。修改标题、介绍和标签即可同步更新详情弹窗摘要；更详细的详情文案可在 script.js 中扩展。项目实际完成前请保留“示例项目”说明。

联系方式暂不提供虚假链接。填写后可将 strong 元素改为链接，例如 `<a href="mailto:你的邮箱">你的邮箱</a>` 或 `<a href="https://github.com/你的用户名">GitHub</a>`，并删除修改提示。

在 styles.css 顶部修改主题颜色；600px 和 900px 断点控制手机和平板布局。装饰全部使用 CSS，无外部字体、图片或 API 请求。

## 检查
已安装 Node.js 时，运行 `node --check script.js` 和 `node test.cjs`。自动检查覆盖模块、内部锚点、资源文件、三张项目卡片、手机菜单与弹窗事件。浏览器中建议额外检查 375px、768px 和桌面宽度，使用 Tab、Enter、Escape 检查键盘操作。自动检查不能替代实际视觉检查。
