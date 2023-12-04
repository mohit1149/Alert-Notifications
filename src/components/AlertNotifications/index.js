// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'

import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotification = () => (
  <div className="bg-container">
    <h1 className="main-heading">Alert Notifications</h1>
    <Notification>
      <div className="small-container">
        <AiFillCheckCircle className="success-heading-icon" />
        <h1 className="success-heading">Success</h1>
      </div>

      <p className="success-paragraph">
        You can access all the files in the folder
      </p>
    </Notification>
    <Notification>
      <div className="small-container">
        <RiErrorWarningFill className="success-heading-icon redness" />
        <h1 className="success-heading redness">Error</h1>
      </div>

      <p className="success-paragraph">
        Sorry, you are not authorized to have access to delete the file
      </p>
    </Notification>
    <Notification>
      <div className="small-container">
        <MdWarning className="success-heading-icon yellowness" />
        <h1 className="success-heading yellowness">Warning</h1>
      </div>

      <p className="success-paragraph">
        Viewers of this file can see comments and suggestions
      </p>
    </Notification>
    <Notification>
      <div className="small-container">
        <MdInfo className="success-heading-icon blueness" />
        <h1 className="success-heading blueness">Info</h1>
      </div>

      <p className="success-paragraph">
        Anyone on the internet can view these files
      </p>
    </Notification>
  </div>
)

export default AlertNotification
