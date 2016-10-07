import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import ArticleList from './ArticleList'
import '../../public/less/section.less'

class Blog extends Component {
  render() {
    const {children} = this.props;
    return (
      <div id='in'>
        <Header />
        <div id='section'>
          <ArticleList />
          <div id='children'>{children}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;