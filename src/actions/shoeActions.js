import Axios from "axios";
import { SHOE_DETAILS_FAIL, SHOE_DETAILS_REQUEST, SHOE_DETAILS_SUCCESS, SHOE_LIST_FAIL, SHOE_LIST_REQUEST, SHOE_LIST_SUCCESS } from "../constants/shoeConstants";

export const listShoes = ()=> async (dispatch)=>{
    dispatch({
        type: SHOE_LIST_REQUEST
    });
    try {
        const {data} = await Axios.get("/api/shoes");
        dispatch({type: SHOE_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: SHOE_LIST_FAIL, payload: error.message});
    }
};


export const detailsShoe = (shoeId) => async(dispatch)=>{
    dispatch({type: SHOE_DETAILS_REQUEST, payload: shoeId});
    try {
        const {data} = await Axios.get(`/api/shoes/${shoeId}`);
        dispatch({type: SHOE_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: SHOE_DETAILS_FAIL , payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message, 
        });
    }
};