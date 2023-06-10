import PropTypes from 'prop-types';
import '../../../assets/css/alert.css';
import '../../../assets/css/icon.css';
import '../../../assets/css/color.css';
import { Button } from '../../../components/button/Button';
import { ButtonCloseX } from './../../../components/button-close-x/ButtonCloseX';

export const Alert = ({ color, breakpoint, text, subText, icon }) => {
  return (
    <div
      className={[
        `alert-breakpoint--${breakpoint}`,
        `alert-color--${color}`,
      ].join(' ')}
    >
      <icon className={[icon ? icon : `${iconAlertPath(color)}`].join(' ')} />
      <div className='content-alert'>
        <div className='text-supportingText-alert'>
          <span
            className={[`text-sm-semibold`, `${setColorTextAlert(color)}`].join(
              ' '
            )}
          >
            {text}
          </span>
          <span
            className={[`text-sm-regular`, `${setColorTextAlert(color)}`].join(
              ' '
            )}
          >
            {subText}
          </span>
        </div>
        <div className='actions-alert'>
          {' '}
          <>
            {color === 'success' ? (
              <>
                <Button
                  size='sm'
                  hierarchy='linkGray'
                  icon='default'
                  destructive='false'
                  state='default'
                  text='Learn more'
                  color={`${setColorButtonTextAlert(color)}`}
                />

                <Button
                  size='sm'
                  hierarchy='linkColor'
                  icon='default'
                  destructive='false'
                  state='default'
                  showiconTrailing={'true'}
                  iconTrailing='icon_arrow_right_success700'
                  text='View changes'
                  color={`${setColorTextAlert(color)}`}
                />
              </>
            ) : color === 'warning' ? (
              <>
                <Button
                  size='sm'
                  hierarchy='linkGray'
                  icon='default'
                  destructive='false'
                  state='default'
                  text='Learn more'
                  color={`${setColorButtonTextAlert(color)}`}
                />
                <Button
                  size='sm'
                  hierarchy='linkColor'
                  icon='default'
                  destructive='false'
                  state='default'
                  showiconTrailing={'true'}
                  iconTrailing='icon_arrow_right_warning700'
                  text='View changes'
                  color={`${setColorTextAlert(color)}`}
                />
              </>
            ) : color === 'error' ? (
              <>
                <Button
                  size='sm'
                  hierarchy='linkGray'
                  icon='default'
                  destructive='false'
                  state='default'
                  text='Learn more'
                  color={`${setColorButtonTextAlert(color)}`}
                />
                <Button
                  size='sm'
                  hierarchy='linkColor'
                  icon='default'
                  destructive='false'
                  state='default'
                  showiconTrailing={'true'}
                  iconTrailing='icon_arrow_right_error700'
                  text='View changes'
                  color={`${setColorTextAlert(color)}`}
                />
              </>
            ) : color === 'gray' ? (
              <>
                <Button
                  size='sm'
                  hierarchy='linkGray'
                  icon='default'
                  destructive='false'
                  state='default'
                  text='Learn more'
                  color={`${setColorButtonTextAlert(color)}`}
                />
                <Button
                  size='sm'
                  hierarchy='linkColor'
                  icon='default'
                  destructive='false'
                  state='default'
                  showiconTrailing={'true'}
                  iconTrailing='icon_arrow_right_gray600'
                  text='View changes'
                  color={`${setColorTextAlert(color)}`}
                />
              </>
            ) : (
              <>
                <Button
                  size='sm'
                  hierarchy='linkGray'
                  icon='default'
                  destructive='false'
                  state='default'
                  text='Learn more'
                  color={`${setColorButtonTextAlert(color)}`}
                />
                <Button
                  size='sm'
                  hierarchy='linkColor'
                  icon='default'
                  destructive='false'
                  state='default'
                  showiconTrailing={'true'}
                  iconTrailing='icon_arrow_right_primary700'
                  text='View changes'
                  color={`${setColorTextAlert(color)}`}
                />
              </>
            )}
          </>
        </div>
      </div>
      {breakpoint === 'default' ? (
        <ButtonCloseX
          size={'sm'}
          color={color === 'primary' ? 'primary' : 'gray'}
          theme={'light'}
          state={'default'}
          icon={`icon-x-close-color--${color}`}
        />
      ) : (
        <div className='button-closeX-alert'>
          {' '}
          <ButtonCloseX
            size={'sm'}
            color={color === 'primary' ? 'primary' : 'gray'}
            theme={'light'}
            state={'default'}
            icon={`icon-x-close-color--${color}`}
          />
        </div>
      )}
    </div>
  );
};

Alert.propTypes = {
  color: PropTypes.oneOf(['success', 'warning', 'error', 'gray', 'primary']),
  breakpoint: PropTypes.oneOf(['default', 'mobile']),
  text: PropTypes.string,
  subText: PropTypes.string,
};
export const iconAlertPath = (color) => {
  if (color === 'success') {
    return 'icon_check_circle_success600';
  }
  if (color === 'warning') {
    return 'icon_alert_triangle_warning600';
  }
  if (color === 'error') {
    return 'icon_alert_circle_error600';
  }
  if (color === 'gray') {
    return 'icon_info_circle_gray600';
  }
  if (color === 'primary') {
    return 'icon_info_circle_primary600';
  }
};

export const iconArrowRightAlert = (color) => {
  if (color === 'success') {
    return 'icon_arrow_right_success700';
  }
  if (color === 'warning') {
    return 'icon_arrow_right_warning700';
  }
  if (color === 'error') {
    return 'icon_arrow_right_error700';
  }
  if (color === 'gray') {
    return 'icon_arrow_right_gray600';
  }
  if (color === 'primary') {
    return 'icon_arrow_right_primary700';
  }
};

export const setColorTextAlert = (color) => {
  switch (color) {
    case 'primary': {
      return 'color-primary-700';
    }
    case 'gray': {
      return 'color-gray-700';
    }
    case 'error': {
      return 'color-error-700';
    }
    case 'warning': {
      return 'color-warning-700';
    }
    case 'success': {
      return 'color-success-700';
    }
    default: {
      return {};
    }
  }
};

export const setColorButtonTextAlert = (color) => {
  switch (color) {
    case 'primary': {
      return 'color-primary-600';
    }
    case 'gray': {
      return 'color-gray-600';
    }
    case 'error': {
      return 'color-error-600';
    }
    case 'warning': {
      return 'color-warning-600';
    }
    case 'success': {
      return 'color-success-600';
    }
    default: {
      return {};
    }
  }
};
