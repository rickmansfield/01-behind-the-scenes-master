import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('Button RUNNING');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
// React.memo() is a higher order function that takes a 
//component as an argument and returns a new component
//that wraps the component you passed in. This new component
//will only re-evaluate if the props of the component you passed
//in change. This is a great way to optimize your app.
// see appljs and notice it's use via the buttons. 
// refer to section 12 videos 150-157 for more info.
