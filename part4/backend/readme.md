# mongodb集群的URI
mongodb+srv://chifeng:<password>@cluster0.a4ng4lg.mongodb.net/?retryWrites=true&w=majority

# 1、创建heroku应用
heroku create

# 2、进入目标应用根目录

# 3、初始化git
git init

# 4、关联到heroku目标应用
heroku git:remote -a immense-crag-37942

# 5、部署应用
git add .
git commit -am "make it better"
git push heroku master

# 6、新建main分支，并切换到main分支
git checkout -b main

# 7、删除master分支
git branch -D master

# 8、推送到main分支
git add .
git commit -am "make it better"
git push heroku main
