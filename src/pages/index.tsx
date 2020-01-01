import React from 'react'

import { Template } from '../components/Template'

const Page = () => (
  <Template
    title="Manor Farm Cottage, Goodmanham, East Yorkshire"
    desc="Boutique rural holiday cottage in Goodmanham, East Yorkshire. Close to York, Beverley and Hull"
    id="home">
    <section className="intro">
      <h1>Manor Farm Cottage</h1>
      <p className="intro">
        Deep in the heart of rural East Yorkshire, Manor Farm Cottage is a beautiful retreat nestled in Goodmanham
        village at the foot of the rolling Yorkshire Wolds.
      </p>
    </section>

    <section className="text">
      <p>
        Set in 23 acres of private rural countryside, and within easy reach of the very best that the region has to
        offer, you’ll find awe-inspiring scenery, quaint market towns, picture-postcard seaside resorts and must-see
        tourist spots all on your doorstep.
      </p>
      <p>
        <a href="/the-cottage/" rel="internal">
          Manor Farm Cottage
        </a>{' '}
        offers modern high-quality accommodation in a wonderfully quiet location with superb views.
      </p>
      <p>
        If you want to discover for yourself just why Yorkshire is known as ‘God’s Own County’, Manor Farm Cottage is
        the perfect base.
      </p>
      <p>
        Book your stay by ringing Liz on <a href="tel:+441430873510">+44 1430 873510</a> or email{' '}
        <a href="mailto:info@manorfarm-cottages.co.uk">info@manorfarm-cottages.co.uk</a>.
      </p>
    </section>
  </Template>
)

export default Page
