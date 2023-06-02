import React from 'react';
import './Button.scss';


const BUTTON_TYPES = {
    google: 'google-sign-in',
    inverted: 'inverted',

}

function Button({ children, buttonType, ...otherProps }) {
  return (
      <div>
          <button className={`button-container ${BUTTON_TYPES[buttonType]}`}  {...otherProps}>{children}</button>
    </div>
  )
}

export default Button