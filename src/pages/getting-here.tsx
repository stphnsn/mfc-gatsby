import React from 'react'

import { Template } from '../components/Template'
import { WarningBanner } from '../components/WarningBanner'

const Page = () => (
  <Template
    title="Getting here | Manor Farm Cottage, Goodmanham, East Yorkshire"
    desc="Boutique rural holiday cottage in Goodmanham, East Yorkshire. Close to York, Beverley and Hull"
    id="getting-here">
    <section className="intro">
      <WarningBanner />
    </section>
  </Template>
)

export default Page
