import PropTypes from 'prop-types';
import '../../../../assets/css/pagination/pagination.css';
import '../../../../assets/css/button-icon.css';
import '../../../../assets/css/text.css';
import { Button } from '../../../../components/button/Button';
import { PaginationNumberBase } from './../../_Unpublished-Base-Components/Pagination-Number-Base/PaginationNumberBase';
import { PaginationButtonGroupBase } from './../../_Unpublished-Base-Components/Pagination-Button-Group-Base/PaginationButtonGroupBase';
import { InputField } from './../../../../components/input/InputField';

export const Pagination = ({
  type,
  shape,
  breakpoint,
  numberPage,
  totalNumberPage,
}) => {
  const arrPageNumber = [
    {
      state: 'hover-active',
      text: '1',
    },
    {
      state: 'default',
      text: '2',
    },
    {
      state: 'default',
      text: '3',
    },
    {
      state: 'default',
      text: '...',
    },
    {
      state: 'default',
      text: '8',
    },
    {
      state: 'default',
      text: '9',
    },
    {
      state: 'default',
      text: '10',
    },
  ];
  const arrBtnGroupBase = [
    { icon: 'only', state: 'default' },
    { icon: 'false', state: 'active-hover', text: '1' },
    { icon: 'false', state: 'default', text: '2' },
    { icon: 'false', state: 'default', text: '...' },
    { icon: 'false', state: 'default', text: '9' },
    { icon: 'false', state: 'default', text: '10' },
    { icon: 'only', state: 'default' },
  ];
  const arrBtnGroupBaseDesktop = [
    { icon: 'leading', state: 'default' },
    { icon: 'false', state: 'active-hover', text: '1' },
    { icon: 'false', state: 'default', text: '2' },
    { icon: 'false', state: 'default', text: '3' },
    { icon: 'false', state: 'default', text: '...' },
    { icon: 'false', state: 'default', text: '8' },
    { icon: 'false', state: 'default', text: '9' },
    { icon: 'false', state: 'default', text: '10' },
    { icon: 'trailing', state: 'default' },
  ];

  return (
    <div className={`pagination-type--${type}-breakpoint--${breakpoint}`}>
      {type === 'page-default' && breakpoint === 'desktop' && (
        <>
          <Button
            size='sm'
            hierarchy='linkGray'
            state='default'
            destructive='false'
            icon='default'
            text='Previous'
            iconLeading='icon-arrow-left-gray-600'
            showIconLeading='true'
          />

          <div className='pagination-numbers'>
            {arrPageNumber?.map((item) => (
              <PaginationNumberBase
                shape={shape === 'square' ? 'square' : 'circle'}
                state={item.state}
                text={item.text}
              />
            ))}
          </div>
          <Button
            size='sm'
            hierarchy='linkGray'
            state='default'
            destructive='false'
            icon='default'
            text='Next'
            iconTrailing='icon-arrow-right-gray-600'
            showiconTrailing='true'
          />
        </>
      )}
      {(type === 'page-minimal-center-aligned' || type === 'card-default') &&
        breakpoint === 'desktop' && (
          <>
            <Button
              size='sm'
              hierarchy='secondaryGray'
              state='default'
              destructive='false'
              icon='default'
              text='Previous'
              iconLeading='icon-arrow-left-gray-600'
              showIconLeading='true'
            />

            <div className='pagination-numbers'>
              {arrPageNumber?.map((item) => (
                <PaginationNumberBase
                  shape={shape === 'square' ? 'square' : 'circle'}
                  state={item.state}
                  text={item.text}
                />
              ))}
            </div>
            <Button
              size='sm'
              hierarchy='secondaryGray'
              state='default'
              destructive='false'
              icon='default'
              text='Next'
              iconTrailing='icon-arrow-right-gray-600'
              showiconTrailing='true'
            />
          </>
        )}
      {(type === 'card-button-group-center-aligned' ||
        type === 'card-button-group-left-aligned' ||
        type === 'card-button-group-right-aligned') &&
        breakpoint === 'mobile' &&
        shape === 'square' && (
          <div className='pagination-button-group'>
            {arrBtnGroupBase?.map((item) => (
              <PaginationButtonGroupBase
                icon={item.icon}
                state={item.state}
                text={item.text}
              />
            ))}
          </div>
        )}
      {type === 'card-button-group-center-aligned' &&
        breakpoint === 'desktop' &&
        shape === 'square' && (
          <div className='pagination-button-group'>
            {arrBtnGroupBaseDesktop?.map((item) => (
              <PaginationButtonGroupBase
                icon={item.icon}
                state={item.state}
                text={item.text}
              />
            ))}
          </div>
        )}
      {((breakpoint === 'mobile' &&
        (type === 'page-default' ||
          type === 'page-minimal-center-aligned' ||
          (type === 'card-minimal-right-aligned' && shape === 'square') ||
          (type === 'card-minimal-center-aligned' && shape === 'square') ||
          (type === 'card-minimal-left-aligned' && shape === 'square') ||
          type === 'card-default')) ||
        (breakpoint === 'desktop' &&
          type === 'card-minimal-center-aligned' &&
          shape === 'square')) && (
        <>
          <Button
            size='sm'
            hierarchy='secondaryGray'
            state='default'
            destructive='false'
            icon='only'
            iconTrailing='icon-arrow-left-gray-700'
          />
          <span
            className='text-sm-regular'
            style={{ color: `var(--gray-700)` }}
          >
            Page {numberPage ? numberPage : 1} of{' '}
            {totalNumberPage ? totalNumberPage : 10}
          </span>
          <Button
            size='sm'
            hierarchy='secondaryGray'
            state='default'
            destructive='false'
            icon='only'
            iconTrailing='icon-arrow-right-gray-700'
          />
        </>
      )}
      {((type === 'card-minimal-left-aligned' &&
        breakpoint === 'desktop' &&
        shape === 'square') ||
        (type === 'card-minimal-right-aligned' &&
          breakpoint === 'desktop' &&
          shape === 'square')) && (
        <>
          {type === 'card-minimal-left-aligned' ? (
            <>
              <div className='actions-pagination'>
                <Button
                  size='sm'
                  hierarchy='secondaryGray'
                  state='default'
                  destructive='false'
                  icon='default'
                  text='Previous'
                />
                <Button
                  size='sm'
                  hierarchy='secondaryGray'
                  state='default'
                  destructive='false'
                  icon='default'
                  text='Next'
                />
              </div>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-700)` }}
              >
                Page 1 of 10
              </span>
            </>
          ) : (
            <>
              {' '}
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-700)` }}
              >
                Page {numberPage ? numberPage : 1} of{' '}
                {totalNumberPage ? totalNumberPage : 10}
              </span>
              <div className='actions-pagination'>
                {' '}
                <Button
                  size='sm'
                  hierarchy='secondaryGray'
                  state='default'
                  destructive='false'
                  icon='default'
                  text='Previous'
                />
                <Button
                  size='sm'
                  hierarchy='secondaryGray'
                  state='default'
                  destructive='false'
                  icon='default'
                  text='Next'
                />
              </div>
            </>
          )}
        </>
      )}
      {((type === 'card-button-group-left-aligned' &&
        breakpoint === 'desktop' &&
        shape === 'square') ||
        (type === 'card-button-group-right-aligned' &&
          breakpoint === 'desktop' &&
          shape === 'square')) && (
        <>
          {type === 'card-button-group-left-aligned' ? (
            <>
              <div className='pagination-button-group'>
                {arrBtnGroupBaseDesktop?.map((item) => (
                  <PaginationButtonGroupBase
                    icon={item.icon}
                    state={item.state}
                    text={item.text}
                  />
                ))}
              </div>
              <div className='viewing-pagination'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-700)` }}
                >
                  Viewing
                </span>
                <InputField
                  size='sm'
                  type='default'
                  destructive={'false'}
                  state={'filled'}
                  text={numberPage ? numberPage : 5}
                />
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-700)` }}
                >
                  of {totalNumberPage ? totalNumberPage : 100}
                </span>
              </div>
            </>
          ) : (
            <>
              <div className='viewing-pagination'>
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-700)` }}
                >
                  Viewing
                </span>
                <InputField
                  size='sm'
                  type='default'
                  destructive={'false'}
                  state={'filled'}
                  text={numberPage ? numberPage : 5}
                />
                <span
                  className='text-sm-medium'
                  style={{ color: `var(--gray-700)` }}
                >
                  of {totalNumberPage ? totalNumberPage : 100}
                </span>
              </div>
              <div className='pagination-button-group'>
                {arrBtnGroupBaseDesktop?.map((item) => (
                  <PaginationButtonGroupBase
                    icon={item.icon}
                    state={item.state}
                    text={item.text}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

Pagination.propTypes = {
  type: PropTypes.oneOf([
    'card-button-group-center-aligned',
    'card-button-group-left-aligned',
    'card-button-group-right-aligned',
    'card-default',
    'card-minimal-center-aligned',
    'card-minimal-left-aligned',
    'card-minimal-right-aligned',
    'page-default',
    'page-minimal-center-aligned',
  ]),
  shape: PropTypes.oneOf(['square', 'circle']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
};
