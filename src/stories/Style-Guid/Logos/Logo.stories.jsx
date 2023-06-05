import '../../assets/css/common.css';
import LogoMark from '../../assets/images/logos/logomark.svg';
import LogoDarkModeFalse from '../../assets/images/logos/logo-darkmode--false.svg';
import LogoDarkModeTrue from '../../assets/images/logos/logo-darkmode--true.svg';
import LayerLogotypeTrueColorDefault from '../../assets/images/logos/layer-logotype--true-color--default.svg';
import LayerLogotypeFalseColorDefault from '../../assets/images/logos/layer-logotype--false-color--default.svg';
import LayerLogotypeTrueColorWhite from '../../assets/images/logos/layer-logotype--true-color--white.svg';
import LayerLogotypeFalseColorWhite from '../../assets/images/logos/layer-logotype--false-color--white.svg';
import SisyphusLogotypeTrueColorDefault from '../../assets/images/logos/sisyphus-logotype--true-color--default.svg';
import SisyphusLogotypeTrueColorWhite from '../../assets/images/logos/sisyphus-logotype--true-color--white.svg';
import SisyphusLogotypeFalseColorDefault from '../../assets/images/logos/sisyphus-logotype--false-color--default.svg';
import SisyphusLogotypeFalseColorWhite from '../../assets/images/logos/sisyphus-logotype--false-color--white.svg';
import CircoolesLogotypeTrueColorDefault from '../../assets/images/logos/circooles-logotype--true-color--default.svg';
import CircoolesLogotypeTrueColorWhite from '../../assets/images/logos/circooles-logotype--true-color--white.svg';
import CircoolesLogotypeFalseColorDefault from '../../assets/images/logos/circooles-logotype--false-color--default.svg';
import CircoolesLogotypeFalseColorWhite from '../../assets/images/logos/circooles-logotype--false-color--white.svg';
import CatalogLogotypeTrueColorDefault from '../../assets/images/logos/catalog-logotype--true-color--default.svg';
import CatalogLogotypeTrueColorWhite from '../../assets/images/logos/catalog-logotype--true-color--white.svg';
import CatalogLogotypeFalseColorDefault from '../../assets/images/logos/catalog-logotype--false-color--default.svg';
import CatalogLogotypeFalseColorWhite from '../../assets/images/logos/catalog-logotype--false-color--white.svg';

import QuotientLogotypeTrueColorDefault from '../../assets/images/logos/quotient-logotype--true-color--default.svg';
import QuotientLogotypeTrueColorWhite from '../../assets/images/logos/quotient-logotype--true-color--white.svg';
import QuotientLogotypeFalseColorDefault from '../../assets/images/logos/quotient-logotype--false-color--default.svg';
import QuotientLogotypeFalseColorWhite from '../../assets/images/logos/quotient-logotype--false-color--white.svg';

import HourGlassLogotypeTrueColorDefault from '../../assets/images/logos/hourglass-logotype--true-color--default.svg';
import HourGlassLogotypeTrueColorWhite from '../../assets/images/logos/hourglass-logotype--true-color--white.svg';
import HourGlassLogotypeFalseColorDefault from '../../assets/images/logos/hourglass-logotype--false-color--default.svg';
import HourGlassLogotypeFalseColorWhite from '../../assets/images/logos/hourglass-logotype--false-color--white.svg';

import CommandLogotypeTrueColorDefault from '../../assets/images/logos/command-logotype--true-color--default.svg';
import CommandLogotypeTrueColorWhite from '../../assets/images/logos/command-logotype--true-color--white.svg';
import CommandLogotypeFalseColorDefault from '../../assets/images/logos/command-logotype--false-color--default.svg';
import CommandLogotypeFalseColorWhite from '../../assets/images/logos/command-logotype--false-color--white.svg';
import LayerLogoImage from '../../assets/images/logos/layer-logo-image.svg';
import LayerImage from '../../assets/images/logos/layer-image.svg';
import SisyphusLogoImage from '../../assets/images/logos/sisyphus-logo-image.svg';
import SisyphusImage from '../../assets/images/logos/sisyphus-image.svg';
import CircoolesLogoImage from '../../assets/images/logos/circooles-logo-image.svg';
import CircoolesImage from '../../assets/images/logos/circooles-image.svg';
import CatalogLogoImage from '../../assets/images/logos/catalog-logo-image.svg';
import CatalogImage from '../../assets/images/logos/catalog-image.svg';
import QuotientLogoImage from '../../assets/images/logos/quotient-logo-image.svg';
import QuotientImage from '../../assets/images/logos/quotient-image.svg';

import HourGlassLogoImage from '../../assets/images/logos/hourglass-logo-image.svg';
import HourGlassImage from '../../assets/images/logos/hourglass-image.svg';

import CommandLogoImage from '../../assets/images/logos/command-logo-image.svg';
import CommandImage from '../../assets/images/logos/command-image.svg';
import UntitleUILogoImage from '../../assets/images/logos/untitle-ui-logo-image.svg';
import UntitleUIImage from '../../assets/images/logos/untitle-ui-image.svg';

import TheWashingtonPost from '../../assets/images/logos/the-washington-post.svg';
import TheNewyorkTimes from '../../assets/images/logos/the-newyork-time.svg';
import TechCruch from '../../assets/images/logos/techcruch.svg';
import Forbes from '../../assets/images/logos/forbes.svg';
import Gizmodo from '../../assets/images/logos/gizmodo.svg';
import FastCompany from '../../assets/images/logos/fast-company.svg';

import BloomBerg from '../../assets/images/logos/bloomberg.svg';
import Wired from '../../assets/images/logos/wired.svg';
import BusinessInsider from '../../assets/images/logos/business-insider.svg';
import TheGuardian from '../../assets/images/logos/the-guardian.svg';
import Engadget from '../../assets/images/logos/engadget.svg';
import PropTypes from 'prop-types';

export const LogoCompany = ({ darkMode }) => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {darkMode === 'true' && (
          <div>
            <img
              src={LogoDarkModeTrue}
              alt='logo'
            ></img>
          </div>
        )}
        {darkMode === 'false' && (
          <div>
            <img
              src={LogoDarkModeFalse}
              alt='logo'
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};

LogoCompany.propTypes = {
  darkMode: PropTypes.oneOf(['true', 'false']),
};

export default {
  title: 'Style Guid/Logos',
  tags: ['autodocs'],
  component: LogoCompany,
  argTypes: {},
};

export const logoCompanys = {
  args: {
    darkMode: 'true',
  },
};

export const Logos = () => {
  return (
    <div
      style={{ background: '#F4F5F7' }}
      className='p-20'
    >
      {RenderCompanyLogos()}
      {RenderPlaceholderCompanyLogos()}
      {RenderPlaceholderPressLogos()}
    </div>
  );
};

const RenderCompanyLogos = () => {
  return (
    <div>
      <h3 className='text-style'>Company logos</h3>
      <div style={{ display: 'flex' }}>
        <div>
          <img
            src={LogoMark}
            alt='logo'
          ></img>
        </div>
        <div>
          <div>
            <img
              src={LogoDarkModeFalse}
              alt='logo'
            ></img>
          </div>
          <div>
            <img
              src={LogoDarkModeTrue}
              alt='logo'
            ></img>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
const RenderPlaceholderCompanyLogos = () => {
  return (
    <div>
      <h3 className='text-style'>Placeholder company logos</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', width: '50%' }}>
          <div className='mx-20 col-2'>
            <div className='my-20'>
              <div>
                <img
                  src={LayerLogotypeTrueColorDefault}
                  alt='logo'
                ></img>
                <img
                  src={LayerLogotypeFalseColorDefault}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
              <div>
                <img
                  src={LayerLogotypeTrueColorWhite}
                  alt='logo'
                ></img>
                <img
                  src={LayerLogotypeFalseColorWhite}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
            </div>
            <div className='my-20'>
              <div>
                <img
                  src={SisyphusLogotypeTrueColorDefault}
                  alt='logo'
                ></img>
                <img
                  src={SisyphusLogotypeFalseColorDefault}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
              <div>
                <img
                  src={SisyphusLogotypeTrueColorWhite}
                  alt='logo'
                ></img>
                <img
                  src={SisyphusLogotypeFalseColorWhite}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
            </div>
            <div className='my-20'>
              <div>
                <img
                  src={CircoolesLogotypeTrueColorDefault}
                  alt='logo'
                ></img>
                <img
                  src={CircoolesLogotypeFalseColorDefault}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
              <div>
                <img
                  src={CircoolesLogotypeTrueColorWhite}
                  alt='logo'
                ></img>
                <img
                  src={CircoolesLogotypeFalseColorWhite}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
            </div>
            <div className='my-20'>
              <div>
                <img
                  src={CatalogLogotypeTrueColorDefault}
                  alt='logo'
                ></img>
                <img
                  src={CatalogLogotypeFalseColorDefault}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
              <div>
                <img
                  src={CatalogLogotypeTrueColorWhite}
                  alt='logo'
                ></img>
                <img
                  src={CatalogLogotypeFalseColorWhite}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
            </div>
          </div>
          <div className='mx-2 col-2'>
            <div className='my-20'>
              <div>
                <img
                  src={QuotientLogotypeTrueColorDefault}
                  alt='logo'
                ></img>
                <img
                  src={QuotientLogotypeFalseColorDefault}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
              <div>
                <img
                  src={QuotientLogotypeTrueColorWhite}
                  alt='logo'
                ></img>
                <img
                  src={QuotientLogotypeFalseColorWhite}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
            </div>
            <div className='my-20'>
              <div>
                <img
                  src={HourGlassLogotypeTrueColorDefault}
                  alt='logo'
                ></img>
                <img
                  src={HourGlassLogotypeFalseColorDefault}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
              <div>
                <img
                  src={HourGlassLogotypeTrueColorWhite}
                  alt='logo'
                ></img>
                <img
                  src={HourGlassLogotypeFalseColorWhite}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
            </div>
            <div className='my-20'>
              <div>
                <img
                  src={CommandLogotypeTrueColorDefault}
                  alt='logo'
                ></img>
                <img
                  src={CommandLogotypeFalseColorDefault}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
              <div>
                <img
                  src={CommandLogotypeTrueColorWhite}
                  alt='logo'
                ></img>
                <img
                  src={CommandLogotypeFalseColorWhite}
                  alt='logo'
                  className='ml-20'
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', width: '50%' }}>
            <div>
              <div>
                <div style={{ display: 'flex' }}>
                  <img
                    src={LayerLogoImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                  <img
                    src={LayerImage}
                    alt='logo'
                    className='mx-20'
                  ></img>
                </div>
                <div className='ml-20 text-style'>Layer</div>
              </div>
              <div>
                <div>
                  <img
                    src={SisyphusLogoImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                  <img
                    src={SisyphusImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                </div>
                <div className='ml-20 text-style'>Sisyphus</div>
              </div>
              <div>
                <div>
                  <img
                    src={CircoolesLogoImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                  <img
                    src={CircoolesImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                </div>
                <div className='ml-20 text-style'>Circooles</div>
              </div>
              <div>
                <div>
                  <img
                    src={CatalogLogoImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                  <img
                    src={CatalogImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                </div>
                <div className='ml-20 text-style'>Catalog</div>
              </div>
              <div>
                <div>
                  <img
                    src={QuotientLogoImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                  <img
                    src={QuotientImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                </div>
                <div className='ml-20 text-style'>Quotient</div>
              </div>
              <div>
                <div>
                  <img
                    src={HourGlassLogoImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                  <img
                    src={HourGlassImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                </div>
                <div className='ml-20 text-style'>HourGlass</div>
              </div>
              <div>
                <div>
                  <img
                    src={CommandLogoImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                  <img
                    src={CommandImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                </div>
                <div className='ml-20 text-style'>Command+R</div>
              </div>
              <div>
                <div>
                  <img
                    src={UntitleUILogoImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                  <img
                    src={UntitleUIImage}
                    alt='logo'
                    className='m-20'
                  ></img>
                </div>
                <div className='ml-20 text-style'>Untitle UI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const RenderPlaceholderPressLogos = () => {
  return (
    <div>
      <h3 className='text-style'>Placeholder Press Logos</h3>
      <div style={{ display: 'flex' }}>
        <div>
          <div className='m-20'>
            <img
              src={TheWashingtonPost}
              alt='logo'
            ></img>
          </div>
          <div className='m-20'>
            <img
              src={TechCruch}
              alt='logo'
            ></img>
          </div>
          <div className='m-20'>
            <img
              src={TheNewyorkTimes}
              alt='logo'
            ></img>
          </div>
          <div className='m-20'>
            <img
              src={Forbes}
              alt='logo'
            ></img>
          </div>
          <div className='m-20'>
            <img
              src={Gizmodo}
              alt='logo'
            ></img>
          </div>
          <div className='m-20'>
            <img
              src={FastCompany}
              alt='logo'
            ></img>
          </div>
        </div>
        <div>
          <div className='m-20'>
            <img
              src={BloomBerg}
              alt='logo'
            ></img>
          </div>
          <div className='m-20'>
            <img
              src={Wired}
              alt='logo'
            ></img>
          </div>
          <div className='m-20'>
            <img
              src={BusinessInsider}
              alt='logo'
            ></img>
          </div>
          <div className='m-20'>
            <img
              src={TheGuardian}
              alt='logo'
            ></img>
          </div>
          <div className='m-20'>
            <img
              src={Engadget}
              alt='logo'
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
