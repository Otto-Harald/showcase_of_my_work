import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import background from '../resources/cardtexture.jpg';


{ /* 
    This is a component that creates the six cards that show available tables on the left.
 */}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "50%",
        top: 250,
        left: -50,
        position: 'absolute',
    },
    TableCard: {
    },
    control: {
        padding: theme.spacing(2),
    },
    text: {
        fontSize: 50,
        fontFamily: 'Fortum',
        margin: 15,
        align: 'center',
    },
    cardRoot: {
        backgroundColor: '#190061',
        opacity: 1,
        borderRadius: 25,
        border: 0,
        color: 'white',
        width: 250,
        height: 300,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

}));

export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    {/* I use the following array as database ([[table number, for how long is the table free, how many people can dine on this table], ....]),
     * obviously in a complete version this array would come from the server */}
    const cardTexts = [['1', '1h 30min', '4 pax'], ['2', '2h 14min', '4 pax'], ['7', '0h 30min', '4 pax'], ['18', '3h 15min', '2 pax'], ['4', '0h 45min', '6 pax'], ['9', '1h 5min', '4 pax']]
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {/*Simple loop through from 0 to 5 ie. 1 --> 6 */}
                    {[0, 1, 2, 3, 4, 5].map((value) => (
                        <Grid key={value} item>
                            {/* For each iteration we create a new card with three text elements */}
                            <Card className={classes.cardRoot} style={{backgroundImage: `url(${background})` }}>
                            <Typography className={classes.text} style={{marginLeft: 110}}>
                                {cardTexts[value][0]} {/* table number*/}
                            </Typography>
                            <Typography className={classes.text} style={{ marginLeft: 50 }}>
                                {cardTexts[value][1]} {/* amount of timethis table is freer */}
                            </Typography>
                            <Typography className={classes.text} style={{ marginLeft: 75 }}>
                                {cardTexts[value][2]} {/* The number of patrons that can dine on this table */ }
                            </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
