var express = require('express'); // ����expressģ��
var app = express();  // ����һ���򵥵ķ�����

var requestPort = 3000;  // ����ҳ������3000�˿�

app.use(express.static(__dirname + '/static')); //3000�˿ڵľ�̬�ļ�����index.html

// __dirnameʼ��ָ��ǰjs�����ļ�(serverReq.js)���ڵ�Ŀ¼, ���ҵı���Ŀ¼��D:\cross-domain\CROS
// console.log(__dirname) ��dos���ڿ��Կ���
// ���桰express.static(__dirname + '/static')������˼��Ŀ�ľ�̬�ļ�Ŀ¼�� D:\cross-domain\CROS\static
// ������static����������b.html, Ȼ����http://localhost:3000/b.html������ʾ

app.listen(requestPort, function () {
    console.log('Requester is listening on port '+ requestPort);  // ��dos���ڻ�ִ������ص�����
});
