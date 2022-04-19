import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home(){
    return (
        <div className='global-container'>

            <h1 className='home-title'>
                Bienvenue au <span>Shop</span>
                <p> 
                Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Sint ipsum porro, 
                reiciendis maxime voluptatum modi sit 
                repellendus debitis sunt, officiis at
                 mollitia odio eos itaque eum 
                 provident beatae id delectus.

                </p>

                <img src={imgHomeShop}/>
            </h1>
            
        </div>
    )
}