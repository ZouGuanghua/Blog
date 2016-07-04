//右边，展示信息
var Article_infor = React.createClass({

  render:function(){
    const params = this.props.params;
    if(params.tag){
      return (<article><List tag={params.tag}/></article>);
    }else{
      return (<article><Content article={params.article}/></article>);
    }
  }
});
