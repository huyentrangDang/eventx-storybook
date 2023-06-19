import PropTypes from 'prop-types';
import '../../../../assets/css/pagination/pagination-button-group-base.css';
import '../../../../assets/css/text.css';

export const PaginationButtonGroupBase = ({
  icon,
  state,
  text,
  iconPrev,
  iconNext,
}) => {
  return (
    <div
      className={[
        `pagination-button-group-base-icon--${icon}`,
        `pagination-button-group-state--${state}`,
      ].join(' ')}
    >
      {icon === 'false' && (
        <span
          className='text-sm-semibold'
          style={{
            color: state === 'focused' ? `var(--gray-700)` : `var(--gray-800)`,
          }}
        >
          {text}
        </span>
      )}
      {icon === 'leading' && (
        <>
          <icon
            className={[`${iconDefaultPath(icon, state)}`, iconPrev].join(' ')}
          />
          <span
            className='text-sm-semibold'
            style={{
              color:
                state === 'active-hover'
                  ? `var(--gray-800)`
                  : `var(--gray-700)`,
            }}
          >
            Previous
          </span>
        </>
      )}
      {icon === 'trailing' && (
        <>
          <span
            className='text-sm-semibold'
            style={{
              color:
                state === 'active-hover'
                  ? `var(--gray-800)`
                  : `var(--gray-700)`,
            }}
          >
            Next
          </span>
          <icon
            className={[`${iconDefaultPath(icon, state)}`, iconNext].join(' ')}
          />
        </>
      )}
      {icon === 'only' && (
        <icon
          className={[`${iconDefaultPath(icon, state)}`, iconPrev].join(' ')}
        />
      )}
    </div>
  );
};

PaginationButtonGroupBase.propTypes = {
  icon: PropTypes.oneOf(['leading', 'trailing', 'only', 'false']),
  state: PropTypes.oneOf(['focused', 'active-hover', 'default']),
  text: PropTypes.string,
};

export const iconDefaultPath = (icon, state) => {
  if (icon === 'leading') {
    if (state === 'focused' || state === 'default') return 'arrow_left_gray700';
    if (state === 'active-hover') return 'arrow_left_gray800';
  }
  if (icon === 'trailing' || icon === 'only') {
    if (state === 'focused' || state === 'default')
      return 'arrow_right_gray700';
    if (state === 'active-hover') return 'arrow_right_gray800';
  }
};
