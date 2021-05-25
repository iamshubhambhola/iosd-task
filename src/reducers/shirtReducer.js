import { SHIRT_DETAILS_FAIL, SHIRT_DETAILS_REQUEST, SHIRT_DETAILS_SUCCESS, SHIRT_LIST_FAIL, SHIRT_LIST_REQUEST, SHIRT_LIST_SUCCESS } from "../constants/shirtConstants";

const shirtListReducer = (state={loading : true, shirts : []}, action)=>{
    switch(action.type){
        case SHIRT_LIST_REQUEST:
            return {loading: true};
        case SHIRT_LIST_SUCCESS:
            return {loading: false, shirts: action.payload};
        case SHIRT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}
export default shirtListReducer;

export const shirtDetailsReducer = (state={ shirt : {} , loading : true }, action)=>{
    switch(action.type){
        case SHIRT_DETAILS_REQUEST:
            return {loading: true};
        case SHIRT_DETAILS_SUCCESS:
            return {loading: false, shirt: action.payload};
        case SHIRT_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
} 