import { combineReducers, ReducersMapObject, Reducer } from "redux";
import { connectRouter } from 'connected-react-router' // 路由+redux
import history from '../history'
import home from './home'

let reducers: ReducersMapObject = {
	router: connectRouter(history),
	home,
}

type CombinedState = {
	[key in keyof typeof reducers]: ReturnType<typeof reducers[key]>
}

let reducer: Reducer<CombinedState> = combineReducers<CombinedState>(reducers);


export { CombinedState }
export default reducer;