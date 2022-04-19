
import React , {useRef} from 'react'
import './SubForm.css'


export default function Allergies(props){

    const styleData = {
        allergies : []
    }
    const preventFunc = (e) => {
        e.preventDefault();


       

        allCheckboxes.current.forEach(checkbox =>{
            if(checkbox.checked){
                styleData.allergies.push(checkbox.value)
            }
        })


       

        props.modifyIndex(5,styleData);

       
    }

    const allCheckboxes = useRef([]);

    const addCheck = el =>{
        if(el && !allCheckboxes.current.includes(el)){
            allCheckboxes.current.push(el);  
        }
    }

      

   

    const handleReturn = () =>{
        props.modifyIndex(3);
    }
    return(
        <form  
        className='checkbox-form' 
        onSubmit = {preventFunc}>

            <p> Quelles sont tes allergies ?</p>
            <span>Choix multiples.</span>



            <label htmlFor='milk'>Lait</label>

            <input  ref={allCheckboxes}
            type= "checkbox"
            id = "milk"
            value = "milk"
            />

           <label htmlFor='pollen'>Pollen</label>

            <input ref={allCheckboxes}
              type= "checkbox"
              id = "pollen"
              value = "pollen"
            />

             <label htmlFor='nuts'>Noix</label>

              <input ref={allCheckboxes}
              type= "checkbox"
                id = "nuts"
                value = "nuts"
                        />


             <label htmlFor='eggs'>Oeufs</label>

                   <input ref={allCheckboxes}
                     type= "checkbox"
                          id = "eggs"
                        value = "eggs"
                                   />    

            <label htmlFor='shellfish'>Fruits de mer</label>

            <input ref={allCheckboxes}
            type= "checkbox"
            id = "shellfish"
            value = "shellfish"
            />  




             

            <div className='container-nav-btns'>
                <button type='button' className='prev' onClick={handleReturn}>PREV</button>
                <button onClick={()=>props.modifyIndex(5,styleData)}>NEXT</button>
                
                </div>     

        </form>
    )
}