import { GET_MEMES, SET_LOADING, SET_MEME,SET_URL } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_MEMES:
      return {
        ...state,
        memes: action.payload,
        loading: false,
      };
    case SET_MEME:
      return {
        ...state,
        meme: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_URL:
      return{
        ...state,
        url:action.payload
      }
    default:
      return state;
  }
};
