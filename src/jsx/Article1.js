'use strict';
const Article1 = `

### 选择器 ###

#### 1、属性选择器 #####

 1. [att *= val]  表示用attr表示的属性的属性值中包含用 val 指定的字符
\`\`\`
[id *= section1]{
  background-color:yellow;
}
\`\`\`
 2. [attr ^= val ] 属性值的开头字符为用 val 指定的字符
 3. [attr $= val ] 属性值的结尾字符为用 val 指定的字符

#### 2、结构性伪类选择器 ####

 1. first-line  向某个元素的第一行文字使用样式
\`\`\`
p:first-line{
  color:#0000FF;
}
\`\`\`
 2. :first-letter 向某个元素的首字母 或 第一个字 添加样式
 3. :before  向元素之前插入内容
 4. :after  向元素后面插入内容

 5. root 选择器：将样式绑定到页面的根元素中  即包含整个页面的<html>部分
\`\`\`
：root{
  background-color:red;
}
\`\`\`
 6. not 选择器：想对某个结构元素使用样式，但想排除其某些子元素不使用这个样式，可以使用 not
\`\`\`
body *:not(h1){
  background-color:yellow;
}
\`\`\`
 7. empty 选择器：用来指定当元素中内容为空白时使用的样式，比如一个表格有空白的地方时可以使用
 8. target 选择器：对页面中某个 target 元素（该元素的 id 被当做页面中的超链接使用）指定样式。
例：页面中包含几个 div 元素，每个 div 都存在一个书签，当用户点击了页面中的超链接（a 标签）跳转到该 div 元素时，
该 div 元素使用 target 选择器中指定的样式

 9. ：first-child 、:last-child   单独指定第一个元素和最后一个元素
\`\`\`
//css
li:first-child{
  background-color:blue;
}
//html
<ul>
  <li>列表1</li>
  <li>列表2</li>
  <li>列表3</li>
</ul>
\`\`\`
 10. 对指定序号的元素指定样式：:nth-child(n)  :nth-last-child(n)
:nth-child(3)  表示第三个元素   :nth-child(odd) 正数下来的奇个子元素   even  为偶
:nth-last-child(3)  表示倒数第三个元素     .......倒数下来的....
\`\`\`
li:nth-last-child(even){...}
\`\`\`
使用 :nth-child 和 :nth-last-child #####产生的问题#####：
:nth-child 选择器在计算子元素是第奇个元素还是第偶个元素时，是连同父元素中的所有子元素一起计算的
 11. :nth-of-type 和 :nth-last-of-type 可以解决上述问题
\`\`\`
h2:nth-of-type(odd){...}
\`\`\`
 12. 循环使用样式：  :nth-child(an+b)  a表示每次循环中包括几种样式，b表示指定样式在循环中所处的位置
\`\`\`
li:nth-child(4n+1){...}
li:nth-child(4n+2){...}
li:nth-child(4n+3){...}
li:nth-child(4n+4){...}
\`\`\`
 13. :only-child  父元素中只有一个子元素时才使用的样式

#### 3、UI 元素状态伪类选择器 ####
1. E:hover  当鼠标移到上面时   E:active   指定元素被激活时（鼠标按下还没有松开）  E:focus   获得光标焦点时
2. E:enabled   元素处于可用状态时的样式   E:disabled  元素处于不可用状态时的样式
3. E:read-only  元素处于只读状态时的样式   E:read-write  非只读状态时
4. E:checked  用来指定当表单中的 radio 单选框或 checkbox 复选框处于选中状态时的样式
  E:default   默认处于选中状态的单选框或复选框的样式
  E.indeterminate  一组单选框中没有任何单选框被设定为选取状态时整组单选框的样式，如 果用户选取了其中任何一个单选框，则该样式被取消指定
5. E:selection   当元素处于选中状态时的样式

6. E:invalid / E:valid  当元素内容通过HTML5使用元素的诸如 required、pattern 等属性所指定的检查或元素内容  不符合/符合  元素的规定格式时的样式
\`\`\`
//css
input[input="text"]:invalid{ background-color:red; }
input[input="text"]:valid{ background-color:white; }
//html
<form>
  <p>请输入文字：<input type="text" required/></p>
</form>
\`\`\`
该实例中，当元素没有被填入内容时，元素背景为红色，当元素中填入内容后背景颜色为白色
 7. E:required / E:optional 用来指定允许使用 required 属性，且  已经指定/未指定  required 属性的 input 元素、select 元素以及 textarea 元素的样式
 8. E:in-range / E:out-of-range  实际输入值在某范围 内/外 时使用的样式   通过 min 和 max 属性来指定
 9. ~  通用兄弟选择器
\`\`\`
//css
div ~ p{background-color:#ccc;}
\`\`\`
对所有 div 元素之后的，与 div 元素处于同级的 p 元素指定其背景色

### 使用选择器在页面中插入内容 ###

#### 1、插入文字 ####
使用 before 选择器在元素前面插入内容，使用 after 选择器在元素后面插入内容，在选择器的 content 属性中定义要插入的内容。
将 content 属性值设置为 none 或 normal  来指定个别元素不进行插入。只有当使用 before 选择器和 after 选择器时， normal 和 none 的作用才相同。

#### 2、插入图像文件 ####
\`\`\`
h2:before{
  content:url(mark.jpg);
}
\`\`\`
 1. attr(属性名)，alt 属性的作用是用来指定当图像不能正常显示时所显示的替代文字
\`\`\`
//css
img:after{content:attr(alt);}
//html
<img src="sky.jpg" alt="蓝天白云" />
\`\`\`

#### 3、使用 content 属性来插入项目编号 ####
 1. 在 content 属性中使用 counter 属性值来追加连续编号，还需要在元素的样式中追加对元素的 counter-increment 属性的指定（设置为 before/after 选择器中指定的计数名）
\`\`\`
//可前后加字符
h1:before{content:counter(mycounter)'.';}   //1.  2.
h1:before{content:'第'counter(mycounter)'章';}  //第1章  第2章
h1{
  counter-increment: mycounter;
  ....    //可指定追加编号的样式
  }
\`\`\`
 2. content : counter(计数器名，编号种类)
\`\`\`
h1:before{content:counter(mycounter,upper-alpha)'.';}
\`\`\`
 3. 编号嵌套：使用 counter-reset 属性将中编号进行重置
\`\`\`
//css
h1:before{ content: counter(mycounter)'.';}
h1{ counter-increment: mycounter;counter-reset: subcounter;}
h2:before{ content: counter(subcounter)'.';}
h2{ counter-increment: subcounter;margin-left: 40px;}
//html
<h1><h2></h2><h2></h2><h2></h2></h1>
<h1><h2></h2><h2></h2><h2></h2></h1>
\`\`\`
 4. 中编号中嵌入大编号
\`\`\`
h2:before{ content: counter(mycounter)'-'counter(subcounter)'.';}
\`\`\`
 5. 在字符串两边添加嵌套文字：使用 content 属性的 open-quote 属性值和 close-quote 属性值
\`\`\`
//css
h1:before{content: open-quote;}
h1:after{content: close-quote;}
h1{quotes:"(" ")";}
//html
<h1>标题</h1>   // (标题)
\`\`\`

### 文字与字体相关样式 ###
 1. text-shadow: length length length color;   分别代表：阴影离开文字的横向距离、阴影离开文字的纵向距离、阴影的模糊半径、阴影的颜色，前两个必须指定
 2. 使用 word-break 属性来让文字自动换行  可以使用的值有：normal keep-all break-all
 3. word-wrap 属性可以使用的属性值有 normal 与 break-word 两个。使用 normal 属性值时浏览器保持默认处理，只有在半角空格或连字符的地方进行换行。使用 break-word 时浏览器可在长单词或 URL 地址内部进行换行
 4. 使用 font-face 属性来利用服务器端字体
 5. 修改字体种类而保持字体尺寸不变：font-size-adjust 属性，属性值为对应的 aspect 值

### 盒的相关样式 ###

#### 1、基本盒类型 ####
 1. inline-block：  并列显示的元素底部对齐
 2. inline-table
 3. inline-item：  使用 list-style-type 属性设置列表标记  比如 值为 circle
 4. run-in 类型和 compact 类型：   如果元素后面还有 block 类型的元素， run-in 类型的元素将被包含在后面 block 类型元素的内部，而 compact 类型的元素将被放置在 block 类型元素的左边
 5. 表格相关类型
\`\`\`
table  table / inline-table
tr     table-row   行
td     table-cell  单元格
th     table-cell  列标题
tbody  table-row-group  所有行
thead  table-header-group 表头
\`\`\`
 6. none 类型

#### 2、对于盒中容纳不下的内容的显示 ####
 1. overflow 属性
  hidden：超出部分被隐藏
  scroll：div 元素中将出现固定的水平滚动条与垂直滚动条
  auto：根据需要出现滚动条
  visible：与不使用 overflow 属性时显示一样
 2. overflow-x 、overflow-y：单独指定水平和垂直方向上的显示方法
 3. text-overflow 属性
  ellipsis：超出部分显示为省略符号“...”，只在#####水平方向#####有效

#### 3、对盒使用阴影 ####
 1. box-shadow:length length length color   分别指阴影离开文字的横向距离、阴影离开文字的纵向距离、阴影的模糊半径、阴影的颜色

#### 4、针对指定元素的宽度与高度计算方法 ####
 1. box-sizing可以指定 width 和 height 值是否包含元素的内容补白区域以及边框，属性值为：
  content-box ：内容区域为 width 设定的宽度
  border-box：总宽度为 width 设定的宽度

### 背景与边框相关样式 ###

#### 1、新增属性 ####
 1. background-clip：指定背景的显示范围
 2. background-origin：指定绘制背景图像的绘制起点
 3. background-size ：指定背景中图像的尺寸
 4. background-break：指定内联元素的背景图像进行平铺时的循环方式

#### 2、在一个元素中显示多个背景图像 ####
1.利用逗号分隔符来同时指定
2.background-repeat、background-position 可以单独指定背景图像中某个图像文件的平铺方式和放置位置

 #### 3、圆角边框的绘制 ####
 1. border-radius : 40px 20px;  第一个半径指边框左上角和右下角，第二个半径指边框右上角和左下角
 2. 可以分别指定四个角的半径：border-radius-topleft、border-radius-topright、border-radius-bottomright、border-radius-bottomleft

 #### 4、使用图像边框 ####
 1. border-img: url(图像文件路径名)  A B C D/18px
   A、B、C、D 分别指浏览器自动把边框使用到的图像进行分隔时的上边距、右边距、下边距以及左边距   18px 设定了边框的宽度
 2. 指定四条边中图像的显示方法
repeat：平铺  、 stretch：拉伸  、round：当最后一幅图像不能被完全显示时，如果能够显示的部分不到图像的一半，就不显示最后的图像，，然后扩大前面的图像，使得刚好平铺完整；如果能够显示的部分超过一半，则缩小，使得刚好平铺。
\`\`\`
border-img:url(borderimage.png) 18/5px repeat stretch;
\`\`\`

 ### CSS3中的变形处理 ###
transform
 1. transform:rotate(45deg)   顺时针旋转45度
 2. transform:scale(0.5,2)      缩放处理，水平方向缩小50%，垂直方向放大一倍
 3. transform:skew(30deg,30deg)   倾斜处理，水平垂直方向各旋转30度，只有一个参数时代表水平方向
 4. trannsform:translate(50px,50px)   移动，水平垂直方向各移动50px的距离，只有一个参数时代表水平方向
 5. transform-origin: left  bottom  指定变形的基准点，默认是元素的中心点。

 ### CSS3中的动画功能 ###

 #### 1、transition ####
 1. transition: property duration timing-function  <br/>
property 表示对哪个属性进行平滑过渡，duration表示在多长时间内完成属性的平滑过渡，timing-function 表示通过什么方法来进行平滑过渡。可设置多个属性一起进行平滑过渡，用逗号隔开即可

 #### 2、animation ####
 1. 与 transition 类似，不同的是，通过定义关键帧来实现更为复杂的动画效果
\`\`\`
ycolor{
  0%{...}
  40%{...}
  70%{...}
  100%{...}
}
div:hover{
  animation-name:mycolor;
  animation-duration:5s;
  animation-timing-function:linear;
  animation-iteration-count:infinite;  //无限次播放。设置为整数值，则播放次数就等于该整数值
}
\`\`\`

### CSS渐变 ###
CSS3 Gradient 分为 linear-gradient（线性渐变）和 radial-gradient（径向渐变）
<a href="http://www.cnblogs.com/lhb25/archive/2013/01/30/css3-linear-gradient.html">更多</a>


### 布局相关样式 ###

#### 1、多栏布局 ####
1. column-count: 2;     分为两栏
2. column-width         单独设定每一栏的宽度
3. column-gap            设定多栏之间的的间隔距离

#### 2、盒布局 ####
1. box
2. flex

### 其他样式和属性 ###

#### 1、根据浏览器的窗口来选择样式 ####
\`\`\`
@media screen/print and (min-width:1000px){...}
\`\`\`

#### 2、颜色相关样式 ####
1. RGB：红色值（R）、绿色值（G）、蓝色值（B）、alpha 通道值（A）
\`\`\`
background-color:rgba(255,0,0,0.5);
\`\`\`
2. HSL：色调（H）、饱和度（S）、亮度（L）
3. alpha 通道可以单独针对元素的背景色和文字颜色来指定透明度，而 opcity 属性只能指定整个元素的透明度
4. 如果将颜色值指定为 transparent ，则会将背景、文字或边框等的颜色设定为完全透明

`;
