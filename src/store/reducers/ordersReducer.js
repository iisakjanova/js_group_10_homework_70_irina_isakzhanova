import {ADD_DISH_TO_CART} from "../actions/ordersActions";
import {PRICE_LIST} from "../../constants";

const initialState = {
    dishes: '',
    totalAmount: '',
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISH_TO_CART:
            if (!state.dishes[action.payload]) {
                return {
                    ...state,
                    dishes: {
                        ...state.dishes,
                        [action.payload]: {
                            name: PRICE_LIST[action.payload].name,
                            qty: 1,
                            totalPrice: PRICE_LIST[action.payload].price,
                        }
                    },
                };
            }

            return {
                ...state,
                dishes: {
                    ...state.dishes,
                    [action.payload]: {
                        name: PRICE_LIST[action.payload].name,
                        qty: state.dishes[action.payload].qty + 1,
                        totalPrice: state.dishes[action.payload].totalPrice + PRICE_LIST[action.payload].price,
                    }
                },
            };
        default:
            return state;
    }
};

export default dishesReducer;