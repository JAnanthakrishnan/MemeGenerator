import React, { useContext } from "react";
import MemeContext from "../../context/meme/memeContext";

const NewMeme = ({ url, name, height, width }) => {
  const memeContext = useContext(MemeContext);
  if (memeContext.url.length > 2) {
    return (
        <a href={memeContext.url} download>
      <img
        className="responsive-img"
        src={memeContext.url}
        alt={"Loading"}
        style={{
          minHeight: "200px",
          maxHeight: { height },
          minWidth: { width },
        }}
      />
      </a>
    );
  }
  return (
    <div>
      <img
        className="responsive-img"
        src={url}
        alt={name}
        style={{
          minHeight: "200px",
          maxHeight: { height },
          minWidth: { width },
        }}
      />
    </div>
  );
};

export default NewMeme;
