import React from 'react'
import AudioPlayer from "react-h5-audio-player"
import {Product} from './Product'
import {database} from './database'


const Releases = () => {
    return (
        <>
            {database.map(item => (
                <Product
                name={item.name}
                price={item.price}
                key={item.id}
                img={item.img}
                desc={item.desc}
                />
            ))}
            <AudioPlayer
            controls
            autoPlay
            src="http://localhost:3000/assets/perfectGirl.mp3"
            onPlay={e => console.log("onPlay")}
            // other props here
            />
        </>
    )
}

export default Releases