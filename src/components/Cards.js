
import React from 'react'
import CardItem from './Carditem'


function Cards() {
    return (
        <div className="cards">
            <h1>Check destinations</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem src="images/img-9.jpg" 
                            text="aefa sreg kiwAQEf iWejki etik "
                            label="Adventure"
                            path = "/services"
                            />

                            <CardItem src="images/img-8.jpg" 
                            text="aefa sreg kiwAQEf iWejki etik "
                            label="Sports"
                            path = "/products"
                            />

                            <CardItem src="images/img-9.jpg" 
                            text="aefa sreg kiwAQEf iWejki etik "
                            label="Adventure"
                            path = "/services"
                            />
                        </ul>    
                    </div>    
                </div>    
        </div>
    )
}

export default Cards
