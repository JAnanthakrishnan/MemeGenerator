import React, { useReducer } from "react";
import { GET_MEMES, SET_LOADING, SET_MEME ,SET_URL} from "../types";
import axios from "axios";
import MemeContext from "./memeContext";
import MemeReduder from "./memeReducer";

const MemeState = (props) => {
  const initialState = {
    memes: [],
    meme: [],
    loading: false,
    url:''
  };
  const [state, dispatch] = useReducer(MemeReduder, initialState);
  const getMemes = async () => {
    setLoading();
    const res = await axios.get("https://api.imgflip.com/get_memes");
    dispatch({
      type: GET_MEMES,
      payload: res.data.data.memes,
    });
  };
  const setMeme = (meme) => {
    dispatch({ type: SET_MEME, payload: meme });
  };
  const setUrl = (url) =>{
    dispatch({type:SET_URL,payload:url})
  }
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <MemeContext.Provider
      value={{
        memes: state.memes,
        meme: state.meme,
        loading: state.loading,
        url:state.url,
        getMemes,
        setMeme,
        setUrl
      }}
    >
      {props.children}
    </MemeContext.Provider>
  );
};
export default MemeState;
