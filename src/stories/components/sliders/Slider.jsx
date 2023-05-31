import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/slider.css';
import '../../assets/css/typography.css';
import '../../assets/css/common.css';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const SliderLabel = styled(Slider)(() => ({
  color: '#E83C70',
  height: 0,
  padding: 0,
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#FFFFFF',
    border: '1.5px solid #E83C70',
    '&:hover': {
      boxShadow: 'none',
    },
    boxShadow:
      '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
    borderRadius: 12,
  },
  '& .MuiSlider-track': {
    height: 8,
    border: 0,
    borderRadius: 4,
  },
  '& .MuiSlider-rail': {
    height: 8,
    borderRadius: 12,
    background: '#EAECF0',
    opacity: 1,
  },
}));

const SliderLabelBottom = styled(Slider)(() => ({
  color: '#E83C70',
  height: 0,
  padding: 0,
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#FFFFFF',
    border: '1.5px solid #E83C70',
    '&:hover': {
      boxShadow: 'none',
    },
    boxShadow:
      '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
    borderRadius: 12,
  },
  '& .MuiSlider-valueLabel': {
    top: 55,
    background: 'none',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#101828',
    '&:before': {
      display: 'none',
    },
    padding: 0,
  },
  '& .MuiSlider-track': {
    height: 8,
    border: 0,
    borderRadius: 4,
  },
  '& .MuiSlider-rail': {
    height: 8,
    borderRadius: 12,
    background: '#EAECF0',
    opacity: 1,
  },
}));

const SliderLabelTop = styled(Slider)(() => ({
  color: '#E83C70',
  height: 0,
  padding: 0,
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#FFFFFF',
    border: '1.5px solid #E83C70',
    '&:hover': {
      boxShadow: 'none',
    },
    boxShadow:
      '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
    borderRadius: 12,
  },
  '& .MuiSlider-valueLabel': {
    top: -10,
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '18px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#344054',
    padding: '8px 12px',
    background: '#FFFFFF',
    border: '1px solid #EAECF0',
    borderRadius: 8,
    boxShadow:
      '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-track': {
    height: 8,
    border: 0,
    borderRadius: 4,
  },
  '& .MuiSlider-rail': {
    height: 8,
    borderRadius: 12,
    background: '#EAECF0',
    opacity: 1,
  },
}));

const SliderOnlyRight = styled(Slider)({
  color: '#EAECF0',
  height: 8,
  '& .MuiSlider-track': {
    border: 'none',
    color: '#E83C70',
  },
  '& .MuiSlider-thumb': {
    height: 24,
    width: 24,
    backgroundColor: '#FFFFFF',
    border: '1.5px solid #E83C70',
    '&:hover': {
      boxShadow: 'none',
    },
    boxShadow:
      '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
    borderRadius: 12,
  },
  '& .MuiSlider-valueLabel': {
    background: 'none',
    fontFamily: 'Lato',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '24px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#101828',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-rail': {
    height: 8,
    borderRadius: 12,
    background: '#EAECF0',
    opacity: 1,
  },
});

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className='airbnb-bar' />
      <span className='airbnb-bar' />
      <span className='airbnb-bar' />
    </SliderThumb>
  );
}

function valuetext(value) {
  return `${value} %`;
}

export const Sliders = ({
  label,
  rightControl,
  leftControl,
  onlyRightControl,
}) => {
  const right = Number(rightControl?.replace('%', ''));
  const left = Number(leftControl?.replace('%', ''));
  return (
    <>
      {/* <div className={`container-slider`}>
        <div className={`background-progress`}>
          <div
            className={`slider-progress-right--${rightControl.replace(
              '%',
              ''
            )}-left--${leftControl.replace('%', '')}`}
          >
            <div className={`control-handle-left`}></div>
            <div className={`control-handle-right`}></div>
            <div className={`progress-line`}></div>
          </div>
        </div>
      </div> */}

      {onlyRightControl === 'true' &&
        (label === 'false' ? (
          <div className={`container-slider`}>
            <SliderOnlyRight
              valueLabelDisplay='off'
              defaultValue={50}
              value={right}
            />
          </div>
        ) : (
          label === 'bottom' && (
            <div className={`container-slider`}>
              <SliderOnlyRight
                valueLabelDisplay='off'
                defaultValue={50}
                value={right}
              />
              <div className={`info-progress`}>
                <span
                  className={[`text-md-medium`, `text-discount-progress`].join(
                    ' '
                  )}
                >
                  Discount
                </span>
                <span className={[`text-md-medium`, `text-percent`].join(' ')}>
                  {right}%
                </span>
              </div>
            </div>
          )
        ))}

      {onlyRightControl === 'false' &&
        (label === 'false' ? (
          <div className={`slider-progress`}>
            <div className={`container-slider`}>
              <SliderLabel
                slots={{ thumb: AirbnbThumbComponent }}
                getAriaValueText={valuetext}
                value={[right, left]}
                defaultValue={[right, left]}
                valueLabelDisplay={'off'}
              />
            </div>
          </div>
        ) : label === 'bottom' ? (
          <div className={`slider-progress`}>
            <div className={`container-slider`}>
              <SliderLabelBottom
                slots={{ thumb: AirbnbThumbComponent }}
                getAriaValueText={valuetext}
                value={[right, left]}
                defaultValue={[right, left]}
                valueLabelDisplay={'on'}
              />
            </div>
          </div>
        ) : (
          <div className={`slider-progress`}>
            <div className={`container-slider`}>
              <SliderLabelTop
                slots={{ thumb: AirbnbThumbComponent }}
                getAriaValueText={valuetext}
                value={[right, left]}
                defaultValue={[right, left]}
                valueLabelDisplay={label !== 'false' ? 'on' : 'off'}
              />
            </div>
          </div>
        ))}
    </>
  );
};
Sliders.propTypes = {
  label: PropTypes.oneOf(['false', 'top-floating', 'bottom']),
  rightControl: PropTypes.oneOf(['25%', '50%', '75%', '100%']),
  leftControl: PropTypes.oneOf(['0%', '25%', '50%', '75%']),
  onlyRightControl: PropTypes.oneOf(['true', 'false']),
};

export const iconPath = () => {};
