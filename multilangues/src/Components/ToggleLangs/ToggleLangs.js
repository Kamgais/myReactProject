import React, {useContext} from 'react'
import FrenchFlag from '../../assets/france.svg'
import SpanischFlag from '../../assets/spain.svg'
import EnglischFlag from '../../assets/united-kingdom.svg'
import './ToggleLangs.css'
import { Context } from '../../context/langContext'

export default function ToggleLangs(){

    const {toggleLang} = useContext(Context)
    return (
        <div className='container-langs'>

         <img onClick = {()=>toggleLang('FR')} src={FrenchFlag} /> 
         <img onClick = {()=>toggleLang('ES')}  src={SpanischFlag} /> 
         <img onClick = {()=>toggleLang('EN')} src={EnglischFlag} /> 


        </div>
    )
}