import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';


import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';
import CommentsList from '../comments/CommentsList'

const Comments = () => {

  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const {bikerouteId} = params;

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(bikerouteId)
  }, [bikerouteId, sendRequest]);


  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  let comments;
  const addedCommentHandler = useCallback(() => {
   sendRequest(bikerouteId);
  },[sendRequest, bikerouteId]);

  if(status === 'pending'){
    comments = <div className='centered'><LoadingSpinner/></div>
  };

  if(status === 'completed' && (loadedComments && loadedComments>0)){
    comments = <CommentsList comments={loadedComments}/>
  }

  if(status === 'completed' && (!loadedComments || loadedComments.length === 0)){
    comments = <p className='centered'>No comments were sdded yet!</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && 
      <NewCommentForm 
      bikerouteId={params.bikerouteId} 
      onAddedComment={addedCommentHandler} 
      />
      }
      {comments}
    </section>
  );
};

export default Comments;
