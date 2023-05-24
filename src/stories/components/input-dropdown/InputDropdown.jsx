import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/dropdown-icon.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/dropdown.css';
import '../../assets/css/button.css';
import '../../assets/css/input-dropdown.css';
import '../../assets/css/input-icon.css';
import '../../assets/css/color.css';
import '../../assets/css/button-icon.css';

export const InputDropdown = ({ type, state, label, hintText }) => {
  const [value, setValue] = React.useState({
    text: '',
    supportText: '',
    selected: false,
  });

  const listItemInput = [
    {
      text: 'Olivia Rhye',
      supportText: '@olivia',
    },
    {
      text: 'Phoenix Baker',
      supportText: '@phoenix',
    },
    {
      text: 'Lana Steiner',
      supportText: '@lana',
    },
    {
      text: 'Demi Wilkinson',
      supportText: '@demi',
    },
    {
      text: 'Candice Wu',
      supportText: '@candice',
    },
    {
      text: 'Natali Craig',
      supportText: '@natali',
    },
    {
      text: 'Candice Craig',
      supportText: '@natali',
    },
  ];

  const handleChangeItem = (text, supportText) => {
    setValue({ text: text, supportText: supportText, selected: true });
  };

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOptionClick = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
      setInputValue(option);
    } else {
      const selectedOptionNew = selectedOptions?.filter(
        (item) => item !== option
      );
      setSelectedOptions([...selectedOptionNew]);
      setInputValue('');
    }
  };

  const handleRemoveOption = (option) => {
    const updatedOptions = selectedOptions.filter((item) => item !== option);
    setSelectedOptions(updatedOptions);
  };

  return (
    <>
      <div className={`input-dropdown-state--${state}`}>
        <div className={`input-with-label`}>
          <div className={`input-label`}>{label}</div>
          {type !== 'tags' && (
            <div className={`input-type--${type}-state--${state}`}>
              <div className={`input-content`}>
                {type === 'iconLeading' && <icon className={`icon-user`} />}
                {type === 'avatarLeading' && <icon className={`icon-avatar`} />}
                {type === 'dotLeading' && (
                  <icon className={`icon-dotLeading`} />
                )}
                {type === 'search' && <icon className={`icon-search`} />}
                {type === 'tags' && <icon className={`icon-search`} />}

                <div className={`text-md-regular`}>
                  {value.text === '' && value.supportText === '' ? (
                    type === 'search' ? (
                      <input
                        type='text'
                        placeholder='Search'
                        className={[
                          `text-md-regular`,
                          `input-state--${state}`,
                        ].join(' ')}
                      />
                    ) : (
                      `Select team member`
                    )
                  ) : (
                    <>
                      <div className={`text-and-support-text-select`}>
                        <div
                          className={[
                            `select-text-input-state--${state}`,
                            `text-input-md-medium`,
                          ].join(' ')}
                        >
                          {value.text}
                        </div>
                        <div
                          className={[
                            `select-support-text-input-state--${state}`,
                            `text-input-md-regular`,
                          ].join(' ')}
                        >
                          {value.supportText}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              {type !== 'search' && <icon className={`icon-chevron-down`} />}
            </div>
          )}
          {type === 'tags' && (
            <div className={`input-type--${type}-state--${state}`}>
              <div className={`input-tags-content`}>
                <icon className={`icon-search`} />
                <div className={`input-tags`}>
                  {selectedOptions?.map((option) => (
                    <div className={`input-tag`}>
                      <div className={`input-tag-content`}>
                        <div className={`icon-avatar-tags`} />
                        <div
                          className={`input-tag-text`}
                          key={option}
                        >
                          {option.split(' ')[0]}
                        </div>
                        <div
                          className={`icon-tags-x-close`}
                          onClick={() => handleRemoveOption(option)}
                        ></div>
                      </div>
                    </div>
                  ))}
                  {selectedOptions?.length === 0 && (
                    <input
                      type='text'
                      placeholder='Search'
                      className={[
                        `text-md-regular`,
                        `input-state--${state}`,
                      ].join(' ')}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {state !== 'open' && <div className={`hint-text`}>{hintText}</div>}

        {state === 'open' && (
          <div className={`menu-select-type--${type}`}>
            <div className={`menu-item-select`}>
              {listItemInput.map(({ text, supportText }, index) => {
                return (
                  <div
                    className={`dropdown-list-item`}
                    key={index}
                    onClick={
                      type === 'tags'
                        ? () => handleOptionClick(text)
                        : () => handleChangeItem(text, supportText)
                    }
                  >
                    <div
                      className={`content-input-dropdown-select`}
                      style={{
                        background:
                          (type !== 'tags' && text === value?.text) ||
                          (selectedOptions?.includes(text) && type === 'tags')
                            ? 'var(--gray-50)'
                            : 'none',
                      }}
                    >
                      <div
                        className={
                          value.text === text
                            ? type === 'tags'
                              ? `text-and-support-text-select-checked-type--tags`
                              : `text-and-support-text-select-checked`
                            : type === 'tags'
                            ? `text-and-support-text-select-type--tags`
                            : `text-and-support-text-select`
                        }
                      >
                        {type === 'iconLeading' && (
                          <icon className={`icon-user`} />
                        )}
                        {type === 'avatarLeading' && (
                          <icon className={`icon-avatar`} />
                        )}
                        {type === 'dotLeading' && (
                          <icon className={`icon-dotLeading`} />
                        )}
                        <div
                          className={[
                            `select-text-input-state--${state}`,
                            `text-input-md-medium`,
                          ].join(' ')}
                        >
                          {text}
                        </div>
                        <div
                          className={[
                            `select-support-text-input-state--${state}`,
                            `text-input-md-regular`,
                          ].join(' ')}
                        >
                          {supportText}
                        </div>
                      </div>
                      {selectedOptions?.includes(text) && type === 'tags' && (
                        <icon className={`checked-primary-600`} />
                      )}
                      {type !== 'tags' && text === value?.text && (
                        <icon className={`checked-primary-600`} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div className={`scrollbar-input-dropdown`}>
              <div className={`inner-scrollbar-input-dropdown`}></div>
            </div> */}
          </div>
        )}
      </div>

      <div className='custom-select'>
        {/* <div className='selected-options'>
            {selectedOptions.map((option) => (
              <div
                key={option}
                className='selected-option'
              >
                {option}
                <button
                  className='remove-option'
                  onClick={() => handleRemoveOption(option)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div> */}

        {/* <div className={`menu-select`}>
          <div className={`menu-item-select`}>
            {listItemInput.map(({ text, supportText }, index) => {
              return (
                <div
                  className={`dropdown-list-item`}
                  key={index}
                  onClick={() => handleOptionClick(text)}
                >
                  <div className={`content-input-dropdown-select`}>
                    {type === 'iconLeading' && <icon className={`icon-user`} />}
                    {type === 'avatarLeading' && (
                      <icon className={`icon-avatar`} />
                    )}
                    {type === 'dotLeading' && (
                      <icon className={`icon-dotLeading`} />
                    )}
                    <div className={`text-and-support-text-select`}>
                      <div
                        className={[
                          `select-text-input-state--${state}`,
                          `text-input-md-medium`,
                        ].join(' ')}
                      >
                        {text}
                      </div>
                      <div
                        className={[
                          `select-support-text-input-state--${state}`,
                          `text-input-md-regular`,
                        ].join(' ')}
                      >
                        {supportText}
                      </div>
                    </div>
                  </div>
                  {value?.selected && (
                    <icon className={`checked-primary-600`} />
                  )}
                </div>
              );
            })}
          </div>
        </div> */}

        {/* <input
            type='text'
            value={inputValue}
            placeholder='Select options'
            onChange={handleInputChange}
          />
          <ul className='options'>
            <li onClick={() => handleOptionClick('Option 1')}>Option 1</li>
            <li onClick={() => handleOptionClick('Option 2')}>Option 2</li>
            <li onClick={() => handleOptionClick('Option 3')}>Option 3</li>
            <li onClick={() => handleOptionClick('Option 4')}>Option 4</li>
          </ul> */}
      </div>
    </>
  );
};

InputDropdown.propTypes = {
  type: PropTypes.oneOf([
    'default',
    'iconLeading',
    'avatarLeading',
    'dotLeading',
    'search',
    'tags',
  ]),
  state: PropTypes.oneOf([
    'placeholder',
    'default',
    'open',
    'disabled',
    'focused',
  ]),
  // handleClick: PropTypes.func,
};

InputDropdown.defaultProps = {};
export const iconPath = (icon, state) => {
  if (icon === 'true') {
    if (state === 'disabled') {
      return 'circle_gray200';
    } else {
      return 'circle_gray700';
    }
  } else {
    return icon;
  }
};

// storiesOf('InputDropdown', module)
//   .add('Default', () => <InputDropdown state='placeholder' />)
//   .add('With Click Event', () => {
//     const [state, setState] = useState('placeholder');

//     const handleClick = () => {
//       setState('open');
//     };

//     return (
//       <div>
//         <InputDropdown
//           state={state}
//           onClick={handleClick}
//         />
//         <button onClick={handleClick}>Change Text</button>
//       </div>
//     );
//   });
