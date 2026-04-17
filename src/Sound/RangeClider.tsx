import React, { ChangeEventHandler, useState } from 'react'
import  './RangeClider.css'
import { Range } from 'react-range';

type Props = {

OnChange :(persent?: number) => void;

}

const RangeClider = (props: Props) => {


  const[inputVal, setinputVal] =  useState(100);

  const ChangeHandle : ChangeEventHandler<HTMLInputElement> = (event)=>{

    setinputVal(Number(event.target.value));
    props.OnChange(Number(event.target.value)/100);
    
  }



  return (
    <div>
    <p>{inputVal}</p>
    <input type='range' orient="vertical" min={0} max={100} defaultValue={inputVal} onChange={ChangeHandle} ></input>
    
    </div>
    
  )
}

export default RangeClider