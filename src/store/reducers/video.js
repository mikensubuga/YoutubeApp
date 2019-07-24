import * as actionTypes from "../actions/actionTypes";
const initialState = {
  loading: false,
  videos: [],
  selectedVideo: null,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VIDEOS_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedVideo: action.selectedVideo,
        videos: action.videos
      };
    case actionTypes.FETCH_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionTypes.SELECT_VIDEO:
      return {
        ...state,
        selectedVideo: action.video
      };
    default:
      return state;
  }
};

export default reducer;
