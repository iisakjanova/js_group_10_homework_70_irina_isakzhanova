import {
    ADD_DISH_TO_CART,
    INIT_ORDER_DATA,
    REMOVE_DISH_FROM_CART,
    SET_MODAL_OPEN,
    SUBMIT_ORDER_FAILURE,
    SUBMIT_ORDER_REQUEST,
    SUBMIT_ORDER_SUCCESS
} from "../actions/ordersActions";

const initialState = {
    dishes: '',
    loading: false,
    showOrderModal: false,
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_ORDER_DATA:
            return {...initialState};
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
                        },
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
                    },
                },
            };
        case REMOVE_DISH_FROM_CART:
            const {[action.payload]: _, ...restDishes} = state.dishes;

            return {
                ...state,
                dishes: restDishes,
            };
        case SET_MODAL_OPEN:
            return {...state, showOrderModal: action.payload};
        case SUBMIT_ORDER_REQUEST:
            return {...state, loading: true};
        case SUBMIT_ORDER_SUCCESS:
            return {...state, loading: false, showOrderModal: false};
        case SUBMIT_ORDER_FAILURE:
            return {...state, loading: false, error: action.payload, showOrderModal: false};
        default:
            return state;
    }
};

export default ordersReducer;