import Axios from "axios";
import { SHIRT_DETAILS_FAIL, SHIRT_DETAILS_REQUEST, SHIRT_DETAILS_SUCCESS, SHIRT_LIST_FAIL, SHIRT_LIST_REQUEST, SHIRT_LIST_SUCCESS } from "../constants/shirtConstants";

export const listShirts = ()=> async (dispatch)=>{
    dispatch({
        type: SHIRT_LIST_REQUEST
    });
    try {
        const {data} = await Axios.get("/api/shirts");
        dispatch({type: SHIRT_LIST_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: SHIRT_LIST_FAIL, payload: error.message});
    }
};

export const detailsShirt = (shirtId) => async(dispatch)=>{
    dispatch({type: SHIRT_DETAILS_REQUEST, payload: shirtId});
    try {
        const {data} = await Axios.get(`/api/shirts/${shirtId}`);
        dispatch({type: SHIRT_DETAILS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: SHIRT_DETAILS_FAIL,payload: error.response && error.response.data.message ? 
            error.response.data.message : error.message, 
        });
    }
};