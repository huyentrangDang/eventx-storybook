import React from 'react';
import PropTypes from 'prop-types';
import './assets/common/button-icon.scss'
import Circle_white_sm from './assets/icons/icon-button/circle-default/circle-white-sm.svg'
import Circle_white_md from './assets/icons/icon-button/circle-default/circle-white-md.svg'
import Circle_white_lg from './assets/icons/icon-button/circle-default/circle-white-lg.svg'
import Circle_white_xl from './assets/icons/icon-button/circle-default/circle-white-xl.svg'
import Circle_white_2xl from './assets/icons/icon-button/circle-default/circle-white-2xl.svg'
import Circle_gray700_sm from './assets/icons/icon-button/circle-default/circle-gray-700-sm.svg'
import Circle_gray700_md from './assets/icons/icon-button/circle-default/circle-gray-700-md.svg'
import Circle_gray700_lg from './assets/icons/icon-button/circle-default/circle-gray-700-lg.svg'
import Circle_gray700_xl from './assets/icons/icon-button/circle-default/circle-gray-700-xl.svg'
import Circle_gray700_2xl from './assets/icons/icon-button/circle-default/circle-gray-700-2xl.svg'
import Circle_gray300_sm from './assets/icons/icon-button/circle-default/circle-gray-300-sm.svg'
import Circle_gray300_md from './assets/icons/icon-button/circle-default/circle-gray-300-md.svg'
import Circle_gray300_lg from './assets/icons/icon-button/circle-default/circle-gray-300-lg.svg'
import Circle_gray300_xl from './assets/icons/icon-button/circle-default/circle-gray-300-xl.svg'
import Circle_gray300_2xl from './assets/icons/icon-button/circle-default/circle-gray-300-2xl.svg'
import Circle_gray800_sm from './assets/icons/icon-button/circle-default/circle-gray-800-sm.svg'
import Circle_gray800_md from './assets/icons/icon-button/circle-default/circle-gray-800-md.svg'
import Circle_gray800_lg from './assets/icons/icon-button/circle-default/circle-gray-800-lg.svg'
import Circle_gray800_xl from './assets/icons/icon-button/circle-default/circle-gray-800-xl.svg'
import Circle_gray800_2xl from './assets/icons/icon-button/circle-default/circle-gray-800-2xl.svg'
import Circle_gray600_sm from './assets/icons/icon-button/circle-default/circle-gray-600-sm.svg'
import Circle_gray600_md from './assets/icons/icon-button/circle-default/circle-gray-600-md.svg'
import Circle_gray600_lg from './assets/icons/icon-button/circle-default/circle-gray-600-lg.svg'
import Circle_gray600_xl from './assets/icons/icon-button/circle-default/circle-gray-600-xl.svg'
import Circle_gray600_2xl from './assets/icons/icon-button/circle-default/circle-gray-600-2xl.svg'
import Circle_primary700_sm from './assets/icons/icon-button/circle-default/circle-primary-700-sm.svg'
import Circle_primary700_md from './assets/icons/icon-button/circle-default/circle-primary-700-md.svg'
import Circle_primary700_lg from './assets/icons/icon-button/circle-default/circle-primary-700-lg.svg'
import Circle_primary700_xl from './assets/icons/icon-button/circle-default/circle-primary-700-xl.svg'
import Circle_primary700_2xl from './assets/icons/icon-button/circle-default/circle-primary-700-2xl.svg'
import Circle_primary800_sm from './assets/icons/icon-button/circle-default/circle-primary-800-sm.svg'
import Circle_primary800_md from './assets/icons/icon-button/circle-default/circle-primary-800-md.svg'
import Circle_primary800_lg from './assets/icons/icon-button/circle-default/circle-primary-800-lg.svg'
import Circle_primary800_xl from './assets/icons/icon-button/circle-default/circle-primary-800-xl.svg'
import Circle_primary800_2xl from './assets/icons/icon-button/circle-default/circle-primary-800-2xl.svg'
import Circle_primary300_sm from './assets/icons/icon-button/circle-default/circle-primary-300-sm.svg'
import Circle_primary300_md from './assets/icons/icon-button/circle-default/circle-primary-300-md.svg'
import Circle_primary300_lg from './assets/icons/icon-button/circle-default/circle-primary-300-lg.svg'
import Circle_primary300_xl from './assets/icons/icon-button/circle-default/circle-primary-300-xl.svg'
import Circle_primary300_2xl from './assets/icons/icon-button/circle-default/circle-primary-300-2xl.svg'
import Circle_error300_sm from './assets/icons/icon-button/circle-default/circle-error-300-sm.svg'
import Circle_error300_md from './assets/icons/icon-button/circle-default/circle-error-300-md.svg'
import Circle_error300_lg from './assets/icons/icon-button/circle-default/circle-error-300-lg.svg'
import Circle_error300_xl from './assets/icons/icon-button/circle-default/circle-error-300-xl.svg'
import Circle_error300_2xl from './assets/icons/icon-button/circle-default/circle-error-300-2xl.svg'
import Circle_error700_sm from './assets/icons/icon-button/circle-default/circle-error-700-sm.svg'
import Circle_error700_md from './assets/icons/icon-button/circle-default/circle-error-700-md.svg'
import Circle_error700_lg from './assets/icons/icon-button/circle-default/circle-error-700-lg.svg'
import Circle_error700_xl from './assets/icons/icon-button/circle-default/circle-error-700-xl.svg'
import Circle_error700_2xl from './assets/icons/icon-button/circle-default/circle-error-700-2xl.svg'
import Circle_error800_sm from './assets/icons/icon-button/circle-default/circle-error-800-sm.svg'
import Circle_error800_md from './assets/icons/icon-button/circle-default/circle-error-800-md.svg'
import Circle_error800_lg from './assets/icons/icon-button/circle-default/circle-error-800-lg.svg'
import Circle_error800_xl from './assets/icons/icon-button/circle-default/circle-error-800-xl.svg'
import Circle_error800_2xl from './assets/icons/icon-button/circle-default/circle-error-800-2xl.svg'


