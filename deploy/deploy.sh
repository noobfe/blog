#!/bin/bash
cd /code/blog
git pull origin main
pm2 flush
pm2 restart nextjs
# 这里添加你的部署命令
