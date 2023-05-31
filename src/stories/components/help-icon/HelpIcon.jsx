import PropTypes from 'prop-types';
import '../../assets/css/help-icon.css';

export const HelpIcon = ({ open, supportingText, tootltip }) => {
  return (
    <>
      {open === 'false' ? (
        <>
          <icon className='help-icon_gray400' />
        </>
      ) : (
        <>
          <>
            {tootltip === 'top-no-arrow' && (
              <>
                <div
                  className={`tooltip-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                >
                  <div
                    className={`content-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                  >
                    {supportingText === 'false' ? (
                      <span
                        className={[
                          `text_xs_semibold_help-icon`,
                          `text_align_center_help_icon`,
                        ].join(' ')}
                      >
                        This is a tooltip
                      </span>
                    ) : (
                      <div className='textAndSupportingText-help-icon'>
                        <span className='text_xs_semibold_help-icon'>
                          This is a tooltip
                        </span>
                        <span className='text_xs_medium_help-icon'>
                          Tooltips are used to describe or identify an element.
                          In most scenarios, tooltips help the user understand
                          meaning, function or alt-text.
                        </span>
                      </div>
                    )}
                  </div>
                  <icon className={`help-icon_gray500`} />
                  <icon className={`cursor`} />
                </div>
              </>
            )}
            {tootltip === 'top-arrow' && (
              <>
                <div
                  className={`tooltip-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                >
                  <div
                    className={`content-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                  >
                    {supportingText === 'false' ? (
                      <span
                        className={[
                          `text_xs_semibold_help-icon`,
                          `text_align_center_help_icon`,
                        ].join(' ')}
                      >
                        This is a tooltip
                      </span>
                    ) : (
                      <div className='textAndSupportingText-help-icon'>
                        <span className='text_xs_semibold_help-icon'>
                          This is a tooltip
                        </span>
                        <span className='text_xs_medium_help-icon'>
                          Tooltips are used to describe or identify an element.
                          In most scenarios, tooltips help the user understand
                          meaning, function or alt-text.
                        </span>
                      </div>
                    )}
                  </div>
                  <icon className={`help-icon-tooltip--${tootltip}`} />
                  <icon className={`help-icon_gray500`} />
                  <icon className={`cursor`} />
                </div>
              </>
            )}
            {tootltip === 'top-right' && (
              <>
                {' '}
                <div
                  className={`tooltip-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                >
                  <div
                    className={`content-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                  >
                    {supportingText === 'false' ? (
                      <span
                        className={[
                          `text_xs_semibold_help-icon`,
                          `text_align_center_help_icon`,
                        ].join(' ')}
                      >
                        This is a tooltip
                      </span>
                    ) : (
                      <div className='textAndSupportingText-help-icon'>
                        <span className='text_xs_semibold_help-icon'>
                          This is a tooltip
                        </span>
                        <span className='text_xs_medium_help-icon'>
                          Tooltips are used to describe or identify an element.
                          In most scenarios, tooltips help the user understand
                          meaning, function or alt-text.
                        </span>
                      </div>
                    )}
                  </div>
                  <icon className={`help-icon-tooltip--${tootltip}`} />
                  <icon className={`help-icon_gray500-tooltip--${tootltip}`} />
                  <icon className={`cursor-tooltip--${tootltip}`} />
                </div>
              </>
            )}
            {tootltip === 'top-left' && (
              <>
                {' '}
                <div
                  className={`tooltip-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                >
                  <div
                    className={`content-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                  >
                    {supportingText === 'false' ? (
                      <span
                        className={[
                          `text_xs_semibold_help-icon`,
                          `text_align_center_help_icon`,
                        ].join(' ')}
                      >
                        This is a tooltip
                      </span>
                    ) : (
                      <div className='textAndSupportingText-help-icon'>
                        <span className='text_xs_semibold_help-icon'>
                          This is a tooltip
                        </span>
                        <span className='text_xs_medium_help-icon'>
                          Tooltips are used to describe or identify an element.
                          In most scenarios, tooltips help the user understand
                          meaning, function or alt-text.
                        </span>
                      </div>
                    )}
                  </div>
                  <icon className={`help-icon-tooltip--${tootltip}`} />
                  <icon className={`help-icon_gray500-tooltip--${tootltip}`} />
                  <icon className={`cursor-tooltip--${tootltip}`} />
                </div>
              </>
            )}
            {tootltip === 'bottom' && (
              <>
                {' '}
                <div
                  className={`tooltip-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                >
                  <icon className={`cursor-tooltip--${tootltip}`} />
                  <icon className={`help-icon_gray500-tooltip--${tootltip}`} />
                  <icon className={`help-icon-tooltip--${tootltip}`} />

                  <div
                    className={`content-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                  >
                    {supportingText === 'false' ? (
                      <span
                        className={[
                          `text_xs_semibold_help-icon`,
                          `text_align_center_help_icon`,
                        ].join(' ')}
                      >
                        This is a tooltip
                      </span>
                    ) : (
                      <div className='textAndSupportingText-help-icon'>
                        <span className='text_xs_semibold_help-icon'>
                          This is a tooltip
                        </span>
                        <span className='text_xs_medium_help-icon'>
                          Tooltips are used to describe or identify an element.
                          In most scenarios, tooltips help the user understand
                          meaning, function or alt-text.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
            {tootltip === 'right' && (
              <>
                {' '}
                <div
                  className={`tooltip-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                >
                  <icon className={`cursor-tooltip--${tootltip}`} />
                  <icon className={`help-icon_gray500-tooltip--${tootltip}`} />
                  <icon className={`help-icon-tooltip--${tootltip}`} />

                  <div
                    className={`content-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                  >
                    {supportingText === 'false' ? (
                      <span
                        className={[
                          `text_xs_semibold_help-icon`,
                          `text_align_center_help_icon`,
                        ].join(' ')}
                      >
                        This is a tooltip
                      </span>
                    ) : (
                      <div className='textAndSupportingText-help-icon'>
                        <span className='text_xs_semibold_help-icon'>
                          This is a tooltip
                        </span>
                        <span className='text_xs_medium_help-icon'>
                          Tooltips are used to describe or identify an element.
                          In most scenarios, tooltips help the user understand
                          meaning, function or alt-text.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
            {tootltip === 'left' && (
              <>
                {' '}
                <div
                  className={`tooltip-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                >
                  <div
                    className={`content-open--${open}-supportingText--${supportingText}--tooltip--${tootltip}`}
                  >
                    {supportingText === 'false' ? (
                      <span
                        className={[
                          `text_xs_semibold_help-icon`,
                          `text_align_center_help_icon`,
                        ].join(' ')}
                      >
                        This is a tooltip
                      </span>
                    ) : (
                      <div className='textAndSupportingText-help-icon'>
                        <span className='text_xs_semibold_help-icon'>
                          This is a tooltip
                        </span>
                        <span className='text_xs_medium_help-icon'>
                          Tooltips are used to describe or identify an element.
                          In most scenarios, tooltips help the user understand
                          meaning, function or alt-text.
                        </span>
                      </div>
                    )}
                  </div>
                  <icon className={`help-icon-tooltip--${tootltip}`} />
                  <icon className={`help-icon_gray500-tooltip--${tootltip}`} />
                  <icon className={`cursor-tooltip--${tootltip}`} />
                </div>
              </>
            )}
          </>
        </>
      )}
    </>
  );
};

HelpIcon.propTypes = {
  open: PropTypes.oneOf(['true', 'false']),
  supportingText: PropTypes.oneOf(['true', 'false']),
  tootltip: PropTypes.oneOf([
    'top-no-arrow',
    'top-arrow',
    'top-right',
    'top-left',
    'bottom',
    'right',
    'left',
  ]),
};
