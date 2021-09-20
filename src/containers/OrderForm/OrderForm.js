import React, {useState} from 'react';
import {Button, Grid, makeStyles, TextField} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {createOrder, initOrderData, setModalOpen} from "../../store/actions/ordersActions";

const useStyles = makeStyles(theme => ({
    buttons: {
        justifyContent: "flex-end",
    },
    btn: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
}));

const OrderForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [customer, setCustomer] = useState({
        name: '',
        address: '',
        phone: '',
    });

    const handleInputChange = e => {
        const {name, value} = e.target;

        setCustomer(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCancel = () => {
        dispatch(setModalOpen(false));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        await dispatch(createOrder(customer));
        dispatch(initOrderData());
    };

    return (
        <Grid container direction="column" spacing={2} component="form" onSubmit={handleSubmit}>
            <Grid item>
                <TextField
                    required
                    label="Name"
                    variant="outlined"
                    name="name"
                    fullWidth
                    value={customer.name}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    required
                    label="Address"
                    variant="outlined"
                    name="address"
                    fullWidth
                    value={customer.address}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid item>
                <TextField
                    required
                    label="Phone"
                    variant="outlined"
                    name="phone"
                    fullWidth
                    value={customer.phone}
                    onChange={handleInputChange}
                />
            </Grid>
            <Grid container className={classes.buttons}>
                <Button
                    variant="contained"
                    color="default"
                    type="button"
                    onClick={handleCancel}
                    className={classes.btn}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.btn}
                >
                    Order
                </Button>
            </Grid>
        </Grid>
    );
};

export default OrderForm;