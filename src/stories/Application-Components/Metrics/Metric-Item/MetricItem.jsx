import PropTypes from 'prop-types';
import '../../../assets/css/metric.css';
import '../../../assets/css/text.css';
import '../../../assets/css/color.css';
import '../../../assets/css/icon.css';
import '../../../assets/css/typography.css';
import { Badges } from './../../../components/Badges/Badges';
import { Dropdown } from './../../../components/dropdown&company-dropdown/Dropdown';
import { FeatureIcon } from './../../../Style-Guid/Misc-Icons/MiscIcon';
import { Change } from './../_Unpublished-Base-Components/Change';
import { Button } from './../../../components/button/Button';

export const MetricItem = ({
  actions,
  type,
  breakpoint,
  dropdownIcon,
  supportText,
  textHeading,
  textNumber,
  text,
  textButton,
}) => {
  return (
    <div
      className={`metric-action--${actions}-type--${type}-breakpoint--${breakpoint}`}
    >
      {type === 'simple' && actions === 'false' && (
        <>
          <span
            className={[
              `text-heading-metrics-type--${type}`,
              'text-sm-medium',
            ].join(' ')}
          >
            {textHeading ? textHeading : 'Views 24 hours'}
          </span>
          <div className={`number-and-badge-in-metric-type--${type}`}>
            <span
              className={[
                breakpoint === 'desktop'
                  ? `display-md-semibold`
                  : 'display-sm-semibold',
                `text-number-metric`,
              ].join(' ')}
            >
              {textNumber ? textNumber : '2,000'}
            </span>
            <div
              className={`badge-wrap-metric-action--${actions}-type--${type}-breakpoint--${breakpoint}`}
            >
              <Badges
                size={'md'}
                icon={'iconLeading'}
                color={'success'}
                outline={'false'}
                iconLeading={'icon-arrow-up'}
                text={'100%'}
              />
            </div>
          </div>
        </>
      )}
      {type === 'simple' && actions === 'true' && (
        <div className={`wrapper-content-metric`}>
          <div
            className={`content-metric-type--${type}-breakpoint--${breakpoint}`}
          >
            <span
              className={[
                `text-heading-metrics-type--${type}`,
                'text-sm-medium',
              ].join(' ')}
            >
              {textHeading ? textHeading : 'Views 24 hours'}
            </span>
            <div className={`number-and-badge-in-metric-type--${type}`}>
              <span
                className={[
                  breakpoint === 'desktop'
                    ? `display-md-semibold`
                    : 'display-sm-semibold',
                  `text-number-metric`,
                ].join(' ')}
              >
                {textNumber ? textNumber : '2,000'}
              </span>
              <div
                className={`badge-wrap-metric-action--${actions}-type--${type}-breakpoint--${breakpoint}`}
              >
                <Badges
                  size={'md'}
                  icon={'iconLeading'}
                  color={'success'}
                  outline={'false'}
                  iconLeading={'icon-arrow-up'}
                  text={'100%'}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {(type === 'icon01' || type === 'icon02') && (
        <>
          {type === 'icon01' && actions === 'false' && (
            <>
              <FeatureIcon
                size={'lg'}
                color={'success'}
                theme={'light-circle-outline'}
                icon={'icon-trend-up-01'}
              />
              <div className={`heading-and-number-metric`}>
                <span
                  className={[
                    `text-heading-metrics-type--${type}`,
                    `'text-sm-medium'`,
                  ].join(' ')}
                >
                  {textHeading ? textHeading : 'Views 24 hours'}
                </span>
                <div className={`number-and-badge-in-metric-type--${type}`}>
                  <span
                    className={[
                      breakpoint === 'desktop'
                        ? `display-md-semibold`
                        : 'display-sm-semibold',
                      `text-number-metric`,
                    ].join(' ')}
                  >
                    {textNumber ? textNumber : '2,000'}
                  </span>
                  <div
                    className={`badge-wrap-metric-action--${actions}-type--${type}-breakpoint--${breakpoint}`}
                  >
                    <Badges
                      size={'md'}
                      icon={'iconLeading'}
                      color={'success'}
                      outline={'false'}
                      iconLeading={'icon-arrow-up'}
                      text={'100%'}
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {type === 'icon01' && actions === 'true' && (
            <div className={`wrapper-content-metric`}>
              <div
                className={`content-metric-type--${type}-breakpoint--${breakpoint}`}
              >
                <FeatureIcon
                  size={'lg'}
                  color={'success'}
                  theme={'light-circle-outline'}
                  icon={'icon-trend-up-01'}
                />
                <div className={`heading-and-number-metric`}>
                  <span
                    className={[
                      `text-heading-metrics-type--${type}`,
                      `'text-sm-medium'`,
                    ].join(' ')}
                  >
                    {textHeading ? textHeading : 'Views 24 hours'}
                  </span>
                  <div className={`number-and-badge-in-metric-type--${type}`}>
                    <span
                      className={[
                        breakpoint === 'desktop'
                          ? `display-md-semibold`
                          : 'display-sm-semibold',
                        `text-number-metric`,
                      ].join(' ')}
                    >
                      {textNumber ? textNumber : '2,000'}
                    </span>
                    <div
                      className={`badge-wrap-metric-action--${actions}-type--${type}-breakpoint--${breakpoint}`}
                    >
                      <Badges
                        size={'md'}
                        icon={'iconLeading'}
                        color={'success'}
                        outline={'false'}
                        iconLeading={'icon-arrow-up'}
                        text={'100%'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {type === 'icon02' && actions === 'false' && (
            <>
              <div className={`heading-and-icon-metric-action--${actions}`}>
                <FeatureIcon
                  size={'lg'}
                  color={'primary'}
                  theme={'light-circle-outline'}
                  icon={'icon-zap'}
                />
                <span
                  className={[
                    `text-heading-metrics-type--${type}`,
                    `text-md-medium`,
                  ].join(' ')}
                >
                  {textHeading ? textHeading : 'Views 24 hours'}
                </span>
              </div>
              <div className={`number-and-badge-in-metric-type--${type}`}>
                <span
                  className={[
                    breakpoint === 'desktop'
                      ? `display-md-semibold`
                      : 'display-sm-semibold',
                    `text-number-metric`,
                  ].join(' ')}
                >
                  {textNumber ? textNumber : '2,000'}
                </span>
                <div className={`change-and-text-metric`}>
                  <Change trend={'positive'} />
                  <span
                    className={[`text-sm-semibold`, `text-metric`].join(' ')}
                  >
                    {text ? text : 'vs last month'}
                  </span>
                </div>
              </div>
            </>
          )}

          {type === 'icon02' && actions === 'true' && (
            <div className={`wrapper-content-metric`}>
              <div
                className={`content-metric-type--${type}-breakpoint--${breakpoint}`}
              >
                <div className={`heading-and-icon-metric-action--${actions}`}>
                  <FeatureIcon
                    size={'lg'}
                    color={'primary'}
                    theme={'light-circle-outline'}
                    icon={'icon-zap'}
                  />
                  <span
                    className={[
                      `text-heading-metrics-type--${type}`,
                      `text-md-medium`,
                    ].join(' ')}
                  >
                    {textHeading ? textHeading : 'Views 24 hours'}
                  </span>
                </div>
                <div className={`number-and-badge-in-metric-type--${type}`}>
                  <span
                    className={[
                      breakpoint === 'desktop'
                        ? `display-md-semibold`
                        : 'display-sm-semibold',
                      `text-number-metric`,
                    ].join(' ')}
                  >
                    {textNumber ? textNumber : '2,000'}
                  </span>
                  <div className={`change-and-text-metric`}>
                    <Change trend={'positive'} />
                    <span
                      className={[`text-sm-semibold`, `text-metric`].join(' ')}
                    >
                      {text ? text : 'vs last month'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {actions === 'true' && (
        <div className={`action-metric-breakpoint--${breakpoint}`}>
          <div className={`wrapper-content-metric`}>
            <div className={`content-action-metric-breakpoint--${breakpoint}`}>
              <Button
                size={'md'}
                hierarchy={'linkColor'}
                icon={'default'}
                destructive={'false'}
                state={'default'}
                text={textButton ? textButton : 'View report'}
              />
            </div>
          </div>
        </div>
      )}

      <div className={`dropdown-metric`}>
        <Dropdown
          type={'icon'}
          open={'false'}
          icon={'icon-dot-vertical-gray900'}
        />
      </div>
    </div>
  );
};

MetricItem.propTypes = {
  actions: PropTypes.oneOf(['true', 'false']),
  type: PropTypes.oneOf(['simple', 'icon01', 'icon02']),
  breakpoint: PropTypes.oneOf(['desktop', 'mobile']),
  dropdownIcon: PropTypes.oneOf(['true', 'false']),
  supportText: PropTypes.oneOf(['true', 'false']),
};
