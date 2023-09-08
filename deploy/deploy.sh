#!/bin/bash
cd /code/blog
git pull origin main
npm install
pm2 restart nextjs
# 这里添加你的部署命令
