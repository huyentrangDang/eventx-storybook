export const getValueColorGradient = () => {
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
                    if(prop[0].includes('gradient') && !prop[0].includes('mesh')){
                        const colorHexArray = prop[1].match(/--\w+-\d+/g);
                        if(colorHexArray){
                            newObj['colorFirstHex'] = colorHexArray[0];
                            newObj['colorSecondtHex'] = colorHexArray[1];
                        }
                        const colorNumberArray = prop[0].split('-');
                        console.log(colorNumberArray)
                        if(colorHexArray){
                            newObj['colorFirstNumber'] = colorNumberArray.length === 5 ? colorNumberArray[colorNumberArray.length - 1] : colorNumberArray[colorNumberArray.length - 2];
                            newObj['colorSecondNumber'] = colorNumberArray[colorNumberArray.length - 1];
                        }

                    }
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