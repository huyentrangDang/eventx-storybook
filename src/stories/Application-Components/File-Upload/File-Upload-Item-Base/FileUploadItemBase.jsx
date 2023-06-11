import PropTypes from 'prop-types';
import '../../../assets/css/file-upload.css';
import '../../../assets/css/text.css';
import '../../../assets/css/color.css';
import '../../../assets/css/icon.css';
import { FileUploadIcon } from '../File-Upload-Icon/FileUploadIcon';
import { ProgressBar } from '../../../components/progress-indicators/ProgressBar';
import { Button } from '../../../components/button/Button';
import { CheckboxBase } from '../../../components/checkbox-base/CheckboxBase';

export const FileUploadItemBase = ({
  type,
  icon,
  state,
  text,
  supportText,
  colorText,
  colorSupportText,
  textAction,
}) => {
  return (
    <div className={`file-upload-item-base-state--${state}`}>
      <div className={`body-content-file-upload-item-base`}>
        {icon !== 'false' && (
          <FileUploadIcon
            fileType={icon}
            state={iconPathFileUpload(icon, state)}
          />
        )}
        <div className={`content-file-upload-item-base`}>
          <div
            className={`text-and-support-text-file-upload-image-base-icon--${icon}`}
          >
            <span
              className={[`text-sm-medium`].join(' ')}
              style={{
                color: colorText
                  ? colorText
                  : `${
                      state === 'error' ? 'var(--error-700)' : 'var(--gray-700)'
                    }`,
              }}
            >
              {text ? text : 'Tech design requirements.pdf'}
            </span>
            <span
              className={[`text-sm-regular`].join(' ')}
              style={{
                color: colorSupportText
                  ? colorSupportText
                  : `${
                      state === 'error' ? 'var(--error-600)' : 'var(--gray-600)'
                    }`,
              }}
            >
              {supportText ? supportText : '200 KB'}
            </span>
          </div>

          {state !== 'error' && (
            <ProgressBar
              progress={setProgressBar(icon, state)}
              label={'right'}
            />
          )}

          {state === 'error' && (
            <div className={`actions-upload-file-item-base`}>
              <Button
                size={'sm'}
                hierarchy={'linkColor'}
                icon={'default'}
                destructive={'true'}
                state={'default'}
                text={textAction ? textAction : 'Try again'}
              />
            </div>
          )}
        </div>
      </div>
      {state === 'complete' ? (
        <CheckboxBase
          checked={'true'}
          indeterminate={'false'}
          size={'sm'}
          type={'checkCircle'}
          state={'default'}
        />
      ) : (
        <div className={`button-file-upload-item`}>
          <Button
            size='sm'
            hierarchy={'tertiaryGray'}
            icon={'only'}
            destructive={'false'}
            state={'default'}
            iconTrailing={'icon-trash-01'}
            colorIcon={
              state === 'error' ? 'var(--error-700)' : 'var(--gray-500)'
            }
          />
        </div>
      )}
    </div>
  );
};

FileUploadItemBase.propTypes = {
  type: PropTypes.oneOf(['progress-bar']),
  icon: PropTypes.oneOf([
    'document',
    'image',
    'video',
    'misc',
    'picture',
    'false',
  ]),
  state: PropTypes.oneOf(['in-progress', 'error', 'complete']),
};

export const iconPathFileUpload = (icon, state) => {
  switch (icon) {
    case 'picture': {
      if (state === 'error') {
        return 'error';
      } else {
        return 'default';
      }
    }
    case 'document': {
      if (state === 'error') {
        return 'error';
      } else {
        return 'primary';
      }
    }
    case 'image': {
      if (state === 'error') {
        return 'error';
      } else {
        return 'primary';
      }
    }
    case 'video': {
      if (state === 'error') {
        return 'error';
      } else {
        return 'primary';
      }
    }
    case 'misc': {
      if (state === 'error') {
        return 'error';
      } else {
        return 'primary';
      }
    }
    default: {
      return {};
    }
  }
};

export const setProgressBar = (icon, state) => {
  switch (state) {
    case 'in-progress': {
      if (icon === 'document') {
        return '10%';
      }
      if (icon === 'image' || icon === 'picture') {
        return '50%';
      }
      if (icon === 'video') {
        return '40%';
      }
      if (icon === 'misc' || icon === 'false') {
        return '80%';
      }

      break;
    }
    case 'complete': {
      return '100%';
    }
    default: {
      return {};
    }
  }
};
