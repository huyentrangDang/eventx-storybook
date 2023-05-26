import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/input-dropdown.css';
import '../../assets/css/breakpoint.css';
import '../../assets/css/dropdown-icon.css';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export const Toolbar = ({ breakpoint }) => {
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  return (
    <>
      <div className={[`toolbar-breakpoint--${breakpoint}`]}>
        <Autocomplete
          options={options}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <div className={`icon-chevron-down`} />
                  </InputAdornment>
                ),
              }}
            />
          )}
          className={[`toolbar-input-dropdown-breakpoint--${breakpoint}`]}
        />
        <div className={[`toolbar-icon-breakpoint--${breakpoint}`]}></div>
      </div>
    </>
  );
};

Toolbar.propTypes = {
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
};

Toolbar.defaultProps = {};
