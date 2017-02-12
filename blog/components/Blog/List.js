import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {fetchArticles} from '../../actions/blogAction'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'
import '../../public/less/section.less'

class List extends Component {
	componentDidMount() {
		const {fetchArticles} = this.props;
		fetchArticles();
	}
	render() {
		const {list, pathname} = this.props;
		let item
		const flag = pathname.substring(5);
		if(pathname==='/' || flag==='all') {
			item=list.map((v, i) => {
				return (
					<li key={i} className="li_list">
          	<div className="list">

            	<div className="left">
              	<div><i className="fa fa-tag" aria-hidden="true"></i><span>{v.tag}</span></div>
              	<div><i className="fa fa-calendar" aria-hidden="true"></i><span>{v.date}</span></div>
            	</div>

            	<div className="right">
              	<h2>{v.title}</h2>
              	<p className="des">{v.description}</p>
              	<p className="more"><Link to={`/article/${v.tag}/${v.id}`}>Read More</Link></p>
            	</div>

          	</div>
        	</li>
				);
			})
		}else{
			item=list.filter(v => v.tag === flag).map((v, i) => {
				return (
					<li key={i} className="li_list">
          	<div className="list">

            	<div className="left">
              	<div><i className="fa fa-tag" aria-hidden="true"></i><span>{v.tag}</span></div>
              	<div><i className="fa fa-calendar" aria-hidden="true"></i><span>{v.date}</span></div>
            	</div>

            	<div className="right">
              	<h2>{v.title}</h2>
              	<p className="des">{v.description}</p>
              	<p className="more"><Link to={`/article/${v.tag}/${v.id}`}>Read More</Link></p>
            	</div>

          	</div>
        	</li>
				);
			})
		}
		return (
			<div id='list'><ul>{item}</ul></div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	const list = state.byId;
	const {pathname} = ownProps.location
	return {
		list,
		pathname
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchArticles}, dispatch);
}
export default connect (mapStateToProps, mapDispatchToProps)(List);