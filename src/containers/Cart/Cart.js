import React from 'react';
import {Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";

import {DELIVERY_PRICE} from "../../constants";
import {removeDishFromCart, setModalOpen} from "../../store/actions/ordersActions";
import PlaceOrderModal from "../PlaceOrderModal/PlaceOrderModal";
import CartItem from "../../components/CartItem/CartItem";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        paddingLeft: theme.spacing(4),
    },
    item: {
        alignItems: "center"
    },
    price: {
        marginLeft: "auto",
    },
    button: {
        marginTop: theme.spacing(3),
    },
    bottomBlock: {
        paddingRight: theme.spacing(6),
    },
}));

const Cart = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const dishes = useSelector(state => state.orders.dishes);

    const calculateTotal = dishes => {
        return Object.values(dishes).reduce((acc, dish) => {
            return acc + dish.totalPrice;
        }, 0);
    };

    const total = calculateTotal(dishes) + DELIVERY_PRICE;

    const handleRemoveDish = (id) => {
        dispatch(removeDishFromCart(id));
    };

    const handleOpenModal = () => {
        dispatch(setModalOpen(true));
    };

    const handleCloseModal = () => {
        dispatch(setModalOpen(false));
    };

    return (
        <>
            <PlaceOrderModal close={handleCloseModal}/>
            <Paper className={classes.root}>
                <Typography variant="h6">Cart</Typography>
                {Object.keys(dishes).length !== 0
                    ?
                    <>
                        {Object.keys(dishes).map(key => (
                            <CartItem
                                key={key}
                                name={dishes[key].name}
                                qty={dishes[key].qty}
                                totalPrice={dishes[key].totalPrice}
                                onRemove={() => handleRemoveDish(key)}
                            />
                        ))}
                        <Grid container className={classes.bottomBlock}>
                            <Typography variant="subtitle1">
                                <i>Доставка:</i>
                            </Typography>
                            <Typography variant="subtitle1" className={classes.price}>
                                <i>{DELIVERY_PRICE}</i>
                            </Typography>
                        </Grid>
                        <Grid container className={classes.bottomBlock}>
                            <Typography variant="h6">
                                Итого:
                            </Typography>
                            <Typography variant="h6" className={classes.price}>
                                {total}
                            </Typography>
                        </Grid>
                        <Button
                            variant="contained"
                            color="default"
                            onClick={handleOpenModal}
                            className={classes.button}
                        >
                            Place order
                        </Button>
                    </>
                    :
                    <Typography variant="h6">is empty</Typography>}
            </Paper>
        </>
    );
};

export default Cart;