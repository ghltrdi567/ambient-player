import React from 'react'
import useSound from 'use-sound';

import boopSfx from '../../sounds/test.flac';

type Props = {}

const Sound = (props: Props) => {
    const [play] = useSound(boopSfx);

    return <button onClick={play} >Play</button>


}

export default Sound
