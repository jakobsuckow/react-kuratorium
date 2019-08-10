import React, {useEffect, useState} from 'react';


const Dates = () => {
    useEffect(() => {
        getDates();
    }, [])

    const getDates = async() => {
        const response = await fetch('https://api.sheety.co/b28ce0df-7339-48f5-8093-41b2f47d2a08');
        const data = await response.json();
        console.log(data)
    }

    return (
        <div>
            <h1>Dates</h1>
        </div>
    )
}

export default Dates