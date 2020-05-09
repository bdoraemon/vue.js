var express = require("express");
var app = express();
app.get('/', function(req, res) {
    res.end("~！@#￥%……&*（）——+") //服务器响应
})
app.listen(1000, function() {
    console.log("The Server is running……")
})
app.use('/baidu/', express.static('../baidu/')) //公开文件目录