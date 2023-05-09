
import '../../assets/css/common.css'
import '../../assets/css/misc-icon.css'
import '../../assets/css/misc-icons/category-icons.css'
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
      <div style={{display: "flex"}}>
          {getClassIcons("misc-category-icon-root").map(classIcon => (
          <div  style={{width: "40px", height: "40px"}} className='m-20'>{RenderIcon(classIcon)}</div>
          ))}
      </div>
  )
}
const RenderIcon = (className) => {

    return(
      <span style={{   display: 'inline-block'}} className= {className}></span>
        
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

  