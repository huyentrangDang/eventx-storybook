import PropTypes from 'prop-types';
import '../../assets/css/common.css'
import '../../assets/css/misc-icon.css'
import '../../assets/css/misc-icons/category-icons.css'
import '../../assets/css/misc-icons/miscellaneous-icons.css'
export const MiscIcon = () => {

    return (
        <div>
            {getClassIcons("misc-icon-root").map(classIcon => (
            <div>{RenderIcon(classIcon)}</div>
            ))}
        </div>
    )
}
export const CategoryIcons = () => {
  return (
      <div style={{ display: 'flex',flexWrap: 'wrap'}}>
          {getClassIcons("misc-category-icon-root").map(classIcon => (
          <div  style={{width: "40px", height: "40px"}} className='m-20'>{RenderIcon(classIcon)}</div>
          ))}
      </div>
  )
}
export const MiscellaneousCheckIcons = () => {
  return (
      <div style={{ display: 'flex',flexWrap: 'wrap', width: "500px" }}>
          {getClassIcons("misc-miscellaneous-icon-root").map(classIcon => (
          <div  style={{width: "40px", height: "40px"}} className='m-20'>{RenderIcon(classIcon)}</div>
          ))}
      </div>
  )
}

export const MiscellaneousCheckItemText = ({type, size, color, breakpoint}) => {
  console.log(color)
  return (
      <div>
         <div>
            <div className={`type--${type}-size--${size}-color--${color}-breakpoint--${breakpoint}`}>
              <div>{RenderIcon(`type--${type}-size--${size}-color--${color}`)}</div>
              <div className={`check-item-text-${size}-regular`}>All features and premium support</div>
            </div>
         </div>
      </div>
  )
}

const getTextStyleOfCheckItem = (size) => {
  if(size === "sm"){
    return "text-md-regular"
  }
  if(size === "md" || size === "lg"){
    return "text-lg-regular"
  }
  if(size === "xl"){
    return "text-xl-regular"
  }
  return "";
}



const RenderIcon = (className) => {
    return(
      <span style={{display: 'inline-block'}} className= {className}></span>   
    )
}
const getSizeOfIcon = (className) =>{
    if(className.includes('xs')){
        return 'misc-icon-size--xs'
    }
    if(className.includes('sm')){
        return 'misc-icon-size--sm'
    }
    if(className.includes('md')){
        return 'misc-icon-size--md'
    }
    if(className.includes('lg')){
        return 'misc-icon-size--lg'
    }
    if(className.includes('xl')){
        return 'misc-icon-size--xl'
    }
    return "";
}
 const getClassIcons= (selectorRoot) => {
    let arrayIcons = []
    var allCSS = [].slice
      .call(document.styleSheets)
      .reduce(function (prev, styleSheet) {
        if (!styleSheet.href && styleSheet.cssRules) {
            console.log(prev)
          return (
            prev +
            [].slice.call(styleSheet.cssRules).reduce(function (prev, cssRule) {
              console.log(cssRule.selectorText)
              if (cssRule.selectorText?.includes(selectorRoot)) {
                arrayIcons = [...cssRule.parentStyleSheet.cssRules]
                .filter(element => element.selectorText.includes("::before"))
                .map(element => element.selectorText.replace('.', "").replace("::before", ""))
              }
            }, '')
          )
        }
      }, '')
  
    return arrayIcons
  }

  MiscellaneousCheckItemText.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    color: PropTypes.oneOf(['primary', 'gray', 'success']),
    breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
    type: PropTypes.oneOf(['default', 'line', 'filled']),
  };