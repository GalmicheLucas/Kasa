import React from 'react'
import Banner, { HomePage } from '../components/Banner';

function Home() {
  return (
    <div>
      <Banner />
      <div>
        <Gallery />
      </div>
    </div>
  )
}

export default Home
