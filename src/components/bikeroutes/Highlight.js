import classes from './Highlight.module.css';

const Highlight = (props) => {
    return (
        <figure className={classes.bikeroute}>
          <p>{props.name}</p>
        </figure>
      );
};

export default Highlight;