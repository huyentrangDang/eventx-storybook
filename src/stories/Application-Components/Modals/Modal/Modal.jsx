import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/typography.css';
import '../../../assets/css/color.css';
import '../../../assets/css/icon.css';
import { Button } from '../../../components/button/Button';
import { Checkbox } from '../../../components/checkbox/Checkbox';
import { InputDropdown } from '../../../components/input-dropdown/InputDropdown';
import { ButtonGroup } from '../../../components/button-group/ButtonGroup';
import { CheckboxGroupItem } from './../../../components/checkbox-group/CheckboxGroupItem';
import { ModalActions } from './../ModalActions/ModalActions';
import { ButtonCloseX } from './../../../components/button-close-x/ButtonCloseX';
import { Sliders } from '../../../components/sliders/Slider';
import '../../../assets/css/modal.css';
import '../../../assets/css/modal-icon.css';
import '../../../assets/css/checkbox-group-item.css';

export const Modals = ({
  type,
  breakpoint,
  xCloseButton,
  show11,
  show43,
  text,
  supportText,
  imageBeginSlider,
  imageEndSlider,
}) => {
  const BUTTON_GROUP = [
    {
      current: 'true',
      state: 'default',
      text: 'Member(s)',
    },
    {
      current: 'false',
      state: 'default',
      text: 'Team(s)',
    },
  ];

  const CHECKBOX_GROUP_STACKED_2_ITEM = [
    {
      selected: 'true',
      size: 'sm',
      type: 'avatar',
      state: 'default',
      text: 'Olivia Rhye',
      subText2: '+ 123456789',
      textButton: 'Change',
      iconCheck: 'icon-check-square-sm-primary-600',
    },
    {
      selected: 'true',
      size: 'sm',
      type: 'avatar',
      state: 'default',
      text: 'Phoenix Baker',
      subText2: '+ 123456789',
      textButton: 'Change',
      iconAvatar: 'avatar-phoenix-baker',
      iconCheck: 'icon-check-square-sm-primary-600',
    },
    {
      selected: 'false',
      size: 'sm',
      type: 'avatar',
      state: 'default',
      text: 'Candice Wu',
      subText2: '+ 123456789',
      textButton: 'Change',
      iconAvatar: 'avatar-candice-wu',
      iconCheck: 'icon-square-sm-default',
    },
    {
      selected: 'false',
      size: 'sm',
      type: 'avatar',
      state: 'default',
      text: 'Natali Craig',
      subText2: '+ 123456789',
      textButton: 'Change',
      iconAvatar: 'avatar-natali-craig',
      iconCheck: 'icon-square-sm-default',
    },
  ];

  const CHECKBOX_GROUP_STACKED_4_ITEM = [
    {
      selected: 'true',
      size: 'sm',
      type: 'avatar',
      state: 'default',
      text: 'Olivia Rhye',
      subText2: '+ 123456789',
      textButton: 'Change',
      iconCheck: 'icon-check-square-sm-primary-600',
    },
    {
      selected: 'true',
      size: 'sm',
      type: 'avatar',
      state: 'default',
      text: 'Phoenix Baker',
      subText2: '+ 123456789',
      textButton: 'Change',
      iconAvatar: 'avatar-phoenix-baker',
      iconCheck: 'icon-check-square-sm-primary-600',
    },
    {
      selected: 'true',
      size: 'sm',
      type: 'avatar',
      state: 'default',
      text: 'Lana Steiner',
      subText2: '+ 123456789',
      textButton: 'Change',
      iconAvatar: 'avatar-lana-steiner',
      iconCheck: 'icon-check-square-sm-primary-600',
    },
    {
      selected: 'true',
      size: 'sm',
      type: 'avatar',
      state: 'default',
      text: 'Demi Wilkinson',
      subText2: '+ 123456789',
      textButton: 'Change',
      iconAvatar: 'avatar-demi-wilkinson',
      iconCheck: 'icon-check-square-sm-primary-600',
    },
    {
      selected: 'false',
      size: 'sm',
      type: 'avatar',
      state: 'default',
      text: 'Candice Wu',
      subText2: '+ 123456789',
      textButton: 'Change',
      iconAvatar: 'avatar-candice-wu',
      iconCheck: 'icon-square-sm-default',
    },
    {
      selected: 'false',
      size: 'sm',
      type: 'avatar',
      state: 'default',
      text: 'Natali Craig',
      subText2: '+ 123456789',
      textButton: 'Change',
      iconAvatar: 'avatar-natali-craig',
      iconCheck: 'icon-square-sm-default',
    },
    {
      selected: 'false',
      size: 'sm',
      type: 'avatar',
      state: 'default',
      text: 'Drew Cano',
      subText2: '+ 123456789',
      textButton: 'Change',
      iconAvatar: 'avatar-drew-cano',
      iconCheck: 'icon-square-sm-default',
    },
    {
      selected: 'false',
      size: 'sm',
      type: 'avatar',
      state: 'default',
      text: 'Orlando Diggs',
      subText2: '+ 123456789',
      textButton: 'Change',
      iconAvatar: 'avatar-orlando-diggs',
      iconCheck: 'icon-square-sm-default',
    },
  ];

  return (
    <>
      <div className={`container-modal`}>
        <div className={[`modal`, `modal-type--${type}`].join(' ')}>
          <div className={`content-modal-type--${type}`}>
            <div className={`feature-icon`}>
              <div className={[`${featureIconPath(type)}`].join(' ')}></div>
            </div>

            <div className={`text-and-supportText-modal`}>
              <div className={`text-modal`}>
                {[`${showText(type, text)}`].join(' ')}
              </div>
              <div className={`supportText-modal`}>
                {[`${showSupportText(type, supportText)}`].join(' ')}
              </div>
            </div>

            <div className={`input-dropdown-modal`}>
              <InputDropdown
                type={'search'}
                state={'placeholder'}
                showLabel={'false'}
              />
            </div>

            <ButtonGroup
              icon={'false'}
              buttonArray={BUTTON_GROUP}
            />

            <div className={`checkbox-and-button-modal`}>
              <Checkbox
                checked={'true'}
                indeterminate={'false'}
                size={'sm'}
                type={'checkbox'}
                showText={'true'}
                state={'default'}
                text={'Select all'}
              />
              <Button
                size={'sm'}
                hierarchy={'linkColor'}
                icon={'default '}
                destructive={'false'}
                state={'default'}
                text={'Clear selection (4)'}
              />
            </div>

            {type === 'stacked-with-2-item' && (
              <div className={`items-modal`}>
                <div className={`row-item-modal`}>
                  {CHECKBOX_GROUP_STACKED_2_ITEM.splice(0, 2).map(
                    ({
                      selected,
                      size,
                      type,
                      state,
                      text,
                      subText2,
                      textButton,
                      iconCheck,
                      iconAvatar,
                    }) => (
                      <CheckboxGroupItem
                        selected={selected}
                        size={size}
                        type={type}
                        state={state}
                        text={text}
                        subText2={subText2}
                        textButton={textButton}
                        iconAvatar={iconAvatar}
                        iconCheck={iconCheck}
                        breakpoint={breakpoint}
                      />
                    )
                  )}
                </div>
                <div className={`row-item-modal`}>
                  {CHECKBOX_GROUP_STACKED_2_ITEM.splice(0, 2).map(
                    ({
                      selected,
                      size,
                      type,
                      state,
                      text,
                      subText2,
                      textButton,
                      iconCheck,
                      iconAvatar,
                    }) => (
                      <CheckboxGroupItem
                        selected={selected}
                        size={size}
                        type={type}
                        state={state}
                        text={text}
                        subText2={subText2}
                        textButton={textButton}
                        iconAvatar={iconAvatar}
                        iconCheck={iconCheck}
                        breakpoint={breakpoint}
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {type === 'table' && <div></div>}

            {type === 'stacked-with-4-item' && (
              <div className={`items-modal`}>
                <div className={`row-item-modal`}>
                  {CHECKBOX_GROUP_STACKED_4_ITEM.splice(0, 4).map(
                    ({
                      selected,
                      size,
                      type,
                      state,
                      text,
                      subText2,
                      textButton,
                      iconCheck,
                      iconAvatar,
                    }) => (
                      <CheckboxGroupItem
                        selected={selected}
                        size={size}
                        type={type}
                        state={state}
                        text={text}
                        subText2={subText2}
                        textButton={textButton}
                        iconAvatar={iconAvatar}
                        iconCheck={iconCheck}
                        breakpoint={breakpoint}
                      />
                    )
                  )}
                </div>
                <div className={`row-item-modal`}>
                  {CHECKBOX_GROUP_STACKED_4_ITEM.splice(0, 4).map(
                    ({
                      selected,
                      size,
                      type,
                      state,
                      text,
                      subText2,
                      textButton,
                      iconCheck,
                      iconAvatar,
                    }) => (
                      <CheckboxGroupItem
                        selected={selected}
                        size={size}
                        type={type}
                        state={state}
                        text={text}
                        subText2={subText2}
                        textButton={textButton}
                        iconAvatar={iconAvatar}
                        iconCheck={iconCheck}
                        breakpoint={breakpoint}
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {type === 'crop-image' && (
              <>
                <div className={`modal-crop-image`}></div>
                <div className={`container-slider-modal`}>
                  <div
                    className={[
                      `${imagePathBeginSlider(imageBeginSlider)}`,
                      `image-begin-slider-modal`,
                    ].join(' ')}
                  ></div>
                  <Sliders
                    label={'false'}
                    rightControl={'50%'}
                    leftControl={'0%'}
                    onlyRightControl={'true'}
                  />
                  <div
                    className={[
                      `${imagePathEndSlider(imageEndSlider)}`,
                      `image-last-slider-modal`,
                    ].join(' ')}
                  ></div>
                </div>
              </>
            )}
          </div>

          {type === 'crop-image' ? (
            <ModalActions
              type={'horizontal-fill-container'}
              dualAction={'true'}
              destructive={'false'}
              textSecondDualAction={'Crop'}
            />
          ) : (
            <ModalActions
              type={'horizontal-fill-container'}
              dualAction={'true'}
              destructive={'false'}
            />
          )}

          {xCloseButton === 'true' && type !== 'crop-image' && (
            <div className={`button-close-modal`}>
              <ButtonCloseX
                size={'lg'}
                color={'gray'}
                theme={'light'}
                state={'default'}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Modals.propTypes = {
  type: PropTypes.oneOf([
    'stacked-with-2-item',
    // 'table',
    'stacked-with-4-item',
    'crop-image',
  ]),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
  xCloseButton: PropTypes.oneOf(['true', 'false']),
  show11: PropTypes.oneOf(['true', 'false']),
  show43: PropTypes.oneOf(['true', 'false']),
};

export const featureIconPath = (type) => {
  if (type === 'stacked-with-2-item') {
    return 'icon-calendar-date-primary-600';
  }
  if (type === 'table' || type === 'crop-image') {
    return 'icon-file-06-primary-600';
  }
  if (type === 'stacked-with-4-item') {
    return 'icon-users-01-primary-600';
  }
};

export const showText = (type, text) => {
  if (type === 'stacked-with-2-item') {
    return 'All events';
  }
  if (type === 'table') {
    return 'Import preview';
  }
  if (type === 'stacked-with-4-item') {
    return 'Add crew members to Coupon';
  }
  if (type === 'crop-image') {
    return 'Edit your image';
  }
  if (text) {
    return text;
  }
};

export const showSupportText = (type, supportText) => {
  if (type === 'stacked-with-2-item') {
    return 'All events';
  }
  if (type === 'table' || type === 'stacked-with-4-item') {
    return 'Please select member(s) or team(s) and press “Add” when done';
  }
  if (type === 'crop-image') {
    return 'Please move the image and press “Crop” when done';
  }
  if (supportText) {
    return supportText;
  }
};

export const imagePathBeginSlider = (imageBeginSlider) => {
  if (imageBeginSlider) {
    return imageBeginSlider;
  }
  return 'icon-image-01-gray-500';
};

export const imagePathEndSlider = (imageEndSlider) => {
  if (imageEndSlider) {
    return imageEndSlider;
  }
  return 'icon-image-01-gray-500';
};
