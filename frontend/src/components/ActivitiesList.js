

// import React from 'react';
/** @jsx jsx */ 
import {useState} from 'react';
import { css, jsx } from '@emotion/core'
// import screenshot from '../img/screenshot.png';
import AddActivity from './AddActivity';


const Activities = ({activities}) => {

  const [showActivities, setShowActivities] = useState(true)

  return (
    <div className="ActivitiesList" css={css `display: grid;
      grid-template-columns: 300px auto;
      grid-template-areas: "sidebar-desktop main"
      width: 100vw;
      height: 100vh;

      @media (max-width: 800px) {
         grid-template-columns: 80px auto;
         grid-template-areas: "sidebar-mobile main"
      }
      `}
      {showActivities}
      <ul className="List" css={css` border-right: 1px solid black; 
        grid-area: sidebar-desktop;
        border-right: 1px solid black  
        height: 100%
        text-align: left;
        list-style-type: none;
       

        @media (min-width: 800px) {
         display: none;
         &.showActivities {
          display: block;
         }
        
           }
        `}>

        <div id="menuToggle" css={css`
            display: block;
            padding-top: 20px;
            padding-left: 20px;
            `} onClick={() => {setShowActivities(!showActivities)}}>
          <input type="checkbox" />
             <span css={css`
              display: block;
              width: 33px;
              height: 4px;
              margin-bottom: 5px;
              position: relative;
              background: gray;
              border-radius: 3px;
              z-index: 1;
              `}></span>
               <span css={css`
              display: block;
              width: 33px;
              height: 4px;
              margin-bottom: 5px;
              position: relative;
              background: gray;
              border-radius: 3px;
              z-index: 1;
              `}></span>
               <span css={css`
              display: block;
              width: 33px;
              height: 4px;
              margin-bottom: 5px;
              position: relative;
              background: gray;
              border-radius: 3px;
              z-index: 1;
              `}></span>
         </div>  
       {activities.map((activity, index) => {)
            return <li key={index} 
                      css={css`

                      padding: 20px; 
                      border-bottom: 1px solid black; 
                      &:hover {
                        background-color: lightgray;
                        cursor: pointer;
                      }

                `}>{activity.title} </li>
              
          })}
      </ul>

      <ul css={css` 
        border-right: 1px solid black; 
        grid-area: sidebar-mobile;
        border-right: 1px solid black  
        height: 100%
        text-align: left;
        list-style-type: none;
        `}>
          icon to click 
        </ul>
      <div className="Detail"  css={css`
        grid-area: main`}>
      </div>
    
    </div>
  )
}
export default Activities;
