import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/text.css';
import '../../../assets/css/table/table-cell.css';
import '../../../assets/css/button-icon.css';
import { Badges } from '../../../components/Badges/Badges';
import { Checkbox } from './../../../components/checkbox/Checkbox';
import { ToggleBase } from './../../../components/toggle-base/ToggleBase';
import { Avatar } from './../../../components/avatar/Avatar';
import '../../../assets/css/avatar-icon.css';
import { ProgressBar } from './../../../components/progress-indicators/ProgressBar';
import { AvatarGroup } from './../../../components/avatar/AvatarGroup';
import { FeatureIcon } from './../../../Style-Guid/Misc-Icons/MiscIcon';
import '../../../assets/css/icon.css';
import { Button } from './../../../components/button/Button';
import { Dropdown } from './../../../components/dropdown&company-dropdown/Dropdown';
import { Toggles } from './../../../components/toggles/Toggles';

export const TableCell = ({
  style,
  supportingText,
  state,
  text,
  textSupport,
  textBadge,
  iconPaymentMethod,
  iconStar,
  numberStar,
}) => {
  const arrBadge = [
    {
      size: 'sm',
      icon: 'false',
      color: 'gray',
      outline: 'false',
      text: 'Label',
    },
    {
      size: 'sm',
      icon: 'false',
      color: 'blue',
      outline: 'false',
      text: 'Label',
    },
    {
      size: 'sm',
      icon: 'false',
      color: 'indigo',
      outline: 'false',
      text: 'Label',
    },
    {
      size: 'sm',
      icon: 'false',
      color: 'gray',
      outline: 'false',
      text: '+4',
    },
  ];

  const actionIcons = [
    {
      size: 'md',
      hierarchy: 'tertiaryGray',
      icon: 'only',
      destructive: 'false',
      state: 'default',
      iconTrailing: 'icon-copy-gray-600',
    },
    {
      size: 'md',
      hierarchy: 'tertiaryGray',
      icon: 'only',
      destructive: 'false',
      state: 'default',
      iconTrailing: 'icon-download-cloud-gray-600',
    },
    {
      size: 'md',
      hierarchy: 'tertiaryGray',
      icon: 'only',
      destructive: 'false',
      state: 'default',
      iconTrailing: 'icon-trash-gray-600',
    },
    {
      size: 'md',
      hierarchy: 'tertiaryGray',
      icon: 'only',
      destructive: 'false',
      state: 'default',
      iconTrailing: 'icon-edit-gray-600',
    },
  ];
  return (
    <div
      className={`table-cell-style--${style}-supportingText--${supportingText}-state--${state}`}
    >
      {style === 'lead-text' && (
        <>
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'text' && (
        <>
          {supportingText === 'false' ? (
            <span
              className='text-sm-regular'
              style={{ color: `var(--gray-600)` }}
            >
              {text}
            </span>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'lead-checkbox' && (
        <>
          <Checkbox
            checked={'false'}
            indeterminate={'false'}
            size={'md'}
            type={'checkbox'}
            showText={'false'}
            state={state === 'disabled' ? 'disabled' : 'default'}
          />
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'badge' && supportingText === 'false' && (
        <div className='badge-table-cell'>
          {' '}
          <span
            className='text-xs-medium'
            style={{ color: `var(--success-700)` }}
          >
            Active
          </span>
        </div>
      )}
      {style === 'badges-multiple' && supportingText === 'false' && (
        <div className='badges-multiple-table-cell'>
          {arrBadge?.map((item) => (
            <Badges
              size={item.size}
              icon={item.icon}
              color={item.color}
              outline={item.outline}
              text={item.text}
            />
          ))}
        </div>
      )}
      {style === 'lead-radio-button' && (
        <>
          <Checkbox
            checked={'false'}
            indeterminate={'false'}
            size={'md'}
            type={'radio'}
            showText={'false'}
            state={state === 'disabled' ? 'disabled' : 'default'}
          />
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'trend-positive' && (
        <>
          {supportingText === 'true' ? (
            <>
              <span
                className={`text-sm-regular`}
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
              <Badges
                size={'sm'}
                icon={'arrowUp'}
                color={'success'}
                outline={'false'}
                iconArrowUpLeading={'arrow_up_success'}
                text={textBadge ? textBadge : '20%'}
              />
            </>
          ) : (
            <Badges
              size={'sm'}
              icon={'arrowUp'}
              color={'success'}
              outline={'false'}
              iconArrowUpLeading={'arrow_up_success'}
              text={textBadge ? textBadge : '20%'}
            />
          )}
        </>
      )}
      {style === 'lead-toggle' && (
        <>
          <ToggleBase
            pressed={state === 'disabled' ? 'false' : 'true'}
            size={'sm'}
            state={state === 'disabled' ? 'disabled' : 'default'}
            theme={'dark'}
          />
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'trend-negative' && (
        <>
          {supportingText === 'true' ? (
            <>
              <span
                className={`text-sm-regular`}
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
              <Badges
                size={'sm'}
                icon={'iconLeading'}
                color={'error'}
                outline={'false'}
                text={textBadge ? textBadge : '20%'}
                iconLeading={'icon-arrow-down-error-500'}
              />
            </>
          ) : (
            <Badges
              size={'sm'}
              icon={'iconLeading'}
              color={'error'}
              outline={'false'}
              text={textBadge ? textBadge : '20%'}
              iconLeading={'icon-arrow-down-error-500'}
            />
          )}
        </>
      )}
      {style === 'lead-avatar' && (
        <>
          <Avatar
            size={'md'}
            placeholder={'false'}
            text={'false'}
            statusIcon={'false'}
            state={'default'}
            iconAvatar={'icon-avatar-olivia-rhye-image-color'}
          />
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'progress-bar' && supportingText === 'true' && (
        <>
          <ProgressBar
            progress={'60%'}
            label={'right'}
          />
        </>
      )}
      {style === 'lead-avatar-checkbox' && (
        <>
          <Checkbox
            checked={'false'}
            indeterminate={'false'}
            size={'md'}
            type={'checkbox'}
            showText={'false'}
            state={state === 'disabled' ? 'disabled' : 'default'}
          />
          <Avatar
            size={'md'}
            placeholder={'false'}
            text={'false'}
            statusIcon={'false'}
            state={'default'}
            iconAvatar={'icon-avatar-olivia-rhye-image-color'}
          />
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'avatar-group' && (
        <>
          {supportingText === 'true' && (
            <span
              className={`text-sm-regular`}
              style={{ color: 'var(--gray-600)' }}
            >
              {textSupport ? textSupport : '10 users'}
            </span>
          )}
          <AvatarGroup
            size={'xs'}
            arrNameAvatar={['first', 'second', 'three', 'four', 'five']}
            moreUser={'true'}
            addMore={'false'}
          />
        </>
      )}
      {style === 'lead-avatar-radio-button' && (
        <>
          <Checkbox
            checked={'false'}
            indeterminate={'false'}
            size={'md'}
            type={'radio'}
            showText={'false'}
            state={state === 'disabled' ? 'disabled' : 'default'}
          />
          <Avatar
            size={'md'}
            placeholder={'false'}
            text={'false'}
            statusIcon={'false'}
            state={'default'}
            iconAvatar={'icon-avatar-olivia-rhye-image-color'}
          />
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'avatar' && (
        <>
          <Avatar
            size={'sm'}
            placeholder={'false'}
            text={'false'}
            statusIcon={'false'}
            state={'default'}
            iconAvatar={'icon-avatar-olivia-rhye-image-color'}
          />
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-regular'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'lead-avatar-toggle' && (
        <>
          <ToggleBase
            pressed={state === 'disabled' ? 'false' : 'true'}
            size={'sm'}
            state={state === 'disabled' ? 'disabled' : 'default'}
            theme={'dark'}
          />
          <Avatar
            size={'md'}
            placeholder={'false'}
            text={'false'}
            statusIcon={'false'}
            state={'default'}
            iconAvatar={'icon-avatar-olivia-rhye-image-color'}
          />
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'payment-method' && (
        <>
          <div
            className={[
              iconPaymentMethod
                ? iconPaymentMethod
                : `${'icon-payment-method-visa-size-md'}`,
            ].join(' ')}
          ></div>
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-regular'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'lead-icon' && (
        <>
          <FeatureIcon
            size={'md'}
            color={'primary'}
            theme={'light-circle'}
            icon={'icon-file-04'}
          />
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'action-buttons' && supportingText === 'false' && (
        <>
          <Button
            size={'md'}
            hierarchy={'linkGray'}
            icon={'default'}
            destructive={'false'}
            state={state === 'disabled' ? 'disabled' : 'default'}
            text={'Delete'}
          />
          <Button
            size={'md'}
            hierarchy={'linkColor'}
            icon={'default'}
            destructive={'false'}
            state={state === 'disabled' ? 'disabled' : 'default'}
            text={'Edit'}
          />
        </>
      )}
      {style === 'lead-icon-checkbox' && (
        <>
          <Checkbox
            checked={'false'}
            indeterminate={'false'}
            size={'md'}
            type={'checkbox'}
            showText={'false'}
            state={state === 'disabled' ? 'disabled' : 'default'}
          />
          <FeatureIcon
            size={'md'}
            color={'primary'}
            theme={'light-circle'}
            icon={'icon-file-04'}
          />
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'action-icons' && supportingText === 'false' && (
        <>
          {actionIcons.map(
            ({ size, hierarchy, icon, destructive, state, iconTrailing }) => (
              <Button
                size={size}
                hierarchy={hierarchy}
                icon={icon}
                destructive={destructive}
                state={state}
                iconTrailing={iconTrailing}
              />
            )
          )}
        </>
      )}
      {style === 'lead-icon-radio-button' && (
        <>
          <Checkbox
            checked={'false'}
            indeterminate={'false'}
            size={'md'}
            type={'radio'}
            showText={'false'}
            state={state === 'disabled' ? 'disabled' : 'default'}
          />
          <FeatureIcon
            size={'md'}
            color={'primary'}
            theme={'light-circle'}
            icon={'icon-file-04'}
          />
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'action-dropdown-icon' && supportingText === 'false' && (
        <>
          <Dropdown
            type={'icon'}
            open={'false'}
            icon={'dot-vertical-gray-400'}
          />
        </>
      )}
      {style === 'lead-icon-toggle' && (
        <>
          <ToggleBase
            pressed={state === 'disabled' ? 'false' : 'true'}
            size={'sm'}
            state={state === 'disabled' ? 'disabled' : 'default'}
            theme={'dark'}
          />
          <FeatureIcon
            size={'md'}
            color={'primary'}
            theme={'light-circle'}
            icon={'icon-file-04'}
          />
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'checkbox-only' && supportingText === 'false' && (
        <Checkbox
          checked={'false'}
          indeterminate={'false'}
          size={'md'}
          type={'checkbox'}
          showText={'false'}
          state={state === 'disabled' ? 'disabled' : 'default'}
        />
      )}
      {style === 'lead-payment-method' && (
        <>
          <div
            className={[
              iconPaymentMethod
                ? iconPaymentMethod
                : `${'icon-payment-method-visa-size-md'}`,
            ].join(' ')}
          ></div>
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'radio-button-only' && supportingText === 'false' && (
        <Checkbox
          checked={'false'}
          indeterminate={'false'}
          size={'md'}
          type={'radio'}
          showText={'false'}
          state={state === 'disabled' ? 'disabled' : 'default'}
        />
      )}
      {style === 'lead-payment-method-checkbox' && (
        <>
          <Checkbox
            checked={'false'}
            indeterminate={'false'}
            size={'md'}
            type={'checkbox'}
            showText={'false'}
            state={state === 'disabled' ? 'disabled' : 'default'}
          />
          <div
            className={[
              iconPaymentMethod
                ? iconPaymentMethod
                : `${'icon-payment-method-visa-size-md'}`,
            ].join(' ')}
          ></div>
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'toggle-only' && supportingText === 'false' && (
        <>
          <ToggleBase
            pressed={state === 'disabled' ? 'false' : 'true'}
            size={'sm'}
            theme={'dark'}
            state={state === 'disabled' ? 'disabled' : 'default'}
          />
        </>
      )}
      {style === 'lead-payment-method-radio-button' && (
        <>
          <Checkbox
            checked={'false'}
            indeterminate={'false'}
            size={'md'}
            type={'radio'}
            showText={'false'}
            state={state === 'disabled' ? 'disabled' : 'default'}
          />
          <div
            className={[
              iconPaymentMethod
                ? iconPaymentMethod
                : `${'icon-payment-method-visa-size-md'}`,
            ].join(' ')}
          ></div>
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
      {style === 'star-ratings' && supportingText === 'false' && (
        <>
          {Array.from(new Array(numberStar ? numberStar : 5)).map(() => (
            <icon className={iconStar ? iconStar : `icon-star-warning-400`} />
          ))}
        </>
      )}
      {style === 'lead-payment-method-toggle' && (
        <>
          <ToggleBase
            pressed={state === 'disabled' ? 'false' : 'true'}
            size={'sm'}
            theme={'dark'}
            state={state === 'disabled' ? 'disabled' : 'default'}
          />
          <div
            className={[
              iconPaymentMethod
                ? iconPaymentMethod
                : `${'icon-payment-method-visa-size-md'}`,
            ].join(' ')}
          ></div>
          {supportingText === 'false' ? (
            <div className='textAndBadge-table-cell'>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-900)` }}
              >
                {text}
              </span>
            </div>
          ) : (
            <div className='textAndSupporttingText-table-cell'>
              {' '}
              <div className='textAndBadge-table-cell'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-900)` }}
                >
                  {text}
                </span>
              </div>
              <span
                className='text-sm-regular'
                style={{ color: `var(--gray-600)` }}
              >
                {textSupport}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

TableCell.propTypes = {
  style: PropTypes.oneOf([
    'text',
    'avatar',
    'lead-text',
    'badges-multiple',
    'avatar-group',
    'badge',
    'lead-toggle',
    'lead-radio-button',
    'lead-avatar',
    'lead-avatar-toggle',
    'lead-avatar-radio-button',
    'lead-avatar-checkbox',
    'payment-method',
    'toggle-only',
    'radio-button-only',
    'lead-payment-method',
    'lead-payment-method-toggle',
    'lead-icon',
    'lead-icon-toggle',
    'lead-payment-method-radio-button',
    'lead-icon-radio-button',
    // 'lead-icon-method-checkbox',
    'lead-icon-checkbox',
    'lead-payment-method-checkbox',
    'trend-negative',
    'trend-positive',
    'action-buttons',
    'progress-bar',
    'action-icons',
    'star-ratings',
    'action-dropdown-icon',
    'checkbox-only',
    'lead-checkbox',
  ]),
  supportingText: PropTypes.oneOf(['true', 'false']),
  state: PropTypes.oneOf(['default', 'hover', 'disabled']),
  text: PropTypes.string,
  textSupport: PropTypes.string,
};
