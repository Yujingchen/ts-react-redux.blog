import { Action } from './../actions/index';
import { Dispatch } from 'redux'
import { ActionType } from './../action-types';
import axios from 'axios';

export const searchRepo = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });
        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search',
                { params: { text: term } });
            const names = data.objects.map((obj: any) => obj.package.name);
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: names
            })
        }
        catch (err) {
            dispatch({ type: ActionType.SEARCH_REPOSITORIES_ERROR, payload: err.message })
        }
    }
}