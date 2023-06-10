import PropTypes from 'prop-types';
import '../../assets/css/loading-indicator.css';
import '../../assets/css/text.css';

export const LoadingIndicator = ({ style, size, text }) => {
  return (
    <div className='container-loading-indicators'>
      {size === 'xl' ? (
        <div className={`content-loading-indicator-size--${size}`}>
          {/* {style === "dot-circle" && (
            <>
              <div className="content-content-loading-indicator">
                <icon className={`${iconDefaultPath(size, style)}`} />
              </div>
              <span
                className="text-lg-medium"
                style={{ color: `var(--gray-700)`, textAlign: "center" }}
              >
                {text}
              </span>
            </>
          )} */}
          {(style === 'line-spinner' || style === 'line-simple') && (
            <>
              <icon className={`${iconDefaultPath(size, style)}`} />
              <span
                className='text-lg-medium'
                style={{ color: `var(--gray-700)`, textAlign: 'center' }}
              >
                {text}
              </span>
            </>
          )}
        </div>
      ) : (
        <div className='content-loading-indicator'>
          {size === 'lg' && (
            <>
              {style === 'dot-circle' && (
                <>
                  <div className='content-content-loading-indicator'>
                    <icon className={`${iconDefaultPath(size, style)}`} />
                  </div>
                  <span
                    className='text-lg-medium'
                    style={{ color: `var(--gray-700)`, textAlign: 'center' }}
                  >
                    {text}
                  </span>
                </>
              )}
              {(style === 'line-spinner' || style === 'line-simple') && (
                <>
                  <icon className={`${iconDefaultPath(size, style)}`} />
                  <span
                    className='text-lg-medium'
                    style={{ color: `var(--gray-700)`, textAlign: 'center' }}
                  >
                    {text}
                  </span>
                </>
              )}
            </>
          )}
          {size === 'md' && (
            <>
              <div className='content-content-loading-indicator'>
                <icon className={`${iconDefaultPath(size, style)}`} />
              </div>
              <span
                className='text-sm-medium'
                style={{ color: `var(--gray-700)`, textAlign: 'center' }}
              >
                {text}
              </span>
            </>
          )}

          {size === 'sm' && (
            <>
              {(style === 'dot-circle' || style === 'line-spinner') && (
                <>
                  <div className='content-loading-indicator'>
                    <icon className={`${iconDefaultPath(size, style)}`} />
                  </div>
                  <span
                    className='text-sm-medium'
                    style={{ color: `var(--gray-700)`, textAlign: 'center' }}
                  >
                    {text}
                  </span>
                </>
              )}
              {style === 'line-simple' && (
                <>
                  <icon className={`${iconDefaultPath(size, style)}`} />
                  <span
                    className='text-sm-medium'
                    style={{ color: `var(--gray-700)`, textAlign: 'center' }}
                  >
                    {text}
                  </span>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

LoadingIndicator.propTypes = {
  // style: PropTypes.oneOf(['dot-circle', 'line-spinner', 'line-simple']),
  style: PropTypes.oneOf(['line-spinner', 'line-simple']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  text: PropTypes.string,
};

export const iconDefaultPath = (size, style) => {
  switch (size) {
    case 'sm': {
      if (style === 'dot-circle') {
        return 'dot_circle_sm';
      }
      if (style === 'line-spinner') {
        return 'line_spinner_sm';
      }
      if (style === 'line-simple') {
        return 'line_simple_sm';
      }

      break;
    }
    case 'md': {
      if (style === 'dot-circle') {
        return 'dot_circle_md';
      }
      if (style === 'line-spinner') {
        return 'line_spinner_md';
      }
      if (style === 'line-simple') {
        return 'line_simple_md';
      }

      break;
    }
    case 'lg': {
      if (style === 'dot-circle') {
        return 'dot_circle_lg';
      }
      if (style === 'line-spinner') {
        return 'line_spinner_lg';
      }
      if (style === 'line-simple') {
        return 'line_simple_lg';
      }

      break;
    }
    case 'xl': {
      if (style === 'dot-circle') {
        return 'dot_circle_xl';
      }
      if (style === 'line-spinner') {
        return 'line_spinner_xl';
      }
      if (style === 'line-simple') {
        return 'line_simple_xl';
      }

      break;
    }

    default: {
      return {};
    }
  }
};
