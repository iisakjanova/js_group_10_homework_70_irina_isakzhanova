import React from 'react';
import {Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";

import {useSelector} from "react-redux";
import {DELIVERY_PRICE} from "../../constants";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
    price: {
        marginLeft: "auto",
    },
    button: {
        marginTop: theme.spacing(3),
    },
}));

const Cart = () => {
    const classes = useStyles();
    const dishes = useSelector(state => state.orders.dishes);

    const calculateTotal = dishes => {
        return Object.values(dishes).reduce((acc, dish) => {
            return acc + dish.totalPrice;
        }, 0);
    };

    const total = calculateTotal(dishes) + DELIVERY_PRICE;

    return (
        <Paper className={classes.root}>
            <Typography variant="h6">Cart</Typography>
            {dishes
                ?
                <>
                    {Object.keys(dishes).map(key => (
                        <Grid container key={key}>
                            <Typography variant={"subtitle1"}>
                                {dishes[key].name} x {dishes[key].qty}
                            </Typography>
                            <Typography variant="subtitle1" className={classes.price}>
                                {dishes[key].totalPrice}
                            </Typography>
                        </Grid>
                    ))}
                    <Grid container>
                        <Typography variant="subtitle1">
                            <i>Доставка:</i>
                        </Typography>
                        <Typography variant="subtitle1" className={classes.price}>
                            <i>{DELIVERY_PRICE}</i>
                        </Typography>
                    </Grid>
                    <Grid container>
                        <Typography variant="h6">
                            Итого:
                        </Typography>
                        <Typography variant="h6" className={classes.price}>
                            {total}
                        </Typography>
                    </Grid>
                    <Button variant="contained" color="default" className={classes.button}>
                        Place order
                    </Button>
                </>
                :
                <Typography variant="h6">is empty</Typography>}
        </Paper>
    );
};

export default Cart;