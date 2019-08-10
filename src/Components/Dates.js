import React, {useEffect, useState} from 'react';


const Dates = () => {

    const [dates, setDates] = useState([]);

    useEffect(() => {
        getDates();
    }, [])

    const getDates = async() => {
        const response = await fetch('https://api.sheety.co/b28ce0df-7339-48f5-8093-41b2f47d2a08');
        const data = await response.json();
        setDates(data);
    }

    return (
        <div>
            {dates.map(date => (
                <>
                <p>{date.date}</p>
                <p>{date.club}</p>
                <p>{date.city}</p>
                <p>{date.artist}</p>
                </>
            ))}
        </div>
    )
}

export default Dates