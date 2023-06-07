import React from 'react';
import PropTypes from 'prop-types';
import '../../../assets/css/text.css';
import '../../../assets/css/table/table-header-cell.css';
import { Checkbox } from '../../../components/checkbox/Checkbox';
import { TableHeader } from '../Table-Header/TableHeader';

export const TableHeaderCell = ({ text, checkbox, color }) => {
  return (
    <>
      {text === 'false' ? (
        <div
          className={[
            `container-table-header-cell`,
            `table-header-cell-text--${text}`,
          ].join(' ')}
          style={{
            background:
              color === 'gray' ? `var(--gray-50)` : `var(--base-white)`,
          }}
        >
          {checkbox === 'true' && (
            <Checkbox
              checked='false'
              indeterminate='false'
              size='md'
              type='checkbox'
              text='false'
              state='default'
              supportingText='false'
              showText='false'
            />
          )}
        </div>
      ) : (
        <div
          className={[
            `container-table-header-cell`,
            `table-header-cell-text--${text}-checkbox--${checkbox}`,
          ].join(' ')}
          style={{
            background:
              color === 'gray' ? `var(--gray-50)` : `var(--base-white)`,
          }}
        >
          {checkbox === 'false' ? (
            <TableHeader
              helpIcon='false'
              arrow='false'
              state='default'
              text='Company'
            />
          ) : (
            <>
              <Checkbox
                checked='false'
                indeterminate='false'
                size='md'
                type='checkbox'
                text='false'
                state='default'
                supportingText='false'
                showText='false'
              />
              <TableHeader
                helpIcon='false'
                arrow='down'
                state='default'
                text='Company'
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

TableHeaderCell.propTypes = {
  text: PropTypes.oneOf(['true', 'false']),
  checkbox: PropTypes.oneOf(['true', 'false']),
  color: PropTypes.oneOf(['gray', 'white']),
};
