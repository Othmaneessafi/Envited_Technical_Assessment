import React from 'react'
import Styles from './style.module.css';
import { IoCalendarOutline, IoLocationOutline, IoChevronForwardOutline } from 'react-icons/io5';

const index = () => {
  return (
    <div className={Styles.container} >
        <div className={Styles.infos} >
            <div className={Styles.eventName} >Birthday Bash</div>
            <div className={Styles.hostName} >Hosted by Elysia</div>
            <div className={Styles.date} >
                <div className={Styles.dateInfo} >
                    <div className={Styles.dateInfoIcon} >
                        <IoCalendarOutline className={Styles.icon} />
                    </div>
                    <div className={Styles.dateInfoText} >
                        <p className={Styles.startDate} >18 August 6:00PM</p>
                        <p className={Styles.endDate} >to 19 August 1:00PM UTC +10</p>
                    </div>
                </div>
                <div >
                <IoChevronForwardOutline className={Styles.arrow} />
                </div>
            </div>
            <div className={Styles.location} >
                <div className={Styles.locationInfo} >
                    <div className={Styles.locationInfoIcon} >
                        <IoLocationOutline className={Styles.icon} />
                    </div>
                    <div className={Styles.locationInfoText} >
                        <p className={Styles.streetName} >Street name</p>
                        <p className={Styles.adresse} >Suburb, State, Postcode</p>
                    </div>
                </div>
                <div>
                    <IoChevronForwardOutline className={Styles.arrow} />
                </div>
            </div>
        </div>
        <div className={Styles.image} >
            
        </div>

    </div>
  )
}

export default index