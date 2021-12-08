import { 
    LIBRO_ACTUAL,
    ACTIVIDAD_LIBRO,
    VISIBLE_BOOKMAIN,
} from '../../types';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
    switch(action.type){
        case LIBRO_ACTUAL:
            return{
                ...state,
                bookuser: action.payload
            }
        case ACTIVIDAD_LIBRO:
            return{
                ...state,
                actividades: action.payload
            }
        case VISIBLE_BOOKMAIN:
            return{
                ...state,
                bookmain: action.payload
            }
        default:
            return state;
    }   
}
