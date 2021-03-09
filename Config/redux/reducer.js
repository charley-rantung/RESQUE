import {useSelector} from 'react-redux';
import {combineReducers} from 'redux';

const initialState = {
  uid: '',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_UID') {
    return {
      ...state,
      uid: action.value,
    };
  }
  return state;
};

// const reducer = combineReducers({
//     reducer1,
//     reducer2
// })

export default reducer;
