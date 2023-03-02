import React,{useState,useEffect} from "react";

 const TrafficLight =() =>{
      const brillo1 ={
        red : 'selected',
        yellow : '',
        green : '',
      }
      const brillo2 ={
        red : '',
        yellow : '',
        green : '',
      }

  const [color, setColor] = useState(brillo2);
  
  useEffect(()=>{
      setColor(brillo1)
   },[])
   
   
    return (
          <div id="app">
            <div>
              <div id="trafficTop"></div>
              <div id="container">
                <div onClick={()=>setColor({red : 'selected', })} className={`red light  ${color.red}`} >
                </div>
                <div onClick={()=>setColor({yellow : 'selected',})} className={`yellow light   ${color.yellow}`}>
                </div>
                <div onClick={()=>setColor({green : 'selected',})} className={`green light   ${color.green}`}>
                </div>
                
              </div>
            </div>
          </div>



    )


}
export default TrafficLight