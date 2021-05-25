import { SHOE_DETAILS_FAIL, SHOE_DETAILS_REQUEST, SHOE_DETAILS_SUCCESS, SHOE_LIST_FAIL, SHOE_LIST_REQUEST, SHOE_LIST_SUCCESS } from "../constants/shoeConstants";

const shoeListReducer = (state={Loading :true ,shoes : []}, action)=>{
    switch(action.type){
        case SHOE_LIST_REQUEST:
            return {loading: true};
        case SHOE_LIST_SUCCESS:
            return {loading: false, shoes: action.payload};
        case SHOE_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}
export default shoeListReducer;

export const shoeDetailsReducer = (state={ shoe : {} , loading : true }, action)=>{
    switch(action.type){
        case SHOE_DETAILS_REQUEST:
            return {loading: true};
        case SHOE_DETAILS_SUCCESS:
            return {loading: false, shoe: action.payload};
        case SHOE_DETAILS_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}