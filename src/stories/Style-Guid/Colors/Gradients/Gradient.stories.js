import '../../../assets/css/color.css'
import { getValueColorGradient } from './Gradient'
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Style Guid/Colors/Gradients',
  //   component: Color,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  }
}
export const Gradients = () => {
  var arrColors = getValueColorGradient()
  var listGraygradientColors = arrColors.filter(i =>
    i.colorVariable.includes('--gray-gradient')
  )
  var listPrimarygradientColors = arrColors.filter(i =>
    i.colorVariable.includes('--primary-gradient')
  )
  var listMeshgradientColors = arrColors.filter(i =>
    i.colorVariable.includes('--mesh-gradient')
  )
  console.log(listGraygradientColors)
  return (
    <div className='color-container'>
      <h2>Colors</h2>
      <div>
        <h3>Gradients</h3>
        <div className='primary-color-block-container'>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Gray gradient</div>
            <div style={{ width: '90%' }}>
              {renderGradient(listGraygradientColors, arrColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Primary gradient</div>
            <div style={{ width: '90%' }}>
              {renderGradient(listPrimarygradientColors, arrColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Mesh gradient</div>
            <div style={{ width: '90%' }}>
              {renderMeshGradient(listMeshgradientColors)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const renderMeshGradient = listColors => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {listColors.map(blockColor => (
        <li
          className='container-block container-block-gradient'
          style={{ margin: '15px' }}
        >
          <div
            className='color-block color-block-gradient'
            style={{ backgroundImage: `var(${blockColor.colorVariable})` }}
          ></div>
          <div className='text-block text-block-gradient'>
            <div className='text-number text-number-gradient'>
              {blockColor.colorVariable.split('-').pop()}
            </div>
            <div className='text-hex text-hex-gradient'>Mesh gradient</div>
          </div>
        </li>
      ))}
    </div>
  )
}

const renderGradient = (listColors, listAllColors) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {listColors.map(blockColor => (
        <li
          className='container-block container-block-gradient'
          style={{ margin: '15px' }}
        >
          <div
            className='color-block color-block-gradient'
            style={{ background: `var(${blockColor.colorVariable})` }}
          ></div>
          <div className='text-block text-block-gradient'>
            <div
              className='text-number text-number-gradient'
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <span>{blockColor.colorFirstNumber}</span>
              {blockColor.colorText.includes('linear-gradient') && (
                <span>{blockColor.colorSecondNumber}</span>
              )}
            </div>
            <div
              className='text-hex text-hex-gradient'
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              <span>
                {getHexColorByVariable(
                  blockColor.colorFirstHex ?? '',
                  listAllColors
                )}
              </span>
              {blockColor.colorText.includes('linear-gradient') && (
                <span>
                  {blockColor.colorText.match(/(-?\d*\.?\d+)deg/)[1]}deg
                </span>
              )}
              <span>
                {getHexColorByVariable(
                  blockColor.colorSecondtHex ?? '',
                  listAllColors
                )}
              </span>
            </div>
          </div>
        </li>
      ))}
    </div>
  )
}

const getHexColorByVariable = (cv, arrColors) => {
  if (cv) {
    let arrResult = arrColors.filter(i => i.colorVariable.includes(cv))
    if (arrResult && arrResult.length > 0) {
      return arrResult[0].colorText
    }
  }
  return ''
}
