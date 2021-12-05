import { 
    LIBRO_ACTUAL
} from '../../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
    switch(action.type){
        case LIBRO_ACTUAL:
            return{
                ...state,
                book: action.payload
            }
        default:
            return state;
    }   
}
