import React from 'react';
import {Grid, makeStyles} from "@material-ui/core";

import Dishes from "../Dishes/Dishes";
import Cart from "../Cart/Cart";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4),
    },
    cart: {
        marginLeft: theme.spacing(4),
    },
    dishes: {
        flexGrow: 1,
    },
}));


const Menu = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container direction="row" className={classes.root}>
                <Grid item className={classes.dishes}>
                    <Dishes />
                </Grid>
                <Grid item className={classes.cart} xs={4}>
                    <Cart />
                </Grid>
            </Grid>
        </>
    );
};

export default Menu;