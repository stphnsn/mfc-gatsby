import React, { FC } from 'react'

import '../../static/assets/css/styles.css'

import { Template } from '../components/Template'
import { WarningBanner } from '../components/WarningBanner'

interface Booking {
  startDate: string
  price: string
}

interface Bookings {
  [key: string]: Booking
}

interface PageContext {
  bookings: Bookings
}

interface PageProps {
  pageContext: PageContext
}

const Page: FC<PageProps> = () => {
  return (
    <Template
      title="The Cottage | Manor Farm Cottage, Goodmanham, East Yorkshire"
      desc="Boutique rural holiday cottage in Goodmanham, East Yorkshire. Close to York, Beverley and Hull"
      id="the-cottage">
      <section className="intro" id="introduction">
        <WarningBanner />
      </section>
    </Template>
  )
}

export default Page
