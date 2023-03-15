import {SET_PERSON_DATA} from "../action-types";

const defaultState = {
  data: null
}


export const personReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PERSON_DATA:
      return {...state, data: action.payload}
    default:
      return state
  }
}