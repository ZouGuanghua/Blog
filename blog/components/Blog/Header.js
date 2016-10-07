import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../../public/less/header.less'

class Header extends Component {
	render() {
		return (
			<header>
				<div className="top">
          <div className="project"><a href="https://github.com/ZouGuanghua" target="_blank">Project</a></div>
          <div className="resume"><a href="https://zouguanghua.github.io/Resume/" target="_blank">Resume</a></div>
          <div className="home"><a href="https://zouguanghua.github.io/HomePage/" target="_blank">Home</a></div>
        </div>
        <div className="mid">
          <h1>ZouGuanghua</h1>
        </div>
        <div className='bottom'>
        	<p>I'm a slow walker, but I never walk backwards.</p>
        </div>
			</header>
		);
	}
}

export default Header;