import React from 'react'
import img from './images/000002.jpg'
import './index.css'

function Image(props){
    return(
        <div className="contact-card">
            <img src={img}  className="Main" width='auto' height='600'/>
        </div>
    )
}



export default Image