#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
# set -e

# 删除文件需要根据实际打包的目录进行删除
rm -rf docs/.vitepress/dist/

# 生成静态文件
yarn docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

# 如果是发布到自定义域名
# echo 'www.cocolib.cocobronie.cn' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io 修改仓库地址
# git push -f git@github.com:你的git名/你的git项目名.git master:你的git分支
git push -f git@github.com:Cocobronie/cocoLib.git main:gf-pages

cd -
