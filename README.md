# Taro UI Demo

使用 Taro UI 的示例

> 该仓库不是 Taro UI 示例小程序的源码，源码请查看 https://github.com/NervJS/taro-ui/blob/dev/src/app.js

## 相关链接

- [Taro UI 使用文档](https://taro-ui.aotu.io)
- [Taro](https://taro.aotu.io/)

## 安装

需要安装 `Taro` 开发工具 `@tarojs/cli`

```bash
npm install -g @tarojs/cli
```

下载项目并安装依赖

```bash
git clone https://github.com/NervJS/taro-ui-demo
cd taro-ui-demo
npm i
```

## 编译并预览

进入项目目录开始开发，可以选择小程序预览模式，或者 h5 预览模式，若使用微信小程序预览模式，则需要自行下载并打开微信开发者工具，选择预览项目根目录。

**微信小程序编译预览模式**

```bash
# npm script
$ npm run dev:weapp
# 仅限全局安装
$ taro build --type weapp --watch
# npx用户也可以使用
$ npx taro build --type weapp --watch
```

**H5 编译预览模式**

```bash
# npm script
$ npm run dev:h5
# 仅限全局安装
$ taro build --type h5 --watch
# npx用户也可以使用
$ npx taro build --type h5 --watch
```


## License

MIT
