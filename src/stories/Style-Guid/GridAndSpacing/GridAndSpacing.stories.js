import '../../assets/css/common.css'
import '../../assets/css/grid-spacing.css'
export default {
  title: 'Style Guid/Grid & Spacing',
  tags: ['autodocs'],
  argTypes: {}
}
export const Spacing = () => {

    return (
        <div>
          {RenderSpacingByAxis('x')}
          {RenderSpacingByAxis('y')}
        </div>
    )
}
const RenderSpacingByAxis = (axis) => {
  const containerStyle = {
    display: axis === 'y' ? 'flex' : 'block',
    alignItems: 'baseline'
  };
  return (
    <>
      <h3 className='text-title'>{axis}-axis</h3>
      <div style={containerStyle}>
      {RenderSpacingBlock(axis,'4px')}
      {RenderSpacingBlock(axis,'8px')}
      {RenderSpacingBlock(axis,'12px')}
      {RenderSpacingBlock(axis,'16px')}
      {RenderSpacingBlock(axis,'20px')}
      {RenderSpacingBlock(axis,'24px')}
      {RenderSpacingBlock(axis,'32px')}
      {RenderSpacingBlock(axis,'40px')}
      {RenderSpacingBlock(axis,'48px')}
      {RenderSpacingBlock(axis,'64px')}
      {RenderSpacingBlock(axis,'80px')}
      {RenderSpacingBlock(axis,'96px')}
      {RenderSpacingBlock(axis,'128px')}
      {RenderSpacingBlock(axis,'160px')}
      {RenderSpacingBlock(axis,'192px')}
      {RenderSpacingBlock(axis,'224px')}
      {RenderSpacingBlock(axis,'256px')}
    </div>
    </>
)
}
const RenderSpacingBlock = (direction, size) => {
  return (
    <>
      {direction === 'x' && RenderSpacingByXAxis(size)} 
      {direction === 'y' && RenderSpacingByYAxis(size)}
    </>
   
  )
}
const RenderSpacingByXAxis = (size) => {
  return (
    <div style={{display: "flex", margin: "20px"}}>
      <div className={`x-axis-${size} block-spacing`}  style={{verticalAlign: 'top'}}><div style={{color: 'var(--primary-700)'}} className='text-title'>{size}</div></div>
    </div>
  )
}
const RenderSpacingByYAxis = (size) => {
  return (
    <div>
      <div style={{display: "flex",alignItems: 'flex-end', margin: "10px"}}>
      <div className={`y-axis-${size} block-spacing`}  style={{verticalAlign: 'top'}}></div>
      </div>
      <div style={{color: 'var(--primary-700)',margin: "10px" }}className='text-title'>{size}</div>
    </div>
  )
}