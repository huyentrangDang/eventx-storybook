import PropTypes from 'prop-types';
import '../../assets/css/tooltip.css';

export const Tooltips = ({
  showSupportingText,
  text,
  supportingText,
  theme,
  arrow,
}) => {
  return (
    <>
      {showSupportingText === 'false' ? (
        <>
          {arrow === 'none' ? (
            <div
              className={`tooltip-supportingText--${showSupportingText}-arrow--${arrow}-theme-${theme}`}
            >
              <div
                className={`tooltip-supportingText--${showSupportingText}-theme--${theme}-arrow--${arrow}`}
              >
                <div className={`text-tooltip-theme-${theme} `}>{text}</div>
              </div>
            </div>
          ) : (
            <>
              {(arrow === 'right' ||
                arrow === 'bottom-center' ||
                arrow === 'bottom-left' ||
                arrow === 'bottom-right') && (
                <div
                  className={`tooltip-supportingText--${showSupportingText}-arrow--${arrow}`}
                >
                  <div
                    className={`tooltip-supportingText--${showSupportingText}-theme--${theme}-arrow--${arrow}`}
                  >
                    <div className={`text-tooltip-theme-${theme} `}>{text}</div>
                  </div>
                  <icon className={`tooltip-theme--${theme}-arrow--${arrow}`} />
                </div>
              )}

              {(arrow === 'left' || arrow === 'top-center') && (
                <div
                  className={`tooltip-supportingText--${showSupportingText}-arrow--${arrow}`}
                >
                  <icon className={`tooltip-theme--${theme}-arrow--${arrow}`} />
                  <div
                    className={`tooltip-supportingText--${showSupportingText}-theme--${theme}-arrow--${arrow}`}
                  >
                    <div className={`text-tooltip-theme-${theme}`}>{text}</div>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        <>
          {arrow === 'none' ? (
            <div
              className={`tooltip-supportingText--${showSupportingText}-arrow--${arrow}`}
            >
              <div
                className={`tooltip-supportingText--${showSupportingText}-theme--${theme}-arrow--${arrow}`}
              >
                <div className='tooltip-text-supportingText'>
                  <div className={`text-tooltip-theme-${theme}`}>{text}</div>
                  <div className={`supportingText-tooltip-theme-${theme}`}>
                    {supportingText}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {(arrow === 'right' ||
                arrow === 'bottom-center' ||
                arrow === 'bottom-left' ||
                arrow === 'bottom-right') && (
                <div
                  className={`tooltip-supportingText--${showSupportingText}-arrow--${arrow}`}
                >
                  <div
                    className={`tooltip-supportingText--${showSupportingText}-theme--${theme}-arrow--${arrow}`}
                  >
                    <div className='tooltip-text-supportingText'>
                      <div className={`text-tooltip-theme-${theme}`}>
                        {text}
                      </div>
                      <div className={`supportingText-tooltip-theme-${theme}`}>
                        {supportingText}
                      </div>
                    </div>
                  </div>
                  <icon className={`tooltip-theme--${theme}-arrow--${arrow}`} />
                </div>
              )}

              {(arrow === 'left' || arrow === 'top-center') && (
                <div
                  className={`tooltip-supportingText--${showSupportingText}-arrow--${arrow}`}
                >
                  <icon className={`tooltip-theme--${theme}-arrow--${arrow}`} />
                  <div
                    className={`tooltip-supportingText--${showSupportingText}-theme--${theme}-arrow--${arrow}`}
                  >
                    <div className='tooltip-text-supportingText'>
                      <div className={`text-tooltip-theme-${theme}`}>
                        {text}
                      </div>
                      <div className={`supportingText-tooltip-theme-${theme}`}>
                        {supportingText}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

Tooltips.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
  arrow: PropTypes.oneOf([
    'right',
    'left',
    'bottom-right',
    'bottom-left',
    'bottom-center',
    'top-center',
    'none',
  ]),
  showSupportingText: PropTypes.oneOf(['true', 'false']),
  text: PropTypes.string,
  supportingText: PropTypes.string,
};
