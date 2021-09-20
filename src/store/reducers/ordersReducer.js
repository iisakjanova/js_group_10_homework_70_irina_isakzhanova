import {ADD_DISH_TO_CART, REMOVE_DISH_FROM_CART} from "../actions/ordersActions";

const initialState = {
    dishes: '',
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISH_TO_CART:
            if (!state.dishes[action.payload.id]) {
                return {
                    ...state,
                    dishes: {
                        ...state.dishes,
                        [action.payload.id]: {
                            name: action.payload.name,
                            qty: 1,
                            totalPrice: action.payload.price,
                        }
                    },
                };
            }

            return {
                ...state,
                dishes: {
                    ...state.dishes,
                    [action.payload.id]: {
                        name: action.payload.name,
                        qty: state.dishes[action.payload.id].qty + 1,
                        totalPrice: state.dishes[action.payload.id].totalPrice + action.payload.price,
                    }
                },
            };
        case REMOVE_DISH_FROM_CART:
            const {[action.payload]: _, ...restDishes} = state.dishes;

            return {
                ...state,
                dishes: restDishes
            };
        default:
            return state;
    }
};

export default ordersReducer;