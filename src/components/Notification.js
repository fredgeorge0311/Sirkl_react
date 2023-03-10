import './Notification.css';
import messageicon from '../assets/images/message.png';
import threeicon from '../assets/images/three.png';
import threedarkicon from '../assets/images/threedark.png';
import leafimage from '../assets/images/leaf.png';
import laptopimage from '../assets/images/laptop.png';

import Notification_data from './Notification_data';
import { useSelector } from 'react-redux';

const Notification = () => {
  const mode = useSelector(state => state.supply.value);

  return (
    <div className='notification' style={mode ? {"--notification-text": "var(--notification-text-dm)", "--notification-scroll": "var(--notification-scroll-dm)"} : {"--notification-text": "var(--notification-text-lm)", "--notification-scroll": "var(--notification-scroll-lm)"}}>
      <div className='notification__title'>Notifications</div>
      <div className='notification__detail'>
        <Notification_data />
        <Notification_data />
        <Notification_data />
        <Notification_data />
        <Notification_data />

        <div className='notification__details__pro_new'>
          <div className='notification__detailspro__up'>
            <div className='notification__detail__left'>
              <img src={messageicon} className="notification__left__pic" />
              <p className='notification__left__text2'>new messages</p>
            </div>
            <div className='notification__detail__right'>
              <p className="notification__right__text">2 min ago</p>
              <img src={mode ? threedarkicon : threeicon} className="notification__right__pic" />
            </div>
          </div>
          <div className='notification__detailspro__down'>
            <img src={laptopimage} className="notification__detailspro__pic" />
            <img src={leafimage} className="notification__detailspro__pic" />
            <img src={laptopimage} className="notification__detailspro__pic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification;