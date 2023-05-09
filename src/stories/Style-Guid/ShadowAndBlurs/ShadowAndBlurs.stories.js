import '../../assets/css/shadow.css'
import '../../assets/css/common.css'
export default {
  title: 'Style Guid/Shadow & Blurs',
  tags: ['autodocs'],
  argTypes: {}
}
export const Shadow = () => {
  return (
    <div>
        <div>
            <h3 className='text-title'>Shadow</h3>
            <div className='shadow-blurs-containter' style={{ display: 'flex', flexWrap: 'wrap'}}>
            {RenderShadowBlock('xs')}
            {RenderShadowBlock('sm')}
            {RenderShadowBlock('md')}
            {RenderShadowBlock('lg')}
            {RenderShadowBlock('xl')}
            {RenderShadowBlock('2xl')}
            {RenderShadowBlock('3xl')}
            </div>
        </div>
        <div>
            <h3 className='text-title'>Blurs</h3>
            <div className='shadow-blurs-containter' style={{background: "#DEE0DB"}}>
                <div className='mt-20' style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {RenderBlursBlock('sm-light')}
                    {RenderBlursBlock('md-light')}
                    {RenderBlursBlock('lg-light')}
                    {RenderBlursBlock('xl-light')}
                </div>
                <div className='mt-20' style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {RenderBlursBlock('sm-dark')}
                    {RenderBlursBlock('md-dark')}
                    {RenderBlursBlock('lg-dark')}
                    {RenderBlursBlock('xl-dark')}
                </div>
            </div>
        </div>
    </div>
  )
}
const RenderShadowBlock = (size) => {
  return (
    <div className='mx-20'>
      <div className='text-title'>{size}</div>
      <div className={`shadow-${size} shadow-block`}></div>
    </div>
  )
}
const RenderBlursBlock = (size) => {
    return (
        <div className='m-20'>
            <div className={`blurs-${size} blurs-block text-center-xy`}>
            {size.includes('light') && <div style={{color: `var(--gray-900)`}}>{size}</div>}
            {size.includes('dark') && <div style={{color: `var(--base-white)`}}>{size}</div>}
            </div>
        </div>
    )
}