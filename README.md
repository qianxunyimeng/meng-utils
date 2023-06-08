# 说明

mengui-utils 是一个 js 工具函数库，目前没有依赖其它第三方包
支持 es 和 UMD 规范

# 安装

## 使用包管理器

```html
# NPM npm install meng-utils # Yarn yarn add meng-utils
```

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 meng-utils，然后就可以使用全局变量 `mu` 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以 unpkg 和 jsDelivr 举例。 你也可以使用其它的 CDN 供应商。

### unpkg

```html
<head>
  <!-- 引入meng-utils -->
  <script src="//unpkg.com/meng-utils"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- 引入meng-utils -->
  <script src="//cdn.jsdelivr.net/npm/meng-utils"></script>
</head>
```

# 使用

## 包管理

```shell
import {具体的方法或类} from "meng-utils/模块名"
# 例如
import {EventBus} from "meng-utils/dom"

const bus = new EventBus()

```

# LICENSE

MIT
