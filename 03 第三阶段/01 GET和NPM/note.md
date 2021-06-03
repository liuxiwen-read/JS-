### GIT版本控制系统
> 网站地址: https://git-scm.com/
> 版本控制系统:
    1. 记录历史版本信息（记录每一次修改的记录）
    2. 方便团队相互之间协作开发
    ......
> 常用的版本控制系统
    cvs / svn : 集中式版本控制系统
    git : 分布式版本控制系统
    图像演示 ./image/01 集中式VS分布式.png

### GIT工作原理
> 工作区: 我们能看到的，并且用来写代码的区域
> 暂存区: 临时存储用的
> 历史区: 生成历史版本
    工作区 -> 暂存区 -> 历史区
    图像演示 ./image/02 GIT工作原理.png

### GIT的全局配置
第一次安装完成git后，我们在全局环境下配置基本信息：我是谁?
```
    $ git config -l             查看配置信息        
    $ git config --list         查看配置信息 
    $ git config --global -l    查看全局配置信息

    配置全局信息：用户名和邮箱
    $ git config --global user.name 'liuxiwen'
    $ git config --global user.email '3055003813@qq.com'
```

### 创建仓库完成版本控制
> 创建本地git仓库（查看 -> 显示/隐藏 -> 隐藏的项目）
```
    $ git init
    // => 会生成一个隐藏文件夹 ".git"（这个文件夹千万不要删，因为暂存区和历史区还有一些其它的信息都在这里，删了就不是一个完整的git仓库）
```
> 在本地编写完成代码后（在工作区），把一些文件提交到暂存区
```
    $ git add xxx       把某一个文件或者文件夹提交到暂存区
    $ git add .         把当前仓库中所有最新修改的文件都提交到暂存区
    $ git add -A        把当前仓库中所有最新修改的文件都提交到暂存区

    $ git status        查看当前文件的状态（红色代表在工作区，绿色代表在暂存区，看不见东西证明所有修改的信息都已经提交的历史区）
```
> 把暂存区内容提交到历史区
```
    $ git commit                                         提交到历史区
    $ git commit -m'描述信息：本次提交内容的一个描述'       提交到历史区

    查看历史版本信息（历史记录）
    $ git log
    $ git reflog    包含回滚的信息
```

### GIT-HUB
> 网站地址: https://github.com/
一个网站（一个开源的源代码管理平台），用户注册后，可以在自己账户下创建仓库，用来管理项目的源代码（源代码是基于git传到仓库中）
我们所熟知的插件、类库、框架等都在这个平台上有托管，我们可以下载观看和研究源码等

> 1.Settings 用户设置
    Profile     修改自己的基本信息
    Account     可以修改用户名（Change username）
    Security    可以修改自己的密码
    Emails      邮箱（必须进行邮箱校验）
    ......

> 2.创建仓库
    new repository  -->  填写信息  -->  Create repository
        public      公共仓库作为开源的项目
        private     私有仓库作为内部团队协作管理的项目
    Settings  -->  删除仓库 Delete this repository
              -->  Collaborators 设置协作开发的人员
    Code  可以查看历史版本信息和分支信息

> 3.把本地仓库信息提交到远程仓库
```
    // 建立本地仓库和远程仓库的链接    
    查看本地仓库和那些远程仓库保持链接
    $ git remote -v

    让本地仓库和远程仓库新建一个链接 origin 是随便起的的一个链接名（可以改成自己想要的，只不过一般都用这个名字）
    $ git remote add origin [GIT远程仓库地址]

    删除关联信息
    $ git remote rm origin
```
```
    提交之前最好先拉取
    $ git pull origin master

    把本地代码提交到远程仓库（需要输入github的用户名密码）
    $ git push origin master
```
```
    $ git clone [远程仓库git地址] [别名：可以不设置，默认是仓库名]
    /*
     * 真实项目开发流程：
     *   1.组长或者负责人先创建中央仓库（增加协作者）
     *   2.小组成员基于 $ git clone 把远程仓库及默认的内容克隆到本地一份（解决了三个事情：初始化一个本地仓库"git init"、和对应的远程仓库也保持了关联"git remote add"、把远程仓库默认内容拉取到本地"git pull"）
     *   3.每个组员写完自己的程序后，基于"git add/git commit"把自己修改的内容存放到历史区，然后通过"git pull/git push"把本地信息和远程仓库保持同步即可（可能涉及冲突的处理）
     */
```

