import { useRef } from 'react'

import Card from '../UI/Card';
import classes from './RouteForm.module.css'

const RouteForm = (props) => {
    const nameInputRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;

        props.onAddRoute({ name: enteredName });

    }
    return (
        <Card>
            <form className={classes.form} onSubmit={submitFormHandler}>
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
                    <button className='btn'>Add Quote</button>
                </div>
            </form>
        </Card>
    );
};

export default RouteForm;


