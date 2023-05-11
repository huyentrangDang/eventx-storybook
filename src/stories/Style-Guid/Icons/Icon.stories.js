
import '../../assets/css/common.css'
import '../../assets/css/icon.css'
export default {
  title: 'Style Guid/Icons',
  tags: ['autodocs'],
  argTypes: {}
}

export const Icons = () => {
    return (
        <div>
            {getClassIcons().map(classIcon => (
            <div>{RenderIcon(classIcon)}</div>
            ))}
        </div>
    )
}
const RenderIcon = (className) => {

    return(
        <div style={{display: 'flex'}}>
            <div><span className= {className} style={{fontSize: "24px"}}></span></div>
            <div style={{marginLeft: "8px"}} className='icon-text-name'>{className}</div>
        </div>
        
    )
}
 const getClassIcons= () => {
    let arrayIcons = []
    var allCSS = [].slice
      .call(document.styleSheets)
      .reduce(function (prev, styleSheet) {
        if (!styleSheet.href && styleSheet.cssRules) {
          return (
            prev +
            [].slice.call(styleSheet.cssRules).reduce(function (prev, cssRule) {
              if (cssRule.selectorText?.includes("icons-root")) {
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
