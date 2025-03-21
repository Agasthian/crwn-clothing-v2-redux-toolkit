import {createSlice} from '@reduxjs/toolkit'

// import { USER_ACTION_TYPES } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

//UserSlice is replacing old userReducer
export const userSlice = createSlice({
  name : 'user',
  initialState : INITIAL_STATE,
  reducers : {
    setCurrentUser(state,action){
      state.currentUser = action.payload
    }
  }
})

export const {setCurrentUser} = userSlice.actions

export const userReducer = userSlice.reducer

//Replacing old reducer from redux to latest Redux-toolkit slice - it take care of action.types and actions
// export const userReducerOld = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return { ...state, currentUser: payload };
//     default:
//       return state;
//   }
// };
