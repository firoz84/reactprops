import {Students} from './data'

import React from 'react'


import SingleClass from './SingleClass'


const Team = ({title}) => {
  return (
    <div className='team-area'>
        <div class="container">
            <div class="row ">
                <div className='col'>
                    <div className='team-header text-center'>
                        <h2>{title}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, vero consequuntur deleniti veniam unde maiores voluptate fugit, ad veritatis quia cum eveniet voluptatibus adipisci optio dolorum repellendus? Saepe, vitae quaerat!</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                {
                    Students.map( (student, index)=>
                        
                   <SingleClass name={student.name} skill={student.skill} photo={student.Photo} firoz={index +1}/>
                    )

                }

                


            </div>
        </div>
    </div>
  )
}

export default Team