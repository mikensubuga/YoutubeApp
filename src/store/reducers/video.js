import * as actionTypes from "../actions/actionTypes";
const initialState = {
  loading: false,
  videos: [],
  selectedVideo: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VIDEOS_START:
      return {
        ...state
        //set loading to true
      };
    case actionTypes.FETCH_VIDEOS_SUCCESS:
      return {
        ...state
        //set loading to false
      };
    case actionTypes.FETCH_VIDEOS_FAIL:
      return {
        ...state
        //set loading to false
      };
  }
};

export default reducer;
