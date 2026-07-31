# CDN Fallback JS Libraries

为防止 jsdelivr CDN 在国内加载失败，请将以下文件下载到此目录：

## 需要下载的文件

| 文件 | 下载命令 |
|------|----------|
| three.min.js | `curl -o three.min.js https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js` |
| gsap.min.js | `curl -o gsap.min.js https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js` |
| ScrollTrigger.min.js | `curl -o ScrollTrigger.min.js https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js` |
| echarts.min.js | `curl -o echarts.min.js https://cdn.jsdelivr.net/npm/echarts@5.5.0/dist/echarts.min.js` |

## 说明

- 这些文件是备选方案，正常情况下浏览器会优先加载 jsdelivr CDN 版本
- 仅当 CDN 加载失败时才会回退到本地文件
- 将下载的4个文件与此 README.md 放在同一目录下
- 可选：如果不需要本地备选方案，可以跳过此步骤
