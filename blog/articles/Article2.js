
{ 
  id: 2,
  details : '''

CSS中常见的居中问题

### 一、使用 text-align:center
只能对图片，按钮，文字等行内元素(display为inline或inline-block等)进行水平居中

### 二、把margin设为auto
1. 具体来说就是把要居中的元素的margin-left和margin-right都设为auto，此方法只能进行水平的居中，且对浮动元素或绝对定位元素无效。
2. 容器一定要有固定的宽度，不然div的宽度默认的宽度是100%，不会有效果的。
### 三、使用line-height让单行的文字垂直居中
把文字的line-height设为文字父容器的高度，适用于只有一行文字的情况。

### 四、绝对定位
#### 1、宽高确定
绝对定位进行居中的原理是通过把这个绝对定位元素的left或top的属性设为50%,这个时候元素并不是居中的，而是比居中的位置向右或向左偏了这个元素宽度或高度的一半的距离，
所以需要使用一个负的margin-left或margin-top的值来把它拉回到居中的位置，这个负的margin值就取元素宽度或高度的一半。
```
.parent{
  width:200px;
  height:200px;
  border:1px solid red;
  position:relative;
}
.child{
  width:100px;height:100px;background:#000;
  position:absolute;
  left:50%;
  top:50%;
  margin-left:-50px;
  margin-top:-50px;
}
```
#### 2、宽高不确定
```
#contain{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
}
```
### 五、弹性布局
```
#father{
    display:flex;
    justify-content:center;//子元素水平居中
    align-items:center;//子元素垂直居中
}
```
'''
}
