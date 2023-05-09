import { Color, getValueColor, renderListColorsBySet } from './Color'
import '../../../assets/css/color.css'
export default {
  title: 'Style Guid/Colors/Colors',
  component: Color,
  tags: ['autodocs'],
  argTypes: {
  }
}
export const Colors = () => {
  var arrColors = getValueColor()
  var listBaseColors = arrColors.filter(i => i.colorVariable.includes('base'))
  var listGrayColors = arrColors.filter(
    i =>
      i.colorVariable.includes('gray-') && 
      !i.colorVariable.includes('gradient')
  )
  var listPrimaryColors = arrColors.filter(
    i =>
      i.colorVariable.includes('primary') &&
      !i.colorVariable.includes('gradient')
  )
  var listErrorColors = arrColors.filter(
    i =>
      i.colorVariable.includes('error') && !i.colorVariable.includes('gradient')
  )
  var listWarningColors = arrColors.filter(
    i =>
      i.colorVariable.includes('warning') &&
      !i.colorVariable.includes('gradient')
  )
  var listSuccessColors = arrColors.filter(
    i =>
      i.colorVariable.includes('success') &&
      !i.colorVariable.includes('gradient')
  )

  var listGrayBlueColors = arrColors.filter(
    i =>
      i.colorVariable.includes('grayblue')
  )
  var listGrayCoolColors = arrColors.filter(
    i =>
      i.colorVariable.includes('graycool')
  )
  var listGrayModernColors = arrColors.filter(
    i =>
      i.colorVariable.includes('graymodern')
  )
  var listGrayNeutralColors = arrColors.filter(
    i =>
      i.colorVariable.includes('grayneutral')
  )
  var listGrayIronColors = arrColors.filter(
    i =>
      i.colorVariable.includes('grayiron')
  )
  var listGrayTrueColors = arrColors.filter(
    i =>
      i.colorVariable.includes('graytrue')
  )
  var listGrayWarmColors = arrColors.filter(
    i =>
      i.colorVariable.includes('graywarm')
  )
  var listMossColors = arrColors.filter(
    i =>
      i.colorVariable.includes('moss')
  )
  var listGreenlightColors = arrColors.filter(
    i =>
      i.colorVariable.includes('greenlight')
  )
  var listGreenColors = arrColors.filter(
    i =>
      i.colorVariable.includes('green-')
  )
  var listTealColors = arrColors.filter(
    i =>
      i.colorVariable.includes('teal')
  )
  var listCyanColors = arrColors.filter(
    i =>
      i.colorVariable.includes('cyan')
  )
  var listBluelightColors = arrColors.filter(
    i =>
      i.colorVariable.includes('bluelight')
  )
  var listBlueColors = arrColors.filter(
    i =>
      i.colorVariable.includes('--blue-')
  )
  var listBluedarkColors = arrColors.filter(
    i =>
      i.colorVariable.includes('bluedark')
  )
  var listIndigoColors = arrColors.filter(
    i =>
      i.colorVariable.includes('indigo')
  )
  var listVioletColors = arrColors.filter(
    i =>
      i.colorVariable.includes('violet')
  )
  var listPurpleColors = arrColors.filter(
    i =>
      i.colorVariable.includes('purple')
  )
  var listFuchsiaColors = arrColors.filter(
    i =>
      i.colorVariable.includes('fuchsia')
  )
  var listPinkColors = arrColors.filter(
    i =>
      i.colorVariable.includes('pink')
  )
  var listRoseColors = arrColors.filter(
    i =>
      i.colorVariable.includes('rose')
  )
  var listOrangedarkColors = arrColors.filter(
    i =>
      i.colorVariable.includes('orangedark')
  )
  var listOrangeColors = arrColors.filter(
    i =>
      i.colorVariable.includes('orange-')
  )
  var listYellowColors = arrColors.filter(
    i =>
      i.colorVariable.includes('yellow')
  )

  return (
    <div className='color-container'>
      <h2 className='text-title'>Colors</h2>
      <div>
        <h3>Primary Colors</h3>
        <div className='primary-color-block-container'>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Base</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listBaseColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Gray</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listGrayColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Primary</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listPrimaryColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Error</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listErrorColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Warning</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listWarningColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Success</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listSuccessColors)}
            </div>
          </div>
        </div>
      </div>
      <div >
        <h3>Secondary Gray Colors</h3>
        <div className='primary-color-block-container'>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Gray blue</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listGrayBlueColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Gray cool</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listGrayCoolColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Gray modern</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listGrayModernColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Gray neutral</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listGrayNeutralColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Gray iron</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listGrayIronColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Gray true</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listGrayTrueColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Gray warm</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listGrayWarmColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Moss</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listMossColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Green light</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listGreenlightColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Green</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listGreenColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Teal</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listTealColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Cyan</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listCyanColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Blue light</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listBluelightColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Blue</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listBlueColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Blue dark</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listBluedarkColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Indigo</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listIndigoColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Violet</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listVioletColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Purple</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listPurpleColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Fuchsia</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listFuchsiaColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Pink</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listPinkColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Rose</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listRoseColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Orange dark</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listOrangedarkColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Orange</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listOrangeColors)}
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '10%' }}>Yellow</div>
            <div style={{ width: '90%' }}>
              {renderListColorsBySet(listYellowColors)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


