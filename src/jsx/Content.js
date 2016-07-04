const Content = React.createClass({
  render(){
    const v = Article[this.props.article-1];
    console.log(v);
    return(
      <div className="con">
      <h2>{v.title}</h2>
      <div className="td">
        <div><i className="fa fa-tag" aria-hidden="true"></i><span>{v.tag}</span></div>
        <div><i className="fa fa-calendar" aria-hidden="true"></i><span>{v.date}</span></div>
      </div>
      <p className="con" dangerouslySetInnerHTML={{__html:marked(v.content)}}></p>
      </div>
    )
  }
});
