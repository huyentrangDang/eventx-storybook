import PropTypes from 'prop-types';
import '../../../assets/css/file-upload.css';
import '../../../assets/css/text.css';
import '../../../assets/css/color.css';
import '../../../assets/css/icon.css';
import { FeatureIcon } from '../../../Style-Guid/Misc-Icons/MiscIcon';
import { Button } from './../../../components/button/Button';

export const FileUploadBase = ({
  icon,
  state,
  text,
  supportText,
  textAction,
}) => {
  return (
    <div className={`file-upload-base-state--${state}`}>
      <div className={`content-file-upload-base`}>
        <FeatureIcon
          size={'md'}
          color={state === 'hover' ? 'primary' : 'gray'}
          theme={'light-circle-outline'}
          icon={icon ? icon : 'icon-upload-cloud-02'}
        />
        <div className={`text-and-support-text-file-upload-base`}>
          <div className={`action-file-upload-base`}>
            <Button
              size={'md'}
              hierarchy={'linkColor'}
              icon={'default'}
              destructive={'false'}
              state={state === 'disabled' ? 'disabled' : 'default'}
              text={textAction ? textAction : 'Click to upload'}
            />
            <span
              className={[
                `text-sm-regular`,
                setTextColor(state),
                `text-file-upload-base`,
              ].join(' ')}
            >
              {text ? text : 'or drag and drop'}
            </span>
          </div>
          <span
            className={[
              `text-xs-regular`,
              setTextColor(state),
              `support-text-file-upload-base`,
            ].join(' ')}
          >
            {supportText
              ? supportText
              : 'SVG, PNG, JPG or GIF (max. 800x400px)'}
          </span>
        </div>
      </div>
    </div>
  );
};

FileUploadBase.propTypes = {
  state: PropTypes.oneOf(['default', 'hover', 'disabled']),
};

export const setTextColor = (state) => {
  if (state === 'default' || state === 'disabled') {
    return 'color-gray-600';
  }
  if (state === 'hover') {
    return 'color-primary-600';
  }
};
