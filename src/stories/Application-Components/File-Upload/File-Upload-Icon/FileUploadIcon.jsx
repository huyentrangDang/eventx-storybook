import PropTypes from 'prop-types';
import '../../../assets/css/file-upload-icon.css';
import '../../../assets/css/text.css';
import '../../../assets/css/icon.css';
import '../../../assets/css/color.css';
import { FeatureIcon } from '../../../Style-Guid/Misc-Icons/MiscIcon';

export const FileUploadIcon = ({ icon, fileType, state }) => {
  return (
    <div className={`file-upload-icon`}>
      {fileType === 'picture' ? (
        <icon
          className={[
            // icon ? icon : `file-type--${fileType}-state--${state}`,
            `file-type--${fileType}-state--${state}`,
          ].join(' ')}
        />
      ) : (
        <FeatureIcon
          size={'sm'}
          color={state === 'default' ? 'primary' : 'error'}
          theme={'light-circle-outline'}
          icon={icon ? icon : `${iconPathFileUpload(fileType)}`}
        />
      )}
    </div>
  );
};

FileUploadIcon.propTypes = {
  fileType: PropTypes.oneOf(['document', 'image', 'video', 'misc', 'picture']),
  state: PropTypes.oneOf(['default', 'error']),
};

export const iconPathFileUpload = (fileType) => {
  switch (fileType) {
    case 'document': {
      return 'icon-file-04';
    }
    case 'image': {
      return 'icon-image-01';
    }
    case 'video': {
      return 'icon-film-02';
    }
    case 'misc': {
      return 'icon-upload-cloud-02';
    }
    default: {
      return {};
    }
  }
};
