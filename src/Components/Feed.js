import React, {useEffect, useState} from 'react';

const Dates = () => {

    const [dates, setDates] = useState([]);
    const [feed, setFeed] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getDates();
        getFeed();
    }, [])

    const getFeed = async() => {
        setIsLoading(true);
        const response = await fetch('https://api.airtable.com/v0/appemKlsSSYmto60q/Feed?api_key=keycZExl0AEV9g3vb')
        const data = await response.json();
        setFeed(data.records)
        setIsLoading(false)
    }
    const getDates = async() => {
        setIsLoading(true);
        const response = await fetch('https://api.airtable.com/v0/appemKlsSSYmto60q/Events?api_key=keycZExl0AEV9g3vb');
        const data = await response.json();
        setDates(data.records);
        setIsLoading(false);
    }

    return (
        
        <>
            <h1>Feed</h1>
            {isLoading ? (
                <div className="loading">Loading Feed... &nbsp;</div>
            ): (
                <>
                 {feed.map(f => (
                     <ul key={f.id} className="event">
                        <li>{f.fields.Date}</li>
                        <li>{f.fields.Headline}</li>
                        <li>
                            <a href={f.fields.Link}>read more</a>
                        </li>
                     </ul>
                 ))}
                </>
            )}


            <h1>Events</h1>
            {isLoading ? (
                <div className="loading">Loading Dates... &nbsp;</div>
            ) : (
                <>
                 {dates.map(date => (
                     <ul key={date.id} className="event">
                         <li>{date.fields.Date}</li>
                         <li>{date.fields.Name}</li>
                         <li>{date.fields.Venue}</li>
                         <li>{date.fields.City}</li>
                         <li>{date.fields.Country}</li>
                     </ul>
                 ))}
                </>
            )}
            
        </>
    )
}

export default Dates