import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/color.css';
import '../../../assets/css/text.css';
import '../../../../App.css';
import '../../../assets/css/progress-icons-centered.css';
import { StepBase } from '../Step-Base/StepBase';

export const ProgressIconsCentered = ({
  size,
  theme,
  step,
  breakpoint,
  items,
}) => {
  const arrStepBase = [
    {
      status: 'complete',
      text: 'Your details',
      supporttingText: 'Please provide your name and email',
    },
    {
      status: 'current',
      text: 'Company details',
      supporttingText: 'A few details about your company',
    },
    {
      status: 'incomplete',
      text: 'Invite your team',
      supporttingText: 'Start collaborating with your team',
    },
    {
      status: 'incomplete',
      text: 'Add your socials',
      supporttingText: 'Share posts to your social accounts',
    },
  ];

  return (
    <>
      {theme === 'light' && (
        <div
          className={[
            `container-progress-icon-centered-theme--${theme}-breakpoint--${breakpoint}`,
            `connector-step-base`,
          ].join(' ')}
        >
          {breakpoint === 'desktop' ? (
            <div className='content-progress-icon-centered-breakpoint--desktop'>
              {items
                ? items
                : arrStepBase.slice(0, Number(step)).map((item) => (
                    <StepBase
                      status={item.status}
                      size={size}
                      theme={'light'}
                      state={'default'}
                      type={'top'}
                      text={item.text}
                      supporttingText={item.supporttingText}
                    />
                  ))}
              <div className={`lines-progress-center-size--${size}`}>
                <div className={`line-first-progress-center-step--${step}`} />
                {step === '4' && (
                  <div
                    className={`line-center-progress-center-step--${step}`}
                  />
                )}
                <div className={`line-end-progress-center-step--${step}`} />
              </div>
            </div>
          ) : (
            <>
              {step === '3' ? (
                <>
                  {items
                    ? items
                    : arrStepBase.slice(0, Number(step)).map((item) => (
                        <StepBase
                          status={item.status}
                          size={size}
                          theme={'light'}
                          state={'default'}
                          type={'iconLeft'}
                          text={item.text}
                          supporttingText={item.supporttingText}
                        />
                      ))}
                </>
              ) : (
                <>
                  {items
                    ? items
                    : arrStepBase.map((item) => (
                        <StepBase
                          status={item.status}
                          size={size}
                          theme={'light'}
                          state={'default'}
                          type={'iconLeft'}
                          text={item.text}
                          supporttingText={item.supporttingText}
                        />
                      ))}
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

ProgressIconsCentered.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  step: PropTypes.oneOf(['3', '4']),
  theme: PropTypes.oneOf(['light']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string,
      type: PropTypes.string,
      state: PropTypes.string,
      text: PropTypes.string,
      supporttingText: PropTypes.string,
    })
  ),
};
