import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import cardTexture from '../resources/whiteCardTexture.jpg';


{/* This is a simple component that uses a mock database to 
    order reservations into a list that can be shown on the right side of the ui.
    The database is ordered as follows:
    [
        [Surname, table number, reservation starting time]
        ...
        ...
    ]
    */ }

const styler = makeStyles({
    root: {
        background: '#265232',
        opacity: 1,
        borderRadius: 3,
        width: "90%",
        height: 75,
        top: '10%',
        position: 'relative',
        margin: 40,
    },
    text: {
        fontFamily: 'Fortum',
        fontSize: 50,
        fontWeight: 'bold',
        margin: 0,
        marginLeft: 50,
    }
});

export default function ReservationCard() {
    const classes = styler();
    const reservations = [['Hirvonen', '1', '18.30'], ['Lehtonen', '2', '18.30'], ['Virtanen', '3', '18.30'], ['Welling', '18', '18.30'], ['Lehtola', '9', '18.30'], ['Alanen', '4', '18.30'], ['Koskela', '14', '18.30'], ['Nelikka', '5', '18.30'], ['Repola', '7', '18.30']]

    return (
        <ul>
            {reservations.map((value, index) => {
                return <Card className={classes.root} style={{ backgroundImage: `url(${cardTexture})` }}>
                    <Typography className={classes.text} color="textSecondary">
                        {value[1]} &nbsp; &nbsp; &nbsp;{value[0]} &nbsp; &nbsp; {value[2]}
                    </Typography>
                <br></br></Card>
            })}
        </ul>
    );
}
