import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchData } from '../services/api'
import { CardList } from '../components/card/CardList'
import { Card } from '../components/card/Card'
import { CardImage } from '../components/card/CardImage'
import { CardLink } from '../components/card/CardLink'
import { Heading } from '../components/card/Heading'
import { Text } from '../components/card/Text'
import { Hero } from '../components/Hero'
import '../styling/homepage.css'
import '../styling/adListing.css'


// DET HÄR ÄR HOMEPAGE

// här vill vi ha en beksrivning av sidan, menu bar, en hero-section, lista med ads, modal-box, footer, header

export const HomePage = () => {
  const [ads, setAds] = useState([])
  const ADS_URL = 'http://localhost:8080/adverts'

  useEffect(() => {
    fetchData(ADS_URL)
      .then((adsData) => { setAds(adsData) })
  }, [])

  return (
    <>
      <Hero />
      <section className="recent-ads">
        <h2 className="ad-listing-header">Recently added</h2>

        <CardList className="ad-listing">
          {ads.map((ad) => (
            <Card className="ad-card" key={ad._id}>
              <CardImage className="ad-image" src={ad.imageUrl} alt={ad.title} />
              <Heading level="3" className="ad-title">
                <CardLink to={`/adverts/${ad._id}`}>{ad.title}</CardLink>
              </Heading>
              <Text className="price-tag">{ad.price}</Text>
            </Card>
          ))}
        </CardList>
        <p className="ads-navigation">
          <Link to="/adverts">All ads</Link>
        </p>
      </section>
    </>
  )
}