require('dotenv').config()

export const apiKey = process.env.AIRTABLE_API_KEY || `keycZExl0AEV9g3vb`
export const feedBaseUrl = `https://api.airtable.com/v0/appemKlsSSYmto60q/Feed?api_key=${apiKey}`

export const datesBaseUrl = `https://api.airtable.com/v0/appemKlsSSYmto60q/Events?api_key=${apiKey}`
