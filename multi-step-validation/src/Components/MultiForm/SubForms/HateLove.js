import React, {useState} from "react";
import './SubForm.css'

export default function HateLove(props){


    const[formData, setFormData] = useState({
        prefs:{
            love : "",
            hate : ""
        }
    })

    const preventFunc = (e) =>{
        e.preventDefault();


    }


    const handleReturn = ()=>{
        props.modifyIndex(4);
    }


    const handleTextArea = (e,pref)=>{
        if(pref === "love"){
            setFormData({
                prefs : {
                    ...formData.prefs,
                    love : e.target.value
                }
            })
        }
        else if(pref=== "hate"){
            setFormData({
                prefs : {
                    ...formData.prefs,
                    hate : e.target.value
                }
            })
        }
    }

    return(
       <form className="preferences-form"  onSubmit={preventFunc}>

          <p>Parle-nous des aliments que tu preferes ezt que tu detestes !</p>
          <label htmlFor="prefered">Tes aliments preferes,separes par une virgule</label>
          <textarea  onChange = { (e)=> handleTextArea(e,"love")}  id="prefered"  placeholder="Un ou plusieurs aliments si tu en as"></textarea>
 
          <label htmlFor="hated">Les aliments que tu ne supportes pas,separes par une virgule</label>
          <textarea  onChange = { (e)=> handleTextArea(e,"hate")} id="hated"  placeholder="Un ou plusieurs aliments si tu en as"></textarea>


          <div className='container-nav-btns'>
                <button type='button' className='prev' onClick={handleReturn}>PREV</button>
                <button onClick = {()=>props.modifyIndex(6,formData)}
                >NEXT</button>
                
                </div> 

       </form>
    )
}