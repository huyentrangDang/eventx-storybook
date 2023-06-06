import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/common.css';
import '../../../assets/css/typography.css';
import '../../../assets/css/color.css';
import '../../../assets/css/icon.css';
import '../../../assets/css/modal.css';
import '../../../assets/css/navigation/navigation-icon.css';
import '../../../assets/css/page-header.css';
import { Button } from '../../../components/button/Button';
import { Checkbox } from '../../../components/checkbox/Checkbox';

export const ModalActions = ({
  type,
  dualAction,
  destructive,
  textCheckbox,
  textNoDualAction,
  textFirstDualAction,
  textSecondDualAction,
}) => {
  return (
    <>
      {(type === 'horizontal-fill-container' ||
        type === 'vertical-fill-container') && (
        <div
          className={`modal-actions-type--${type}-dualAction--${dualAction}-destructive--${destructive}`}
        >
          {dualAction === 'true' ? (
            <>
              <div
                style={{
                  order: type === 'vertical-fill-container' ? 1 : 0,
                  width: '100%',
                }}
              >
                <Button
                  size={'lg'}
                  hierarchy={'secondaryGray'}
                  icon={'default'}
                  destructive={destructive}
                  state={'default'}
                  text={showTextFirstDualAction(textFirstDualAction)}
                  widthButton={'100%'}
                />
              </div>
              <div
                style={{
                  order: type === 'vertical-fill-container' ? 0 : 1,
                  width: '100%',
                }}
              >
                <Button
                  size={'lg'}
                  hierarchy={'primary'}
                  icon={'default'}
                  destructive={destructive}
                  state={'default'}
                  text={showTextSecondDualAction(
                    destructive,
                    textSecondDualAction
                  )}
                  widthButton={'100%'}
                />
              </div>
            </>
          ) : (
            <Button
              size={'lg'}
              hierarchy={'primary'}
              icon={'default'}
              destructive={destructive}
              state={'default'}
              text={showTextNoDualAction(destructive, textNoDualAction)}
              widthButton={'100%'}
            />
          )}
        </div>
      )}

      {type === 'horizontal-right-aligned-checkbox' && (
        <div className={`modal-actions-type--${type}`}>
          <>
            <Checkbox
              checked={'false'}
              indeterminate={'false'}
              size={'sm'}
              type={'checkbox'}
              showText={'true'}
              text={'Don’t show again'}
              state={'default'}
            />
            <div className={`button-modal`}>
              <Button
                size={'lg'}
                hierarchy={'linkGray'}
                icon={'default'}
                destructive={destructive}
                state={'default'}
                text={textCheckbox}
                showIconLeading={'true'}
                iconLeading={'icon-settings-01'}
              />
            </div>
            <div className={`actions-modal`}>
              {dualAction === 'false' ? (
                <Button
                  size={'lg'}
                  hierarchy={'primary'}
                  icon={'default'}
                  destructive={destructive}
                  state={'default'}
                  text={showTextNoDualAction(destructive, textNoDualAction)}
                />
              ) : (
                <>
                  <Button
                    size={'lg'}
                    hierarchy={'secondaryGray'}
                    icon={'default'}
                    destructive={destructive}
                    state={'default'}
                    text={showTextFirstDualAction(textFirstDualAction)}
                  />
                  <Button
                    size={'lg'}
                    hierarchy={'primary'}
                    icon={'default'}
                    destructive={destructive}
                    state={'default'}
                    text={showTextSecondDualAction(
                      destructive,
                      textSecondDualAction
                    )}
                  />
                </>
              )}
            </div>
          </>
        </div>
      )}
    </>
  );
};

ModalActions.propTypes = {
  type: PropTypes.oneOf([
    'horizontal-fill-container',
    'vertical-fill-container',
    'horizontal-right-aligned-checkbox',
  ]),
  dualAction: PropTypes.oneOf(['true', 'false']),
  destructive: PropTypes.oneOf(['true', 'false']),
  checkbox: PropTypes.oneOf(['true', 'false']),
  tertiaryButton: PropTypes.oneOf(['true', 'false']),
  textCheckbox: PropTypes.string,
};

export const showTextNoDualAction = (destructive, textNoDualAction) => {
  if (textNoDualAction) {
    return textNoDualAction;
  } else {
    if (destructive === 'false') {
      return 'Confirm';
    }
    if (destructive === 'true') {
      return 'Delete';
    }
  }
};

export const showTextFirstDualAction = (textFirstDualAction) => {
  if (!textFirstDualAction) {
    return 'Cancel';
  }
  return textFirstDualAction;
};

export const showTextSecondDualAction = (destructive, textSecondDualAction) => {
  if (textSecondDualAction) {
    return textSecondDualAction;
  } else {
    if (destructive === 'false') {
      return 'Confirm';
    }
    if (destructive === 'true') {
      return 'Delete';
    }
  }
};
