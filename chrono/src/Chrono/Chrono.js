import React,{useState,useEffect,useReducer} from 'react'
import './Chrono.css'
import PauseImg from '../Images/pause.svg'
import PlayImg from '../Images/play.svg'
import ResetImg from '../Images/reset.svg'

export default function Chrono() {

  const[sessionTime, setSessionTime]= useState (1500);
  const[sessionTimeFixed, setSessionTimeFixed] = useState(1500);
  const [breakTime, setBreakTime] = useState(300);
  const [breakTimeFixed, setBreakTimeFixed] = useState(300);

  const[workingChrono,setWorkingChrono] = useState(false);
  const[state,dispath] = useReducer(reducer);

  function reducer(state,action){
    switch(action.type){
      case 'TICK' : 
          if(sessionTime>=0){
            setSessionTime(sessionTime-1)
          } else if(breakTime>=0){
            setBreakTime(breakTime-1)
          } else if(breakTime<=0 && sessionTime<=0){
            setSessionTime(sessionTimeFixed)
            setBreakTime(breakTimeFixed)
          }
    }

  }


    useEffect(()=>{
               
         let timer;

          if(workingChrono){
          timer = window.setInterval(()=>{

         dispath({type:'TICK'})
         },1000)

        }

        return ()=>{
           window.clearInterval(timer);
        }
    },[workingChrono])


  const playPause = ()=>{
    setWorkingChrono(workingChrono=>!workingChrono)
  }

         const handleSession = e =>{
           const el = e.target;
           if(el.classList.contains('minus') && sessionTimeFixed > 0){
             setSessionTimeFixed(sessionTimeFixed-60)
             setSessionTime(sessionTime-60)
            
           } else if(el.classList.contains('plus')){
            setSessionTimeFixed(sessionTimeFixed+60)
            setSessionTime(sessionTime+60)
          }

         }

         const handleBreak = e =>{

          const el = e.target;
          if(el.classList.contains('minus') && breakTimeFixed >0){
            setBreakTimeFixed(breakTimeFixed-60)
            setBreakTime(breakTime-60)
            
          } else if(el.classList.contains('plus')){
           setBreakTimeFixed(breakTimeFixed+60)
           setBreakTime(breakTime+60)
         }

        }

        const resetFunc = ()=> {

          if(workingChrono){
            setWorkingChrono(!workingChrono)
            setSessionTime(sessionTimeFixed)
            setBreakTime(breakTimeFixed)
         
          }
            
           
        }



    return(
        <div className= {workingChrono? 'container-chrono anim-glow' : 'container-chrono'} >
        <div className='container-config'>

          
          <div className='box-btns session'>
            <button className='minus'   onClick = {handleSession}>-</button> 
            <span>{Math.trunc(sessionTimeFixed/60)}</span>
            <button className='plus'  onClick = {handleSession}>+</button>
          </div>


          <div className='box-btns break'>
            <button className='minus' onClick={handleBreak}>-</button>
            <span>{Math.trunc(breakTimeFixed/60)}</span>
            <button className='plus' onClick={handleBreak}>+</button>
          </div>
        </div>

        <h1>
          {sessionTime>=0 ? (
            <span> 
              { `${Math.trunc(sessionTime/60)} : ${sessionTime % 60 <10 ? `0${sessionTime % 60}` : `${sessionTime % 60}`}` }
            </span>
          ) 
          :  (
            <span> 
              { `${Math.trunc(breakTime/60)} : ${breakTime % 60 <10 ? `0${breakTime % 60}` : `${breakTime % 60}`}` }
            </span>
          ) 
          }
        </h1>


       <div  className='container-controllers'>
         <button onClick={playPause}>
           <img  src={workingChrono? PauseImg : PlayImg}/>
         </button>

      

         <button onClick={resetFunc}>
           <img  src={ResetImg}/>
         </button>
       </div>
        </div>
    )
}