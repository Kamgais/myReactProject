import React , {useState, useEffect, useRef} from 'react'
import './ProductShowcase.css'
import {useParams} from 'react-router-dom'
import inventory from '../../data/inventory'
import { useDispatch } from 'react-redux'

export default function ProductShowcase(){

    const[nbMugs,setNbMugs] = useState(1);

    const {id} = useParams();

    const productClicked = inventory.findIndex(obj => 
        obj.title.replace(/\s+/g, "").trim() === id)


        const updateMugs = e =>{
            if(e.target.value >= 1){
            setNbMugs(Number(e.target.value))

        }
        }

          const addingInfo = useRef();

          let timerInfo ;
          let display = true;
          
         const dispatch = useDispatch();

        const addToCart = e =>{
            e.preventDefault();


            const  itemAdded = {
                ...inventory[productClicked],
                quantity : nbMugs
            }

            dispatch({
                type : "ADDITEM",
                payload : itemAdded
            })

            addingInfo.current.innerText = "Ajoute au panier"

            if(display){
                display = false;
                timerInfo = setTimeout(()=>{
                    addingInfo.current.innerText = "";
                    display = true ;
                },500)
            }
        }


        useEffect (()=>{
            return ()=>{
                clearTimeout(timerInfo)
            }
        },[])
    return (
        <div className='showcase'>
            <div className = "container-img-showcase">
                <img
                className='img-showcase'
                src = {process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`}/>

            </div>

            <div className='product-infos'>
                <h2>{inventory[productClicked].title}</h2>
                <p>Prix: {inventory[productClicked].price}$</p>
                <form onSubmit={addToCart}>
                    <label htmlFor='quantity'>Menge</label>
                    <input type="number"  id='quantity' value={nbMugs} onChange={updateMugs}/>
                    <button>Ajouter au Panier</button>
                    <span className='adding-info'  ref={addingInfo}></span>
                </form>
            </div>
            
        </div>
    )
}