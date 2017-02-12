import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchContent, fetchArticles} from '../../actions/blogAction'
import {bindActionCreators} from 'redux'
import marked from 'marked'
import '../../public/less/section.less'

class Content extends Component {
	componentDidMount() {
		const {fetchContent, fetchArticles, contentId} = this.props;
		fetchArticles();
		fetchContent(parseInt(contentId, 10));
	}
	render() {
		const {contentId, content, list} = this.props;
		const titleInfo = list[parseInt(contentId, 10)];
		if(!(content && content.details)) return null
		return (
			<div id='content'>
			<div className="con">
      	<h2>{titleInfo.title}</h2>
      	<div className="td">
        	<div><i className="iconfont">&#xe604;</i><span>{titleInfo.tag}</span></div>
        	<div><i className="iconfont">&#xe605;</i><span>{titleInfo.date}</span></div>
      	</div>
      	<p dangerouslySetInnerHTML={{__html:marked(content.details)}}></p>
      </div>
      </div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	const contentId = ownProps.params.id;
	const content = state.content;
	const list = state.byId;
	return {
		contentId,
		list,
		content
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchContent, fetchArticles}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);