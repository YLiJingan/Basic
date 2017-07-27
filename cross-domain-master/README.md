### ����ļ�Сdemo
����һ�����ڿ���ļ�demo���ϣ���demo���������Լ�����Ⲣ�����Ӧ��ע�ͣ������Լ򵥵�demo���ܿ���ķ������ǳ��ʺ�����ѧϰ����ġ�����demo����ʹ�û���nodeJs��Web�������Express����Ҫһ���nodeJS��֪ʶ���������nodeJSҲû��ϵ��ע���������ϸ����˵����
> �����������û�ἰ�Ŀ��򷽷�����ӭPR��лл��
���Ҫ�ղصĻ�����ӭstar��

#### �����ļ�����
- .gitattributes�����ļ������Ըı����github��Ŀ�����Ա�ǩ
- .gitignore�����ļ�������ʹ��git�ϴ�ʱ������Щ�ļ�
- package.json�����ļ�����Ҫ��Ϊ��`npm install`�����ڣ���װexpress��ģ��
- readme.md�����ļ�����github����չʾ˵����Ŀ��Ҳ�����������ڿ����ĵ�
### Set Up
���л���
- node.js ȫ�ְ�װ
- npm ȫ�ְ�װ

���в���
1. `git clone git@github.com:FatDong1/cross-domain`
2. cross-domainĿ¼��npm install��������Ŀ���������
3. �����Ӧ��demoĿ¼����node serverRes.js  �����¿�һ��dos����   ��node serverReq.js
4. �����ڶ�Ӧ��demoĿ¼�£�dos��������`run.bat`��ֱ��һ���������Ģ٢ڢ�

### 1. CORS����

��Ŀ��������֮��
- ��������ҳ���ַ�� http://localhost:3000
- �鿴���ݣ� http://localhost:3001


### 2. JSONP����

��Ŀ����������
- ����ҳ�棺 http://localhost:3000
- ��Ӧҳ��Ϊ http://localhost:3001

### 3. postMessage����
����html5����API�������ڲ�ͬ����iframe֮��Ŀ���

> ��Ŀ���е�ַ�� http://localhost:3000

### 4. window.name����

�� http://localhost:3000/a.html ʹ��js��̬����һ�����ص�iframe������src����Ϊ' http://localhost:3001/c.html '�������iframe������֮����������src����ΪͬԴ�ĵ�ַ' http://localhost:3000/b.html '(b.html��һ���յ�html�ļ�)������iframe��a.htmlͬԴ���ǾͿ��Է���window.name���ԣ���nameֵû�б仯����Ϊwindow.name�����ڲ�ͬ��ҳ�棨������ͬ���������غ����ɴ��ڡ�


> ��Ŀ���е�ַ�� http://localhost:3000/a.html

### 5. location.hash����
�� http://localhost:3000/a.html ʹ��js��̬����һ�����ص�iframe������src����Ϊ' http://localhost:3001/c.html#getdata '����c.html�ж�hashֵ�Ƿ�Ϊ'#getdata'�����Ϊ'#getdata'�����ڵ�ǰ��iframe(c.html)��������һ�����ص�iframe����src����ָ��' http://localhost:3000/b.html '����Ϊa.html��b.htmlͬԴ�����Կ�����b.html�����޸�a.html��hashֵ������a.html�Ϳ���ͨ����ȡ�����hashֵ�õ�����
> ��Ŀ���е�ַ�� http://localhost:3000/a.html

### 6. document.domain����
document.domain���ó���������һ���ĸ��������������ͬ��

#### ע�⣡��
���ǹ������Լ���Ѷ������(xuhaodong.cn)�ϵ�demo�����Ա�Ǹ���demo�޷��ڱ������С�������ֻ�ǰ�demo�ŵ����Ʒ������ϣ����뻹��һ���ģ�û���޸Ĺ���

> ���Ϸ��ʵ�ַ�� http://a.xuhaodong.cn/a.html


���Ҫ�ڱ������еĻ�����Ҫ�һ������web��������
�ο����ӣ�https://github.com/web2hack/proxy

### 7. ������ô���proxy����
��ΪJSͬԴ������������İ�ȫ���ԣ�������������ͻ��˲��ܿ�����ʣ����������˵���HTTP�ӿ�ֻ��ʹ��HTTPЭ�飬����ִ��JS�ű�������ҪͬԴ���ԣ�Ҳ��û�п�Խ���⡣�򵥵�˵��������������ܿ��򣬺�̨���������Կ���

- demo1
ͨ��ʹ��`http-proxy-middleware���`���ú�˵Ĵ����� http://localhost:3000 ����

- demo2
��ʹ�ò�����ô���ֱ��ʹ��`httpģ��`�������� �� http://localhost:3000 ����


### 8. WebSocket����
WebSocket��һ��ͨ��Э�飬ʹ��ws://���Ǽ��ܣ���wss://�����ܣ���ΪЭ��ǰ׺����Э�鲻ʵ��ͬԴ���ߣ�ֻҪ������֧�֣��Ϳ���ͨ�������п�Դͨ�š�
> ��Ŀ���е�ַ�� http://localhost:3000/a.html

