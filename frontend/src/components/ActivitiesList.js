
import React from 'react';

// import screenshot from '../img/screenshot.png';
import AddActivity from './AddActivity';
  
const ActivitiesList = ({activities}) => {
  return (
    <div className="ActivitiesList">
      <ul className= "List">    
          {activities.map((activity, index) => {
            return <li key={index}>{activity.title} </li>
              
          })}
      </ul>

      <div className="Detail">
      </div>
    
    </div>
  )
}
export default ActivitiesList;
