import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';  
import { cartReducer } from './reducers/cartReducer';
import shirtListReducer, { shirtDetailsReducer } from './reducers/shirtReducer';
import shoeListReducer, { shoeDetailsReducer } from './reducers/shoeReducer';


const initialState = {
    cart: {
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    },
};
const reducer = combineReducers({
    shirtList: shirtListReducer,
    shoeList: shoeListReducer,
    shirtDetails: shirtDetailsReducer,
    shoeDetails: shoeDetailsReducer,
    cart: cartReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;