import { useContext } from "react"
import { Textfit } from 'react-textfit'
import { CalcContext } from "../context/CalcContext"


const Screen = () => {
  const { calc } = useContext(CalcContext);

  return (
    <Textfit className="screen" max={70}  mode="single">
    <div className="dot">
      <span className="dot1"></span>
      <span className="dot3"></span>
      <span className="dot2"></span>
      
    </div>
    
    

    {calc.num ? calc.num : calc.res}
    </Textfit>
  )
}

export default Screen