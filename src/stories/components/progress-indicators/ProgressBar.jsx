import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/progress-indicator.css';
import '../../assets/css/typography.css';

export const ProgressBar = ({ progress, label }) => {
  return (
    <>
      {label === 'false' && (
        <div className={`container-progress`}>
          <div className={`progress-indicator`}>
            <div className={[`progress-bar`].join(' ')}>
              <div className={[`background-progress`].join(' ')}>
                <div
                  className={[`progress--${progress.replaceAll('%', '')}`].join(
                    ' '
                  )}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {label === 'right' && (
        <div className={`container-progress`}>
          <div className={`progress-indicator`}>
            <div className={[`progress-bar`].join(' ')}>
              <div className={[`background-progress`].join(' ')}>
                <div
                  className={[
                    `progress--${progress.replaceAll('%', '')}-label`,
                  ].join(' ')}
                ></div>
              </div>
            </div>
            <div className={`progress-bar-percentage`}>{progress}</div>
          </div>
        </div>
      )}

      {label === 'bottom' && (
        <div className={`container-progress`}>
          <div className={`progress-indicator-label`}>
            <div className={[`progress-bar`].join(' ')}>
              <div className={[`background-progress`].join(' ')}>
                <div
                  className={[
                    `progress--${progress.replaceAll('%', '')}-label`,
                  ].join(' ')}
                ></div>
              </div>
            </div>
            <div className={`progress-bar-percentage`}>{progress}</div>
          </div>
        </div>
      )}

      {label === 'top-floating' && (
        <div className={`container-progress`}>
          <div className={`progress-indicator-label`}>
            <div className={[`progress-bar`].join(' ')}>
              <div
                className={[
                  `tooltip-progress--${progress.replaceAll('%', '')}`,
                  `tooltip-label--${label}`,
                ].join(' ')}
              >
                <div className={`content-tooltip-progress-bar`}>
                  <span className='text-xs-semibold'>{progress}</span>
                </div>
              </div>
              <div className={[`background-progress`].join(' ')}>
                <div
                  className={[
                    `progress--${progress.replaceAll('%', '')}-label`,
                  ].join(' ')}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {label === 'bottom-floating' && (
        <div className={`container-progress`}>
          <div className={`progress-indicator-label`}>
            <div className={[`progress-bar`].join(' ')}>
              <div
                className={[
                  `tooltip-progress--${progress.replaceAll('%', '')}`,
                  `tooltip-label--${label}`,
                ].join(' ')}
              >
                <div className={`content-tooltip-progress-bar`}>
                  <span className='text-xs-semibold'>{progress}</span>
                </div>
              </div>
              <div className={[`background-progress`].join(' ')}>
                <div
                  className={[
                    `progress--${progress.replaceAll('%', '')}-label`,
                  ].join(' ')}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
ProgressBar.propTypes = {
  progress: PropTypes.oneOf([
    '0%',
    '10%',
    '20%',
    '30%',
    '40%',
    '50%',
    '60%',
    '70%',
    '80%',
    '90%',
    '100%',
  ]),
  label: PropTypes.oneOf([
    'false',
    'bottom-floating',
    'top-floating',
    'bottom',
    'right',
  ]),
};

export const iconPath = () => {};
