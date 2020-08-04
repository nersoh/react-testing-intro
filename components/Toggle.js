import PropTypes from 'prop-types';
import React from 'react';
import './Styles.css';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'


const State = ({ isSelected }) => css`
  border: solid 1px black;
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
  ${isSelected === true &&
  `
    background-color: #413F42;
    color: white;
  `}
`;


function Toggle({ isChecked, on, off, onChange, theme, ...otherProps }) {
    return (
        <label className="switch"
        {...otherProps}>
            <input
                css={{
                    position: 'absolute',
                    width: '0.1rem',
                    height: '0.1rem',
                    overflow: 'hidden',
                    clip: 'rect(0.1rem, 0.1rem, 0.1rem, 0.1rem)',
                
                    "&:checked + .slider::before": {
                        transform: 'translateX(3rem)'
                    },
                
                    "&:checked + .slider .isOn": {
                        opacity: 1,
                    },
                
                    "&:checked + .slider .isOff": {
                        opacity: 0,
                    }
                }}
                type="checkbox"
                onChange={onChange}
            />
            <div className="slider">
                <span className="isOn">
                    {on}
                </span>
                <span
                    className="isOff"
                >
                    {off}
                </span>
            </div>
        </label>
    );
}

Toggle.defaultProps = {
    isChecked: false,
    on: 'on',
    off: 'off',
    theme: {},
};

Toggle.propTypes = {
    'aria-label': PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    on: PropTypes.string.isRequired,
    off: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    theme: PropTypes.shape({
        switch: PropTypes.string,
        slider: PropTypes.string,
        text: PropTypes.string,
    }),
};

export default Toggle;