### NPM
> node package manger : NODE模块管理工具，根据NPM我们可快速安装、卸载所需要的资源文件（例如：JQuery、vue、vue-router...）
> NODE官网 : https://nodejs.org/zh-cn/ 下载NODE（长期支持版），安装NODE后，NPM也就跟着安装了
```
    $ node -v
    $ npm -v    出现版本号证明安装成功
```

### 基于npm进行模块管理
> https://www.npmjs.com/ 基于npm是从npmjs.com平台上下载安装
```
    $ npm install xxx        把模块安装在当前项目中（node_modules）
    $ npm install xxx -g     把模块安装在全局环境中
    $ npm i xxx@1.0.0        安装指定版本号的模块
    $ npm view xxx versions > xxx.version.json  查看某个模块的版本信息（输出到指定JSON文件中）

    $ npm init -y            初始化当前项目的配置依赖清单
    $ npm i xxx --save       把模块保存在清单生产依赖中
    $ npm i xxx --save-dev   把模块保存在清单开发依赖中
    $ npm install            跑环境，按照清单安装所需的模块

    $ npm root -g            查看全局安装模块的目录
    $ npm uninstall xxx      
    $ npm uninstall xxx -g   卸载安装过的模块     
```

安装命令
    jquery : npm i jquery   
    bootstrap : npm i bootstrap 等价于 npm i bootstrap@latest
查看jquery历代的版本信息，输入到jquery.version.json文件当中
    npm view jquery versions > jquery.version.json
输出指定版本信息
    npm i jquery@1.11.3









### window操作系统
window操作系统 : 在某个文件夹下执行DOS命令
    1. window + R -> 运行窗口中输入 cmd
        -> 磁盘符: 进入到指定磁盘
        -> cd xx: 进入到指定的目录
        -> cd 直接拖进想要进入的目录文件 直接进入
    2. 在文件夹地址栏直接输入 cmd 即可
    3. 在文件夹中"shift + 鼠标右键" -> 在此处打开命令窗口
如果想查看当前目录中的文件内容
    dir

### 课外知识
F:\Web 前端\20210502>git config -g -l
error: unknown switch `g'
usage: git config [<options>]

Config file location
    --global              use global config file
    --system              use system config file
    --local               use repository config file
    --worktree            use per-worktree config file
    -f, --file <file>     use given config file
    --blob <blob-id>      read config from given blob object

Action
    --get                 get value: name [value-regex]
    --get-all             get all values: key [value-regex]
    --get-regexp          get values for regexp: name-regex [value-regex]
    --get-urlmatch        get value specific for the URL: section[.var] URL
    --replace-all         replace all matching variables: name value [value_regex]
    --add                 add a new variable: name value
    --unset               remove a variable: name [value-regex]
    --unset-all           remove all matches: name [value-regex]
    --rename-section      rename section: old-name new-name
    --remove-section      remove a section: name
    -l, --list            list all
    -e, --edit            open an editor
    --get-color           find the color configured: slot [default]
    --get-colorbool       find the color setting: slot [stdout-is-tty]

Type
    -t, --type <>         value is given this type
    --bool                value is "true" or "false"
    --int                 value is decimal number
    --bool-or-int         value is --bool or --int
    --path                value is a path (file or directory name)
    --expiry-date         value is an expiry date

Other
    -z, --null            terminate values with NUL byte
    --name-only           show variable names only
    --includes            respect include directives on lookup
    --show-origin         show origin of config (file, standard input, blob, command line)
    --show-scope          show scope of config (worktree, local, global, system, command)
    --default <value>     with --get, use default value when missing entry


F:\Web 前端\20210502\06>git config -l
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
http.sslbackend=openssl
http.sslcainfo=C:/Program Files/Git/mingw64/ssl/certs/ca-bundle.crt
core.autocrlf=true
core.fscache=true
core.symlinks=false
pull.rebase=false
credential.helper=manager
user.name=liuxiwem
user.email=3055003813@qq.com
core.repositoryformatversion=0
core.filemode=false
core.bare=false
core.logallrefupdates=true
core.symlinks=false
core.ignorecase=true
remote.origin.url=https://github.com/liuxiwen-read/20210505.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*

















