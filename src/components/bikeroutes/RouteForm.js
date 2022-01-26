import { useRef, useState, Fragment } from 'react'
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './RouteForm.module.css'


const isEmpty = (value) => value.trim() ==='';
;

const RouteForm = (props) => {
    const [isEntering, setIsEntering] = useState({
        name:true,
        distance:true,
        city: true,
    });

    const nameInputRef = useRef();
    const distanceInputRef = useRef();
    const cityInputRef = useRef();
    
    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredDistance = distanceInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredDistanceIsValid = !isEmpty(enteredDistance);
        const enteredCityIsValid = !isEmpty(enteredCity);
        
        setIsEntering({
            name: enteredNameIsValid,
            distance: enteredDistanceIsValid,
            city: enteredCityIsValid
        });

        const formIsValid = enteredNameIsValid && enteredDistanceIsValid && enteredCityIsValid;

        if(!formIsValid){
            return;
        }

        props.onAddRoute({ 
            name: enteredName,
            distance: enteredDistance,
            city: enteredCity
        });
    };

    const nameControlClasses = `${classes.control} ${
        isEntering.name && isEntering.distance && isEntering.city ? '' : classes.invalid
    }`;

    const finishEnteringHandler = () => {
        setIsEntering(false);
    };

    const onFocusHandler = () => {
        setIsEntering(true);
    };

    return (
        <Fragment>
            <Prompt
                when={isEntering}
                message={(location) => 'Are you sure you want to leave? All your entered data will be lost!'
                }
            />
            <Card>
                <form onFocus={onFocusHandler}
                    className={classes.form}
                    onSubmit={submitFormHandler}>
                    {props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner />
                        </div>
                    )}
                    <div className={nameControlClasses}>
                        <label htmlFor='text'>Name</label>
                        <textarea id='name' rows='5' ref={nameInputRef} />
                        {!isEntering.name && <p>please enter a valid name!</p>}
                    </div>
                    <div className={nameControlClasses}>
                        <label htmlFor='number'>Distance</label>
                        <textarea id='name' rows='5' ref={distanceInputRef} />
                        {!isEntering.distance && <p>please enter a valid distance!</p>}
                    </div>
                    <div className={nameControlClasses}>
                        <label htmlFor='text'>Location</label>
                        <textarea id='city' rows='5' ref={cityInputRef} />
                        {!isEntering.city && <p>please enter a valid location!</p>}
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishEnteringHandler} className='btn'>Add Bike Route</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    );
};

export default RouteForm;


