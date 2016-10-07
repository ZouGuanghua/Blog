{
	id: 7,
	details: '''

	Redux 试图让 state 的变化变得可预测

	 #### 三大原则： ####
	 1. 整个应用的 state 被储存在一棵 object tree 中，并且这个 object tree 只存在于唯一一个 store 中。
   2. State 是只读的，惟一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
   3. 为了描述 action 如何改变 state tree ，需要编写 reducers。
	 
	 ##### action #####
	 它是 store 数据的唯一来源。一般来说你会通过store.dispatch() 将 action 传到 store。
	 bindActionCreators() 可以自动把多个 action 创建函数 绑定到 dispatch()方法上。

	 ##### reducer #####
	 reducer 就是一个纯函数，接收旧的 state 和 action，返回新的 state。
	 combineReducers()将所有 reducer 的结果合并成一个大的对象。

	 ##### store #####
	 Redux 应用只有一个单一的 store，包含所有state。

	'''
}
