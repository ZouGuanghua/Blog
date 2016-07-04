//左右合并
var Section = React.createClass({

//   getInitialState:function(){
//     return{
//       index:"html_css",
//       rm:-1
//     }
//   },
//
//  handUserClick:function(index){
//    this.setState({
//      index:index,
//      rm:-1
//    });
//
//  },
//
// readmoreClick:function(rm){
//   this.setState({
//     rm:rm
//   });
// },

  render:function(){
    return(
      <section>
        <Article_list  />
        <Article_infor params={this.props.params}  />
      </section>
    );
  }
});
