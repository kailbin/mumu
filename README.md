# Template-Docusaurus



## 环境准备

- Node.js 10.15.1+
- yarn >= 1.5

- 详见 [nvm 管理 Node 版本](http://kail.xyz/JavaScript/docs/Npm/NVM/)



```bash
$ nvm ls-remote --lts
$ nvm install v10.22.0
$ nvm current 
v10.22.0
```



## 初始化

```bash
$ npx @docusaurus/init@next init docusaurus classic
```



## 修改配置 docusaurus.config.js

```bash

```



### 文档侧边栏 sidebars.js

```bash

```



## 首页 src/pages/index.js



## 插件

### 搜索

```bash
$ yarn run swizzle @docusaurus/theme-classic SearchBar
```





## 常用命令

```bash
git config user.email ykb553@163.com
git config -l | grep user

$ cd docusaurus

$ sed -i '' 's/Template-Docusaurus/_NewProject_/g' docusaurus/docusaurus.config.js README.md pom.xml docusaurus/src/pages/index.js

$ yarn install 
# 开启服务
$ yarn start

# 部署
$ GIT_USER=kailbin USE_SSH=false yarn deploy

# 构建静态代码
$ yarn build
```



