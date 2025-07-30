import React, { ChangeEventHandler } from 'react'

type Props = {

OnChange :(persent?: number) => void;

}

const RangeClider = (props: Props) => {

  const ChangeHandle : ChangeEventHandler<HTMLInputElement> = (event)=>{

    
    props.OnChange(Number(event.target.value)/100);
    
  }



  return (
    <input type='range' min={0} max={100} defaultValue={100} onChange={ChangeHandle}></input>
  )
}

export default RangeClider