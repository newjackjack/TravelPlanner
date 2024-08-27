import React from 'react'
import 'ldrs/ring'
import { newtonsCradle } from 'ldrs'

newtonsCradle.register()

// Default values shown


const Loading = () => {
    return (
        <div className='loading'>
            <l-newtons-cradle
                size="150"
                speed="1.5"
                color="white"
            ></l-newtons-cradle>
        </div>
    )
}

export default Loading