import { useRef, useState, Fragment } from 'react'
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './RouteForm.module.css'

const RouteForm = (props) => {
    const [isEntering, setIsEntering] = useState(false);

    const nameInputRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        //validation
        props.onAddRoute({ name: enteredName });

    }

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
                    <div className={classes.control}>
                        <label htmlFor='text'>Name</label>
                        <textarea id='name' rows='5' ref={nameInputRef}></textarea>
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


