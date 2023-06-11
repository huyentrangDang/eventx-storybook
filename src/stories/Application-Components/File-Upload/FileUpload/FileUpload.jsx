import PropTypes from 'prop-types';
import '../../../assets/css/file-upload.css';
import '../../../assets/css/text.css';
import '../../../assets/css/color.css';
import '../../../assets/css/icon.css';
import { FeatureIcon } from '../../../Style-Guid/Misc-Icons/MiscIcon';
import { Button } from './../../../components/button/Button';
import { FileUploadBase } from './../File-Upload-Base/FileUploadBase';
import { FileUploadItemBase } from './../File-Upload-Item-Base/FileUploadItemBase';

export const FileUpload = ({
  filesQueued,
  type,
  icon,
  state,
  breakpoint,
  text,
  supportText,
  textAction,
}) => {
  const fileUploadItemBases = [
    {
      type: 'progress-bar',
      icon: 'document',
      state: 'complete',
    },
    {
      type: 'progress-bar',
      icon: 'video',
      state: 'in-progress',
    },
    {
      type: 'progress-bar',
      icon: 'misc',
      state: 'in-progress',
    },
  ];
  return (
    <div className={`file-upload-breakpoint--${breakpoint}`}>
      {filesQueued === 'false' && <FileUploadBase state={state} />}
      {filesQueued === 'true' && state !== 'disabled' && (
        <>
          <FileUploadBase state={state} />
          <div className={`file-queue-in-file-upload`}>
            {fileUploadItemBases.map(({ type, icon, state }) => (
              <FileUploadItemBase
                type={type}
                icon={icon}
                state={state}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

FileUpload.propTypes = {
  filesQueued: PropTypes.oneOf(['false', 'true']),
  type: PropTypes.oneOf(['progress-bar']),
  state: PropTypes.oneOf(['default', 'hover', 'disabled']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
};