export const ButtonIcon = ({destructive, hierarchy, state, size, icon, ...props }) => {

    return (

      <button
        type="button"
        className={['base-button-icon', `icon-button-icon--${icon}-size--${size}`, `icon-button-${hierarchy}-icon--${icon}-destructive--${destructive}-state--${state}`].join(' ')}
        {...props}
      >
      <img src={iconPath(`${size}`,`${hierarchy}`,`${icon}`, `${state}`, `${destructive}`)} alt='icon'></img>
      </button>
    );
  };
ButtonIcon.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
    hierarchy: PropTypes.string,
    icon: PropTypes.string,
    destructive: PropTypes.bool,
    state: PropTypes.string
};

export const iconPath = (size, hierarchy, icon, state, destructive) =>{

  if(icon === 'only'){

    return iconOnlyPath (destructive, hierarchy, state, size)
  }

}
export const iconOnlyPath = (destructive, hierarchy, state, size) => {
  switch(size){
    case 'sm': {
      if(hierarchy === 'primary'){
        return Circle_white_sm
      }
      if(destructive === 'false'){
        
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_gray700_sm
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return Circle_gray300_sm
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return Circle_gray800_sm
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_primary700_sm
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return Circle_primary300_sm
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return Circle_primary800_sm
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_gray600_sm
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return Circle_gray300_sm
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return Circle_gray700_sm
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_primary700_sm
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return Circle_gray300_sm
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return Circle_primary800_sm
          }
        }
      }else{
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_sm
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return Circle_error300_sm
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return Circle_error800_sm
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_sm
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return Circle_error300_sm
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return Circle_error800_sm
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_sm
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return Circle_error300_sm
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return Circle_error800_sm
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_sm
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return Circle_error300_sm
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return Circle_error800_sm
          }
        }
      }
      
      break;
    }
    case 'md':{
      if(hierarchy === 'primary'){
        return Circle_white_md
      }
      if(destructive === 'false'){
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_gray700_md
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return Circle_gray300_md
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return Circle_gray800_md
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_primary700_md
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return Circle_primary300_md
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return Circle_primary800_md
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_gray600_md
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return Circle_gray300_md
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return Circle_gray700_md
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_primary700_md
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return Circle_gray300_md
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return Circle_primary800_md
          }
        }
      }
      else{
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_md
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return Circle_error300_md
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return Circle_error800_md
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_md
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return Circle_error300_md
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return Circle_error800_md
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_md
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return Circle_error300_md
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return Circle_error800_md
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_md
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return Circle_error300_md
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return Circle_error800_md
          }
        }
      }
      break;
    }
    case 'lg': {
      if(hierarchy === 'primary'){
        return Circle_white_lg
      }
      if(destructive === 'false'){
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_gray700_lg
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return Circle_gray300_lg
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return Circle_gray800_lg
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_primary700_lg
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return Circle_primary300_lg
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return Circle_primary800_lg
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_gray600_lg
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return Circle_gray300_lg
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return Circle_gray700_lg
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_primary700_lg
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return Circle_gray300_lg
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return Circle_primary800_lg
          }
        }
        
      }
      else{
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_lg
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return Circle_error300_lg
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return Circle_error800_lg
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_lg
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return Circle_error300_lg
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return Circle_error800_lg
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_lg
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return Circle_error300_lg
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return Circle_error800_lg
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_lg
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return Circle_error300_lg
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return Circle_error800_lg
          }
        }
       
      }
      break;
    }
    case 'xl': {
      if(hierarchy === 'primary'){
        return Circle_white_xl
      }
      if(destructive === 'false'){
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_gray700_xl
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return Circle_gray300_xl
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return Circle_gray800_xl
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_primary700_xl
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return Circle_primary300_xl
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return Circle_primary800_xl
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_gray600_xl
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return Circle_gray300_xl
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return Circle_gray700_xl
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_primary700_xl
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return Circle_gray300_xl
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return Circle_primary800_xl
          }
                
        }
      }
      else{
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_xl
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return Circle_error300_xl
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return Circle_error800_xl
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_xl
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return Circle_error300_xl
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return Circle_error800_xl
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_xl
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return Circle_error300_xl
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return Circle_error800_xl
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_xl
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return Circle_error300_xl
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return Circle_error800_xl
          }
        }
      }

      break;
    }
    case '2xl': {
      if(hierarchy === 'primary'){
        return Circle_white_2xl
      }
      if(destructive === 'false'){
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_gray700_2xl
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return Circle_gray300_2xl
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return Circle_gray800_2xl
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_primary700_2xl
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return Circle_primary300_2xl
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return Circle_primary800_2xl
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_gray600_2xl
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return Circle_gray300_2xl
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return Circle_gray700_2xl
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_primary700_2xl
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return Circle_gray300_2xl
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return Circle_primary800_2xl
          }
        }
        
      }
      else{
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_2xl
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return Circle_error300_2xl
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return Circle_error800_2xl
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_2xl
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return Circle_error300_2xl
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return Circle_error800_2xl
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_2xl
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return Circle_error300_2xl
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return Circle_error800_2xl
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return Circle_error700_2xl
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return Circle_error300_2xl
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return Circle_error800_2xl
          }
        }
        
      }
      
      break;
    }
    default: {
      console.log( size,"icon nè",hierarchy )
      return {};
    }
  }
}