{
	id: 3,
	details: '''
 #### 六种数据类型 ####
 原始类型：number
        string
        boolean
        null
        undefined

object 对象类型：Function
                Array
                Date

 ##### NaN 不等于任何数  包括它自己 #####

 #### 包装对象 ####
number string boolean  类型不是对象但可以访问一些基本函数，比如：
```
var str="string";
str.length   //  6
```
因为在此过程中JS将其转化为 String 对象了 执行之后便销毁了，所以
str.t=6;
alert(t);   //   undefined

 #### 类型检测 ####
 1. typeof null ===" object "  适合函数对象和基本类型的判断，但 null  没用
 2. obj（对象）  instanceof  Object（函数对象）
 3. Object.prototype.toString

关于原型 <a href="http://www.cnblogs.com/yjf512/archive/2011/06/03/2071914.html">prototype</a>

 #### 运算符 ####
逗号运算符   取最右边的
var val=(1,2,3);     // val=3

 #### 关于数组 ####
 1. arr.unshift(0);      在数组第一个位置添加元素 0
 2. arr.length-=1;    arr.pop();      删除尾部元素
 3. arr.shift();      删除头部元素
 4. for(i in arr){}    in 不确定顺序   且还会遍历原型

 ##### 数组方法 #####
 1. arr.unshift(0);      在数组第一个位置添加元素 0
 2. arr.length-=1;    arr.pop();      删除尾部元素
 3. arr.shift();      删除头部元素
 4. for(i in arr){}    in 不确定顺序   且还会遍历原型

 5. join        将数组转化为字符串
 6. reverse ()   倒序
 7. sort()    转化为字符串排序
 8. arr.concat(4,5)   数组合并   不修改原数组
 9. slice()     返回部分数组   修改原数组

 #### 闭包 ####
<a href="http://kb.cnblogs.com/page/110782/">详情</a>

 #### 随记 ####
 1. call() 方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法
 2. Object.create()   创建一个空对象 并且对象的原型指向它的参数
 3. 绝不要使用在文档加载之后使用 document.write()。这会覆盖该文档
 4. 对于输入框  onchange 事件和  onfocus  事件  onclick   等事件  均是 HTML DOM Event 对象
 5. JS是基于 prototype的
 6. setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式

 #### 关于const ####
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/const">详情</a>
'''
}
