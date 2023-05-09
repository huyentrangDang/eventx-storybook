export const Color = ({destructive, hierarchy, state, size, icon, ...props }) => {

    return (

      <button
        type="button"
        className={['base-button-icon', `icon-button-icon--${icon}-size--${size}`, `icon-button-${hierarchy}-icon--${icon}-destructive--${destructive}-state--${state}`].join(' ')}
        {...props}
      >

      </button>
    );
  };
  export const renderListColorsBySet = listColors => {
    return (
      <div style={{ display: 'flex',flexWrap: 'wrap' }}>
        {listColors.map(blockColor => (
          <li className='container-block' style={{ margin: '15px' }}>
            <div
              className='color-block'
              style={{ background: `var(${blockColor.colorVariable})` }}
            ></div>
            <div className='text-block'>
              <div className='text-number'>
                {blockColor.colorVariable.split('-').pop()}
              </div>
              <div className='text-hex'>{blockColor.colorText}</div>
            </div>
          </li>
        ))}
      </div>
    )
  }

  export const getValueColor = () => {
    let arrayObj = []
    var allCSS = [].slice
      .call(document.styleSheets)
      .reduce(function (prev, styleSheet) {
        if (!styleSheet.href && styleSheet.cssRules) {
          return (
            prev +
            [].slice.call(styleSheet.cssRules).reduce(function (prev, cssRule) {
              if (cssRule.selectorText == ':root') {
                var css = cssRule.cssText.split('{')
                css = css[1].replace('}', '').split(';')
                console.log(css, "CSS")
                for (var i = 0; i < css.length; i++) {
                  var prop = css[i].split(':',2)
                  if (prop.length == 2 && prop[0].indexOf('--') == 1) {
                    const newObj = {}
                    newObj['colorText'] = prop[1]
                    newObj['colorVariable'] = prop[0]
                    newObj['colorNumber'] = prop[0].split('-').pop()
                    arrayObj.push(newObj)
                  }
                }
              }
            }, '')
          )
        }
      }, '')
  
    return arrayObj
  }