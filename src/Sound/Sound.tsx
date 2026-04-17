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

    const [play, {stop, sound}] = useSound(props.soundPath,{ volume, playbackRate, soundEnabled: true, interrupt: true, loop: false},);
   
    useEffect(() => {
       
      });

    const Click = ()=>{

        //плавное нарастание звука при начале файла
        if(true){
            sound.on('play', ()=>{ sound.fade(0.6, 1, 1000)});
        }


        if(true){
            sound.on('end', ()=>{ SetPlaying(true); play(); });
        }
        
        

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

    return <div>
    <RangeClider OnChange={(e)=>{SetVolume(e ??0)}}></RangeClider>
    <button onClick={()=>Click()}> {PlayStopLabel()}</button>
    <p>{props.soundCaption}</p>
    

    </div> 





}

export default Sound
