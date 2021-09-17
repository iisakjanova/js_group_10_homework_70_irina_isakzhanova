import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Backdrop, CircularProgress, Grid, makeStyles} from "@material-ui/core";

import {getDishes} from "../../store/actions/dishesActions";
import Dish from "../../components/Dish/Dish";
import {addDishToCart} from "../../store/actions/ordersActions";

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

const Dishes = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.dishes.dishes);
    const loading = useSelector(state => state.dishes.loading);

    useEffect(() => {
        (async () => {
            await dispatch(getDishes());
        })();
    }, [dispatch]);

    const handleAddDishToCart = (name) => {
        dispatch(addDishToCart(name));
    };

    return (
        <>
            {loading
                ?
                <Backdrop className={classes.backdrop} open={loading}>
                    <CircularProgress color="inherit" />
                </Backdrop>
                :
                dishes
                ?
                <Grid container direction="column">
                    {Object.keys(dishes).map(key => (
                        <Grid item key={key}>
                            <Dish
                                name={dishes[key].name}
                                price={dishes[key].price}
                                image={dishes[key].image}
                                onAdd={() => handleAddDishToCart(key)}
                            />
                        </Grid>
                    ))}
                </Grid>
                :
                null}
        </>
    );
};

export default Dishes;