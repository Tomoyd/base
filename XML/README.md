## XMLHttpRequest

对象 兼容性 ActionXObject

1.创建对象：

```javascript
let xhr=new XMLHttpRequest()
// 打开链接
xhr.open("get","/api/get",false);
//监readyState变化 0 未打开，1，打开2，已发送，3接收到部分响应，4接收到完
xhr.onreadystatechange=function(){
	if(xhr.readyState===4){
        if(xhr.status===200&&xhr.status<300||xhr.status===304){
            alert(xhr.responseText)
        }
    }
};
// 设置请求头：setRequestHeader();
// 发送请求
xhr.send(null)




```

