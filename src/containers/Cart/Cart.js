import React from 'react';
import {Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
    price: {
        marginLeft: "auto",
    }
}));

const Cart = () => {
    const classes = useStyles();
    const dishes = useSelector(state => state.orders.dishes);

    return (
        <Paper className={classes.root}>
            <Typography variant="h6">Cart</Typography>
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
            <Button variant="contained" color="default">Place order</Button>
        </Paper>
    );
};

export default Cart;