#!/bin/bash
branchName=$(git symbolic-ref --short -q HEAD)
echo "当前分支是$branchName"
read -s -n1 -p "是否执行add .？"
echo ""
#read -p "是否执行add . "
git add .

read -p "请输入提交注释内容: " commitContent
git commit -m "$commitContent"

read -s -n1 -p "是否确定推送 $branchName 分支？"
git push origin $branchName

echo "~~~~~~前端小白欢迎您！QQ：213787432~~~~~~"
exit 0
