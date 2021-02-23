import { useDispatch } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { actionCreators } from '../store';

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actionCreators, dispatch);

    //bindActionCreators returns like a object with properties of actions
    //for example {searchRepo: (term)=>dispatch(searchRepo(term))}
}
