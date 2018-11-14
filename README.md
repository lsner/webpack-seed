# 遇到的疑惑及问题
## 1.path.resolve与path.join与__dirname有什么区别？
### __dirname
就是获取当前项目所在电脑中的目录
### path.resolve
path.resolve的作用是——可以将多个路径解析为一个规范化的绝对路径 也就是对路径进行逐一cd操作，并且过程中不会校验路径是否存在，只是单纯的路径字符串操作

>eg：path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile')

>相当于 

>cd foo/bar

>cd /tmp/file/

>cd ..

>cd a/../subfile

>pwd

```javascript
let myPath1 = path.resolve(__dirname,'/src/pages/alert'); 
let myPath2 = path.resolve(__dirname,'./src/pages/alert');
console.log(__dirname);    // /Users/xmly/LSN/webpack-seed        
console.log(myPath1);      // /src/pages/alert  
console.log(myPath2);      // /Users/xmly/LSN/webpack-seed/src/pages/alert
```

### path.join
path.join()可以连接任意多个路径字符串。要连接的多个路径可做为参数传入。并且在连接路径的同时也会对路径进行规范化,并且过程中不会校验路径是否存在，只是单纯的路径字符串操作
```javascript
let myPath1 = path.join(__dirname,'alert',"haha"); // /Users/xmly/LSN/webpack-seed/alert/haha
let myPath3 = path.join('./src/pages','alert',{}); // 会报错 Path must be a string. Received {}
```
