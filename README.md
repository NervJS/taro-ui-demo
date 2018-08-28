# Taro UI Demo

`Taro UI` 示例库

## 体验

请使用微信扫一扫以下体验码

![QRCode](https://user-images.githubusercontent.com/1240899/44580574-fe838800-a7cc-11e8-890d-73cf048ef8c2.jpg)

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
