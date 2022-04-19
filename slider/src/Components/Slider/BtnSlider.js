
import React from "react"
import leftArrow from './icons/left-arrow.svg'
import rigthArrow from './icons/right-arrow.svg'


export default function BtnSlider({direction,moveSlide}){
    return (
       <button className= {direction === "next" ? "btn-slide next" : "btn-slide prev"} onClick={moveSlide}>
           <img src={direction === "next"? rigthArrow : leftArrow} />
       </button>
    )
}