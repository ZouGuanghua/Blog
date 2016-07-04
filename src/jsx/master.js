const Master = React.createClass({
  componentWillMount(){
    var params = this.props.params;
    console.log(params);
    if(!params.tag && !params.article){
      //console.log("this",this);
      //console.log("this.props",this.props);
      //console.log("this.props.router",this.props.router);
      this.props.history.push("/tag/HTML&CSS");
    }
  },
  render(){
    return(
        <div><Blog params={this.props.params}/></div>
    )
  }
});
