import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/textarea.css';
import '../../assets/css/text.css';
import '../../assets/css/input-dropdown.css';
import useAutocomplete from '@mui/base/useAutocomplete';
import { styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material/Autocomplete';

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <div
        className={`icon-x-close`}
        onClick={onDelete}
      ></div>
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export const TextAreaInputField = ({
  type,
  destructive,
  state,
  label,
  hintText,
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
    defaultValue: [topJobs[1]],
    multiple: true,
    options: topJobs,
    getOptionLabel: (option) => option.title,
  });
  return (
    <>
      {((destructive === 'true' && state !== 'disabled') ||
        destructive === 'false') && (
        <div className={`textArea-inputField`}>
          <div className={`input-with-label`}>
            <div className={[`text-sm-medium`, `label-textarea`].join(' ')}>
              {label}
            </div>
            {type === 'default' && (
              <textarea
                placeholder='Enter a description...'
                className={[
                  `text-md-regular`,
                  `textarea-type--${type}-destructive--${destructive}-state--${state}`,
                ].join(' ')}
              ></textarea>
            )}
            {type === 'tags' && (
              <div>
                <div {...getRootProps()}>
                  <div
                    ref={setAnchorEl}
                    className={[
                      `textarea-multiple-field-type--${type}-destructive--${destructive}-state--${state}`,
                    ]}
                  >
                    <div className={`content-textarea`}>
                      {value.map((option, index) => (
                        <div
                          className={`item-textarea`}
                          {...getTagProps({ index })}
                        >
                          <span className={`text-sm-medium`}>
                            {option.title}
                          </span>
                          <div className={`icon-x-close`}></div>
                        </div>
                      ))}

                      <input {...getInputProps()} />
                    </div>
                  </div>
                </div>
                {groupedOptions.length > 0 ? (
                  <ul
                    {...getListboxProps()}
                    className={'list-textarea'}
                  >
                    {groupedOptions.map((option, index) => (
                      <li {...getOptionProps({ option, index })}>
                        <span>{option.title}</span>
                        <div className={`icon-x-close`}></div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            )}
          </div>

          <div
            className={[
              `hint-text-destructive--${destructive}`,
              `text-sm-regular`,
            ].join(' ')}
          >
            {hintText}
          </div>
        </div>
      )}
    </>
  );
};

TextAreaInputField.propTypes = {
  type: PropTypes.oneOf(['tags', 'default']),
  destructive: PropTypes.oneOf(['true', 'false']),
  state: PropTypes.oneOf(['placeholder', 'focused', 'disabled', 'default']),
  label: PropTypes.string,
  hintText: PropTypes.string,
};

TextAreaInputField.defaultProps = {};

const topJobs = [
  { title: 'Design', year: 1994 },
  { title: 'Software', year: 1972 },
  { title: 'Marketing', year: 1974 },
  { title: 'Banking', year: 1974 },
];
