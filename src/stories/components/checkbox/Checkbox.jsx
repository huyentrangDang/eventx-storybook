import PropTypes from 'prop-types';
import '../../assets/css/checkbox.css';

export const Checkbox = ({
  checked,
  indeterminate,
  size,
  type,
  state,
  text,
  supportingText,
  showText,
}) => {
  return (
    <>
      {showText === 'false' ? (
        <>
          {checked === 'true' ? (
            <>
              {indeterminate === 'true' && type === 'checkbox' && (
                <button
                  type='button'
                  className={`checkbox-checked--${checked}-indeterminate--${indeterminate}-size--${size}-type--${type}-state--${state}`}
                >
                  {state === 'disabled' ? (
                    <icon
                      className={`icon-checkbox-type--${type}-size--${size}-state--${state}-indeterminate`}
                    />
                  ) : (
                    <icon
                      className={`icon-checkbox-type--${type}-size--${size}-indeterminate`}
                    />
                  )}
                </button>
              )}
              {indeterminate === 'false' && (
                <button
                  type='button'
                  className={`checkbox-checked--${checked}-indeterminate--${indeterminate}-size--${size}-type--${type}-state--${state}`}
                >
                  {state === 'disabled' ? (
                    <icon
                      className={`icon-checkbox-type--${type}-size--${size}-state--${state}`}
                    />
                  ) : (
                    <icon
                      className={`icon-checkbox-type--${type}-size--${size}`}
                    />
                  )}
                </button>
              )}
            </>
          ) : (
            <>
              {indeterminate === 'false' && (
                <button
                  type='button'
                  className={`checkbox-checked--${checked}-indeterminate--${indeterminate}-size--${size}-type--${type}-state--${state}`}
                ></button>
              )}
            </>
          )}
        </>
      ) : (
        <div
          className={`checkbox-checked--${checked}-indeterminate--${indeterminate}-size--${size}-type--${type}-text--${showText}-state--${state}`}
        >
          {checked === 'true' ? (
            <>
              {indeterminate === 'false' && (
                <>
                  <button
                    type='button'
                    className={`checkbox-checked--${checked}-indeterminate--${indeterminate}-size--${size}-type--${type}-state--${state}`}
                  >
                    {state === 'disabled' ? (
                      <icon
                        className={`icon-checkbox-type--${type}-size--${size}-state--${state}`}
                      />
                    ) : (
                      <icon
                        className={`icon-checkbox-type--${type}-size--${size}`}
                      />
                    )}
                  </button>
                  <div className={`checkbox-text-supportingText-size--${size}`}>
                    <div className={`text-checkbox-size--${size}-medium`}>
                      {text}
                    </div>
                    <div
                      className={`supportingText-checkbox-size--${size}-medium`}
                    >
                      {supportingText}
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              {indeterminate === 'false' && (
                <>
                  <button
                    type='button'
                    className={`checkbox-checked--${checked}-indeterminate--${indeterminate}-size--${size}-type--${type}-state--${state}`}
                  ></button>
                  <div className={`checkbox-text-supportingText-size--${size}`}>
                    <div className={`text-checkbox-size--${size}-medium`}>
                      {text}
                    </div>
                    <div
                      className={`supportingText-checkbox-size--${size}-medium`}
                    >
                      {supportingText}
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.oneOf(['true', 'false']),
  indeterminate: PropTypes.oneOf(['true', 'false']),
  size: PropTypes.oneOf(['sm', 'md']),
  type: PropTypes.oneOf(['radio', 'checkbox']),
  state: PropTypes.oneOf(['default', 'hover', 'focused', 'disabled']),
  text: PropTypes.string,
  supportingText: PropTypes.string,
  showText: PropTypes.oneOf(['true', 'false']),
};
