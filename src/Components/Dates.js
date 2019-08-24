import React, {useEffect, useState} from 'react';


const Dates = () => {

    const [dates, setDates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        getDates();
    }, [])

    const getDates = async() => {
        setIsLoading(true);
        const response = await fetch('https://api.sheety.co/b28ce0df-7339-48f5-8093-41b2f47d2a08');
        const data = await response.json();
        setDates(data);
        setIsLoading(false);
    }

    return (
        
        <>
            <h1>Dates</h1>
            {isLoading ? (
                <div className="loading">Loading Dates...</div>
            ) : (
                <>
                {dates.slice(0,8).map(date => (
                <ul key={date.date} className="event">
                <li><p>{date.date}</p></li>
                <li><p>{date.club}</p></li>
                <li><p>{date.city}</p></li>
                <li><p>{date.artist}</p></li>
                </ul>
            ))}
                </>
            )}
            
        </>
    )
}

export default Dates