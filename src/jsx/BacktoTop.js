var BacktoTop = React.createClass({

  render:function(){
    return(
      <div className="totop"  style={{display:this.props.showBack?"block":"none"}} onClick={this.props.onClick}>
        <div><i className="fa fa-arrow-up" aria-hidden="true"></i><span>Top</span></div>
      </div>
    );
    }
});
