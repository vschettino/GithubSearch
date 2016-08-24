import { combineReducers } from "redux"

import repositories from "./repositoriesReducer"
import user from "./userReducer"

export default combineReducers({
    repositories,
    user,

})