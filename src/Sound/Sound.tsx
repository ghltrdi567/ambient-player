import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import RangeClider from './RangeClider';

type Props = {

soundPath: string

soundCaption : string;

}

const Sound = (props: Props) => {

   
    const [volume, SetVolume] = useState(1.0);
    const [playbackRate, SetRate] = useState(1.0);
    const [Playing, SetPlaying]  = useState(false);

    const [play, {stop}] = useSound(props.soundPath,{ volume, playbackRate, soundEnabled: true, interrupt: true, loop: true});
   
    
    const Click = ()=>{

        if(Playing){
            SetPlaying(false);
            stop();
        }
        else{
            SetPlaying(true);
            play();
        }




    }

   

    function PlayStopLabel(){

        if(Playing) return <span role="img" >◻</span>
        
        else return <span role="img" >▷</span>

    }

    return <>
    <label>{props.soundCaption}</label>
    <button onClick={()=>Click()}> {PlayStopLabel()}</button>
    <RangeClider OnChange={(e)=>{SetVolume(e ??0)}}></RangeClider>

    </> 





}

export default Sound
