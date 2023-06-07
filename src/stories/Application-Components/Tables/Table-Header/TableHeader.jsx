import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/text.css';
import '../../../assets/css/table/table-header.css';
import { HelpIcon } from '../../../components/help-icon/HelpIcon';

export const TableHeader = ({ helpIcon, arrow, state, text }) => {
  return (
    <div className='container-table-header'>
      {helpIcon === 'false' ? (
        <>
          {arrow === 'false' ? (
            <span
              className={`text-xs-medium`}
              style={{
                color:
                  state === 'default'
                    ? `var(--gray-600)`
                    : state === 'hover'
                    ? `var(--gray-700)`
                    : `var(--gray-300)`,
              }}
            >
              {text}
            </span>
          ) : (
            <>
              {' '}
              <span
                className={`text-xs-medium`}
                style={{
                  color:
                    state === 'default'
                      ? `var(--gray-600)`
                      : state === 'hover'
                      ? `var(--gray-700)`
                      : `var(--gray-300)`,
                }}
              >
                {text}
              </span>
              <icon className={`${iconTablePath(arrow, state)}`} />
            </>
          )}
        </>
      ) : (
        <>
          {arrow === 'false' ? (
            <>
              <span
                className={`text-xs-medium`}
                style={{
                  color:
                    state === 'default'
                      ? `var(--gray-600)`
                      : state === 'hover'
                      ? `var(--gray-700)`
                      : `var(--gray-300)`,
                }}
              >
                {text}
              </span>
              <HelpIcon
                open='false'
                supportingText='false'
                tootltip='top-arrow'
              />
            </>
          ) : (
            <>
              <span
                className={`text-xs-medium`}
                style={{
                  color:
                    state === 'default'
                      ? `var(--gray-600)`
                      : state === 'hover'
                      ? `var(--gray-700)`
                      : `var(--gray-300)`,
                }}
              >
                {text}
              </span>
              <HelpIcon
                open='false'
                supportingText='false'
                tootltip='top-arrow'
              />
              <icon className={`${iconTablePath(arrow, state)}`} />
            </>
          )}
        </>
      )}
    </div>
  );
};

TableHeader.propTypes = {
  helpIcon: PropTypes.oneOf(['true', 'false']),
  arrow: PropTypes.oneOf(['up', 'down', 'false']),
  state: PropTypes.oneOf(['disabled', 'hover', 'default']),
  text: PropTypes.string,
};

export const iconTablePath = (arrow, state) => {
  switch (arrow) {
    case 'down': {
      if (state === 'default') {
        return 'icon-arrow-down-gray-600';
      }
      if (state === 'hover') {
        return 'icon-arrow-down-gray-700';
      }
      if (state === 'disabled') {
        return 'icon-arrow-down-gray-300';
      }

      break;
    }
    case 'up': {
      if (state === 'default') {
        return 'icon-arrow-up-gray-600';
      }
      if (state === 'hover') {
        return 'icon-arrow-up-gray-700';
      }
      if (state === 'disabled') {
        return 'icon-arrow-up-gray-300';
      }
      break;
    }

    default: {
      return {};
    }
  }
};
