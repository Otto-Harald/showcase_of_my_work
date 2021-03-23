import React from 'react';
import Header from "./components/Header.js";
import SpacingGrid from "./components/grid.js";
import { makeStyles } from '@material-ui/core/styles';
import ReservationCard from "./components/reservationCard.js";
import { Card, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import background from './resources/backgorundImage.jpg';
import bannerBackground from './resources/bannerBackground.jpg';

{ /* 
    Author: Otto-Harald Hirvonen
    email: ottoharald.hirvonen@gmail.com
    phone number: 040 41 32 757
    description. 
        This is a ui for an imaginary reservation application,
    this ui shows which tables are free at the current moment,
    what reservations are for today and
    it let's the waiter to make a new reservation.

        Curently some of the logic and functions are a bit lacking. 
    The reservations aren't saved into anything.
    It is mostly a showcase of design.

        I've allocated most of the features into separate components
    that are located in the components folder.

 */}

const styler = makeStyles({
    root: {
        backgroundColor: '#0B0C10',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    datePicker: {
        display: 'flex',
        flexWrap: 'wrap',
        background: '#ffff',
    },
    textField: {
        width: 200,
    },
    reservationContainer: {
        position: 'absolute',
        width: '50%',
        height: '65%',
        top: '25%',
        left: '50%',
        overflowY: 'auto',
        background: '#000000',
        borderRadius: 25
    },
    reservationsHeader: {
        background: '#000205',
        borderRadius: 25,
        width: "40%",
        height: 75,
        position: 'absolute',
        left: "55%",
        top: '15%',
    },
    reservationsHeaderText: {
        fontSize: 50,
        fontFamily: 'Fortum',
        color: '#ffff',
        textAlign: 'center',
    },
    gridCardHeader: {
        background: '#000205',
        borderRadius: 25,
        width: "40%",
        height: 75,
        position: 'absolute',
        left: "2%",
        top: '15%',
    },
    gridCardHeaderText: {
        fontSize: 50,
        fontFamily: 'Fortum',
        color: '#ffff',
        textAlign: 'center',
    },
})


function App() {
    const classes = styler();
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let formattedDate = year.toString() + '-0' + month.toString() + '-' + date.toString()
    return (
        <div className={classes.root} style={{backgroundImage: `url(${background})`}}>
            <Header>
            </Header>

            <Card className={classes.gridCardHeader} style={{ backgroundImage: `url(${bannerBackground})` }}>
                <Typography className={classes.gridCardHeaderText}>
                    {'Available Tables'}
                </Typography>
            </Card>
            <Container className={classes.reservationContainer} style={{ backgroundImage: `url(${bannerBackground})` }}>
                <ReservationCard></ReservationCard>
            </Container>
            <Card className={classes.reservationsHeader} style={{ backgroundImage: `url(${bannerBackground})` }}>
                <Typography className={classes.reservationsHeaderText}>
                    {'Reservations For Today'}
                </Typography>
            </Card>
            <SpacingGrid>
            </SpacingGrid>

        </div>
        );
}

export default App;