import React, { useState } from 'react';

const AddActivity = ({ storeActivity }) => {
  const {title, setTitle}= useState("")
  const {description, setDescription} = useState("")

  const saveActivity = () => {
    storeActivity({ title, description})
  }

  return (
    <div className="AddActivity"> 
      <h2>Activity title  {title} </h2>
        <input 
            onChange={event => setTitle(event.target.value)}/>
        <input />
       
       <h2>Activity description {description} </h2>
       <textarea>
        onChange={event => setDescription(event.target.value)}/>
       </textarea>
       <button onClick={saveActivity}>Save Activity </button>
    </div>
  )
}

export default AddActivity;
