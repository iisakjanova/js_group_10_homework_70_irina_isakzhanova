import React from 'react';
import {Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import {DeleteForever} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    item: {
        alignItems: "center"
    },
    price: {
        marginLeft: "auto",
    },
}));

const CartItem = (props) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.item}>
            <Typography variant={"subtitle1"}>
                {props.name} x {props.qty}
            </Typography>
            <Typography variant="subtitle1" className={classes.price}>
                {props.totalPrice}
            </Typography>
            <IconButton onClick={props.onRemove}>
                <DeleteForever />
            </IconButton>
        </Grid>
    );
};

export default CartItem;