@echo off
echo 正在部署到GitHub Pages...

echo 步骤1: 安装gh-pages依赖
npm install gh-pages --save-dev

echo 步骤2: 构建项目
npm run build

echo 步骤3: 部署到GitHub Pages
npm run deploy

echo 部署完成！
echo 你的网站将在几分钟后可以通过以下地址访问：
echo https://bitong1202.github.io/my-ku
pause
