import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Navbar } from '../../components/Navbar';
import { Link } from 'react-router-dom';
import image from '../../assets/images/race-car-background.jpeg'

// Interface (typescript). Google it
// Its to stablish props as an object to put your 'props' in and pass that along
interface Props {
    title: string;
}

const useStyles = makeStyles({
    background: {
        backgroundImage: `url(${image})`,
        bacgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        evrflow: 'hidden',
        width: '100%',
        height: '90%',
        backgroundPosition: 'center',
        position: 'absolute',
        zIndex: -1
    },
    main_text: {
        textAlign: 'center',
        position: 'relative',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
    },
    button_text: {
        color: 'white',
        textDecoration: 'none',
    },
});

export const Home = (props: Props) => {  
    const classes = useStyles();

    

    return (
    <>
        <Navbar />
        <div className={`${classes.background}`}>
            <div className={classes.main_text}>
                <h1>{props.title}</h1>
                <Button>
                    <Link to='/inventory' className={classes.button_text} > Take me to my Inventory</Link>
                </Button>

            </div>

        </div>
    </>
    )
}