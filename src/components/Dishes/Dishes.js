import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getDishes} from "../../store/actions/dishesActions";

const Dishes = () => {
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishes.dishes);
    const loading = useSelector(state => state.dishes.loading);

    const fetchDishes = useCallback (async () => {
        await dispatch(getDishes());
    }, [dispatch]);

    useEffect(() => {
        (async () => {
            await fetchDishes();
        })();
    }, [fetchDishes]);

    return (
        <div>
            
        </div>
    );
};

export default Dishes;