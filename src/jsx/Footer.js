//底部
var Footer = React.createClass({
  render:function(){
    return(
      <footer>
        <div className="footer">
          <div className="one">
            <a href="#">Home</a>
            <div><i className="fa fa-qq" aria-hidden="true"></i><span>1328903109</span></div>
          </div>
          <div className="two">
            <a href="#">Resume</a>
            <div><i className="fa fa-phone" aria-hidden="true"></i><span>151 7326 6501</span></div>
          </div>
          <div className="three">
            <a href="#">Project</a>
            <div><i className="fa fa-github" aria-hidden="true"></i><a href="#">github.com/ZouGuanghua</a></div>
          </div>
        </div>
      </footer>

    );
  }
});
