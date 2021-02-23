import repoReducer from './repoReducer'
import { combineReducers } from 'redux'


const reducers = combineReducers({
    repositories: repoReducer
});
export type RootState = ReturnType<typeof reducers>;

export default reducers;