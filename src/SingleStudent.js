
import React from 'react'

//function component

const SingleStudent = ({name, skill, photo, firoz}) => {
  return (
    <div className='col-md-4'>
    <div className='team-member'>
        <img src={photo} alt=""/>
        <h2>{name}</h2>
        <p>{skill}</p>
        <p>{firoz}</p>

    </div>
</div>
  )
}

export default SingleStudent;