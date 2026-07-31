@echo off
chcp 65001 >nul
echo ============================================
echo  GitHub Pages 透明代理壳 - 一键推送脚本
echo ============================================
echo.
echo 本脚本将把透明代理壳文件推送到 tongdayang01.github.io
echo 推送后请在 GitHub 仓库 Settings 中启用 Pages
echo.

cd /d "E:\AI文档\website"

echo [1/3] 添加壳文件到暂存区...
git add index.html 404.html .nojekyll

echo [2/3] 提交变更...
git commit -m "部署透明代理壳：全屏iframe加载腾讯云CDN内容 | 地址栏不变 | 2026-07-31"

echo [3/3] 推送到 GitHub...
git push origin main:master

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ============================================
    echo  推送成功！
    echo ============================================
    echo.
    echo 接下来请手动操作：
    echo 1. 打开 https://github.com/tongdayang01/tongdayang01.github.io/settings/pages
    echo 2. Source 选择 "Deploy from a branch"
    echo 3. Branch 选择 "master" (或 "main")，目录选 "/ (root)"
    echo 4. 点击 Save
    echo 5. 等待 1-2 分钟后访问 https://tongdayang01.github.io 验证
    echo.
) else (
    echo.
    echo ============================================
    echo  推送失败！请检查：
    echo  1. 网络是否可访问 GitHub
    echo  2. GitHub 账号密码/Token 是否正确
    echo  3. 仓库是否存在
    echo ============================================
    echo.
    echo 备用方案：
    echo   - 在 GitHub 网页端直接上传 E:\AI文档\website_github_shell\ 中的文件
    echo   - 或使用 GitHub Desktop 工具推送
    echo.
)

pause
