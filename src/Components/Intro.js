import React from 'react'
import logo from '../Assets/kuratorium.png'

const Intro = () => {
    return (
        <div className="welcome">
            <img src={logo} alt="Kuratorium" className="logo" />
            <h1>A project-based record label, initiated and operated by Lennart Wiehe and associates.</h1>

            <a href="mailto:hallo@kuratorium.net">hallo@kuratorium.net</a>            
        </div>
    )
}

export default Intro


