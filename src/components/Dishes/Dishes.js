import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Backdrop, CircularProgress, Grid, makeStyles} from "@material-ui/core";

import {getDishes} from "../../store/actions/dishesActions";
import Dish from "../Dish/Dish";

const useStyles = makeStyles(theme => ({
    root: {
        padding: "20px"
    },
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

    const fetchDishes = useCallback (async () => {
        await dispatch(getDishes());
    }, [dispatch]);

    useEffect(() => {
        (async () => {
            await fetchDishes();
        })();
    }, [fetchDishes]);

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
                <Grid container direction="column" className={classes.root}>
                    {Object.keys(dishes).map(key => (
                        <Grid item key={key}>
                            <Dish
                                name={dishes[key].name}
                                price={dishes[key].price}
                                image={dishes[key].image}
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