import React from 'react';
import {Box, CircularProgress, Grid, Modal, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import OrderForm from "../OrderForm/OrderForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const PlaceOrderModal = (props) => {
    const modalOpen = useSelector(state => state.orders.showOrderModal);
    const loading = useSelector(state => state.orders.loading);

    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={props.close}
            >
                <Box sx={style}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant="h6" component="h2">
                                Enter delivery information:
                            </Typography>
                        </Grid>
                    </Grid>
                    <OrderForm />
                    {loading ? <CircularProgress /> : null }

                </Box>
            </Modal>
        </div>
    );
};

export default PlaceOrderModal;