import React, { ChangeEventHandler, useState } from 'react'

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
    <>
    
    <input type='range' min={0} max={100} defaultValue={inputVal} onChange={ChangeHandle}></input>
    <span >{inputVal}</span>
    </>
    
  )
}

export default RangeClider