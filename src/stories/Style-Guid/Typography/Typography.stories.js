import '../../assets/css/typography.css'
import '../../assets/css/common.css'
export default {
  title: 'Style Guid/Typography',
  tags: ['autodocs'],
  argTypes: {}
}
export const Typography = () => {
  return (
    <div style={{color: 'var(--gray-900)'}}>
      <h2>Typography</h2>
      {displayTextStyle('text','6xl')}
      {displayTextStyle('display','2xl')}
      {displayTextStyle('display','xl')}
      {displayTextStyle('display','lg')}
      {displayTextStyle('display','md')}
      {displayTextStyle('display','sm')}
      {displayTextStyle('display','xs')}
      {displayTextStyle('text','xl')}
      {displayTextStyle('text','lg')}
      {displayTextStyle('text','md')}
      {displayTextStyle('text','sm')}
      {displayTextStyle('text','xs')}
    </div>
  )
}
const displayTextStyle = (type, size) => {
  return (
    <div
      style={{ display: 'flex' }}
      className='m-20'
    >
      <div className={`${type}-${size}-regular m-20 col-4`}>
        <div>{type.charAt(0).toUpperCase() + type.slice(1)} {size.toUpperCase()}</div>
        <div> Regular</div>
      </div>
      <div className={`${type}-${size}-medium m-20 col-4`}>
        <div>{type.charAt(0).toUpperCase() + type.slice(1)} {size.toUpperCase()}</div>
        <div> Medium</div>
      </div>
      <div className={`${type}-${size}-semibold m-20 col-4`}>
        <div>{type.charAt(0).toUpperCase() + type.slice(1)} {size.toUpperCase()}</div>
        <div>SemiBold</div>
      </div>
      <div className={`${type}-${size}-bold m-20 col-4`}>
        <div>{type.charAt(0).toUpperCase() + type.slice(1)} {size.toUpperCase()}</div>
        <div>Bold</div>
      </div>
    </div>
  )
}
