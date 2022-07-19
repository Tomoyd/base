const getJson = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false); // false 表示是同步的，会等待响应完后才会执行其他代码
    xhr.onreadystatechange = () => {
      /** 0 未初始化，1：已打开，2：已发送，3：接收中 ，4：完成 */
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200 || xhr.status === 304) {
        return resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    };
    // post 可以做相应的序列化处理后发送，或者FormData方式
    xhr.send(null);
  });
};
