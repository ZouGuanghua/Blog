import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import '../../public/less/section.less'

class ArticleList extends Component {

	render() {
		const {routing} = this.props;
		const pathname = routing.locationBeforeTransitions.pathname;
		const arr = pathname.split('/');
		
		return (
			<aside id='article_list'>
				<div className='title'>
					<h3>文章分类</h3>
					<p>Article Categories</p>
				</div>
				<ul>
					<li><Link to={'/tag/all'} className={pathname === '/' || arr[2] === 'all' ? 'tagActive' : ''}>ALL</Link></li>
					<li><Link to={'/tag/html&css'} className={arr[2] === 'html&css' ? 'tagActive' : ''}>HTML&CSS</Link></li>
					<li><Link to={'/tag/javascript'} className={arr[2] === 'javascript' ? 'tagActive' : ''}>JavaScript</Link></li>
					<li><Link to={'/tag/jquery'} className={arr[2] === 'jquery' ? 'tagActive' : ''}>jQuery</Link></li>
					<li><Link to={'/tag/react'} className={arr[2] === 'react' ? 'tagActive' : ''}>React</Link></li>
					<li><Link to={'/tag/redux'} className={arr[2] === 'redux' ? 'tagActive' : ''}>Redux</Link></li>
				</ul>
			</aside>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		routing: state.routing
	}
}
export default connect(mapStateToProps)(ArticleList);
