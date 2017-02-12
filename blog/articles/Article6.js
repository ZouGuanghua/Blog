{
	id: 6,
	details: '''

fullPage.js 是一个基于 jQuery 的插件，它能够很方便、很轻松的制作出全屏网站。
GitHub 主页：<a href='https://github.com/alvarotrigo/fullpage.js'>https://github.com/alvarotrigo/fullpage.js</a>

 ### 一、引入 jQuery  ###
 <a href='https://cdnjs.com'>https://cdnjs.com</a>

 ```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.8.1/jquery.fullPage.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.9/jquery.fullPage.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/move.js/0.5.0/move.min.js"></script>
 ```

### 二、激活fullPage效果 ###
 ```
 $(document).ready(funcstion(){
 $("#fullpage").fullpage();
});
  ```

### 三、fullPage 配置项 ###

#### 1、sectionsColor ####
设置背景颜色
  ```
sectionsColor:['green','orange','gray']
  ```

#### 2、controlArrows ####
定义是否通过箭头来控制左右两侧幻灯片，默认为 true，在移动设备上，我们可以通过滑动来操作幻灯片

#### 3、verticalCentered ####
 每一页的内容是否垂直居中，默认为 true ，一般我们保持默认值


 #### 4、scrollingSpeed
 滚动速度，单位为毫秒，默认为700
 #### 5、anchors
 定义锚链接，默认值为 [ ] 。有了锚链接，用户就可以快速打开定位到某一页面。
 注意定义锚链接的时候，值不要和页面中任意的 id 或 name 相同，尤其是在 IE 浏览器下，而且
 定义时不需要加 #    添加 active 类名 可直接定位到该页
 #### 6、lockAnchors
 是否锁定锚链接，默认为 false 。如果设置为 true ，那么定义的锚链接，也就是 anchors 属性则没有效果。
 #### 7、easing
 定义页面 section 滚动的动画方式，默认为 easeInOutCubic，如果修改此项，需要引入 jquery.easings插件，或者 jquery ui
 #### 8、css3
 是否使用 CSS transform 来实现滚动效果，默认为 true ，这个配置项可以提高支持 css3 的浏览器，比如一定设备等的速度，如果浏览器不支持 css3，则会用 jquery 来代替 css3 实现滚动效果
 #### 9、loopTop
 滚动到最顶部后是否连续滚动到底部，默认为 false
 #### 10、loopBottom
 滚动到最底部后是否连续滚动回顶部，默认为 false
 #### 11、loopHorizontal
 横向 slider 幻灯片是否循环滚动，默认为 true
 #### 12、autoScrolling
 是否使用插件的滚动方式，默认为true，如果选择 false ，则会出现浏览器自带滚动条，将不会按页滚动，而是按照滚动条的默认行为来滚动
 #### 13、scrollBar
 是否包含滚动条，默认为 false ，如果设置为 true ，则浏览器自带的滚动条出现，页面滚动时还是按页滚动，但是滚动条的默认行为也有效
 #### 14、paddingTop/paddingBottom
 设置每一个 section 顶部和底部的 padding ，默认为0。一般如果我们需要设置一个固定在顶部火星和底部的菜单、导航、元素等，可以使用这两个配置项。
 #### 15、fixedElements
 固定元素，默认为 nnull ，需要配置一个 jquery 选择器。在页面滚动的时候，fixedElements 设置的元素固定不动
 #### 16、keyboardScrolling
 是否可以使用键盘方向导航，默认为 true
 #### 17、tochSensitivity
 在移动设备中滑动页面的感性，默认为5，是按百分比来衡量的，最高为100，越大则越难滑动
 #### 18、continuousVertical
 是否循环滚动，默认为 false 。如果设置为 true ，则页面会循环滚动，而不像 loopTop 或 loopBottom 那样出现跳动，注意这个属性和 loopTop 、 loopBottom 不兼容，不要同时设置
 #### 19、animateAnchor
 锚链接是否可以控制滚动动画，默认为 true 。如果设置为 false ，则通过锚链接定位到某个页面时显示不再有动画效果
 #### 20、recordHistory
 是否记录历史，默认为 true ，可以记录页面滚动的历史，通过浏览器的前进后退来导航。注意如果设置了 autoScrolling:false，那么这个配置也将被关闭，即设置为 false
 #### 21、menu
 绑定菜单，设定的相关属性与 anchors 的值对应后，菜单可以控制滚动，默认为 false 。可以设置为 jquery选择器
 #### 22、navigation
 是否显示导航，默认为 false 。如果设置为 true ，会显示小圆点，作为导航
 #### 23、navigationPosition
 导航小圆点的位置，可以设置为 left 或者 right
 #### 24、navigationTooltips
 导航小圆点的 tooltips 设置，默认为 [ ]，注意按照顺序设置
 #### 25、showActiveTooltip
 是否显示当前页面的导航的 tooltip 信息，默认为 false
 #### 26、slidesNavigation
 是否显示横向幻灯片的导航，默认为 false
 #### 27、slidesNavPosition
 横向幻灯片导航的位置，默认为 bottom，可以设置为 top 或 bottom
 #### 28、scrollOverflow
 内容超过满屏后是否显示滚动条，默认为 false 。如果设置为 true ，则会显示滚动条，如果要滚动查看内容，还需要 jquery.slimscroll 插件的配合。该插件主要用于模拟传统的浏览器滚动条
 #### 29、sectionSelector
 section 选择器，默认为 .section
 #### 30、slideSelector
 slide 的选择器，默认为 .slide

 ### 四、fullPage 方法 ###

1. moveSectionUp()
向上滚动一页
2. moveSection
向下滚动一页
3. moveTo(section,slide)
滚动到第几页，第几个幻灯片，注意，页面是从1开始，而幻灯片，是从0开始
4. silentMoveTo(section,slide)
滚动到第几页，和 moveTo 一样，但是没有动画效果
5. moveSlideRight()
幻灯片向右滚动
6. moveSlideLeft()
幻灯片向左滚动
<br/>
7. setAutoScrolling(boolean)：动态设置 autoScrolling
8. setLockAnchors(boolean)：动态设置  ockAnchors
9. setRecordHistory(boolean)：动态设置 recordHistory
10. setScrollingSpeed(boolean)：动态设置 scrollingSpeed
<br/>

11. setAllowScrolling(boolean,[directions])
添加或删除鼠标滚轮/滚动控制，第一个参数 true 为启用，false为禁用，后面的参数为方向，取值包含 all,up,down,,left,right，可以使用多个，逗号分隔
<br/>
12. destroy(type)
销毁 fullpage 方法，type 可以不写，或者使用 all，不写 type，fullpage 给页面添加的样式和 html 元素还在，如果使用 all，则样式、html 等全部销毁，页面恢复和不使用 fullpage 效果相同
13. rebuild()
重新更新页面和尺寸，用于通过 ajax 请求后改变了页面结构之后，重建效果。

### 五、Lazy Loading
在 img 标签和 video 标签中将 src 改成 data-src 则可延迟加载图片和视频

### 六、fullPage 回调函数
1. afterLoad(anchorLink,index)
滚动到某一 section，且滚动结束后，会触发一次回调函数，函数接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
我们可以根据 anchorLink 和 index 参数值的判断，触发相应事件
2. onLeave(index,nextIndex,direction)
在我们离开一个 section 时，会触发一次此回调函数，接收 index 、nextInt 和 direction 3个参数：
3. index 是离开的“页面”序号，从1开始计算；
4. nextInt 是滚动到的目标“页面” 的序号，从1开始计算；
5. direction 判断往上滚动还是往下滚动，值是 up 或 down。
通过 return false ; 可以取消滚动
6. afterRender()
页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
7. afterResize()
浏览器窗口尺寸改变后的回调函数
8. afterSlideLoad(anchorLink,index,slideAnchor,slideIndex)
滚动到某一幻灯片后的回调函数，与 afterLoad 类似，接收 anchorLink、index、slideIndex、direction 4个参数
9. onSlideLeave(anchorLink,index,slideIndex,direction,nextSlideIndex)
在我们离开一个 slide 时，会触发一次此回调函数，与 onLeave 类似
'''
}
