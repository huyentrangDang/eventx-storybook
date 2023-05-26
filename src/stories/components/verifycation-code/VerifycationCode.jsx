import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/input-dropdown.css';
import '../../assets/css/verifycation-code.css';

export const VerifycationCode = ({ digits, size, label, hintText }) => {
  return (
    <>
      <div className={`component-verifycation-code`}>
        <div className={`input-with-label`}>
          <div className={[`label-verifycation-code`].join(' ')}>{label}</div>
          <div className={[`input-verifycation-code-size--${size}`]}>
            {digits === 4 &&
              Array.from(new Array(Number(digits))).map(() => (
                <div className={`item-input-verifycation-code-size--${size}`}>
                  <icon className={`vertifycation-code-size--${size}`} />
                </div>
              ))}
          </div>
          {digits === 6 && (
            <div className={[`input-verifycation-code-size--${size}`]}>
              {Array.from(new Array(Number(digits)))
                .splice(0, 3)
                .map(() => (
                  <div className={`item-input-verifycation-code-size--${size}`}>
                    <icon className={`vertifycation-code-size--${size}`} />
                  </div>
                ))}
              <icon className={`line-verifycation-code-size--${size}`} />
              {Array.from(new Array(Number(digits)))
                .splice(0, 3)
                .map(() => (
                  <div className={`item-input-verifycation-code-size--${size}`}>
                    <icon className={`vertifycation-code-size--${size}`} />
                  </div>
                ))}
            </div>
          )}
          <div className={`hint-text-verifycation-code`}>{hintText}</div>
        </div>
      </div>
    </>
  );
};

VerifycationCode.propTypes = {
  digits: PropTypes.oneOf([4, 6]),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  label: PropTypes.string,
  hintText: PropTypes.string,
};

VerifycationCode.defaultProps = {};
