{
	id: 5,
	details: '''
	 #### render：入口函数 ####
	接口定义：
	ReactComponent render( ReactElement element, DOMElement container, [function callback] )
	
	 #### babel 和 jsx 的区别 ####
	区别就在于 babel 支持将按照ES6写的代码转成ES5格式的代码，以便让其能在现代浏览器上正常运行，用jsx， 只能用ES5的语法
	
	
	 #### props和state的区别 ####
	需要理解的是，props是一个父组件传递给子组件的数据流，这个数据流可以一直传递到子孙组件。而state代表的是一个组件内部自身的状态（可以是父组件、子孙组件）。
	改变一个组件自身状态，从语义上来说，就是这个组件内部已经发生变化，有可能需要对此组件以及组件所包含的子孙组件进行重渲染。
	而props是父组件传递的参数，可以被用于显示内容，或者用于此组件自身状态的设置（部分props可以用来设置组件的state），不仅仅是组件内部state改变才会导致重渲染，父组件传递的props发生变化，也会执行。
	既然两者的变化都有可能导致组件重渲染，所以只有理解pros与state的意义，才能很好地决定到底什么时候用props或state
	'''
}
