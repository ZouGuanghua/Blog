import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../public/less/footer.less'

class Footer extends Component {
	render() {
		return (
			<footer>
        <div id="footer">
          <div className="one">
            <a href="#">Home</a>
            <div><i className="iconfont">&#xe602;</i><span>1328903109</span></div>
          </div>
          <div className="two">
            <a href="#">Resume</a>
            <div><i className='iconfont'>&#xe600;</i><span>185 7152 7490</span></div>
          </div>
          <div className="three">
            <a href="#">Project</a>
            <div><i className='iconfont'>&#xe601;</i><a href="#">github.com/ZouGuanghua</a></div>
          </div>
        </div>
      </footer>
		);
	}
}

export default Footer;