import React , {useState} from "react";
import './Slider.css'
import dataSlider from './dataSlider'
import BtnSlider from "./BtnSlider";

export default function Slider (){

    const[slideAdmin, setSlideAdmin] = useState({
        index : 1,
        inProgress : false
    })


    const nextSlide = () =>{
       if(slideAdmin.index !== dataSlider.length && !slideAdmin.inProgress){
           setSlideAdmin({index : slideAdmin.index +1,
            inProgress : true})

            setTimeout(()=>{
                setSlideAdmin({index : slideAdmin.index +1,
                inProgress : false})
            },400)
       }

       else if(slideAdmin.index === dataSlider.length && !slideAdmin.inProgress){
           setSlideAdmin({index:1 , inProgress : true})

           setTimeout(()=>{
            setSlideAdmin({index : 1,
            inProgress : false})
        },400)
       }
    }

    const prevSlide = ()=>{

        if(slideAdmin.index !== 1 && !slideAdmin.inProgress){
            setSlideAdmin({index : slideAdmin.index -1,
             inProgress : true})

             setTimeout(()=>{
                setSlideAdmin({index : slideAdmin.index -1,
                inProgress : false})
            },400)
        }
 
        else if(slideAdmin.index === 1 && !slideAdmin.inProgress){
            setSlideAdmin({index:5 , inProgress : true})

            setTimeout(()=>{
                setSlideAdmin({index :5,
                inProgress : false})
            },400)
        }
        
    }

     const moveDot = index =>{
         setSlideAdmin({index : index , inProgress : false})
     }


    return (
        <div className="container-slider">
           {dataSlider.map((obj, index) => {
               return(
                   <div key={obj.id} className = {slideAdmin.index === index+1 ? "slide active-anim" : "slide"} >

                       <img  src={`/IMGS/img${index+1}.jpg `} alt=""   />

                       </div>
               )
           })}

           <BtnSlider  moveSlide = {nextSlide} direction = {"next"}/>
           <BtnSlider  moveSlide = {prevSlide} direction= {"prev"}/>


           <div className="container-dots">
            {Array.from({length:5}).map((item,index)=>{
                return <div className={slideAdmin.index === index + 1? "dot active" : "dot"}
                
                onClick = {()=> moveDot(index +1)}> </div>
            })}
           </div>
              

        </div>
    )
}