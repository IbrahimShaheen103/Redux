import { combineReducers } from "redux";
import cakeReducer from "./Cakes/cakeReducer";
import iceCreamReducer from "./IceCreams/iceCreamReducer";
import userReducer from "./User/userReducer"


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
  })
export default rootReducer;