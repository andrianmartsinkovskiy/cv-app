import {applyMiddleware, combineReducers, createStore} from "redux";
import {personReducer} from "./reducers/person.reducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  person: personReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))