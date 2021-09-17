import React from 'react';
import {Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    item: {
        padding: "10px",
        marginBottom: "20px",
        alignItems: "center",
    },
    image: {
        width: "150px",
        display: "block",
    },
    info: {
        paddingRight: "10px",
        paddingLeft: "10px",
    },
    button: {
        marginLeft: "auto",
    },
}));

const Dish = (props) => {
    const classes = useStyles();

    return (
        <Paper>
            <Grid container direction="row" className={classes.item}>
                <Grid item>
                    <img src={props.image} className={classes.image}/>
                </Grid>
                <Grid item className={classes.info}>
                    <Typography variant="subtitle1">{props.name}</Typography>
                    <Typography variant="h6">{props.price} KGS</Typography>
                </Grid>
                <Button variant="contained" color="default" className={classes.button}>Add to cart</Button>
            </Grid>
        </Paper>
    );
};

export default Dish;