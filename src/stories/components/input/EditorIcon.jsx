import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import '../../assets/css/icon.css';
import '../../assets/css/editor-icon.css';

export const EditorIcon = ({ active, type, theme }) => {
  return (
    <div>
      <icon
        className={`icon-editor-active--${active}-type--${type}-theme--${theme}`}
      />
    </div>
  );
};

EditorIcon.propTypes = {
  type: PropTypes.oneOf([
    'listNumbers',
    'listBullet',
    'photo',
    'link',
    'quote',
    'h2',
    'h1',
    'italic',
    'bold',
  ]),
  active: PropTypes.oneOf(['true', 'false']),
  theme: PropTypes.oneOf(['light', 'dark']),
};

EditorIcon.defaultProps = {};
