import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/button-icon.css'


export const ButtonIcon = ({destructive, hierarchy, state, size, icon, ...props }) => {

    return (

      <button
        type="button"
        className={['base-button-icon', `icon-button-icon--${icon}-size--${size}`, `icon-button-${hierarchy}-icon--${icon}-destructive--${destructive}-state--${state}`].join(' ')}
        {...props}
      >
      {/* <img src={iconPath(`${size}`,`${hierarchy}`,`${icon}`, `${state}`, `${destructive}`)} alt='icon'></img> */}
      <span class={iconPath(`${size}`,`${hierarchy}`,`${icon}`, `${state}`, `${destructive}`)}></span>
      </button>
    );
  };
ButtonIcon.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl']),
  hierarchy: PropTypes.string,
  icon: PropTypes.oneOf(['only']),
  destructive: PropTypes.oneOf(['true', 'false']),
  state: PropTypes.oneOf(['default', 'hover', 'focused', 'disabled'])
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
        return "circle_white_sm"
      }
      if(destructive === 'false'){
        
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_gray700_sm"
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return "circle_gray300_sm"
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return "circle_gray800_sm"
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_primary700_sm"
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return "circle_primary300_sm"
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return "circle_primary800_sm"
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_gray600_sm"
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return "circle_gray300_sm"
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return "circle_gray700_sm"
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_primary700_sm"
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return "circle_gray300_sm"
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return "circle_primary800_sm"
          }
        }
      }else{
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_sm"
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return "circle_error300_sm"
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return "circle_error800_sm"
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_sm"
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return "circle_error300_sm"
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return "circle_error800_sm"
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_sm"
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return "circle_error300_sm"
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return "circle_error800_sm"
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_sm"
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return "circle_error300_sm"
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return "circle_error800_sm"
          }
        }
      }
      
      break;
    }
    case 'md':{
      if(hierarchy === 'primary'){
        return "circle_white_md"
      }
      if(destructive === 'false'){
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_gray700_md"
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return "circle_gray300_md"
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return "circle_gray800_md"
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_primary700_md"
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return "circle_primary300_md"
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return "circle_primary800_md"
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_gray600_md"
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return "circle_gray300_md"
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return "circle_gray700_md"
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_primary700_md"
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return "circle_gray300_md"
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return "circle_primary800_md"
          }
        }
      }
      else{
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_md"
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return "circle_error300_md"
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return "circle_error800_md"
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_md"
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return "circle_error300_md"
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return "circle_error800_md"
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_md"
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return "circle_error300_md"
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return "circle_error800_md"
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_md"
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return "circle_error300_md"
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return "circle_error800_md"
          }
        }
      }
      break;
    }
    case 'lg': {
      if(hierarchy === 'primary'){
        return "circle_white_lg"
      }
      if(destructive === 'false'){
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_gray700_lg"
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return "circle_gray300_lg"
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return "circle_gray800_lg"
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_primary700_lg"
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return "circle_primary300_lg"
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return "circle_primary800_lg"
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_gray600_lg"
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return "circle_gray300_lg"
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return "circle_gray700_lg"
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_primary700_lg"
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return "circle_gray300_lg"
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return "circle_primary800_lg"
          }
        }
        
      }
      else{
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_lg"
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return "circle_error300_lg"
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return "circle_error800_lg"
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_lg"
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return "circle_error300_lg"
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return "circle_error800_lg"
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_lg"
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return "circle_error300_lg"
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return "circle_error800_lg"
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_lg"
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return "circle_error300_lg"
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return "circle_error800_lg"
          }
        }
       
      }
      break;
    }
    case 'xl': {
      if(hierarchy === 'primary'){
        return "circle_white_xl"
      }
      if(destructive === 'false'){
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_gray700_xl"
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return "circle_gray300_xl"
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return "circle_gray800_xl"
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_primary700_xl"
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return "circle_primary300_xl"
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return "circle_primary800_xl"
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_gray600_xl"
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return "circle_gray300_xl"
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return "circle_gray700_xl"
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_primary700_xl"
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return "circle_gray300_xl"
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return "circle_primary800_xl"
          }
                
        }
      }
      else{
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_xl"
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return "circle_error300_xl"
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return "circle_error800_xl"
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_xl"
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return "circle_error300_xl"
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return "circle_error800_xl"
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_xl"
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return "circle_error300_xl"
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return "circle_error800_xl"
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_xl"
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return "circle_error300_xl"
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return "circle_error800_xl"
          }
        }
      }

      break;
    }
    case '2xl': {
      if(hierarchy === 'primary'){
        return "circle_white_2xl"
      }
      if(destructive === 'false'){
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_gray700_2xl"
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return "circle_gray300_2xl"
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return "circle_gray800_2xl"
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_primary700_2xl"
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return "circle_primary300_2xl"
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return "circle_primary800_2xl"
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_gray600_2xl"
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return "circle_gray300_2xl"
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return "circle_gray700_2xl"
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_primary700_2xl"
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return "circle_gray300_2xl"
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return "circle_primary800_2xl"
          }
        }
        
      }
      else{
        if(hierarchy === 'secondaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_2xl"
          }
          if(hierarchy === 'secondaryGray' && state === 'disabled'){
            return "circle_error300_2xl"
          }
          if(hierarchy === 'secondaryGray' && state === 'hover'){
            return "circle_error800_2xl"
          }
        }
        if(hierarchy === 'secondaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_2xl"
          }
          if(hierarchy === 'secondaryColor' && state === 'disabled'){
            return "circle_error300_2xl"
          }
          if(hierarchy === 'secondaryColor' && state === 'hover'){
            return "circle_error800_2xl"
          }
        }
        if(hierarchy === 'tertiaryGray'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_2xl"
          }
          if(hierarchy === 'tertiaryGray' && state === 'disabled'){
            return "circle_error300_2xl"
          }
          if(hierarchy === 'tertiaryGray' && state === 'hover'){
            return "circle_error800_2xl"
          }
        }
        if(hierarchy === 'tertiaryColor'){
          if(state === 'default' || state === 'focused'){
            return "circle_error700_2xl"
          }
          if(hierarchy === 'tertiaryColor' && state === 'disabled'){
            return "circle_error300_2xl"
          }
          if(hierarchy === 'tertiaryColor' && state === 'hover'){
            return "circle_error800_2xl"
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