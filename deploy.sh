#!/bin/bash
cd /code/blog
git pull origin main
cp /code/blog/* /var/www/html
# 这里添加你的部署命令
