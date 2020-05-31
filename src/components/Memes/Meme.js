import React, { useContext, useEffect, useState } from "react";
import MemeContext from "../../context/meme/memeContext";
import Preloader from "../layout/Preloader";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";
import NewMeme from "./NewMeme";
// let username;
// let password;
// if (process.env.NODE_ENV !== "production") {
//   username = process.env.REACT_APP_IMGFLIP_USERNAME;
//   password = process.env.REACT_APP_IMGFLIP_PASSWORD;
// } else {
//   username = process.env.IMGFLIP_USERNAME;
//   password = process.env.IMGFLIP_PASSWORD;
// }

const Meme = ({ match }) => {
  let redirect = null;
  const stringigy = (urlParams) => {
    const params = Object.entries(urlParams).map(
      ([key, value]) => `${key}=${value}`
    );
    return "?" + params.join("&");
  };
  let key = 0;
  const memeContext = useContext(MemeContext);
  let { getMemes, memes, setUrl } = memeContext;
  let meme;
  useEffect(() => {
    getMemes();
    //eslint-disable-next-line
  }, []);
  for (let m of memes) {
    if (m.id === match.params.id) meme = m;
  }
//eslint-disable-next-line
  const [box1, setbox1] = useState("");
  //eslint-disable-next-line
  const [box2, setbox2] = useState("");
  //eslint-disable-next-line
  const [box3, setbox3] = useState("");
  //eslint-disable-next-line
  const [box4, setbox4] = useState("");
  //eslint-disable-next-line
  const [box5, setbox5] = useState("");
  if (meme === undefined) {
    return <Preloader />;
  }
  const { url, name, width, height, box_count } = meme;
  const onChange = (e) => {
    //eslint-disable-next-line
    let t = eval("set" + e.target.id);
    t(e.target.value);
  };
  const onClick = async (e) => {
    e.preventDefault();
    if (box1 === "" && box2 === "" && box3 === "" && box4 === "") {
      M.toast({ html: "Fields cannot be empty" });
      return;
    }

    const urlParams = {
      template_id: match.params.id,
      username:'codewithak1',
      password:'codewithak1',
    };
    let urlString = stringigy(urlParams);
    let u = "https://api.imgflip.com/caption_image" + urlString;
    u += `&boxes[1][text]=${box1}`;
    u += `&boxes[2][text]=${box2}`;
    u += `&boxes[3][text]=${box3}`;
    u += `&boxes[4][text]=${box4}`;
    const res = await axios.post(u);
    redirect = res.data.data.url;
    setUrl(redirect);
  };
  let str = [];
  for (let i = 0; i < box_count; i++) {
    let b = `box${i + 1}`;
    str.push(
      <div className="row">
        <div className="input-field col s6">
          <input
            placeholder={`Enter text for Box ${i + 1} here`}
            id={`box${i + 1}`}
            type="text"
            className="validate"
            //eslint-disable-next-line
            value={eval(b)}
            //eslint-disable-next-line
            name={eval(b)}
            onChange={onChange}
          />
          {/* <label htmlFor="first_name">{`Box ${i + 1}`}</label> */}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="col s6 container">
        <div className="card z-depth-5">
          <div className="card-image">
            {/* <img
              className="responsive-img"
              src={url}
              alt={name}
              style={{
                minHeight: "200px",
                maxHeight: { height },
                minWidth: { width },
              }}
            /> */}
            <NewMeme url={url} name={name} height={height} width={width} />
          </div>

          <div className="card-content blue lighten-2">
            <p>{name}</p>
          </div>
        </div>
      </div>
      <br></br>
      <div className="row">
        <form className="col s12 yellow lighten-5 ">
          {str.map((s) => (
            <div key={key++}>{s}</div>
          ))}
          <button
            className="btn waves-effect waves-light blue"
            type="submit"
            name="action"
            onClick={onClick}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
  );
};

export default Meme;
