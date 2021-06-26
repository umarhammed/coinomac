import React from 'react'
import './styles/Benefits.css'
import TrendingUpIcon from '@material-ui/icons/TrendingUp'
import TimelapseIcon from '@material-ui/icons/Timelapse'
import LockIcon from '@material-ui/icons/Lock'
import SecurityIcon from '@material-ui/icons/Security'
import CachedIcon from '@material-ui/icons/Cached'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'

function Benefits() {
  return (
    <div className='benefits'>
      <div className='benefits__header'>
        <h3 className='benefits__title'>Key Features</h3>
        <hr />
        <h3 className='benefits__subtitle'>
          The most trusted cryptocurrency platform
        </h3>
        <p>Here are a few reasons why you should invest with us</p>
      </div>
      <div className='benefits__body'>
        <div className='benefits__section'>
          <div className='benefits__component'>
            {/* icon */}
            <TrendingUpIcon className='benefits__icon' />
            {/* title */}
            <h4 className='component_title'>Guaranteed profit</h4>
            {/* info */}
            <p className='component__info'>
              Regardless of current or future price fluctuations, your agreed
              interest rate is applied with <span>ZERO risk</span> at tenure
              end.
            </p>
          </div>
          <div className='benefits__component  margin__small'>
            {/* icon */}
            <TimelapseIcon className='benefits__icon ' />
            {/* title */}
            <h4 className='component_title   '>Instant withdrawals</h4>
            {/* info */}
            <p className='component__info'>
              Your withdrawals are processed instantly to your external bitcoin
              wallets.
            </p>
          </div>
          <div className='benefits__component'>
            {/* icon */}
            <LockIcon className='benefits__icon' />
            {/* title */}
            <h4 className='component_title'>100% Privacy</h4>
            {/* info */}
            <p className='component__info'>
              All of your data and communication with us is 100% secured with
              the latest encryption technology. Even our support staff cannot
              view your trading/investment profile.
            </p>
          </div>
        </div>
        <div className='benefits__section'>
          <div className='benefits__component'>
            {/* icon */}
            <SecurityIcon className='benefits__icon' />
            {/* title */}
            <h4 className='component_title'>Secure storage</h4>
            {/* info */}
            <p className='component__info'>
              We store the vast majority of the digital assets in secure offline
              storage.
            </p>
          </div>
          <div className='benefits__component'>
            {/* icon */}
            <CachedIcon className='benefits__icon' />
            {/* title */}
            <h4 className='component_title'>Coin-in/Coin-out</h4>
            {/* info */}
            <p className='component__info'>
              Deposits/withdrawals can be processed from the same
              cryptocurrency.
            </p>
          </div>
          <div className='benefits__component'>
            {/* icon */}
            <SupervisedUserCircleIcon className='benefits__icon' />
            {/* title */}
            <h4 className='component_title'>Protected by insurance</h4>
            {/* info */}
            <p className='component__info'>
              Cryptocurrency stored on our servers is covered by our insurance
              policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits
