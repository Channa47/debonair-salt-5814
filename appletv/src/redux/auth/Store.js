
import { legacy_createStore,applyMiddleware,combineReducers } from "redux"

import { getSignupreducer } from "./getsignup/getsignupreducer"
import { Loginreducer } from "./Login/loginreducer"
import { Signupreducer } from "../signup/signupreducer"
import {adminreducer} from "./admin/adminreducer"
import {ItemManageReducer} from "../app/adminadditems/reducer"
import thunk from "redux-thunk"



const rootReducer = combineReducers({getSignupreducer,Loginreducer,Signupreducer,adminreducer,ItemManageReducer})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
