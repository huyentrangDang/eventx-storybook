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
import Autocomplete from '@mui/material/Autocomplete';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';

export const InputField = ({
  size,
  type,
  destructive,
  state,
  label,
  hintText,
  text,
}) => {
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
                        <div
                          class={[`${iconPath(`${destructive}`)}`].join(' ')}
                        />
                      </InputAdornment>
                    ),
                  }}
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
                          <div
                            class={[`${iconPath(`${destructive}`)}`].join(' ')}
                          />
                        </InputAdornment>
                      ),
                    }}
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
                          <div
                            class={[`${iconPath(`${destructive}`)}`].join(' ')}
                          />
                        </InputAdornment>
                      ),
                    }}
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
                          <div
                            class={[`${iconPath(`${destructive}`)}`].join(' ')}
                          />
                        </InputAdornment>
                      ),
                      startAdornment: (
                        <InputAdornment position='start'>
                          <div class={[`leading-text-input`].join(' ')}>$</div>
                        </InputAdornment>
                      ),
                    }}
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
                          <div
                            class={[`${iconPath(`${destructive}`)}`].join(' ')}
                          />
                        </InputAdornment>
                      ),
                    }}
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
                          <div
                            class={[`${iconPath(`${destructive}`)}`].join(' ')}
                          />
                        </InputAdornment>
                      ),
                    }}
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
                  <Autocomplete
                    multiple
                    size='small'
                    options={topUsers}
                    getOptionLabel={(option) => option.name}
                    defaultValue={[topUsers[1]]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder='Favorites'
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <InputAdornment position='end'>
                              <div
                                class={[`${iconPath(`${destructive}`)}`].join(
                                  ' '
                                )}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                    className={[
                      `autocomplete-input-size--${size}-destructive--${destructive}-state--${state}`,
                      `autocomplete-general`,
                    ].join(' ')}
                  />
                </>
              )}

              {type === 'trailingButton' && (
                <div className={`container-input-size--${size}`}>
                  <TextField
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='end'>
                          <div
                            class={[`${iconPath(`${destructive}`)}`].join(' ')}
                          />
                        </InputAdornment>
                      ),
                    }}
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
  { name: 'Olivia', year: 1994 },
  { name: 'Phoenix', year: 1972 },
  { name: 'Ahbue', year: 1974 },
];
