require('dotenv').config()


export const apiKey = process.env.AIRTABLE_API_KEY || `keycZExl0AEV9g3vb`
export const feedUrl = `https://api.airtable.com/v0/appemKlsSSYmto60q/Feed?api_key=${apiKey}`
export const datesUrl = `https://api.airtable.com/v0/appemKlsSSYmto60q/Events?api_key=${apiKey}`


export const feedProductionUrl = 'https://cadillac33.netlify.com/.netlify/functions/getFeed'
export const datesProductionUrl = 'https://cadillac33.netlify.com/.netlify/functions/getDates'