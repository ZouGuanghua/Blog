//全部合并
const Blog = React.createClass({
  getInitialState(){
    return {showBack:false}
  },
  onWeelHandle(){
    if(document.body.scrollTop > 100){
      this.setState({showBack:true});
    }else{
      this.setState({showBack:false});
    }
  },
  onClick(){
    document.body.scrollTop = 0;
    this.setState({showBack:false});
  },
  render(){
    return(
      <div id="in"  onWheel={this.onWeelHandle}>
      <Header />
      <Section params={this.props.params}/>
      <Footer />
      <BacktoTop  onClick={this.onClick} showBack={this.state.showBack}/>
      </div>
    );
  }
});
