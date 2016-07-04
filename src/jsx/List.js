//List
var List=React.createClass({
  render:function(){
    //console.log(Article);
    const list = Article.filter((v)=>v.tag === this.props.tag).map((v,i)=>{
      return (
        <li key={i} className="li_list">
          <div className="list">

            <div className="left">
              <div><i className="fa fa-tag" aria-hidden="true"></i><span>{v.tag}</span></div>
              <div><i className="fa fa-calendar" aria-hidden="true"></i><span>{v.date}</span></div>
            </div>

            <div className="right">
              <h2>{v.title}</h2>
              <p className="des">{v.description}</p>
              <p className="more"><Link to={"/article/"+v.id}>Read More</Link></p>
            </div>

          </div>
        </li>
      )
    });
    return (
      <ul>
        {list}
      </ul>
    );
  }
});
