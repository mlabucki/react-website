import { useRef, useEffect, useState,  } from 'react';



import useHttp from '../../hooks/use-http';
import {addComment} from '../../lib/api';

import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './NewCommentForm.module.css';


const isEmpty = (value) => value.trim() === '';

const NewCommentForm = (props) => {

  const [formInputsValidity, setFormInputsValidity] = useState({
    comment:true
  });

  const commentTextRef = useRef();
  
  const {sendRequest, status, error } = useHttp(addComment);

  const {onAddedComment} = props;

  useEffect(()=> {
    if(status === 'completed' && !error){
      onAddedComment();
    } 
    

  },[status, error, onAddedComment, ]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    //Add more falidation rules

    const enteredText = commentTextRef.current.value;

    const enteredTextIsValid = !isEmpty(enteredText); 

    setFormInputsValidity({
      comment: enteredTextIsValid,
    });

    const formIsValid = enteredTextIsValid;

    if(!formIsValid){
      return;
    }

    sendRequest({commentData: {text: enteredText}, bikerouteId: props.bikerouteId});
  };

  const commentControlClasses = `${classes.control} ${
    formInputsValidity.comment ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {status === 'pending' && (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      )}
      <div className={commentControlClasses} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}/>
        {!formInputsValidity.comment && <p>Please enter a valid name!</p>}
      </div>
      <div className={classes.actions}>
          <button className='btn'>Add Comment</button> 
      </div>
    </form>
  );
};

export default NewCommentForm;
