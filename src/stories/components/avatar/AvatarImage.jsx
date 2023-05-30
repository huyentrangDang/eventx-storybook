import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/avatar.css';
import '../../assets/css/avatar-icon.css';

export const AvatarImage = ({ type, showSource, source }) => {
  const IMAGES = [
    {
      url: 'olivia-rhye',
      name: 'Olivia Rhye',
      type_image: 'square',
    },
    {
      url: 'team-fredi-uxFsiyGwNuI-unsplash',
      name: 'Alisa Hester',
      type_image: 'portrait',
    },
  ];

  return (
    <>
      {IMAGES.map(({ url, name, type_image }) => (
        <>
          {type_image === type && (
            <div className={`item-avatar-image`}>
              <div className={`image-${url}`} />
              <div className={`text-and-support-text`}>
                <div className={`name-avatar-image`}>{name}</div>
                {showSource === 'true' && (
                  <div className={`row-link-image`}>
                    <icon className={`icon-link-gray-400`} />
                    <span className={`name-link-image`}>Source</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
};
AvatarImage.propTypes = {
  showSource: PropTypes.oneOf(['true', 'false']),
  source: PropTypes.oneOf(['true', 'false']),
  type: PropTypes.oneOf(['square', 'portrait']),
};

export const iconPath = (size) => {};
