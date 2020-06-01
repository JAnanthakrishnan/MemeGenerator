import React, { useEffect, useContext } from "react";
import Preloader from "../layout/Preloader";
import MemeItem from "./MemeItem";
import MemeContext from "../../context/meme/memeContext";

const Memes = () => {
  const memeContext = useContext(MemeContext);
  const { loading, memes, getMemes,setUrl } = memeContext;
  useEffect(() => {
    getMemes();
    setUrl('')
    //eslint-disable-next-line
  }, []);
  // const [memes, setMemes] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const getMemes = async () => {
  //   setLoading(true);
  //   const res = await axios.get("https://api.imgflip.com/get_memes");
  //   //const data = await res.json();
  //   setMemes(res.data.data.memes);
  //   setLoading(false);
  // };
  if (loading) {
    return <Preloader />;
  } else
    return (
      <div className="row container" style={{padding:'20px'}}>
        {memes.map((meme) => (
          <MemeItem key={meme.id} meme={meme} />
        ))}
      </div>
    );
};

export default Memes;
