import React from 'react';
import {Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    item: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(4),
        alignItems: "center",
    },
    image: {
        width: "150px",
        display: "block",
    },
    info: {
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
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
                    <img src={props.image} alt={props.name} className={classes.image} />
                </Grid>
                <Grid item className={classes.info}>
                    <Typography variant="subtitle1">{props.name}</Typography>
                    <Typography variant="h6">{props.price} KGS</Typography>
                </Grid>
                <Button variant="contained" color="default" onClick={props.onAdd} className={classes.button}>Add to cart</Button>
            </Grid>
        </Paper>
    );
};

export default Dish;