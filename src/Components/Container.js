import React, { useState } from 'react';
import Data from  './Data/data.json'
import Courses from './Courses';
import { v4 as uuidv4 } from 'uuid';
import Countpart from './Countpart';
const Container = () => {
   const [addcourse, setaddcourse] = useState([])
      const handle = (props ) => {
              const update = [...addcourse, props]
              setaddcourse(update)
      }
    return (
        <div className='Container'>
            <div className="allCourse">
                {Data.map(course =><Courses 
                 key={uuidv4()} 
                 course={course}
                 handle={handle}
                 />)}
             </div>
            <div className="">
              <Countpart addCourses={addcourse}/>

            </div>
        </div>
    );
};

export default Container;