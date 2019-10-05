import React, {useEffect, useState} from 'react';
import {feedUrl, datesUrl} from './airtableApi'

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
        const response = await fetch(feedUrl)
        const data = await response.json();
        setFeed(data.records)
        setIsLoading(false)

    }
    const getDates = async() => {
        setIsLoading(true);
        const response = await fetch(datesUrl);
        const data = await response.json();
        setDates(data.records);
        setIsLoading(false);
        console.log(data.records)
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
                         <li className="date">{date.fields.Date}</li>
                         <li>{date.fields.Name}</li>
                         <li>{date.fields.Venue}</li>
                         <li>{date.fields.City}</li>
                         <li>{date.fields.Country}</li>
                         <li>{date.fields.MusicBy}</li>
                         {date.fields.Artwork &&
                        <img src={date.fields.Artwork[0].thumbnails.large.url}
                        alt={date.fields.Name} 
                        />
                        }
            
                     </ul>
                 ))}
                </>
            )}
            
        </>
    )
}

export default Dates