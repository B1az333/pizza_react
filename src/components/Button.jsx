import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Button({ className, outline, children, onClick }) {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, { 'button--outline': outline })}>
            {children}
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string.isRequired, 
    outline: PropTypes.bool.isRequired,
    onClick: PropTypes.func
};

Button.defaultProps = {
    className: '', 
    outline: false,
};

export default Button;
