import classes from "./Highlight.module.css";

const Highlight = (props) => {
  return (
    <figure className={classes.bikeroute}>
      <h2>{props.name}</h2>
      <p>{props.city}</p>
      <p>{`${props.distance} km`}</p>
    </figure>
  );
};

export default Highlight;
