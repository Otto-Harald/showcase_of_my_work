import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import TimePicker from './timePicker.js';
import headerTexture from '../resources/greyWoodTexture.jpg'


{/*
    This is a component that creates the top bar that can be seen on the ui.
    It creates a simple calendar picker and a button that opens a modal for reservation form.

 */}

const styler = makeStyles({
    root: {
        background: '#000000',
        opacity: 1,
        borderRadius: 3,
        width: "100%",
        height: 100,
    },
    datePicker: {
        backgroundColor: '#edc34e',
        display: 'flex',
        flexWrap: 'wrap',
        background: '#ffff',
        position: 'absolute',
        top: 13,
        left: '60%',
        borderRadius: 15,
        '&:hover': {
            backgroundColor: '#149962',
            borderColor: '#38b581',
        },
    },
    textField: {
        margin: 10,
        width: 200,
    },
    button: {
        backgroundColor: '#edc34e',
        width: 150,
        height: 75,
        position: 'absolute',
        left: '80%',
        top: '1.5%',
        background: '#ffffff',
        '&:hover': {
            backgroundColor: '#149962',
            borderColor: '#38b581',
        }
    },
    modal: {
        top: '20%',
        left: '30%',
        width: '40%',
        height: '50%',
        position: 'absolute',
        background: '#ffffff',
        borderRadius: 25,
    },
    inputFields: {
        margin: 15,
    },
    commentField: {
        width: '70%',
        margin: 30,
    },
    datePickerInput: {
        display: 'flex',
        flexWrap: 'wrap',
        background: '#4287f5',
        position: 'relative',
        borderRadius: 15,
        margin: 15,
        width: 50,
    },
    grid: {
        flexGrow: 1
    },
    submit: {
        backgroundColor: '#309161',
        width: 120,
        height: 50,
        left: '40%',
        position: 'relative',
    }
});


{/*
    The following two functions create roows of three elements, that are then rendered into a grid
    in the reservation form.
 */}
function FormFirstRow() {
    const classes = styler();
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let formattedDate = year.toString() + '-0' + month.toString() + '-' + date.toString()

    return (
        <React.Fragment>
            <Grid item xs={4}>
                {/*Surname input field*/}
                <TextField className={classes.inputFields}
                    name="surNameInput"
                    id="surNameInput"
                    label="Surname (Required*)"
                /></Grid>
            <Grid item xs={4}>
                {/*Firstname input field*/}
                <TextField className={classes.inputFields}
                    id="firstnameinput"
                    label="Firstname (Required*)"
                />
            </Grid>
            <Grid item xs={4}>
                {/*Time picker*/}
                <TimePicker className={classes.datePickerInput}></TimePicker>
            </Grid>
        </React.Fragment>
    );
}

function FormSecondRow() {
    const classes = styler();
    return (
        <React.Fragment>
            <Grid item xs={4}>
                {/*Phone number input field*/}
                <TextField className={classes.inputFields}
                    id="numberinput"
                    label="Phone number (Required*)"
                    type="number"
                />
            </Grid>
            <Grid item xs={4}>
                {/*Number of patrons that will be dining input field*/}
                <TextField className={classes.inputFields}
                    id="numberOfPatronsInput"
                    label="Number of patrons"
                    type="number"
                />
            </Grid>
            <Grid item xs={4}>
                {/*Reserved table number input field*/}
                <TextField className={classes.inputFields}
                    id="reservedTableInput"
                    label="Reserved table"
                    type="number"
                />
            </Grid>
        </React.Fragment>
    );
}

{/*The following renders the header with the reservation modal in it and returns it to App.js*/ }

export default function Header() {
    const classes = styler();
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let formattedDate = year.toString() + '-0' + month.toString() + '-' + date.toString()
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <div className={classes.modal}>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <FormFirstRow /> {/*Forming the first row of the reservation form*/}
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <FormSecondRow /> {/*Forming the second row of the reservation form*/}
                </Grid>
                {/*Lastly there is a comment section */}
                <TextField className={classes.commentField} 
                        id="commentsInput"
                        label="Comments"
                    multiline
                    rows="6"
                    InputLabelProps={{
                        shrink: true
                    }}
                    rowsMax={6}
                    placeholder="- Additional details/contact info
- Customer request
- Allergies
- Payment methods
- Parties/Catering
- Other
"
                />
            </Grid>
            <button className={classes.submit}>SUBMIT</button>
        </div>
    );
    return (
        <div>
            <Card className={classes.root}></Card> {/* This is the calendar picker at the top bar*/}
                <form className={classes.datePicker} noValidate>
                <TextField
                    id="date"
                    label="Calendar"
                    type="date"
                    variant="outlined"
                    defaultValue={formattedDate}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <Button className={classes.button} onClick={handleOpen}> {/* This is the button that opens the modal form for new reservations */}
                New Reservation
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >{body}</Modal>
        </div>
        );
}
