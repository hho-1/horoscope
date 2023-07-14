import React from 'react'
import './Card.scss'

const Card = ({veri}) => {
    
    return (
    <div className="container">
        {veri.map(({id, title, date, desc, image}) => (
            
            <div className="bg-items" key={id}>
        
                <div className="items">
                    <div className="details">
                        <h1 className = "title">{title}</h1>
                        <h3 className = 'date'>{date}</h3>
                        <img src={image} alt="" />
                        <p>{desc}</p>
                   
                    </div>
                
                    <div className="effect"></div>
                    
                
                </div>
            </div>
            
        ))}
    </div>
  )
}
{/* <img src={image} alt="" /> */}
export default Card