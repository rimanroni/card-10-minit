import React from 'react';
import {CgDollar , CgAdd} from "react-icons/cg";
const Courses = (props) => {
    const {name, price, img} = props.course ;
    const handle = props.handle
    return (
        <div className='coursesall'>
             <img src={img} alt="" />
             <h4>{name}</h4>  
             <h5>Price : <CgDollar/> {price}</h5>  
             <button onClick={()=>handle(props.handle)}> <CgAdd className='cgadd' /> Join Now</button>
             <h1> </h1>
        </div>
    );
};

export default Courses;