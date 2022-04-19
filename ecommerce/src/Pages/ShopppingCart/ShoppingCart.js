import React,{useEffect,useState} from 'react'
import './ShoppingCart.css'
import {useSelector,useDispatch} from 'react-redux'

export default function ShoppingCart(){

    const storeState = useSelector (state => state)

    const dispatch = useDispatch()

       const handleChange = (e,id) =>{
           const indexItem = storeState.cart.findIndex(obj => obj.id === id)


           const objUpdated = {
                  ...storeState.cart[indexItem],
                  quantity : Number(e.target.value)
           }


           dispatch({
            type : "UPDATEITEM",
            payload : objUpdated
        })
 
       }


       let totalPrice = 0;

       if(storeState.cart.length !== 0){
           for(const item of storeState.cart){
               const itemPrice =  item.price * item.quantity ;
               totalPrice += itemPrice ;
           }
       }


      
    return (
        <div className='globalcontainer'>
            <p className='heading-cart'>Votre Panier :  </p>
           
           <ul className='cart-list'>
               {storeState.cart.map((item)=>(
                   <li key={item.id}>
                       <img 
                        src=  {process.env.PUBLIC_URL + `/images/${item.img}.png`}
                        alt=''/>

                        <div className='bloc-cart-infos'>
                            <h4>{item.title}</h4>
                            <p>Prix : {item.price}$</p>
                        </div>

                        <div className='bloc-input'>
                            <label htmlFor='quantityInput'>Quantite</label>
                            <input
                            type = "number"
                            id = "quantityInput"
                            value={item.quantity}
                            onChange={e => handleChange(e,item.id)}/>
                        </div>
                   </li>
               ))}
           </ul>

           <p className='total-price'>Total : {totalPrice.toFixed(2)}$</p>
           <button className='btn-cart'>Proceder au paiement</button>

            
        </div>
    )
}