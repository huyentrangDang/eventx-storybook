import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/input.css';
import '../../assets/css/button-icon.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/input-icon.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '../../assets/css/dropdown-icon.css';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import useAutocomplete from '@mui/base/useAutocomplete';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import '../../assets/css/tag-icon.css';
import '../../assets/css/tag.css';

function Tag(props) {
  const { image, label, onDelete, ...other } = props;
  return (
    <button
      {...other}
      className={`tag-size--md-icon--avatar-action--xClose-checkbox--false`}
    >
      <div className={`tag-content-size--md`}>
        <div className={image}></div>
        <span className={`text-tag-size--md-medium`}>{label}</span>
      </div>
      <button
        className={`tag-x-close-size--md`}
        onClick={onDelete}
      >
        <icon className={`icon-x-close-size--md`} />
      </button>
    </button>
  );
}

Tag.propTypes = {
  onDelete: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};

const StyledTag = styled(Tag)(
  () => `
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3px 4px;
  gap: 3px;
  background: var(--base-white);
  border: 1px solid var(--gray-300);
  border-radius: 6px;
  color: var(--gray-700);
`
);

const Listbox = styled('ul')(
  ({ theme }) => `
  width: 400px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === 'dark' ? '#141414' : '#fff'};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? '#2b2b2b' : '#fafafa'};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === 'dark' ? '#003b57' : '#e6f7ff'};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

export const InputField = ({
  size,
  type,
  destructive,
  state,
  label,
  hintText,
  text,
  showHelpIcon,
}) => {
  const {
    getRootProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    setAnchorEl,
  } = useAutocomplete({
    defaultValue: [topUsers[1]],
    multiple: true,
    image: '1',
    options: topUsers,
    getOptionLabel: (option) => option.name,
  });
  const [country, setCountry] = useState('US');

  return (
    <>
      {((destructive === 'true' && state !== 'disabled') ||
        destructive === 'false') && (
        <div className={`component-input-field`}>
          <div className={`input-field-with-label`}>
            <div
              className={[`label-input-field`, `text-input-sm-medium`].join(
                ' '
              )}
            >
              {label}
            </div>
            <div
              className={`input-size--${size}-type--${type}-destructive--${destructive}-state--${state}`}
            >
              {type === 'default' && (
                <TextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        {showHelpIcon && (
                          <div
                            class={[`${iconPath(`${destructive}`)}`].join(' ')}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                  placeholder='olivia@untitledui.com'
                  className={[
                    `container-textfield-default`,
                    `textfield-input-size--${size}-type--${type}-destructive--${destructive}-state--${state}`,
                  ].join(' ')}
                />
              )}

              {type === 'iconLeading' && (
                <>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <div
                            className={[
                              `icon-mail-gray-500`,
                              `input-adorment-start`,
                            ].join(' ')}
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position='end'>
                          {showHelpIcon && (
                            <div
                              class={[`${iconPath(`${destructive}`)}`].join(
                                ' '
                              )}
                            />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    placeholder='olivia@untitledui.com'
                    className={[
                      `text-input-dropdown`,
                      `textfield-input-size--${size}-type--${type}-destructive--${destructive}-state--${state}`,
                      `content-text-input-state--${state}`,
                    ].join(' ')}
                  />
                </>
              )}

              {type === 'leadingDropdown' && (
                <>
                  <Select
                    value={country}
                    displayEmpty
                    className={[
                      `select-input-size--${size}-destructive--${destructive}-state--${state}`,
                      `select-dropdown-first`,
                    ].join(' ')}
                    IconComponent={() => (
                      <div className={`icon-chevron-down`}></div>
                    )}
                    onChange={(event) => setCountry(event.target.value)}
                  >
                    <MenuItem value={'US'}>US</MenuItem>
                    <MenuItem value={'VN'}>VN</MenuItem>
                    <MenuItem value={'OS'}>OS</MenuItem>
                  </Select>

                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          {showHelpIcon && (
                            <div
                              class={[`${iconPath(`${destructive}`)}`].join(
                                ' '
                              )}
                            />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    placeholder='olivia@untitledui.com'
                    className={[
                      `text-input-dropdown`,
                      `textfield-input-size--${size}-destructive--${destructive}-state--${state}`,
                    ].join(' ')}
                  />
                </>
              )}

              {type === 'trailingDropdown' && (
                <>
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          {showHelpIcon && (
                            <div
                              class={[`${iconPath(`${destructive}`)}`].join(
                                ' '
                              )}
                            />
                          )}
                        </InputAdornment>
                      ),
                      startAdornment: (
                        <InputAdornment position='start'>
                          <div class={[`leading-text-input`].join(' ')}>$</div>
                        </InputAdornment>
                      ),
                    }}
                    placeholder='olivia@untitledui.com'
                    className={[
                      `text-input-dropdown`,
                      `textfield-input-size--${size}-type--${type}-destructive--${destructive}-state--${state}`,
                    ].join(' ')}
                  />
                  <Select
                    value={country}
                    displayEmpty
                    className={[
                      `select-input-size--${size}-type--${type}-destructive--${destructive}-state--${state}`,
                      `select-dropdown-first`,
                    ].join(' ')}
                    IconComponent={() => (
                      <div className={`icon-chevron-down`}></div>
                    )}
                    onChange={(event) => setCountry(event.target.value)}
                  >
                    <MenuItem value={'US'}>US</MenuItem>
                    <MenuItem value={'VN'}>VN</MenuItem>
                    <MenuItem value={'OS'}>OS</MenuItem>
                  </Select>
                </>
              )}

              {type === 'leadingText' && (
                <>
                  <div className={`start-adornment-input-size--${size}`}>
                    <div className={`text-adornment-input`}>http://</div>
                  </div>
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          {showHelpIcon && (
                            <div
                              class={[`${iconPath(`${destructive}`)}`].join(
                                ' '
                              )}
                            />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    placeholder='olivia@untitledui.com'
                    className={[
                      `text-input-dropdown`,
                      `textfield-input-size--${size}-type--${type}-destructive--${destructive}-state--${state}`,
                    ].join(' ')}
                  />
                </>
              )}

              {type === 'paymentInput' && (
                <>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <div
                            className={[
                              `icon-payment-method`,
                              `input-adorment-start`,
                            ].join(' ')}
                          />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position='end'>
                          {showHelpIcon && (
                            <div
                              class={[`${iconPath(`${destructive}`)}`].join(
                                ' '
                              )}
                            />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    placeholder='olivia@untitledui.com'
                    className={[
                      `text-input-dropdown`,
                      `textfield-input-size--${size}-type--${type}-destructive--${destructive}-state--${state}`,
                      `content-text-input-state--${state}`,
                    ].join(' ')}
                  />
                </>
              )}

              {type === 'tags' && (
                <>
                  {/* <Autocomplete
                    multiple
                    size='small'
                    options={topUsers}
                    getOptionLabel={(option) => option.name}
                    defaultValue={[topUsers[1]]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder='Users'
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <InputAdornment position='end'>
                              {showHelpIcon && (
                                <div
                                  class={[`${iconPath(`${destructive}`)}`].join(
                                    ' '
                                  )}
                                />
                              )}
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                    className={[
                      `autocomplete-input-size--${size}-destructive--${destructive}-state--${state}`,
                      `autocomplete-general`,
                    ].join(' ')}
                  /> */}

                  <div {...getRootProps()}>
                    <div
                      ref={setAnchorEl}
                      className={[
                        `input-wrapper`,
                        `autocomplete-input-size--${size}-destructive--${destructive}-state--${state}`,
                      ].join(' ')}
                    >
                      <div
                        style={{ display: 'flex', gap: 8 }}
                        className={`container-value-tags`}
                      >
                        {value.map((option, index) => (
                          <StyledTag
                            image={option.image}
                            label={option.name}
                            {...getTagProps({ index })}
                          />
                        ))}

                        <input
                          {...getInputProps()}
                          placeholder='olivia@untitledui.com'
                        />
                      </div>
                      {showHelpIcon && (
                        <div
                          class={[`${iconPath(`${destructive}`)}`].join(' ')}
                        />
                      )}
                    </div>
                  </div>
                  {groupedOptions.length > 0 ? (
                    <Listbox {...getListboxProps()}>
                      {groupedOptions.map((option, index) => (
                        <li
                          {...getOptionProps({ option, index })}
                          className={`item-tags`}
                        >
                          <div className={option.image}></div>
                          <span>{option.name}</span>
                          <div
                            className={`icon-x-close-size--sm-state--default`}
                          ></div>
                        </li>
                      ))}
                    </Listbox>
                  ) : null}
                </>
              )}

              {type === 'trailingButton' && (
                <div className={`container-input-size--${size}`}>
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          {showHelpIcon && (
                            <div
                              class={[`${iconPath(`${destructive}`)}`].join(
                                ' '
                              )}
                            />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    placeholder='olivia@untitledui.com'
                    className={[
                      `text-input-adornment`,
                      `textfield-input-size--${size}-type--${type}-destructive--${destructive}-state--${state}`,
                    ].join(' ')}
                  />
                  <button className={`button-end-adornment-size--${size}`}>
                    <icon className={`icon-copy`} />
                    <div className={`text-input-sm-semibold`}>Copy</div>
                  </button>
                </div>
              )}

              {type === 'dateInput' && (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateField
                    className={[
                      `input-date-field-size--${size}-destructive--${destructive}-state--${state}`,
                      `container-input-date`,
                    ].join(' ')}
                  />
                </LocalizationProvider>
              )}
            </div>
          </div>
          <div
            className={[
              `text-input-sm-regular`,
              `input-hint-text-type--${type}-destructive--${destructive}-state--${state}`,
            ].join(' ')}
          >
            {hintText}
          </div>
        </div>
      )}
    </>
  );
};

InputField.propTypes = {
  size: PropTypes.oneOf(['sm', 'md']),
  type: PropTypes.oneOf([
    'trailingDropdown',
    'leadingText',
    'dateInput',
    'trailingButton',
    'leadingDropdown',
    'tags',
    'default',
    'paymentInput',
    'iconLeading',
  ]),
  destructive: PropTypes.oneOf(['true', 'false']),
  state: PropTypes.oneOf(['placeholder', 'filled', 'focused', 'disabled']),
  label: PropTypes.string,
  hintText: PropTypes.string,
  showLabel: PropTypes.oneOf([true, false]),
  showHintText: PropTypes.oneOf([true, false]),
  showHelpIcon: PropTypes.oneOf([true, false]),
};

InputField.defaultProps = {};
export const iconPath = (destructive) => {
  if (destructive === 'false') {
    return 'icon-help-circle-gray-400';
  } else if (destructive === 'true') {
    return 'icon-alert-circle-error-500';
  } else {
    return destructive;
  }
};

const topUsers = [
  {
    name: 'Olivia',
    year: 1994,
    image: 'circle_avatar',
  },
  {
    name: 'Phoenix11',
    year: 1972,
    image: 'circle_country_Australia',
  },
  {
    name: 'Ahbue',
    year: 1974,
    image: 'circle_avatar',
  },
  {
    name: 'Olivia',
    year: 1994,
    image: 'circle_avatar',
  },
  {
    name: 'Phoenix',
    year: 1972,
    image: 'circle_country_Australia',
  },
  {
    name: 'Ahbue',
    year: 1974,
    image: 'circle_avatar',
  },
];
