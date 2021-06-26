import React from 'react'
import './styles/JoinUs.css'
import BarChartIcon from '@material-ui/icons/BarChart'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import LockIcon from '@material-ui/icons/Lock'
import AndroidIcon from '@material-ui/icons/Android'

function JoinUs() {
  return (
    <div className='joinus'>
      <div className='joinus__header'>
        <h3 className='joinus__title'>Join Us</h3>
        <hr />
        <h3 className='joinus__subtitle'>
          Create your cryptocurrency portfolio today
        </h3>
        <p>
          Coinomac has a variety of features that makes it the best place to
          invest
        </p>
      </div>
      <div className='joinus__container'>
        <div className='joinus__info'>
          <div className='joinus__item'>
            {/* icon */}
            <BarChartIcon className='joinus__icon' />
            {/* title */}
            <div className='joinus__itemtext'>
              <h3>Manage your portfolio</h3>
              <p>
                Top up, withdraw or reinvest your digital assets, keep track of
                them in one place.
              </p>
            </div>
          </div>
          <div className='joinus__item'>
            {/* icon */}
            <EventAvailableIcon className='joinus__icon' />
            {/* title */}
            <div className='joinus__itemtext'>
              <h3>Coinomac alerts</h3>
              <p>
                Stay on top of the markets with Coinomac alerts and stay up to
                date with critical market changes.
              </p>
            </div>
          </div>
          <div className='joinus__item'>
            {/* icon */}
            <LockIcon className='joinus__icon' />
            {/* title */}
            <div className='joinus__itemtext'>
              <h3>Vault protection</h3>
              <p>
                For added security, store your funds in a vault with time
                delayed withdrawals.
              </p>
            </div>
          </div>
          <div className='joinus__item'>
            {/* icon */}
            <AndroidIcon className='joinus__icon' />
            {/* title */}
            <div className='joinus__itemtext'>
              <h3>Coin transfer</h3>
              <p>
                You can instantly transfer from your portfolio balance to other
                recipients or your own external crypto wallet.
              </p>
            </div>
          </div>
        </div>
        <img
          src='https://coinomac.com/images/portfolio.jpg'
          alt='portofolio'
          className='joinus__image'
        />
      </div>
    </div>
  )
}

export default JoinUs
