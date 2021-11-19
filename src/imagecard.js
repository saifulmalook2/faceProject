import React from 'react'
import img from './images/000002.jpg'
import './index.css'



function Image (props){

    
        return (
            <div className="img-card">

            <img src={props.img} alt="g" className="Main" width='auto' height='600'/>
            
        </div>

        )
    
}

export default Image