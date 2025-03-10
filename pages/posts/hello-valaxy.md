---
title: Hello, Valaxy!
date: 2022-04-01
updated: 2025-03-10
categories: Valaxy 笔记
tags:
  - valaxy
  - 笔记
top: 1
aplayer: true
---

## Valaxy

::: zh-CN
下一代静态博客框架。
:::

::: en
Next Generation Static Blog Framework.
::: 

::: zh-CN
快来使用它写下你的第一个博客！
:::

::: en
Use it to write your first post!
:::

## 用法 {lang="zh-CN"}

## Usage {lang="en"}

::: zh-CN
修改 `valaxy.config.ts`来自定义你的博客。
:::

::: en
Modify `valaxy.config.ts` to custom your blog.
:::

## 音乐播放器

```html
<meting-js
 id="1477144603"
 server="netease"
 type="song"
 theme="#C20C0C">
</meting-js>
```

<meting-js
 id="1477144603"
 server="netease"
 type="song"
 theme="#C20C0C">
</meting-js>

## 单页 i18n

```markdown
::: zh-CN
另一种 i18n 方案。

更多内容：...
:::

::: en
Another i18n method.

More info...
:::

### 你好，世界 {lang="zh-CN"}

### Hello World {lang="en"}
```

## 容器

```markdown
::: details 点击展开

  ::: info info 容器

  info

  ::: tip

  tip

  ::: warning

  warning

  ::: danger

  danger

:::
```

::: details 点击展开

  ::: info info 容器

  info

  ::: tip

  tip

  ::: warning

  warning

  ::: danger

  danger

:::

> 一个容器内还不能包含多个同级子容器。

## 代码分组

> 这里渲染有问题。
> 
> 今天就先到这儿吧，以后不知猴年马月再来看了，哎。开始上传更新。。。

```md
::: code-group

```js [config.js]
/**
 * @type {import('valaxy').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'valaxy'

const config: UserConfig = {
  // ...
}

export default config
```

:::
```

::: code-group

```js [config.js]
/**
 * @type {import('valaxy').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'valaxy'

const config: UserConfig = {
  // ...
}

export default config
```

:::