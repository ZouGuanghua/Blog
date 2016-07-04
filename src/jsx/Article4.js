'use strict';
const Article4 = `
 #### slideUp()方法 ####
通过使用滑动效果，隐藏被选元素，如果元素已显示出来的话
 1. $(selector).slideUp(speed,callback)
 2. speed 可选，默认为 "normal" ，可能的值有：毫秒，"show"，"fast"，"normal"
 3. callback 可选， slideUp 函数执行完后，要执行的函数

 #### sliceDown()方法 ####
slideDown() 方法通过使用滑动效果，显示隐藏的被选元素
1.$(selector).slideDown(speed,callback)
2.参数含义与 slideUp 一样

 #### mousemove()方法 ####
当鼠标指针在指定的元素中移动时，就会发生 mousemove 事件

 #### mouseleave()方法 ####
当鼠标指针离开元素时，会发生 mouseleave 事件

 #### animate()方法 ####
 1. animate() 方法执行 CSS 属性集的自定义动画
 2. <a herf="http://www.w3school.com.cn/jquery/effect_animate.asp">详情</a>

 #### setTimeout(code,millisec) ####
该方法用于在指定的毫秒数后调用函数或计算表达式

 #### on()方法 ####
 1. jQuery on()方法是官方推荐的绑定事件的一个方法
 2. $(selector).on(event,childSelector,data,function,map)
 3. <a href="http://www.cnblogs.com/leejersey/p/3545372.html">扩展</a>

 #### siblings()方法 ####
获得匹配集合中每个元素的同胞，通过选择器进行筛选是可选的

 #### Math.min() ####
 1. 不支持数组   Math.min.apply(null,hArr);   即可
 2. apply的第一个参数传递作用域，第二个参数传递数组。

 #### 关于宽高 ####
 1. clientHeight  clientWidth   浏览器的可视宽高
 2. offsetWidth offsetHeight   元素自身的宽高
 3. offsetTop  offsetLeft  元素距 页面顶部   左边   的距离  固定的  不随滚动而改变
 4. scrollTop   滚动条滚动的距离
 5. scrollWidrh   clientWidth  +  滚动条滚动的距离

 6. jquery 的 outerWidth 属性 包含  magin  padding border 宽度在内的，而 width  不包括


`;
