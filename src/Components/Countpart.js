import React from 'react';

const Countpart = (props) => {
    const addCourses = props.addCourses;
    let updates = addCourses.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.price;
      }, 0);
    
   
    return (
        <div>
            <h3>Course Added </h3>
            <h4>Running Added Course : {addCourses.length} </h4>
            <h3>Price : { updates}</h3>
        </div>
    );
};

export default Countpart;