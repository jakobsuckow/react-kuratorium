import React, { useEffect, useState } from "react";
require("dotenv").config();
const Dates = () => {
  const apiKey = `keycZExl0AEV9g3vb`;
  const feedUrl = `https://api.airtable.com/v0/appemKlsSSYmto60q/Feed?api_key=${apiKey}`;
  const datesUrl = `https://api.airtable.com/v0/appemKlsSSYmto60q/Events?api_key=${apiKey}`;
  const [dates, setDates] = useState([]);
  const [feed, setFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getDates();
    getFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFeed = async () => {
    setIsLoading(true);
    const response = await fetch(feedUrl);
    const data = await response.json();
    setFeed(data.records);
    setIsLoading(false);
  };
  const getDates = async () => {
    setIsLoading(true);
    const response = await fetch(datesUrl);
    const data = await response.json();
    setDates(data.records);
    setIsLoading(false);
  };
  return (
    <>
      <h1>Feed</h1>
      {isLoading ? (
        <div className="loading">Loading Feed... &nbsp;</div>
      ) : (
        <>
          {feed.map(f => (
            <a href={f.fields.Link}>
              <ul key={f.id} className="feed">
                <li>{f.fields.Date}</li>
                <li>{f.fields.Headline}</li>
                <li></li>
              </ul>
            </a>
          ))}
        </>
      )}

      <h1>Events</h1>
      {isLoading ? (
        <div className="loading">Loading Dates... &nbsp;</div>
      ) : (
        <>
          {dates.map((date, index) => (
            <a href={date.fields.Link}>
              <ul key={date.id} className="event">
                <li className="date">{date.fields.Date}</li>
                <li>{date.fields.Name}</li>
                <li>{date.fields.Venue}</li>
                <li>{date.fields.City}</li>
                <li>{date.fields.Country}</li>
                <li>{date.fields.MusicBy}</li>
                {date.fields.Artwork && (
                  <div
                    className={
                      date.fields.Artwork[0].thumbnails.large.height >
                      date.fields.Artwork[0].thumbnails.large.width
                        ? `hoverImage portrait`
                        : `hoverImage landscape`
                    }
                  >
                    <figure>
                      <img
                        src={date.fields.Artwork[0].thumbnails.large.url}
                        alt={date.fields.Name}
                        style={{ zIndex: `${index}` }}
                      />
                      <figcaption>{date.fields.ArtworkBy}</figcaption>
                    </figure>
                  </div>
                )}
              </ul>
            </a>
          ))}
        </>
      )}
    </>
  );
};

export default Dates;
