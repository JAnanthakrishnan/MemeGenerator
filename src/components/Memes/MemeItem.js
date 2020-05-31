import React from "react";
import {Link} from 'react-router-dom'
// import Meme from './Meme'
// import M from 'materialize-css/dist/js/materialize.min.js'

const MemeItem = ({ meme}) => {
  return (
    <div className="col s6 ">
      <div className="card z-depth-5">
        <div className="card-image">
            <Link to={`/meme/${meme.id}`} >
          <img src={meme.url} alt={meme.name}  style={{maxHeight:'500px'}}/>
            </Link>
        </div>
        <div className="card-content">
          <p>{meme.name}</p>
        </div>
      </div>
    </div>
  );
};
// const myStyle = {
//     minHeight
// }

export default MemeItem;
