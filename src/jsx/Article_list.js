//左边：分类信息
var Article_list = React.createClass({
  render:function(){
    return(
      <aside className="aticle_list">
          <nav>


               <ul className="left">
                  <li><Link to={"/tag/JavaScript"}>JavaScript</Link></li>
                  <li><Link to={"/tag/HTML&CSS"}>HTML&CSS</Link></li>
                </ul>


              <div className="center"></div>

              <ul className="right">

                <li><Link to={"/tag/jQuery"}>jQuery</Link></li>
                <li><Link to={"/tag/React"}>React</Link></li>
                <li><Link to={"/tag/Others"}>Others</Link></li>

              </ul>

         </nav>
    </aside>
    );
  }
});
