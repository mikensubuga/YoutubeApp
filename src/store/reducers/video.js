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
      };
  }
};

export default reducer;
