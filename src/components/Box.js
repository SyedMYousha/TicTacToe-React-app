import React from 'react';
import "./Box.css";

const Box = ({value, onClick}) => {

    const btnStyles = value === "X" ? "box x" : "box o";

  return (
    <div>
      <button className={btnStyles} onClick={onClick}>{value}</button>
    </div>
  )
}

export default Box;